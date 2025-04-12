# Order Service

The Order Service is a microservice responsible for managing orders in the Sales Management System. It provides a RESTful API for creating, viewing, and canceling orders.

## Features

- **Create Order**: Allows clients to create new orders.
- **View Order**: Enables clients to retrieve details of a specific order.
- **Cancel Order**: Provides functionality to cancel an existing order.

## API Endpoints

- `GET /orders`: Retrieve a list of all orders.
- `POST /orders`: Create a new order.
- `GET /orders/{id}`: Retrieve details of an order by ID.
- `DELETE /orders/{id}`: Cancel an order by ID.

## Database

The Order Service uses MongoDB as its database to store order information.

## Communication

The Order Service communicates with other microservices via REST APIs and can publish events to a message broker for asynchronous processing.

## Getting Started

1. Clone the repository.
2. Navigate to the `order-service` directory.
3. Install dependencies using `npm install`.
4. Start the service using `npm start`.

## Docker

To build and run the Order Service in a Docker container, use the provided Dockerfile.

## Contributing

Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.