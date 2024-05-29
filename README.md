# Bidding Platform

A bidding platform API built with Node.js, Express, and PostgreSQL.

## Setup

### Prerequisites

- Node.js
- PostgreSQL

### Installation

1. **Clone the repository**:

  ```sh
  git clone https://github.com/yourusername/bidding-platform.git
  cd bidding-platform
  ```
2. **Install Dependencies**:

  ```sh
  npm install
  ```
3. **Set up PostgreSQL:**:

  - Ensure PostgreSQL is installed and running.
  - Create a new database and user:
      ```sh
      psql -U postgres
      ```
      ```sql
      CREATE DATABASE bidding_platform;
      CREATE USER your_username WITH ENCRYPTED PASSWORD 'your_password';
      GRANT ALL PRIVILEGES ON DATABASE bidding_platform TO your_username;
      ```
4. **Update environment variables:**:
  
  Create a .env file in the root directory (if not already present) and add the following:
  ```
  DB_HOST=localhost
  DB_USER=your_username
  DB_PASSWORD=your_password
  DB_NAME=bidding_platform
  JWT_SECRET=your_jwt_secret
  ```

5. **Run database migrations:**:

  Apply the database schema:
    ```sh
  psql -U your_username -d bidding_platform -f schema.sql
  ```

6. **Start the server**:

    ```sh
  npm start
  ```

7. **Running the tests**:

  To run the tests:
  ```sh
  npm test
  ```

## Api Endpoints

### Authentication

  - Register: `POST /api/auth/register`
  - Login: `POST /api/auth/login`

### Items
  - Create Item: POST /api/items (requires authentication)
  - Get All Items: GET /api/items
  - Get Item: GET /api/items/:id
  - Update Item: PUT /api/items/:id (requires authentication)
  - Delete Item: DELETE /api/items/:id (requires authentication)

### Bids
  - Place Bid: POST /api/bids (requires authentication)
  - Get Bids for Item: GET /api/bids/:itemId

### Notifications
  - Get Notifications: GET /api/notifications (requires authentication)
  - Mark Notification as Read: PUT /api/notifications/:id (requires authentication)

## License
This project is licensed under the MIT License.
