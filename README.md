# 📝 Simple Task Management API

A RESTful API built using **TypeScript**, **Node.js**, **Express.js**, and **MongoDB** to manage daily tasks like creating, updating, deleting, and listing tasks. Also includes pagination and filtering functionality.

---

## 🚀 Features

- Full CRUD operations for tasks
- Task statuses: `pending`, `in-progress`, `completed`
- Pagination and filtering support
- MongoDB integration using Mongoose
- Environment variable configuration using `.env`
- CORS support
- Type-safe code with TypeScript

---

## 🛆 Tech Stack

- **Backend:** Node.js, Express.js, TypeScript
- **Database:** MongoDB with Mongoose
- **Dev Tools:** Thunder Client / Postman, Git & GitHub

---

## 📁 Folder Structure

```
src/
├── config/          # MongoDB connection
├── controllers/     # Business logic (CRUD)
├── models/          # Mongoose schemas
├── routes/          # API endpoints
├── insertTasks.ts   # Script to insert dummy data
└── index.ts         # Main server entry point
```

---

## 🔧 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/task-manager-api.git
cd task-manager-api
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Add Environment Variables

Create a `.env` file in the root directory and add:

```
PORT=5000
MONGODB_URI=mongodb+srv://your-mongo-uri
```

### 🛠️ Run the Project

#### Development Mode

```bash
npm run dev
```

---

## 📮 API Endpoints

| Method | Endpoint        | Description       |
| ------ | --------------- | ----------------- |
| GET    | /api/tasks      | Get all tasks     |
| GET    | /api/tasks/\:id | Get task by ID    |
| POST   | /api/tasks      | Create a new task |
| PUT    | /api/tasks/\:id | Update a task     |
| DELETE | /api/tasks/\:id | Delete a task     |

---

## 🔍 Example Usage (Pagination + Filtering)

```http
GET /api/tasks?status=pending&page=1&limit=5
```

This returns the first 5 tasks with status `pending`.

---

## 🧪 Testing API

Use **Thunder Client** or **Postman** to test the routes.

To test pagination and filtering:

```http
GET /api/tasks?status=completed&page=2&limit=5
```

---

## 🧰️ Dummy Task Insert Script

To add sample data:

```bash
npx ts-node src/insertTasks.ts
```

Adds 25 sample tasks to your MongoDB database.

---

## ✅ Author

**Akarsh**



