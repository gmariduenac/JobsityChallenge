# Introduction

This code aims to show CRUD operations in a system build over angular framework. These operations are related to a shrimp business where farms and ponds are part of the process. All the built code has been based on
business/functional specs.

# Architecture

The system is complete according the requeriments. The back-end, Rest API and front-end works smoothly.

The project is divided in two general sections:

**Backend**: 

We have use Node.js version 15.4.0 to build the backend. Here you will see controllers, routes and database connection details. There are a couple of rest api services defined to make CRUD operations. The persistent layer 
consists in a mysql database which contains two tables with relationships between them. 

**Frontend**: 

Here you will see components, modules and services. Each service calls the API rest defined in the backend. I have used Bootstrap 4 to show a clean skin system through public CDN (content delivery network).

# Screens

There are some screens captured showing the functionality of the system located at "documentation" directory.

# Installation

As first step, you need to install mysql v8.0 and then execute the SQL file "ng_farms_db" included into database directory. This file will create the database and necessary objects to compile and run the system.

To run this project we will need the next node JS dependencies. They are already added into package.json file.

1. express
2. morgan
3. mysql
4. promise-mysql
5. cors
6. typescript
7. angular2-text-mask text-mask-addons

## Via Git

## Clone to your machine

git clone https://github.com/gmariduenac/JobsityChallenge.git

In case you have any issues with compilation, I suggest to install manually the dependencies using the command line interface CLI:

Watch that every command is executed over a home directory (backend or frontend).

C:\Users\HomePC\Documents\GitHub\JobsityChallenge\backend>npm init --yes
C:\Users\HomePC\Documents\GitHub\JobsityChallenge\backend>npm i express morgan mysql promise-mysql cors
C:\Users\HomePC\Documents\GitHub\JobsityChallenge\backend>npm install -g typescript
C:\Users\HomePC\Documents\GitHub\JobsityChallenge\backend>tsc --init 
C:\Users\HomePC\Documents\GitHub\JobsityChallenge\backend>tsc
C:\Users\HomePC\Documents\GitHub\JobsityChallenge\backend>npm run build
C:\Users\HomePC\Documents\GitHub\JobsityChallenge\backend>npm i nodemon -D
C:\Users\HomePC\Documents\GitHub\JobsityChallenge\backend>npm run dev
C:\Users\HomePC\Documents\GitHub\JobsityChallenge\backend>npm i @types/express -D
C:\Users\HomePC\Documents\GitHub\JobsityChallenge\backend>npm i @types/morgan -D
C:\Users\HomePC\Documents\GitHub\JobsityChallenge\backend>npm i @types/cors -D
C:\Users\HomePC\Documents\GitHub\JobsityChallenge\frontend>npm i angular2-text-mask text-mask-addons --save
 
# IDE: 

I strongly recommend visual code as the IDE to handle this project.

# Browsers support

The system has been tested on Chrome Release 87 without any issues.

# Improvements:

1.- The system is not tunned, I could configure the system to improve performance and accesibility.
2.- The system does not have security enabled.
3.- The UI is simple, I could improve the skin with more Bootstrap classes.

# How to Contribute

This system has been coded for a challenge, anyone is open to clone it, and improve it. 

# License

This system is build under GNU license. 