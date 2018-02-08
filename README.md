# WebApp-FinalProj

## Architecture Overview

![](http://s33.postimg.org/7yf82fjkf/Screen_Shot_2559_05_28_at_11_31_21_AM.png)

The Frontend is made up of 3 servers, a `load balancer` and two front-end client servers. The load balancer uses `Nginx` and the two servers use `AngularJS` with `NodeJS`. The Backend is made up of 3 servers, a `Master Node` and two `workers(slaves)`. The Master Node is installed with NodeJS to handle REST API requests from the two AngularJS client servers. The workers servers help with processing when a pig file has to be executed.

NodeJS uses external library called `express` for making API, NodeJS also uses for creating a `child_process` to execute command.

The Frontend receives sentences from textarea in the web page and convert them into JSON format. The JSON is sent to Backend(NodeJS) via HTTP POST request and NodeJS will create .txt file from the given request then sent to hdfs file system, which is located in the master as well. It has a callback function, which executes pig once the input .txt has been saved in the hdfs successfully. Pig will query in the preprocessed files, stored in the hdfs, then NodeJS will get the result txt file once the query has finished from hdfs and send the result back to the client.

See our document https://github.com/GuroKung/WebApp-FinalProj/wiki

## Members

| Student ID | Name | GitHub |
| ---------- |:-------:| -------------------- |
| 5610546702 | Jiratchaya Intaragumhaeng | @GuroKung |
| 5610546788 | Vasupol Chatmethakul | @vasupol11 |
| 5610545706 | Nara Surawit | @knewrock |
| 5610546257 | Natchanon Charoensuk | @iNont |
| 5610545781 | Runyasak Chaengnaimuang | @runyasak |

## Contribution
| Student | Role | 
| ---------- |-------| 
| Jiratchaya | API, hadoop cluster, write report |
| Vasupol | Front end, load balancer, preprocess file |
| Nara | Load balancer, preprocess file, pig |
| Natchanon | Front end |
| Runyasack | Front end |

## Issues & Bugs
### Issues1
API is able to execute file and command, but somehow it cannot receive text input via requests, then is unable to write into a `inputTextfile.txt`. So, pig processing data with same input and same output it send back to client.

Anyway, manual text input and pig execution in server given the properly output to API 

### Suggestion & Solution
It seems like I forget to use library called `body-parser` , body-parser extracts the entire body portion of an incoming request stream and exposes it on req.body as something easier to interface with, by adding it should make the API working properly.

### Issues2
Pig is working properly, but if data is too much it might collapse I/O DataStream

### Suggestion & Solution
It probably because Pig read through all the files and lines that cause a lot of load. Another group that use Pig also say that they have some problem with memory too.

So, try separating input, use smaller input or change hadoop processing method by change into HBase instead.
