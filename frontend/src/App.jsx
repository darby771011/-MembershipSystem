import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Index from './pages/Index'

function FrontendLayout({ children }) {
  const location = useLocation();
  const isMobile = window.innerWidth < 768;
  
  const navStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr auto 1fr',
    alignItems: 'center',
    padding: isMobile ? '12px 16px' : '16px 24px',
    background: 'rgba(255, 255, 255, 0.8)',
    backdropFilter: 'blur(10px)',
    borderBottom: '1px solid rgba(226, 232, 240, 0.8)',
    position: 'sticky',
    top: 0,
    zIndex: 100
  };

  const getLinkStyle = (path, activeColor) => ({
    textDecoration: 'none',
    padding: isMobile ? '6px 14px' : '8px 20px',
    borderRadius: '20px',
    fontSize: isMobile ? '13px' : '14px',
    fontWeight: '600',
    transition: 'all 0.2s ease',
    backgroundColor: location.pathname === path ? activeColor : 'transparent',
    color: location.pathname === path ? '#ffffff' : '#64748b'
  });

  return (
    <div>
      <nav style={navStyle}>
        <div style={{ gridColumn: '1' }}></div>
        <div style={{ gridColumn: '2', display: 'flex', gap: '8px' }}>
          <Link to="/" style={getLinkStyle('/', '#4f46e5')}>會員登入</Link>
          <Link to="/register" style={getLinkStyle('/register', '#10b981')}>註冊帳號</Link>
        </div>
        <div style={{ gridColumn: '3', justifySelf: 'end' }}>
          <Link to="/index" style={{ textDecoration: 'none', fontSize: '11px', color: '#cbd5e1' }}>⚙️ 測試</Link>
        </div>
      </nav>
      <div style={{ padding: isMobile ? '24px 16px' : '60px 20px', boxSizing: 'border-box' }}>{children}</div>
    </div>
  );
}

function App() {
  const containerStyle = {
    fontFamily: '"Inter", "PingFang TC", sans-serif',
    background: 'linear-gradient(135deg, #f0fdf4 0%, #eff6ff 100%)',
    minHeight: '100vh',
    color: '#1e293b',
    display: 'flex',
    flexDirection: 'column'
  };

  return (
    <Router>
      <div style={containerStyle}>
        <Routes>
          <Route path="/" element={<FrontendLayout><Login /></FrontendLayout>} />
          <Route path="/register" element={<FrontendLayout><Register /></FrontendLayout>} />
          <Route 
            path="/index" 
            element={
              <div style={{ 
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: window.innerWidth < 768 ? '16px' : '40px 20px',
                boxSizing: 'border-box'
              }}>
                <Index />
              </div>
            } 
          />
        </Routes>
      </div>
    </Router>
  )
}

export default App
