const amqp = require('amqplib');

const brokerConfig = {
    protocol: 'amqp',
    hostname: 'localhost',
    port: 5672,
    username: 'guest',
    password: 'guest',
    vhost: '/',
};

async function connect() {
    try {
        const connection = await amqp.connect(brokerConfig);
        console.log('Connected to RabbitMQ');
        return connection;
    } catch (error) {
        console.error('Error connecting to RabbitMQ:', error);
        throw error;
    }
}

module.exports = {
    connect,
    brokerConfig,
};