# Sales Management System

This project implements a Sales Management System using a microservices architecture. It consists of several independent services, each responsible for a specific domain of the application. The services communicate with each other through REST APIs and a message broker for asynchronous events.

## Microservices Overview

1. **Product Service**
   - Manages product information such as name, price, description, and stock.
   - CRUD API endpoints:
     - `GET /products` - Retrieve a list of all products
     - `POST /products` - Create a new product
     - `GET /products/{id}` - Retrieve product details
     - `PUT /products/{id}` - Update product information
     - `DELETE /products/{id}` - Remove a product

2. **Order Service**
   - Manages customer orders including creation, viewing, and cancellation.
   - CRUD API endpoints:
     - `GET /orders` - Retrieve a list of all orders
     - `POST /orders` - Create a new order
     - `GET /orders/{id}` - Retrieve order details
     - `DELETE /orders/{id}` - Cancel an order

3. **Customer Service**
   - Manages customer information such as name, address, and contact details.
   - CRUD API endpoints:
     - `POST /customers` - Create a new customer
     - `GET /customers/{id}` - Retrieve customer details
     - `PUT /customers/{id}` - Update customer information
     - `DELETE /customers/{id}` - Remove a customer

## API Gateway

The API Gateway acts as a single entry point for clients, routing requests to the appropriate microservices. It simplifies client interactions and provides a unified interface for the system.

## Communication

- **Synchronous Communication**: Services communicate directly using REST APIs.
- **Asynchronous Communication**: A message broker (Kafka or RabbitMQ) is used for event-driven interactions. For example, when an order is created, an event is sent to notify other services (like Inventory and Shipping).

## Technology Stack

- **Database**: Each service uses MongoDB as its database engine.
- **Containerization**: All services are containerized using Docker and orchestrated with Docker Compose.

## Project Structure

The project is organized into separate directories for each microservice, the API Gateway, and the message broker, along with a Docker Compose file for orchestration.

## Getting Started

1. Clone the repository.
2. Navigate to the project directory.
3. Use Docker Compose to build and run the services:
   ```
   docker-compose up --build
   ```
4. Access the API Gateway to interact with the services.

## Diagrams

Refer to the documentation of each service for detailed interaction diagrams and API specifications. 

## License

This project is licensed under the MIT License.