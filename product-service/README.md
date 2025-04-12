# Product Service

The Product Service is a microservice responsible for managing product information in the Sales Management System. It provides a RESTful API for performing CRUD operations on products.

## Features

- **Create Product**: Add a new product to the inventory.
- **Get Product**: Retrieve details of a specific product by its ID.
- **Update Product**: Modify the details of an existing product.
- **Delete Product**: Remove a product from the inventory.
- **List Products**: Retrieve a list of all products.

## API Endpoints

- **GET /products**: Retrieve a list of all products.
- **POST /products**: Create a new product.
- **GET /products**: Retrieve a list of all products.
- **GET /products/{id}**: Retrieve a specific product by ID.
- **PUT /products/{id}**: Update a specific product by ID.
- **DELETE /products/{id}**: Delete a specific product by ID.

## Database

The Product Service uses MongoDB as its database to store product information. Each product document contains the following fields:

- `name`: The name of the product.
- `price`: The price of the product.
- `description`: A brief description of the product.
- `stock`: The available stock quantity.

## Getting Started

1. Clone the repository.
2. Navigate to the `product-service` directory.
3. Install the dependencies using `npm install`.
4. Start the service using `npm start`.

## Docker

This service can be containerized using Docker. Refer to the `Dockerfile` in this directory for instructions on building the Docker image.

## Communication

The Product Service communicates with other microservices via REST APIs and can publish events to a message broker for asynchronous communication.

## License

This project is licensed under the MIT License.