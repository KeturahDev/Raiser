## IN EVENT OF BUG, CHECK THESE:
- use exacty versions of dependencies from library

## MAY 15th
- scrap tutorial, begin working on creating rooms with node, express, and mongo db
    - create components for form and forms parents
    - follow tutorial to learn how to save things from react to mongo db vie Node.js with Express 
    - consider state? redux or hooks? what will be stateful?

## MAY 18th

- follow along udemy course in [this](https://github.com/KeturahDev/node-mongo-udemy) repo .. *will hold half of todays commit activity*
    - currentlky on number 83 in this course
    - passed 88, learning how to structure restful apis now
    - created first rest api route! will now transition to applying content to this application/repo

### todays goal:
- finish course up to lesson 88 (currently on 80) / Structuring RESTful API in Node
- create and make first insertion to Raisers MongoDB database


make sure mongodb is running: *MrComputer:Raiser mac$ /Users/mac/mongodb/bin/mongodb.exe --dbpath=/Users/mac/mongodb-data*

## [MAY 19th](https://www.youtube.com/watch?v=gVgtq01fN9M)
currently have working:
- splash components
- backend server running
- backend server connected to mongodb
- components generating pin and password for room model

whats next:
- accurately fetch end point for posting pin to db X 
- create GET endpoint in server, confirm effective X
- create join form components <==
- allow users to join room! = MVP
- ...
- profit!

trach unseen work:
- attempted to transition component from functional to class, was too messy, undid all changes

## May 20th
currently working:
- post api call for creating rooms

Whats next:
- component for taking in room pin X
- fetch GET call for rooms X
- redux implementation to store room obj in state <===
- visual representation for being in state: MVP ACHIEVED 

helpful sources:
- [how to use queries in node.js](https://stackabuse.com/get-query-strings-and-parameters-in-express-js/)

--------------------------------------------------
Progress:
- learning about CORS and "allow same origin" to enable fetching another local host port
    - https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
    - https://stackoverflow.com/questions/43871637/no-access-control-allow-origin-header-is-present-on-the-requested-resource-whe
    - https://www.youtube.com/watch?v=qTi4cMb3dIo
    - [allowing cors in api (second answer)](https://stackoverflow.com/questions/36878255/allow-access-control-allow-origin-header-using-html5-fetch-api)
    - [THIS fixed it.](https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf)


1. Learning about node servers: https://www.youtube.com/watch?v=VShtPwEkDD0
2. Researching how to connect to mongodb with node server: https://www.udemy.com/course/the-complete-nodejs-developer-course-2/learn/lecture/13729150#overview
3. Attempt following along tutorials. [Repo to follow alongs](https://github.com/KeturahDev/node-server/tree/master/MERN)
4. Succeed in following udemy tutorial: repo [here](https://github.com/KeturahDev/Node-Mongo)... connected mongodb to node

### Organization: 
- trello board: https://trello.com/b/RZ5w1kKV/raiser-app
- working on component diagram
- still working on component diagram, covering many details of full application


### Researching Websockets:
1. looking at list of options: https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API
2. Reasearching socket.io

    * https://www.youtube.com/watch?v=vQjiN8Qgs3c
    * https://socket.io/
    #### concerns:
    - not exactly like a chat room in that hands should be retractable and messages are not retractable
    - If hands are to be retractable, and rendered conditionally on what is currently within the db, db needs to be involved along with websockets.
    - only way I know how to do that is with firebase/firestore

3. Ponering pivot on db plan: 
    - unsure where to find good examples of non-BaaS db with socket.io example
    - found tutorial on partnering socket.io with MySQL
    - Im comfortable with the idea of using MySQL, I think I can scale out what db structure will look like.
    - still open to another database such as postgres but unfamiliar aspect makes me weary 
    - Will look for more examples of MySQL work bench, and create diagram of plotted out db

    #### why I want to avoid firebase
    - I dont want to reach a limit and pay for service
    - I dont want to be reliant on their end working
    - ran into issues with them before
    - I'll feel really good about figuring out how to do this myself

4. Looking into MongoDB (aka MERN stack)
   - https://dev.to/rexeze/how-to-build-a-real-time-chat-app-with-nodejs-socketio-and-mongodb-2kho
   - watching: https://www.youtube.com/watch?v=pWbMrx5rVBE&t=29s and taking notes
   - begin following tutorial of first link in this list
   - following along with tutorials repo, downloading, trying to get it to work, taking a very long time, tryin gto download mongodb in order to see if tutorials repo works.

5. End of day: never finsihed tutorial... poorly explained for learning basics. New Plan: follow udemy download MongoDb lecture (10-20 min), follow Socket.io tutorial ONLY, then express ONLY.. then attemt at putting it all together. Aim to finish tutorials over weekend instead of on captstone days. 