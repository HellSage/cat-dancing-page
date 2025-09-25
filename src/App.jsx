import React from 'react'
import DancingCat from './components/DancingCat'
import './App.css'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>🐱 Dancing Cat 🐱</h1>
        <p>Welcome to the cutest dancing cat on the web!</p>
      </header>
      <main className="app-main">
        <DancingCat />
      </main>
    </div>
  )
}

export default App
