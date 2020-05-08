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