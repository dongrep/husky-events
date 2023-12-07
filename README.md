# Husky Events Client

This is the client-side of the application for Husky Events, a web application for managing and discovering events at a university. It is built using ReactJS and makes use of various concepts and libraries.

## Concepts and Libraries Used

- ReactJS: The application is built using ReactJS, a popular JavaScript library for building user interfaces. It allows for the creation of reusable UI components and provides a declarative approach to building UIs.

- ## Routing:
    React Router is used for handling client-side routing. It enables navigation between different pages of the application without a full page reload.

- ## Link: 
    The Link component from React Router is used for creating links between different routes in the application. It provides a declarative way to navigate between pages.

- ## Hooks:
     React Hooks are used for managing state and side effects in functional components. They allow for the use of state and other React features without writing a class.

- ## Functions and Arrow Functions:
     JavaScript functions and arrow functions are used extensively throughout the application for defining reusable logic and event handlers.

- ## Icons:
     Icons from the react/icons library are imported and used in the application for enhancing the user interface and providing visual cues.

- ## Axios:
     Axios is a popular JavaScript library used for making HTTP requests. It is used in the application for communicating with the server-side API.

- ## useAuthContext: 
     The useAuthContext hook is used for managing user authentication and authorization in the application. It provides access to the authentication state and methods for logging in and out.

- ## CORS:
     Cross-Origin Resource Sharing (CORS) is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the resource originated. It is used in the application to enable communication between the client-side and server-side components.

## Getting Started

1. Clone the repository.
2. Install the dependencies by running `npm install`.
3. Start the development server by running `npm start`.
4. Open the application in your browser at `http://localhost:3000`.

## Contributing

Contributions are welcome! If you would like to contribute to the project, please follow the guidelines in [CONTRIBUTING.md](/d:/INFO6150-WD/Group-Project/husky-events/client/CONTRIBUTING.md).

## License

This project is licensed under the [MIT License](/d:/INFO6150-WD/Group-Project/husky-events/client/LICENSE).


## BACKEND:


# API Side of Application

This is the documentation for the API side of the application. It provides an overview of the functionalities used in the project.

## Functionalities

- ## MVC Architecture: 
    The application follows the Model-View-Controller (MVC) architectural pattern, which separates the concerns of data, presentation, and control logic.

- ## Routes: 
    The application defines routes to handle different HTTP requests and map them to appropriate controller methods.

- ## Mongoose: 
    Mongoose is used as an Object Data Modeling (ODM) library for MongoDB. It provides a simple and intuitive way to interact with MongoDB databases.

- ## MongoDB Schema: 
    The application defines schemas using Mongoose to define the structure of the data stored in the MongoDB database.

- ## JavaScript Functionalities: 
    JavaScript is used extensively to implement various functionalities in the application, such as data manipulation, validation, and business logic.

- ## Regex:
    Regular expressions (regex) are used to perform pattern matching and validation on input data.

- ## dotenv: 
    The dotenv library is used to load environment variables from a .env file, allowing for configuration of sensitive information.

- ## bcrypt: 
    The bcrypt library is used for password hashing and verification, providing a secure way to store user passwords.

- ## Request/Response Status: 
    The application uses appropriate HTTP status codes to indicate the success or failure of API requests.

- ## Express:
    Express is used as the web application framework for Node.js. It provides a robust set of features for building web applications and APIs.

- ## CORS: 
    Cross-Origin Resource Sharing (CORS) is implemented to allow requests from different origins to access the API.

## Installation

To run the application locally, follow these steps:

1. Clone the repository.
2. Install the required dependencies using `npm install`.
3. Set up the environment variables in a .env file.
4. Start the application using `npm start`.

## Usage

Once the application is running, you can access the API endpoints using a tool like Postman or by making HTTP requests from your application.

## Contributing

If you would like to contribute to this project, please follow the guidelines outlined in the CONTRIBUTING.md file.

## License

This project is licensed under the [MIT License](LICENSE).