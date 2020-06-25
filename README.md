# My-Contacts

MERN full stack app for storing contacts, fashioned after a Brad Traversy tutorial app on using React Hooks and Context. This project was adjusted for a friend (what better reason to build an app?) to use for business and personal purposes, and will likely serve future projects applying the MERN framework.

The full stack framework consists of MongoDB Atlas, Express server, React (using functional components), and NodeJS, with dependencies. JSON Web Tokens and Bcrypt are used for user authentication.

## Models

The MongoDB has two collections: User and Contact with a basic set of fields. Mongoose is used as an Object Data Modeling library for MongoDB and NodeJS, providing the schema validation and managing the relationships between data.

### User

name,
email,
password

### Contact

name,
email,
phone,
company,
note,
type,
date

## Package Files

### Server Dependencies

- bcryptjs
- config
- express
- express-validator
- jsonwebtoken
- mongoose

### Client Dev Dependencies

- axios
- dateformat
- react
- react-dom
- react-router-dom
- react-scripts
- react-transition-group
- uuid (for testing)

### Author

Alan Leverenz, June 2020
