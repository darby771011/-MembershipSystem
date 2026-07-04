import React, { useState } from 'react'
import AuthCard from '../components/AuthCard'

function Register() {
  const [email, setEmail] = useState('');
  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    console.log('前端搜集到的註冊資料：', { email, account, password });
    alert('註冊功能已就緒，等待後端 API 連線！');
  };

  const inputStyle = { width: '100%', padding: '12px 16px', fontSize: '15px', border: '1px solid #cbd5e1', borderRadius: '8px', boxSizing: 'border-box', outline: 'none', backgroundColor: '#f8fafc' };
  const buttonStyle = { width: '100%', padding: '12px', fontSize: '15px', fontWeight: '600', backgroundColor: '#10b981', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', boxShadow: '0 4px 6px -1px rgba(16, 185, 129, 0.2)' };

  return (
    <AuthCard title="建立新帳戶" subtitle="加入我們以體驗更完整的會員服務">
      <form onSubmit={handleRegister}>
        <div style={{ marginBottom: '18px' }}>
          <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', marginBottom: '6px', color: '#334155' }}>電子信箱</label>
          <input type="email" placeholder="example@domain.com" style={inputStyle} value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div style={{ marginBottom: '18px' }}>
          <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', marginBottom: '6px', color: '#334155' }}>使用者帳號</label>
          <input type="text" placeholder="請設定新帳號" style={inputStyle} value={account} onChange={(e) => setAccount(e.target.value)} />
        </div>
        <div style={{ marginBottom: '24px' }}>
          <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', marginBottom: '6px', color: '#334155' }}>密碼</label>
          <input type="password" placeholder="請設定新密碼" style={inputStyle} value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit" style={buttonStyle}>
          註冊帳戶
        </button>
      </form>
    </AuthCard>
  )
}

export default Register
