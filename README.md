# Email Reminder Service

This repository contains the code for an email reminder service built using Node.js and Express. The service is designed to send email reminders at specified times.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Project Structure](#project-structure)
- [Tech Stack](#tech-stack)
- [Usage](#usage)
- [Configuration](#configuration)
- [Components](#components)
  - [Server Setup](#server-setup)
  - [Ticket Controller](#ticket-controller)
  - [Server Configuration](#server-configuration)
  - [Email Configuration](#email-configuration)
  - [Notification Ticket Model](#notification-ticket-model)
  - [Ticket Repository](#ticket-repository)
  - [Email Service](#email-service)
  - [Job Scheduler](#job-scheduler)
  - [Message Queue](#message-queue)

## Getting Started

### Prerequisites

- Node.js installed
- NPM installed
- A message broker (e.g., RabbitMQ) for message queue functionality

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/your-repo.git
```
2. Install dependencies:
```bash
npm install
```
3. Configure your environment variables by creating a `.env` file based on the provided `.env.example`.
4. Run the application:
```bash
npm start
```
## Project Structure
The project is organized as follows:

`index.js`: Entry point of the application.
`controllers/`: Contains the ticket controller.
`config/`: Configuration files, including server configuration.
`models/`: Defines the Notification Ticket model using Sequelize.
`repository/`: Handles database interactions for tickets.
`services/`: Email service and related functions.
`utils/`: General utility functions and the job scheduler.
`messageQueue.js`: Handles interactions with the message queue.

## Tech Stack

- **Node.js**: Server-side JavaScript runtime
- **Express**: Web framework for Node.js
- **Sequelize**: Promise-based Node.js ORM for PostgreSQL, MySQL, MariaDB, SQLite, and MSSQL
- **Nodemailer**: Module for sending emails with Node.js
- **Cron**: Library for scheduling tasks in Node.js
- **AMQP (RabbitMQ)**: Message broker for handling message queues


## Usage
The application exposes an API endpoint for creating tickets (`POST /api/v1/tickets`) to register email reminders. The job scheduler periodically checks for pending reminders and sends emails accordingly.

## Configuration
The application uses environment variables for configuration. The configuration file is located in `config/serverConfig.js`. Make sure to set the required variables in your `.env` file.

## Components
### Server Setup
The `index.js` file sets up the Express server, initializes middleware, defines API routes, and starts the server.

### Ticket Controller
The `controllers/ticket-controller.js` file contains the logic for creating a ticket, which represents an email reminder.

### Server Configuration
The `config/serverConfig.js` file manages the server configuration, including port, email credentials, and message broker details.

### Email Configuration
The `config/emailConfig.js` file configures the nodemailer transporter with the email credentials.

### Notification Ticket Model
The `models/notificationticket.js` file defines the Sequelize model for the Notification Ticket.

### Ticket Repository
The `repository/ticketrepository.js` file handles interactions with the database for ticket-related operations.

### Email Service
The `services/email-service.js` file contains functions for sending basic emails, fetching pending emails, updating tickets, creating notifications, and subscribing to events.

### Job Scheduler
The `utils/job.js` file sets up a cron job to periodically check for pending emails and send reminders.

### Message Queue
The `utils/messageQueue.js` file handles interactions with the message queue, including creating channels, subscribing to messages, and publishing messages.

Feel free to customize and extend the functionality as needed for your use case!
