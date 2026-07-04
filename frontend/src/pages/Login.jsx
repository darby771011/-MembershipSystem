import React, { useState } from 'react'
import AuthCard from '../components/AuthCard'

function Login() {
  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log('前端搜集到的登入資料：', { account, password });
    alert('無法連線至伺服器（因為 C# 後端還沒開喔！）');
  };

  const inputStyle = { width: '100%', padding: '12px 16px', fontSize: '15px', border: '1px solid #cbd5e1', borderRadius: '8px', boxSizing: 'border-box', outline: 'none', backgroundColor: '#f8fafc' };
  const buttonStyle = { width: '100%', padding: '12px', fontSize: '15px', fontWeight: '600', backgroundColor: '#4f46e5', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', boxShadow: '0 4px 6px -1px rgba(79, 70, 229, 0.2)' };

  return (
    <AuthCard title="歡迎回來" subtitle="請輸入您的帳號密碼進行登入">
      <form onSubmit={handleLogin}>
        <div style={{ marginBottom: '18px' }}>
          <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', marginBottom: '6px', color: '#334155' }}>帳號</label>
          <input type="text" placeholder="請輸入帳號" style={inputStyle} value={account} onChange={(e) => setAccount(e.target.value)} />
        </div>
        <div style={{ marginBottom: '24px' }}>
          <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', marginBottom: '6px', color: '#334155' }}>密碼</label>
          <input type="password" placeholder="請輸入密碼" style={inputStyle} value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit" style={buttonStyle}>
          登入系統
        </button>
      </form>
    </AuthCard>
  )
}

export default Login
