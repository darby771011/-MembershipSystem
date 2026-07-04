import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, Filler } from 'chart.js'
import OverviewTab from '../components/OverviewTab'
import SettingsTab from '../components/SettingsTab'
import SecurityTab from '../components/SecurityTab'
import CoachTab from '../components/CoachTab'
import MemberTab from '../components/MemberTab'
import PlanTab from '../components/PlanTab'
import ProductTab from '../components/ProductTab' // 🌟 1. 引入全新商品管理積木

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, Filler);

function Index() {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [activeTab, setActiveTab] = useState('overview');

  const [currentUser, setCurrentUser] = useState({
    name: '王大明',
    role: 'Admin'
  });

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLogout = () => {
    alert('正在登出系統...');
    navigate('/');
  };

  const toggleTestUser = () => {
    if (currentUser.role === 'Admin') {
      setCurrentUser({ name: '陳大文', role: 'Member' });
      if (activeTab === 'members') setActiveTab('overview');
    } else {
      setCurrentUser({ name: '王大明', role: 'Admin' });
    }
  };

  const myLineDataArray = "12,19,3,5,2,3,12".split(',').map(Number);
  const myBarDataArray = "200,400,600,800,1000,1248".split(',').map(Number);

  const lineData = {
    labels: ['週一', '週二', '週三', '週四', '週五', '週六', '週日'],
    datasets: [{ label: '今日新增會員', data: myLineDataArray, borderColor: '#10b981', backgroundColor: 'rgba(16, 185, 129, 0.1)', tension: 0.4, fill: true, pointBackgroundColor: '#10b981' }]
  };

  const barData = {
    labels: ['1月', '2月', '3月', '4月', '5月', '6月'],
    datasets: [{ label: '總會員人數累積', data: myBarDataArray, backgroundColor: '#4f46e5', borderRadius: 6 }]
  };

  const chartOptions = { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { x: { grid: { display: false } }, y: { grid: { color: '#f1f5f9' } } } };

  const members = [
    { id: 'M001', name: '王大明', email: 'daming@example.com', date: '2026-07-01', role: '超級管理員', status: '🟢 啟用中' },
    { id: 'M002', name: '陳大文', email: 'dawen@example.com', date: '2026-07-03', role: '一般會員', status: '🟢 啟用中' },
    { id: 'M003', name: '林小薰', email: 'xiaoxun@example.com', date: '2026-07-04', role: '一般會員', status: '🟢 啟用中' },
    { id: 'M004', name: '黃大成', email: 'dacheng@example.com', date: '2026-07-04', role: '一般會員', status: '🔴 停權中' }
  ];

  const containerStyle = { display: 'flex', flexDirection: isMobile ? 'column' : 'row', width: '100%', maxWidth: '1100px', minHeight: isMobile ? 'auto' : '680px', backgroundColor: '#ffffff', borderRadius: isMobile ? '16px' : '24px', boxShadow: '0 20px 40px -15px rgba(15, 23, 42, 0.08), 0 0 0 1px rgba(15, 23, 42, 0.02)', overflow: 'hidden', border: '1px solid #e2e8f0' };
  const sidebarStyle = { width: isMobile ? '100%' : '240px', backgroundColor: '#ffffff', borderRight: isMobile ? 'none' : '1px solid #f1f5f9', borderBottom: isMobile ? '1px solid #f1f5f9' : 'none', padding: isMobile ? '20px' : '40px 24px', display: 'flex', flexDirection: isMobile ? 'row' : 'column', flexWrap: isMobile ? 'wrap' : 'nowrap', gap: '6px', boxSizing: 'border-box' };
  const sidebarItemStyle = (tabName) => ({ padding: '12px 20px', color: activeTab === tabName ? '#4f46e5' : '#64748b', backgroundColor: activeTab === tabName ? '#f5f3ff' : 'transparent', borderRadius: '12px', textDecoration: 'none', fontSize: '14px', fontWeight: '600', transition: 'all 0.2s ease', whiteSpace: 'nowrap', cursor: 'pointer', width: isMobile ? 'auto' : '100%', boxSizing: 'border-box' });
  const contentStyle = { flex: 1, padding: isMobile ? '24px 20px' : '40px', backgroundColor: '#f8fafc', textAlign: 'left', display: 'flex', flexDirection: 'column', boxSizing: 'border-box', gap: '24px' };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', width: '100%' }}>
      <button onClick={toggleTestUser} style={{ padding: '8px 16px', fontSize: '13px', fontWeight: '700', backgroundColor: '#334155', color: '#ffffff', border: 'none', borderRadius: '8px', cursor: 'pointer', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
        🔄 切換測試身份 (目前：{currentUser.name} - {currentUser.role === 'Admin' ? '超級管理員' : '一般會員'})
      </button>

      <div style={containerStyle}>
        <div style={sidebarStyle}>
          <div style={sidebarItemStyle('overview')} onClick={() => setActiveTab('overview')}>📊 系統總覽</div>
          {currentUser.role === 'Admin' && (
            <div style={sidebarItemStyle('members')} onClick={() => setActiveTab('members')}>👥 會員分析</div>
          )}
          <div style={sidebarItemStyle('coaches')} onClick={() => setActiveTab('coaches')}>🏋️ 教練名單</div>
          <div style={sidebarItemStyle('plans')} onClick={() => setActiveTab('plans')}>💎 方案設定</div>
          
          {/* 🌟 2. 側邊欄增加「📦 商品管理」分頁選單按鈕 */}
          <div style={sidebarItemStyle('products')} onClick={() => setActiveTab('plans' === 'products' ? 'overview' : 'products')}>📦 商品管理</div>
          
          <div style={sidebarItemStyle('settings')} onClick={() => setActiveTab('settings')}>👤 帳戶設定</div>
          <div style={sidebarItemStyle('security')} onClick={() => setActiveTab('security')}>🔒 安全權限</div>
          <div style={{ marginLeft: isMobile ? 'auto' : '0', marginTop: isMobile ? '0' : 'auto', borderTop: isMobile ? 'none' : '#f1f5f9 1px solid', paddingTop: isMobile ? '0' : '20px', width: isMobile ? '100%' : 'auto' }}>
            <div style={{ padding: '12px 20px', color: '#ef4444', cursor: 'pointer', fontSize: '14px', fontWeight: '600' }} onClick={handleLogout}>🚪 安全登出</div>
          </div>
        </div>

        <div style={contentStyle}>
          <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
            {activeTab === 'overview' && <OverviewTab userName={currentUser.name} />}
            {activeTab === 'members' && currentUser.role === 'Admin' && <MemberTab barData={barData} lineData={lineData} chartOptions={chartOptions} members={members} isMobile={isMobile} />}
            {activeTab === 'coaches' && <CoachTab isMobile={isMobile} />}
            {activeTab === 'plans' && <PlanTab isMobile={isMobile} />}
            {activeTab === 'products' && <ProductTab isMobile={isMobile} />}
            {activeTab === 'settings' && <SettingsTab isMobile={isMobile} setActiveTab={setActiveTab} />}
            {activeTab === 'security' && <SecurityTab />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index
