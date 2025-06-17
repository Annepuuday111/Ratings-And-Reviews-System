Project Documentation: Ratings & Review System
====================================================
1. Project Overview
A full-stack web application where users can view products and submit reviews. Built using:

Frontend: React (with CSS for styling)
Backend: Node.js + Express
Database: PostgreSQL

2. Setup Instructions
Prerequisites
Ensure the following are installed:

Node.js (v16+ recommended)
PostgreSQL
npm

pgAdmin (optional GUI)

Folder Structure
ratings-review-system/
├── client/       # React Frontend
├── server/       # Express Backend
├── database/     # PostgreSQL Schema
├── .env          # Environment Variables

Backend Setup
Install dependencies:
cd server
npm install

Create .env file inside /server:
PORT=5000
DATABASE_URL=postgresql://<username>:<password>@localhost:5432/ratingsdb

Start backend server:
npm start

Frontend Setup
Install dependencies:
cd client
npm install

Run the frontend app:
npm start

Frontend will be available at:
http://localhost:3000

Database Setup
Open psql or pgAdmin and create the database:
CREATE DATABASE ratingsdb;

Run the schema file:
psql -U <username> -d ratingsdb -f database/schema.sql
This creates the products and reviews tables and inserts sample data.

3. Testing the Application
Functional Testing
Go to http://localhost:3000
Browse the list of products
Click “View Details” to:
View full product info
Submit a star rating (1–5)
Add a comment (with optional image)
View other submitted reviews


API Testing (Optional)
Use Postman or browser:
GET /api/products – List all products
GET /api/products/:id – Get one product
GET /api/reviews/:id – Reviews for product
POST /api/reviews – Add new review

Notes
Ensure password in .env is correct and URL-encoded.
Restart both frontend & backend after .env or proxy changes.
React proxy is set in client/src/setupProxy.js to redirect /api to backend.