<h1 align="center">Raiser</h1>
<p align="center">
<a href="https://github.com/KeturahDev" >Keturah Howard | May 2020 </a>
</p>


### Description

Tag along application intended to assist teachers and students interact through raising hands and answering polls while teachers give lectures online. 

### Known Bugs

_No known bugs at this time._


------

<p align="center">
<big>About Raiser</big>
</p>

## *Scope*

<details>
<summary>Expand Use Case</summary>
Users are both students and teachers who have to interact online for teacher led lectures and talks.

Problems it's intending to solve are those such as: students asking questions via chat and having them missed by a teacher, students feeling too timid to interupt lecture to make a comment or ask a question, teachers feeling they arent fully hearing how their class, teachers inability to read a room with student's body language and facial expressions. 

This app will bridge the gap of communication from students to teachers via making unanswered questions known to teachers and allowing students to send facial expressions to teachers margin view (side of the screen). Application will offer teachers to send polling prompts to students view and recieve a general answer from all students.

This application's goal is to bring students and teachers together via giving student a voice and allowing teachers to better understand where their students are at in class so they can better assist their growth and development, and bridge the gap of non-verbal communication despite not being in a room together.
</details>

### Minimum Viable Product 
 * teachers can create lecture rooms and invite students by providing room pin [room saved in database]
 * teachers can join rooms by entering room pin and teacher password.
 * students can join rooms by entering room pin and providing name
 * students can raise and retract hand by clicking on their hand button, raising pings teacher their hand and name. Students hands show up from oldest to newest
 * all users can leave room

#### User Stories
* As a teacher, I want to begin a lecture room, where I can host a virtual room that my students can join and raise their hand/respond to my polls during my lecture in live time, so that I can receive feedback from all of my students in 1 sitting
* As a teacher in lecture mode, I want to see when students raise their hands in chronological order so that I can know who has questions, how many there are, and who asked their questions first
* As a teacher in lecture mode, I want to be able to post polls (such as a scale from 1-10) that my student can submit their answers to so that I know where all my students stand on average and individually in regards to a question I’ve asked
* As a student, I want to be able to join a virtual lecture room via link from my teacher or fellow classmate, so that I can send my teacher feedback and see the average of how everyone feels after the polls.
* As a student, I want to be able to raise or lower my hand so that my teacher can know when I have a question about something they’ve said or would like to say something
As a student, I want to be able to respond to the polls by clicking a number on the screen

-------
<p align="center">
<big>Specs</big>
</p>

### React Component Diagram

![Screen Shot 2020-05-08 at 10 38 28 AM](https://user-images.githubusercontent.com/32975967/81432680-33a64a00-9118-11ea-8ca4-84bc339a836b.png)

*[Trello Board](https://trello.com/b/RZ5w1kKV/raiser-app)* 

-------

## *Getting Started*

### Setup/Installation Requirements

1. To review the code and run on your local server, download with one of the two options bewlow:

    _In Terminal:_

    * Navigate to where you want this application to be saved, i.e.:
    ```cd desktop```
    * Clone the file from GitHub with HTTPS
    ```git clone https://github.com/keturahdev/raiser```
    * Open file in your preferred text editor
    * On Mac: ```open -a {your text editor} raiser```
    * On Windows: ```raiser```

    _Download Manually:_

    * Navigate to https://github.com/keturahdev/raiser.
    * Click green "Clone or Download" button.
    * Click "Download ZIP".
    * Click downloaded file to unzip.
    * Open folder called "raiser".
    * Right click "index.html" and select your preferred browser or text editor.

2. And then run by:

    * _In terminal_, navigate to be within project's directory
    * type into the command line
    ```npm run start```

## Technologies Used for MVP
* React
* MongoDB
* Mongoose
* express
* Node.js backend
* Socket.io
* git
* SCSS/CSS
* [Trello Board](https://trello.com/b/RZ5w1kKV/raiser-app)
* VisualStudio Code 
* Postman

## StretchGoals
- error handling for trying to access non existant rooms on server-side
- CORS handling on server-side instead of through chrome extension
- 

## Known Bugs

_No known bugs at this time._

## Support and contact details

_Have a bug or an issue with this application? [Open a new issue](https://github.com/kwicz/galactic-age-calculator/issues) here on GitHub._


### License

[MIT](https://choosealicense.com/licenses/mit/)

Copyright (c) 2020 **_Keturah Howard_**
