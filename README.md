# 🔥  Theme & Language Switcher

A simple, interactive coming soon landing page built to practice and solidify my understanding of React global state management (context API), custom hooks, and dynamic UI themes.

> **Note:** This is a personal learning project, not a production-ready library. It serves as a sandbox to experiment with global context and creating custom reusable hooks.

---

## 🎯 Learning Objectives

This project was built specifically to master the following React concepts and hooks:
* **`useContext`**: Managing global application configuration (Theme and Language) across the landing page elements without prop drilling.
* **Custom Hooks**: Abstracting the state toggle logic into clean, reusable functions (`useTheme` and `useLanguage`) to separate concerns and keep UI components uncluttered.

---

## 🚀 Features

* **Dynamic Multi-Language Support:** Instant interface switching between English (`EN`), Spanish (`ES`), and French (`FR`) with localized headings and placeholder text.
* **Dark & Light Mode Switcher:** Smooth global layout adjustment with dynamic background, text colors, and thematic transitions via a navbar toggle.
* **Responsive State Management:** Unified state consumption across modular layout blocks (Navbar, Hero Banner, Call-to-Action).

---

## 🛠️ Tech Stack

* **Framework:** React
* **Language:** JavaScript (ES6+)
* **Styling:** Tailwind CSS

---

## 📂 Project Structure

```text
src/
├── context/
│   ├── ThemeContext.jsx
│   └── LanguageContext.jsx
├── hooks/
│   ├── useTheme.js
│   └── useLanguage.js
├── components/
│   ├── Navbar.jsx
│   ├── Card.jsx
│   ├── LangSwitcher.jsx
│   └── ThemeToggle.jsx
├── utilities/
│   ├── themes.js
│   └── translations.js
├── App.jsx
├── main.jsx
└── index.css