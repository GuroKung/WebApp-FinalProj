# WebApp-FinalProj

## Architecture Overview

![](http://s33.postimg.org/7yf82fjkf/Screen_Shot_2559_05_28_at_11_31_21_AM.png)

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
API is able to execute file and command, but somehow it cannot receive text input via requests, then is unable to write into a ‘inputTextfile.txt’. So, pig processing data with same input and same output it send back to client.

Anyway, manual text input and pig execution in server given the properly output to API 

### Suggestion & Solution
It seems like I forget to use library called ‘body-parser’ , body-parser extracts the entire body portion of an incoming request stream and exposes it on req.body as something easier to interface with, by adding it should make the API working properly.

### Issues2
Pig is working properly, but if data is too much it might collapse I/O DataStream

### Suggestion & Solution
It probably because Pig read through all the files and lines that cause a lot of load. Another group that use Pig also say that they have some problem with memory too.

So, try separating input, use smaller input or change hadoop processing method by change into HBase instead.
