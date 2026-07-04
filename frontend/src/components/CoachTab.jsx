import React, { useState } from 'react'
import CoachCalendar from './CoachCalendar'

function CoachTab({ isMobile }) {
  const [selectedCoach, setSelectedCoach] = useState(null);

  const gridContainerStyle = {
    display: 'grid',
    gridTemplateColumns: window.innerWidth < 640 ? '1fr' : window.innerWidth < 1024 ? '1fr 1fr' : 'repeat(3, 1fr)',
    gap: '20px',
    width: '100%',
    boxSizing: 'border-box'
  };

  const coachCardStyle = {
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    border: '1px solid #e2e8f0',
    padding: '24px',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.01), 0 2px 4px -1px rgba(0, 0, 0, 0.01)',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
    transition: 'all 0.2s ease',
    boxSizing: 'border-box'
  };

  const badgeStyle = (type) => ({
    display: 'inline-block',
    padding: '4px 10px',
    borderRadius: '8px',
    fontSize: '12px',
    fontWeight: '700',
    backgroundColor: type === 'C001' ? '#e0f2fe' : type === 'C002' ? '#fdf2f8' : '#fef3c7',
    color: type === 'C001' ? '#0369a1' : type === 'C002' ? '#9d174d' : '#b45309',
    marginBottom: '12px'
  });

  const buttonStyle = {
    width: '100%',
    padding: '10px',
    marginTop: 'auto',
    backgroundColor: '#4f46e5',
    color: '#ffffff',
    border: 'none',
    borderRadius: '10px',
    fontSize: '13px',
    fontWeight: '700',
    cursor: 'pointer',
    textAlign: 'center',
    boxShadow: '0 4px 6px -1px rgba(79, 70, 229, 0.15)',
    transition: 'background-color 0.2s'
  };

  const coaches = [
    { id: 'C001', name: '王大同 (David)', expertise: '重量訓練、增肌減脂、體態雕塑', license: 'NSCA-CPT / NASM-PES', experience: '5 年', status: '🟢 在職中' },
    { id: 'C002', name: '李美玲 (Emma)', expertise: '皮拉提斯、核心有氧、產後恢復', license: 'STOTT PILATES / ACE-CPT', experience: '7 年', status: '🟢 在職中' },
    { id: 'C003', name: '張小豪 (Kevin)', expertise: '運動表現提升、功能性訓練、拳擊', license: 'IKFF / KAT 動作科學', experience: '4 年', status: '黃 休假中' }
  ];

  if (selectedCoach) {
    return <CoachCalendar coach={selectedCoach} onBack={() => setSelectedCoach(null)} />;
  }

  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h2 style={{ fontSize: '24px', fontWeight: '800', color: '#0f172a', margin: '0 0 6px 0', letterSpacing: '-0.5px' }}>🏋️ 教練團隊管理</h2>
        <p style={{ color: '#94a3b8', margin: 0, fontSize: '14px', fontWeight: '500' }}>檢視目前線上的駐場教練、專業證照與排班狀態。點擊卡片按鈕可查看課表。</p>
      </div>

      {/* 🌟 響應式卡片網格 */}
      <div style={gridContainerStyle}>
        {coaches.map((coach) => (
          <div key={coach.id} style={coachCardStyle}>
            {/* 上半部：頭像與姓名基本資料 */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: '#f5f3ff', color: '#4f46e5', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', fontWeight: 'bold' }}>
                {coach.name.charAt(0)}
              </div>
              <div>
                <div style={{ fontSize: '16px', fontWeight: '700', color: '#0f172a' }}>{coach.name}</div>
                <div style={{ fontSize: '12px', color: '#94a3b8', marginTop: '2px' }}>資歷：{coach.experience} | {coach.status}</div>
              </div>
            </div>

            {/* 中半部：證照與專長細節 */}
            <div style={{ marginBottom: '20px', fontSize: '13px', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '8px' }}>
                <span style={badgeStyle(coach.id)}>{coach.license}</span>
              </div>
              <div style={{ color: '#475569' }}>
                <strong style={{ color: '#64748b' }}>核心專長：</strong>{coach.expertise}
              </div>
            </div>

            {/* 下半部：一鍵查看課表按鈕 */}
            <button 
              type="button" 
              style={buttonStyle}
              onClick={() => setSelectedCoach(coach)}
            >
              📅 查看專屬課表行事曆
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CoachTab
