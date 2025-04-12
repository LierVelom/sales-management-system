FROM rabbitmq:3-management

# Expose the default RabbitMQ port
EXPOSE 5672 15672

# Copy the broker configuration file
COPY ./config/brokerConfig.js /etc/rabbitmq/brokerConfig.js

# Set the entrypoint to start RabbitMQ
ENTRYPOINT ["docker-entrypoint.sh"]
CMD ["rabbitmq-server"]