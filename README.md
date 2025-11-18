# ✅ TaskMaster - Full Stack To-Do Application

A robust full-stack web application designed to manage daily tasks efficiently. This project demonstrates the integration of a **Spring Boot** REST API backend with a modern **React** frontend, featuring real-time CRUD operations.

🔗 **Live Demo:** [CLICK HERE TO VIEW APP](https://taskmaster-project-alpha.vercel.app)

---

## 🚀 Tech Stack

### Backend
* **Language:** Java 21
* **Framework:** Spring Boot 3.x
* **Database:** H2 In-Memory Database (Dev) / PostgreSQL (Prod ready)
* **ORM:** Hibernate & Spring Data JPA
* **Build Tool:** Maven

### Frontend
* **Library:** React.js (Vite)
* **HTTP Client:** Axios
* **Styling:** CSS3
* **Deployment:** Vercel

---

## ✨ Features

* **Create Tasks:** Add new items to your list instantly.
* **Read Tasks:** View all current tasks fetched dynamically from the database.
* **Update Status:** Toggle tasks as "Completed" or "Active" with a single click.
* **Delete Tasks:** Remove tasks permanently from the database.
* **RESTful Architecture:** Clean separation of concerns between client and server.
* **Cross-Origin Resource Sharing (CORS):** Configured to allow secure communication between frontend and backend.

---

## 📸 Screenshots

https://github.com/user-attachments/assets/87023734-fb80-4354-8b16-42c46b0d6ea9

---

## 🔌 API Endpoints

The backend exposes the following REST API endpoints:

| HTTP Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/tasks` | Retrieve all tasks |
| `POST` | `/api/tasks` | Create a new task |
| `PUT` | `/api/tasks/{id}` | Update an existing task |
| `DELETE` | `/api/tasks/{id}` | Delete a task |

---

## 🛠️ How to Run Locally

If you want to run this project on your own machine:

### 1. Clone the Repository
```bash
git clone [https://github.com/Anand9450/taskmaster-project.git](https://github.com/Anand9450/taskmaster-project.git)
