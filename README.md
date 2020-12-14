# JobsityChallenge
Description: This is the jobsity challenge


The project is divided in three general sections:

1.- Backend: We have use node.js to build the backend. Here you will see controllers, routes and database connection details. There are a couple of rest api services defined to make CRUD operations. The persistent layer consists in a mysql database which contains two tables with relationships between them. 
2.- Frontend: Here you will see components, modules and services. Each service calls the API rest defined in the backend.

Running this project:

To run this project we will need the next node dependencies. They are all included in the package.json.

1)express 
2)morgan 
3)mysql 
4)promise-mysql 
5)cors
6)typescript

You will need to install mysql-8 and execute the database.sql script included in the repository.

To run it, just clone the repository from my public github, compile it and voila!. I have use Visual Code as the IDE to create the whole project.

I didn't have enough time to package the whole project, so that means, could be a next step.

Restrictions:

1.- The system is not completely ready, back-end works, and front-end partially. 
2.- The system is not tunned
