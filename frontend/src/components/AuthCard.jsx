import React from 'react'

function AuthCard({ title, subtitle, children }) {
  const cardStyle = {
    maxWidth: '400px',
    margin: '40px auto',
    padding: '32px',
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.05)',
    border: '1px solid #f1f5f9'
  };

  return (
    <div style={cardStyle}>
      <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '8px', textAlign: 'center', color: '#0f172a' }}>
        {title}
      </h2>
      <p style={{ fontSize: '14px', color: '#64748b', textAlign: 'center', marginBottom: '28px' }}>
        {subtitle}
      </p>
      {children}
    </div>
  )
}

export default AuthCard
