# Message Broker Service

The Message Broker service is a crucial component of the Sales Management System, facilitating communication between various microservices. This service is responsible for handling asynchronous messaging, ensuring that events are processed reliably and efficiently.

## Overview

In a microservices architecture, services often need to communicate with each other to perform their functions. The Message Broker acts as an intermediary that allows services to send and receive messages without needing to know about each other's implementation details. This decouples the services and enhances the system's scalability and maintainability.

## Technologies Used

- **Message Broker**: This project can utilize either Kafka or RabbitMQ as the message broker.
- **Docker**: The service is containerized using Docker for easy deployment and management.

## Features

- **Asynchronous Communication**: Services can publish and subscribe to events, allowing for non-blocking operations.
- **Event Handling**: The Message Broker can handle various events such as order creation, inventory updates, and customer notifications.
- **Scalability**: The architecture allows for easy scaling of services as needed.

## Setup Instructions

1. **Clone the Repository**: Clone the Sales Management System repository to your local machine.
2. **Build the Docker Image**: Navigate to the `message-broker` directory and run the following command:
   ```
   docker build -t message-broker .
   ```
3. **Run the Service**: Use Docker Compose to start the Message Broker along with other microservices:
   ```
   docker-compose up
   ```

## Communication Flow

1. **Order Service** publishes an event when a new order is created.
2. **Product Service** subscribes to the order events to update inventory accordingly.
3. **Customer Service** can also listen for order events to send notifications to customers.

## Conclusion

The Message Broker service plays a vital role in ensuring smooth communication between microservices in the Sales Management System. By leveraging asynchronous messaging, the system can achieve better performance and reliability.