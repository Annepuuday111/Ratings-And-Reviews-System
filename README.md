<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:FF6B6B,35:FFA94D,70:4DABF7,100:845EF7&height=200&section=header&text=Ratings%20%26%20Reviews%20System&fontSize=44&fontColor=ffffff&fontAlignY=36&animation=fadeIn&desc=Browse%20products%2C%20rate%20them%20and%20share%20reviews&descSize=16&descAlignY=58" width="100%"/>

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=22&pause=1000&color=845EF7&center=true&vCenter=true&width=700&lines=Rate+products+from+1+to+5+stars;Average+rating+%2B+review+count;React+%2B+Express+%2B+PostgreSQL" alt="Typing SVG"/>

<br/>

<img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black"/>
<img src="https://img.shields.io/badge/React_Router-7-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white"/>
<img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white"/>
<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"/>
<img src="https://img.shields.io/badge/Express-5-000000?style=for-the-badge&logo=express&logoColor=white"/>
<img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white"/>

<br/>

<img src="https://img.shields.io/badge/Status-Completed-20C997?style=for-the-badge"/>
<img src="https://img.shields.io/github/stars/Annepuuday111/Ratings-And-Reviews-System?style=for-the-badge&color=845EF7"/>
<img src="https://img.shields.io/github/last-commit/Annepuuday111/Ratings-And-Reviews-System?style=for-the-badge&color=4DABF7"/>
<img src="https://img.shields.io/github/repo-size/Annepuuday111/Ratings-And-Reviews-System?style=for-the-badge&color=FF6B6B"/>

<br/><br/>

[About](#-about) • [Features](#-features) • [Tech Stack](#️-tech-stack) • [API Endpoints](#-api-endpoints) • [Project Structure](#-project-structure) • [Getting Started](#-getting-started)

</div>

<img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png" width="100%">

## 📖 About

**Ratings & Reviews System** is a full-stack web application where users browse products, open a product's details page, give it a 1–5 star rating and leave a review. It is split into a **React** client, a **Node.js + Express** REST API and a **PostgreSQL** database.

<img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png" width="100%">

## ✨ Features

- 🛍️ **Product listing** — product cards with image, description, average rating and review count
- 🔎 **Product details** — dedicated page per product (`/product/:id`) with all its reviews
- ⭐ **Star rating** — interactive 1–5 star selector
- 💬 **Reviews** — submit a comment with an optional image URL; newest reviews are shown first
- 📊 **Aggregated ratings** — average rating and review count computed in SQL
- 🔁 **Dev proxy** — the React dev server proxies `/api` to the Express server
- 🗄️ **Schema & seed data** — `database/schema.sql` creates the tables and inserts sample products

<img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png" width="100%">

## 🛠️ Tech Stack

<div align="center">

<img src="https://skillicons.dev/icons?i=react,js,css,nodejs,express,postgres&theme=light"/>

</div>

| Layer | Technology |
|-------|------------|
| Frontend | React 19, React Router 7, Axios, React Icons, CSS |
| Backend | Node.js, Express 5, `cors`, `dotenv` |
| Database | PostgreSQL via `pg` |

<img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png" width="100%">

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/` | Health check — "Ratings & Review API Running" |
| `GET` | `/api/products` | List products with `avg_rating` and `review_count` |
| `GET` | `/api/products/:id` | Get a single product |
| `GET` | `/api/reviews/:id` | Reviews for product `:id` (newest first) |
| `POST` | `/api/reviews` | Submit a review — body: `{ product_id, rating, comment, image_url }` |

<img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png" width="100%">

## 📂 Project Structure

```
Ratings-And-Reviews-System/
├── client/                    # React frontend
│   ├── public/
│   └── src/
│       ├── components/        # Header, ProductCard, ReviewForm, StarRating
│       ├── pages/             # HomePage, ProductDetails
│       ├── styles/            # Component CSS
│       ├── utils/api.js       # Axios API calls
│       ├── setupProxy.js      # Proxies /api -> http://localhost:5000
│       └── App.js
├── server/                    # Express backend
│   ├── controllers/           # productController, reviewController
│   ├── models/                # db.js (pg Pool), productModel, reviewModel
│   ├── routes/                # productRoutes, reviewRoutes
│   ├── .env.example
│   └── server.js
└── database/
    └── schema.sql             # Tables + sample products
```

<img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png" width="100%">

## 🚀 Getting Started

### Prerequisites

- Node.js (v16+) and npm
- PostgreSQL (pgAdmin optional)

### 1. Clone

```bash
git clone https://github.com/Annepuuday111/Ratings-And-Reviews-System.git
cd Ratings-And-Reviews-System
```

### 2. Database

```sql
CREATE DATABASE ratingsdb;
```

```bash
psql -U <username> -d ratingsdb -f database/schema.sql
```

### 3. Backend

```bash
cd server
npm install
cp .env.example .env     # then fill in your values
npm start
```

`server/.env`:

```env
PORT=5000
DATABASE_URL=postgresql://<username>:<password>@localhost:5432/ratingsdb
```

The API runs on `http://localhost:5000`.

### 4. Frontend

```bash
cd client
npm install
npm start
```

The app opens at `http://localhost:3000`.

> ℹ️ `client/src/setupProxy.js` forwards `/api` requests to `http://localhost:5000`, so start the backend first. Restart both servers after changing `.env` or the proxy.

<img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png" width="100%">

## 🗺️ Roadmap

- [ ] User accounts so reviews show their author
- [ ] Image uploads instead of image URLs
- [ ] Sort and filter reviews by rating

## 🤝 Contributing

Contributions are welcome! Fork the repo, create a feature branch, commit your changes and open a pull request.

<img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png" width="100%">

## 👨‍💻 Author

<div align="center">

### Annepu Uday Kumar

<a href="https://github.com/Annepuuday111"><img src="https://img.shields.io/badge/GitHub-Annepuuday111-845EF7?style=for-the-badge&logo=github&logoColor=white"/></a>
<a href="https://annepuudaykumar.netlify.app"><img src="https://img.shields.io/badge/Portfolio-annepuudaykumar.netlify.app-FF6B6B?style=for-the-badge&logo=googlechrome&logoColor=white"/></a>

</div>

<br/>

<div align="center">⭐ If you like this project, give it a star!</div>

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:845EF7,35:4DABF7,70:FFA94D,100:FF6B6B&height=120&section=footer" width="100%"/>
