# 🔗 URL Shortener Application

A beginner-friendly **URL Shortener Web Application** built using **Node.js, Express.js, EJS, and MongoDB**.  
This application converts long URLs into short URLs and redirects users to the original website when the short URL is accessed.

---

## 📌 Features

- Shorten long URLs
- Redirect short URLs to original URLs
- Store URLs in MongoDB
- Simple and clean UI using EJS
- Beginner-friendly project structure
- Easy to run locally

---

## 🧰 Tech Stack

Backend : Node.js, Express.js
Frontend : EJS (Embedded JavaScript Templates)
Database : MongoDB
ODM : Mongoose
Utilities : dotenv, shortid / nanoid


---

## 📂 Project Structure

Shortner-URL/
│
├── models/
│ └── Url.js # MongoDB schema for URLs
│
├── views/
│ └── index.ejs # Frontend UI
│
├── public/
│ └── styles.css # CSS file (if used)
│
├── index.js # Main server file
├── package.json # Project metadata & dependencies
├── package-lock.json
├── .env # Environment variables
└── README.md


---

## ⚙️ Prerequisites

Make sure the following are installed on your system:

Node.js (v16 or above)
npm
MongoDB (local or MongoDB Atlas)


Check installation:

node -v
npm -v


---

## 🚀 Installation & Setup

### 1️⃣ Clone the Repository

git clone https://github.com/Harsh-Verma1981/Shortner-URL.git
cd Shortner-URL


---

### 2️⃣ Install Dependencies

npm install


---

### 3️⃣ Configure Environment Variables

Create a `.env` file in the root directory:

PORT=3000
MONGO_URI=mongodb://127.0.0.1:27017/urlShortener


> If using MongoDB Atlas, replace `MONGO_URI` with your cloud connection string.

---

### 4️⃣ Start MongoDB (Local)

mongod


(Or ensure MongoDB Atlas is running)

---

### 5️⃣ Run the Application

npm start


OR (if using nodemon):

npm run dev


---

## 🌐 Access the Application

Open your browser and visit:

http://localhost:3000


---

## 🧪 How the App Works

### 🔹 Step 1: Shorten a URL

- Enter a long URL in the input field
- Click **Shorten**
- A short URL will be generated like:

http://localhost:3000/abc123


---

### 🔹 Step 2: Redirect Using Short URL

Open the short URL in your browser:

http://localhost:3000/abc123


➡️ You will be redirected to the original website.

---

## 🔁 Redirection Logic (Important)

The following route handles redirection:

GET /:shortId


### Example Code:

```js
app.get('/:shortId', async (req, res) => {
  try {
    const shortId = req.params.shortId;
    const url = await Url.findOne({ short: shortId });

    if (!url) {
      return res.status(404).send('Short URL not found');
    }

    res.redirect(url.full);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});
🗄 MongoDB Schema
const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
  full: {
    type: String,
    required: true
  },
  short: {
    type: String,
    required: true
  },
  clicks: {
    type: Number,
    default: 0
  }
});

module.exports = mongoose.model('Url', urlSchema);
📌 Example
Original URL : https://www.google.com
Short URL    : http://localhost:3000/XyZ12
❗ Common Issues & Fixes
❌ Short URL not redirecting
✔ Ensure MongoDB is connected
✔ Ensure GET /:shortId route exists
✔ Check field name used in schema
✔ Place redirect route AFTER other routes
🚧 Future Enhancements
- Click analytics
- Custom short URLs
- URL expiration
- Authentication
- Deployment (Render / Railway)
- UI improvements
🤝 Contributing
1. Fork the repository
2. Create a new branch
3. Make changes
4. Commit changes
5. Open a Pull Request
📜 License
MIT License
👤 Author
Harsh Verma
GitHub: https://github.com/Harsh-Verma1981
⭐ If you like this project, give it a star!

---

If you want next:
- 🔹 **Deployment README (Render / Railway)**
- 🔹 **API documentation**
- 🔹 **Interview-ready explanation of this project**
- 🔹 **Better folder structure (MVC)**

Just tell me 👍
