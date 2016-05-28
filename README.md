# WebApp-FinalProj

See our document https://github.com/GuroKung/WebApp-FinalProj/wiki

##Members

| Student ID | Name | GitHub |
| ---------- |:-------:| -------------------- |
| 5610546702 | Jiratchaya Intaragumhaeng | @GuroKung |
| 5610546788 | Vasupol Chatmethakul | @vasupol11 |
| 5610545706 | Nara Surawit | @knewrock |
| 5610546257 | Natchanon Charoensuk | @iNont |
| 5610545781 | Runyasak Chaengnaimuang | @runyasak |

##Contribution
| Student | Role | 
| ---------- |-------| 
| Jiratchaya | API, hadoop cluster |
| Vasupol | Front end, load balancer, preprocess file |
| Nara | Load balancer, preprocess file, pig |
| Natchanon | Front end |
| Runyasack | Front end |

##Issues & Bugs
###Issues1
API is able to execute file and command, but somehow it cannot receive text input via requests, then is unable to write into a ‘inputTextfile.txt’. So, pig processing data with same input and same output it send back to client.

###Suggestion & Solution
It seems like I forget to use library called ‘body-parser’ , body-parser extracts the entire body portion of an incoming request stream and exposes it on req.body as something easier to interface with, by adding it should make the API working properly.
