import React, { useState, useEffect } from 'react'
import catImage from '../assets/images/cat.svg'
import './DancingCat.css'

const DancingCat = () => {
  const [isDancing, setIsDancing] = useState(false)
  const [danceCount, setDanceCount] = useState(0)

  const toggleDance = () => {
    setIsDancing(prevState => !prevState)
    if (!isDancing) {
      setDanceCount(prevCount => prevCount + 1)
    }
  }

  const handleKeyPress = (event) => {
    if (event.key === ' ' || event.key === 'Enter') {
      event.preventDefault()
      toggleDance()
    }
  }

  useEffect(() => {
    const handleGlobalKeyPress = (event) => {
      if (event.code === 'Space') {
        event.preventDefault()
        toggleDance()
      }
    }

    window.addEventListener('keydown', handleGlobalKeyPress)
    return () => {
      window.removeEventListener('keydown', handleGlobalKeyPress)
    }
  }, [isDancing])

  const handleCatClick = () => {
    toggleDance()
  }

  return (
    <div className="dancing-cat-container">
      <div
        className={`cat-wrapper ${isDancing ? 'dancing' : ''}`}
        onClick={handleCatClick}
        role="button"
        tabIndex="0"
        onKeyDown={handleKeyPress}
        aria-label={`Dancing cat. ${isDancing ? 'Currently dancing. Click to stop.' : 'Currently not dancing. Click to start dancing.'}`}
      >
        <img src={catImage} alt="Cute orange cat ready to dance" className="cat-image" />
      </div>

      <div className="controls">
        <button
          onClick={toggleDance}
          className="dance-button"
          aria-describedby="status-text"
        >
          {isDancing ? '🛑 Stop Dancing' : '💃 Start Dancing'}
        </button>
        <p id="status-text" className="status-text" role="status" aria-live="polite">
          {isDancing
            ? 'The cat is dancing! 🎉 Press Space or click to stop.'
            : `Click the cat or press Space to make it dance! 🐱 ${danceCount > 0 ? `(Danced ${danceCount} time${danceCount > 1 ? 's' : ''})` : ''}`
          }
        </p>
        <small className="accessibility-hint">
          💡 Tip: Press the Spacebar anywhere to toggle dancing!
        </small>
      </div>
    </div>
  )
}

export default DancingCat