import React from 'react'

export default function Button () {
  return (
    <div className='flex items-center justify-center h-screen'>
      <button
        onClick={() => alert('goofy ah website')}
        style={{
          background: 'linear-gradient(135deg, #ff7eb3, #ff758c)',
          color: 'white',
          fontSize: '1.5rem',
          padding: '15px 30px',
          border: 'none',
          borderRadius: '12px',
          cursor: 'pointer',
          transition: 'all 0.3s ease-in-out',
          boxShadow: '0 4px 15px rgba(255, 118, 136, 0.4)'
        }}
        onMouseOver={e => (e.currentTarget.style.transform = 'scale(1.1)')}
        onMouseOut={e => (e.currentTarget.style.transform = 'scale(1)')}
      >
        Click Me 💖
      </button>
    </div>
  )
}
