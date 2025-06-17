# ⭐ Ratings & Review System

A full-stack web application where users can view products and submit reviews.

## 🛠️ Tech Stack

- **Frontend:** React (CSS for styling)  
- **Backend:** Node.js + Express  
- **Database:** PostgreSQL  

## 📁 Folder Structure

```
ratings-review-system/
├── client/       # React Frontend
├── server/       # Express Backend
├── database/     # PostgreSQL Schema
├── .env          # Environment Variables
````

### ✅ Prerequisites

Ensure the following are installed:

- Node.js (v16+)
- npm
- PostgreSQL
- pgAdmin (optional)

### 🔌 Backend Setup

1. Navigate to the backend folder:
   ```bash
   cd server
````
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file inside `/server`:
   ```
   PORT=5000
   DATABASE_URL=postgresql://<username>:<password>@localhost:5432/ratingsdb
   ```
4. Start the backend server:
   ```bash
   npm start
   ```

### 🌐 Frontend Setup

1. Navigate to the frontend folder:

   ```bash
   cd client
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the frontend:

   ```bash
   npm start
   ```

Frontend will be available at: [http://localhost:3000](http://localhost:3000)

### 🗄️ Database Setup

1. Open `psql` or `pgAdmin` and create the database:

   ```sql
   CREATE DATABASE ratingsdb;
   ```

2. Run the schema file to create tables and insert sample data:

   ```bash
   psql -U <username> -d ratingsdb -f database/schema.sql
   ```

## ✅ Testing the Application

### Functional Testing

* Visit: [http://localhost:3000](http://localhost:3000)
* Browse the list of products
* Click "View Details" to:

  * View product information
  * Submit a star rating (1–5)
  * Add a comment (optional image)
  * View all submitted reviews

### API Testing (Optional)

Use Postman or browser:

* `GET /api/products` – List all products
* `GET /api/products/:id` – Get product by ID
* `GET /api/reviews/:id` – Get reviews for a product
* `POST /api/reviews` – Submit a new review

## 📝 Notes

* Ensure your `.env` file contains correct and URL-encoded credentials.
* Restart both frontend and backend after making changes to `.env` or proxy.
* Proxy is set in `client/src/setupProxy.js` to redirect `/api` to backend.
