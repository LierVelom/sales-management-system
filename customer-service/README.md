# Customer Service

The Customer Service is a microservice responsible for managing customer information within the Sales Management System. It provides a RESTful API for performing CRUD operations on customer data.

## API Endpoints

### Customers
- **GET /customers**: Retrieve a list of all customers
- **POST /customers**: Create a new customer
- **GET /customers/{id}**: Retrieve customer information by ID
- **PUT /customers/{id}**: Update customer information by ID
- **DELETE /customers/{id}**: Delete a customer by ID

## Database

This service uses MongoDB as its database engine to store customer information, including:
- Name
- Address
- Contact Information

## Communication

The Customer Service communicates with other microservices via REST APIs and can also publish events to a message broker for asynchronous processing.

## Setup

To run the Customer Service, ensure you have Docker installed and follow the instructions in the `Dockerfile` to build and run the service.

## Development

For development, you can use the provided `package.json` to install necessary dependencies and run the service locally.

## License

This project is licensed under the MIT License.