# BugTrax API

#### This project was created by Evan Miller
##### The Server is built using Node, Express, and PostgreSQL
##### All testing is done with Chai/Mocha

## To get started

- The server delivers full user functionality, with, JWT Tokens, and JWT Token refresh, registration, secure login, and secure endpoints.
All user functions are encrypted with proper security measures in mind. These measures include:
JWT Tokens and Refresh are issued securly, while expiring along with the session if the user goes idle for more then 5 minutes

Password incryption using the NPM library BCrypt, with secure hashing and salting rounds
Cross Site Scripting (XSS) prevention on issue adds and user registration
KnexJS provides built in SQL injection prevention
- Protected endpoints are authenticated through a JWT service middleware that checks for the API token in the header provided through the client.
- All of the client side enviornmental variables are securly hidden in .env files.
- Best **RESTful** practices were used when building the server.


## Usage
### To run the server on a local host: 

### Scripts

Start the application `npm start`

Start nodemon for the application `npm run dev`

Run the tests in watch mode `npm test`

Migrate the dev database `npm run migrate`

Migrate the test database `npm run migrate:test`

### Configuring Postgres

For tests involving time to run properly, configure your Postgres database to run in the UTC timezone.

1. Locate the `postgresql.conf` file for your Postgres installation.
   1. E.g. for an OS X, Homebrew install: `/usr/local/var/postgres/postgresql.conf`
   2. E.g. on Windows, _maybe_: `C:\Program Files\PostgreSQL\11.2\data\postgresql.conf`
2. Find the `timezone` line and set it to `UTC`