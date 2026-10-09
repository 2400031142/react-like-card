import React from 'react';
import Card from './components/Card';
import './App.css';

function App() {
  // Array of initial card titles passed to Card components via props
  const initialCards = [
    'Java Programming',
    'Web Development',
    'React Learning'
  ];

  return (
    <main className="app-container">
      <header className="app-header">
        <div className="badge-wrapper">
          <span className="tech-badge">React &amp; Vite Demo</span>
        </div>
        <h1 className="main-title">Interactive Like Cards</h1>
        <p className="main-description">
          Demonstrating reusable React components, prop passing, and independent state management using the <code>useState</code> hook.
        </p>
      </header>

      <section className="cards-grid" aria-label="Course cards">
        {initialCards.map((title, index) => (
          <Card key={index} title={title} />
        ))}
      </section>

      <footer className="app-footer">
        <p>Built with React &amp; Vite • Narala Pawan Portfolio Collection</p>
      </footer>
    </main>
  );
}

export default App;
