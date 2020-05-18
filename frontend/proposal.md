#### Keturah Howard

#### Raiser

##### Description
Tag along application intended to assist teachers and students interact through raising hands and answersing polls while teachers giving lectures online.

##### Use Case
Users are both students and teachers who have to interact online for teacher led lectures and talks.

Problems it's intending to solve are those such as: students asking questions via chat and having them missed by a teacher, students feeling too timid to interupt lecture to make a comment or ask a question, teachers feeling they arent fully hearing how their class, teachers inability to read a room with student's body language and facial expressions. 

This app will bridge the gap of communication from students to teachers via making unanswered questions known to teachers and allowing students to send facial expressions to teachers margin view (side of the screen). Application will offer teachers to send polling prompts to students view and recieve a general answer from all students.

This applications goal is to bring students and teachers together via giving student a voice and allowing teachers to better understand where their students are at in class so they can better assist their growth and development, and bridge the gap of non-verbal communication despite not being in a room together.

##### Minimum Viable Product
 * teachers can create lecture rooms and invite students by providing room name [room saved in database]
 * students can join lecture rooms by entering room pin and providing name
 * students can raise and retract hand by clicking on their hand button, raising pings teacher their hand and name. Students hands show up from oldest to newest
 * all users can leave room

##### Tools for MVP
 * React front end
 * SCSS styling, 
 * NoSQL database
 * Node.js backend
 * WebSocket for lecture-room functionality
 * git
 * VisualStudio Code 

##### Additional Features
(If you finish developing your MVP and have time to spare, what features do you want to work on next? Be specific.)
 * teachers can prompt poll (1-10), and students view changes from hand to number input. Teacher can end poll and return students screen to hand raising ability 
 * Students can click smile button or confusion button and it will float upward on side of teachers view
 * Teachers have different polling options. The can select "get feedback", and choose from pole types: "1-10" (students input a number, teacher can toggle between seeing classes average, and sorted list of most common numbers to least), "yes or no", "good nutral bad"
 * lecture room has its own chatroom so students can send messages to teacher privately 
 * application is a mobile app and or a desktop application 


##### Tools for Additional Features
(List the tools, frameworks, libraries, APIs, modules, resources, languages, etc that will be used to create your additional features. Be specific.)
 * React Native (mobile application)
 * Electron (desktop application)
 * React front end
 * SCSS styling, 
 * NoSQL database
 * Node.js backend
 * WebSocket for lecture-room functionality
 * git
 * VisualStudio Code

##### Additional Information
Lecture room is essentiall a chat room via websockets (thanks for the suggestion!), difference is the only things being sent are from students to teachers, and teachers control view of students (hand raise and smile/frown view or polling input form). Authentication will be unessasary through this: upon creating a room, you recieve a room pin (which will be shared with students so they may access), but you are also prompted to enter a teacher-password. after creating a room, the user will be redirected to a splash page where the user either enters a room with the room pin, or creates a room, and once they have entered a the room pin, you are taken to a page where you either continue as student. or you enter the teacher password tro lead the lecture room. this allows easy quick usability, which is desirable for a stand alone appplication that is meant to be used along side other applications. I feel bad that I dont have much more in the way of stretch goals, but for this application I think less is more so that its an easy tag on for when users just want to be able to raise their hand/ see students raised hands. Alternatively, I could create a surrounding application around it to serve as a more involved experience like I had originally talked about with "regular mode" from my first email, but I feel intimidated by building a framework surrounding an already finished product and predict a lot of refactoring/issues would arise with it- correct me if I'm wrong though. If my mvp and current stretch goals go way easier than expected, I will make a copy of the project and begin to include regular modes abilities (user authentication, checklist sending and creation (database)).

