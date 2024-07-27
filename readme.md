# Birthday Wisher

A web application that allows users to register their birthdays and sends them birthday wishes via email. The application also displays a list of all registered users and their birthdays.

## Features

-   User Registration
-   User Login
-   Display of Registered Users
-   Daily Email Notifications for Birthdays
-   Cron Job to Schedule Daily Email Sending

## Prerequisites

Before you begin, ensure you have met the following requirements:

-   You have installed Node.js and npm.
-   You have a MongoDB database set up.
-   You have a Gmail account for sending emails.
-   You have created a `.env` file with the following variables:
    ```env
    PORT=5000
    DB_URI=your_mongodb_uri
    MAIL_USER=your_gmail_account
    MAIL_PASSWORD=your_gmail_password
    ```

1.  Clone the repository:
    ```bash
    git clone https://github.com/yourusername/birthday-wisher.git`
    ```
2.  Navigate to the project directory:
    ```bash
    cd birthday-wisher
    ```
3.  Install the dependencies:
    ```bash
    npm install
    ```
4.  Create a `.env` file in the root directory and add the environment variables mentioned above.

## Usage

1.  Start the server:

    ```bash
    node index.js
    ```

2.  Open your browser and navigate to `http://localhost:5000` to access the web application.
3.  Use the form to register a new user with a username, email, and date of birth.
4.  The registered users will be displayed in a table below the form.
5.  A cron job will run daily at 7 AM to send birthday wishes to users whose birthdays are today.
