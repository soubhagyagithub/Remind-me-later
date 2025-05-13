# Remind-Me-Later 🕒

This is a simple Node.js + Express backend API for a **reminder app** that allows users to schedule reminders with a date, time, message, and reminder type (SMS or Email).  
The backend handles saving the reminder data to a MongoDB database. Actual message delivery (SMS/Email) is not part of this scope.

---

## ✅ Features

- Accepts reminders with:
  - `date`
  - `time`
  - `message`
  - `reminder_type` (SMS or Email)
- Saves reminder data to MongoDB
- Uses proper folder structure (MVC: Model, View (Route), Controller)
- Uses common packages like `express`, `mongoose`, `body-parser`, `cors`

---

## 📦 Tech Stack

- **Node.js**
- **Express**
- **MongoDB** with **Mongoose**
- **dotenv** (for environment variables)
- **body-parser** (for JSON handling)
- **cors** (for cross-origin support)

---

## 🚀 How to Run

### 1. Clone the repo

```bash
git clone https://github.com/soubhagyagithub/remind-me-later.git
cd remind-me-later
Install Dependancies
npm install

Create a .env file (optional)
MONGO_URI=*****************your url***************
PORT=3000

Run the server
npm start

## 📬 API Endpoint

### `POST /api/reminders`

Saves a new reminder.

---

### 🔧 How to Test in Postman

1. Open Postman
2. Set the method to `POST`
3. Enter the URL:
