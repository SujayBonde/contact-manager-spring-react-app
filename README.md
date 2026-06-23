# 📇 Contact Manager

A full-stack **Contact Manager** web application built with **Spring Boot (Backend)** and **React (Frontend)**.
It supports **CRUD operations** (Create, Read, Update, Delete) with authentication and a modern UI.

<img width="1917" height="1072" alt="contact manager" src="https://github.com/user-attachments/assets/77b30906-ec1a-4a82-9369-b58113e72070" />

---

## 🚀 Features

* Add new contacts (Name, Email, Phone)
* View all contacts in a styled table
* Edit and update existing contacts
* Delete contacts
* User authentication with JWT
* Responsive UI with Tailwind CSS

---

## ⚙️ Tech Stack

### Backend (Spring Boot)

* Spring Boot
* Spring Data JPA
* Spring Security + JWT
* MySQL / PostgreSQL

### Frontend (React)

* React.js
* Axios (API calls)
* Tailwind CSS (styling)

---

## 📂 Project Structure

```
contact-manager/
│── backend/        # Spring Boot project
│   ├── src/main/java/.../controller
│   ├── src/main/java/.../service
│   ├── src/main/java/.../entity
│   └── src/main/resources/application.properties
│
│── frontend/       # React project
│   ├── src/components/AddContact.jsx
│   ├── src/components/DisplayContact.jsx
│   ├── src/api/axiosAPI.js
│   └── src/App.jsx
```

---

## 🛠️ Setup Instructions

### 🔹 Backend (Spring Boot)

1. Clone the repository:

   ```bash
   git clone <your-repo-url>
   ```

2. Navigate to backend folder:

   ```bash
   cd backend
   ```

3. Configure `application.properties`:

   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/contactdb
   spring.datasource.username=root
   spring.datasource.password=yourpassword
   ```

4. Run the backend:

   ```bash
   mvn spring-boot:run
   ```

Backend will run on:
👉 http://localhost:8080

---

### 🔹 Frontend (React)

1. Navigate to frontend folder:

   ```bash
   cd frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the React app:

   ```bash
   npm start
   ```

Frontend will run on:
👉 http://localhost:3000

---

## 📖 API Endpoints

| Method | Endpoint       | Description        |
| ------ | -------------- | ------------------ |
| POST   | /contacts      | Add new contact    |
| GET    | /contacts      | Get all contacts   |
| GET    | /contacts/{id} | Get single contact |
| PUT    | /contacts/{id} | Update contact     |
| DELETE | /contacts/{id} | Delete contact     |

---

## 🎯 Why This Project?

* Great for learning **full-stack development**
* Covers **CRUD, REST APIs, authentication, and UI design**
* Strong addition to your **placement portfolio**

---

## 👨‍💻 Author

Made with ❤️ by **Sujay**
