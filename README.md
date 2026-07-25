# 💰 Expense Tracker

A modern and responsive Expense Tracker built with **React** that allows users to manage their income and expenses with persistent local storage.

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-8-purple?logo=vite)
![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Features

- ➕ Add new income and expense transactions
- ✏️ Edit existing transactions
- 🗑️ Delete transactions
- 💰 Automatic balance calculation
- 📈 Separate income and expense totals
- 💾 Data persistence using Local Storage
- ✅ Input validation
- 📱 Responsive modern UI
- ⚡ Built with React Hooks

---

## 🛠️ Built With

- React 19
- Vite
- JavaScript (ES6+)
- CSS3
- HTML5

---

## 📚 React Concepts Used

This project was built to practice core React fundamentals including:

- `useState`
- `useEffect`
- Controlled Components
- Conditional Rendering
- Event Handling
- Lists & Keys
- State Management
- CRUD Operations
- Local Storage Persistence

---

## 🚀 Installation

Clone the repository

```bash
git clone https://github.com/yourusername/expense-tracker.git
```

Navigate to the project

```bash
cd expense-tracker
```

Install dependencies

```bash
npm install
```

Start the development server

```bash
npm run dev
```

---

## 📂 Project Structure

```
expense-tracker/
│
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── assets/
│
├── public/
├── package.json
└── README.md
```

---

## 📖 How It Works

- Users can add transactions by entering a description and amount.
- Positive amounts are treated as **Income**.
- Negative amounts are treated as **Expenses**.
- The application automatically calculates:
  - Total Income
  - Total Expenses
  - Current Balance
- All transactions are saved in the browser's **Local Storage**, so data remains available after refreshing the page.

---

## 🎯 Future Improvements

- 🔍 Search transactions
- 🏷️ Categories
- 📅 Date support
- 📊 Charts & Analytics
- 🌙 Dark / Light Theme
- 📄 Export to CSV
- 🔐 User Authentication
- ☁️ Cloud Database (Firebase)

---

## 👨‍💻 Author

**Ishan Biyani**

GitHub: https://github.com/yourusername

---

## 📜 License

This project is licensed under the MIT License.
