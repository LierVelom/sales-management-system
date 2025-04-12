# API Gateway for Sales Management System

This API Gateway acts as a single entry point for clients to interact with the various microservices in the Sales Management System. It routes requests to the appropriate services, ensuring a seamless experience for users.

## Features

- **Routing**: Directs incoming requests to the correct microservice (Product, Order, Customer).
- **Load Balancing**: Distributes requests evenly across service instances.
- **Security**: Implements authentication and authorization mechanisms.
- **Logging**: Captures request and response logs for monitoring and debugging.

## Setup

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd sales-management-system/api-gateway
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Run the API Gateway**:
   ```
   npm start
   ```

## API Endpoints

- **Products**: 
  - `GET /products`
  - `POST /products`
  - `GET /products/{id}`
  - `PUT /products/{id}`
  - `DELETE /products/{id}`

- **Orders**: 
  - `GET /orders`
  - `POST /orders`
  - `GET /orders/{id}`
  - `PUT /orders/{id}`
  - `DELETE /orders/{id}`

- **Customers**: 
  - `GET /customers`
  - `POST /customers`
  - `GET /customers/{id}`
  - `PUT /customers/{id}`
  - `DELETE /customers/{id}`

## Communication

The API Gateway communicates with the microservices using RESTful APIs. It can also handle asynchronous communication through a message broker for events like order creation.

## Docker

To build and run the API Gateway using Docker, use the following commands:

1. **Build the Docker image**:
   ```
   docker build -t api-gateway .
   ```

2. **Run the Docker container**:
   ```
   docker run -p 3000:3000 api-gateway
   ```

## Contributing

Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.