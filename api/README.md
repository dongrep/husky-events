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
