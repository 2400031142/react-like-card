# React Interactive Like/Unlike Cards

A React + Vite web application created as part of Narala Pawan's college web development assignment series.

## 🎯 Project Objective
The primary objective of this project is to demonstrate core React fundamentals:
- Building reusable React components (`Card.jsx`).
- Passing data down from parent (`App.jsx`) to child components using **props**.
- Managing component-level independent state using the **`useState`** hook.
- Implementing dynamic CSS state classes without full page reloads.

---

## 🛠️ Technologies Used
- **React 18**
- **JavaScript (ES6+)**
- **Vite 5** (Fast development server & build tool)
- **HTML5 & CSS3** (Custom HSL color tokens, Flexbox, CSS Grid, Glassmorphism)
- **GitHub Pages** (Hosting & GitHub Actions deployment)

---

## 📁 Component Structure
```text
react-like-card/
├── index.html
├── package.json
├── vite.config.js
├── src/
│   ├── components/
│   │   └── Card.jsx      # Reusable card component with local useState hook
│   ├── App.jsx           # Main parent component passing props to Card
│   ├── App.css           # App layout, grid, and card visual styling
│   ├── index.css         # Design tokens, variables, and typography
│   └── main.jsx          # React DOM entry point
└── README.md
```

---

## 🔑 Key Concepts Covered

### 1. Props (`title`)
Titles (`"Java Programming"`, `"Web Development"`, `"React Learning"`) are stored in `App.jsx` and passed to `Card.jsx` via props:
```jsx
<Card key={index} title={title} />
```

### 2. State Management (`useState`)
Each `Card` component independently tracks whether it is liked using the `useState` hook:
```jsx
const [isLiked, setIsLiked] = useState(false);
```
When a user clicks the button, `setIsLiked((prev) => !prev)` toggles the status for that specific card without affecting any sibling cards.

---

## 🚀 How to Run Locally

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the Vite development server:
   ```bash
   npm run dev
   ```

3. Open your browser at `http://localhost:5173`.

---

## 📦 How to Build for Production

Run the production build command:
```bash
npm run build
```
The compiled output will be generated inside the `./dist` directory.

---

## 🌐 Deployment to GitHub Pages

This project is configured for automated deployment via GitHub Actions (`.github/workflows/deploy.yml`).
1. Push source code to GitHub repository `react-like-card`.
2. Ensure GitHub Pages setting is set to **GitHub Actions** under **Settings -> Pages**.
3. Live URL: `https://<username>.github.io/react-like-card/`
