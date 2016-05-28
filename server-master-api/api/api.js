var http = require('http');
var express = require('express');
var fs = require('fs');
var array = fs.readFileSync('./output/Test/part-r-00000').toString().split('\n');
var app = express();
//var sys = require('sys');
var exec = require('child_process').exec;

function puts(error, stdout, stderr) { sys.puts(stdout) }
//exec("pig -f foo.pig", puts);

app.all('*', function(req, res,next) {
    /**
     * Response settings
     * @type {Object}
     */
    var responseSettings = {
        "AccessControlAllowOrigin": req.headers.origin,
        "AccessControlAllowHeaders": "Content-Type,X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5,  Date, X-Api-Version, X-File-Name",
        "AccessControlAllowMethods": "POST, GET, PUT, DELETE, OPTIONS",
        "AccessControlAllowCredentials": true
    };

    /**
     * Headers
     */
    res.header("Access-Control-Allow-Credentials", responseSettings.AccessControlAllowCredentials);
    res.header("Access-Control-Allow-Origin",  responseSettings.AccessControlAllowOrigin);
    res.header("Access-Control-Allow-Headers", (req.headers['access-control-request-headers']) ? req.headers['access-control-request-headers'] : "x-requested-with");
    res.header("Access-Control-Allow-Methods", (req.headers['access-control-request-method']) ? req.headers['access-control-request-method'] : responseSettings.AccessControlAllowMethods);

    if ('OPTIONS' == req.method) {
        res.send(200);
    }
    else {
        next();
    }
});

app.get('/', function (req, res) {
  res.send('welcome');
});

app.get('/pig', function (req, res) {
  res.send('pig pig pig...');
});

app.post('/pig', function (req, res) {
  console.log('pig pig pig...');
  //console.log(req.body);
  fs.writeFileSync("textInput", req.text);
  console.log("The file was saved!");
  exec("hdfs dfs -put $HOME/api/textInput.txt /user/ubuntu/textInput/textInput.txt", function(error, stdout, stderr){
    exec("pig webAppProject.pig", function(error, stdout, stderr){
      exec("hdfs dfs -get /user/ubuntu/output $HOME/api/output/Test", function(error, stdout, stderr){
        console.log('stdout: ' + stdout);
        console.log('stderr: ' + stderr);
        var contents = fs.readFileSync('./output/Test/part-r-00000', 'utf8');
          var array = contents.toString().split('\n');
          console.log(array);
          res.send(array);
      });
    });
  });
  //exec("pig webAppProject.pig", puts);
  //exec("hdfs dfs -get /user/ubuntu/output $HOME/api/output/Test", puts);
});

var server = app.listen(3000, function () {
    console.log("Listening on port %s...", server.address().port);
});
