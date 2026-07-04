import React from 'react'
import { Line, Bar } from 'react-chartjs-2'

function MemberTab({ barData, lineData, chartOptions, members, isMobile }) {
  const cardStyle = {
    backgroundColor: '#ffffff',
    padding: '24px',
    borderRadius: '16px',
    border: '1px solid #e2e8f0',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.01)',
    boxSizing: 'border-box'
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '100%' }}>
      <div>
        <h2 style={{ fontSize: '24px', fontWeight: '800', color: '#0f172a', margin: '0 0 6px 0' }}>👥 会員數據分析</h2>
        <p style={{ color: '#94a3b8', margin: 0, fontSize: '14px' }}>檢視完整會員人數增長趨勢、每日新增狀態與詳細會員資料明細。</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '20px' }}>
        <div style={cardStyle}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
            <span style={{ fontSize: '14px', fontWeight: '600', color: '#64748b' }}>總會員人數趨勢</span>
            <span style={{ fontSize: '20px', fontWeight: '700', color: '#0f172a', marginLeft: 'auto' }}>1,248 人</span>
          </div>
          <div style={{ height: '160px' }}><Bar data={barData} options={chartOptions} /></div>
        </div>

        <div style={cardStyle}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
            <span style={{ fontSize: '14px', fontWeight: '600', color: '#64748b' }}>今日新增會員曲線</span>
            <span style={{ fontSize: '20px', fontWeight: '700', color: '#10b981', marginLeft: 'auto' }}>+ 12 人</span>
          </div>
          <div style={{ height: '160px' }}><Line data={lineData} options={chartOptions} /></div>
        </div>
      </div>

      <div style={cardStyle}>
        <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#0f172a', margin: '0 0 20px 0' }}>📋 會員明細</h3>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #edeff2', textAlign: 'left', color: '#64748b' }}>
                <th style={{ padding: '12px 8px' }}>會員編號</th>
                <th style={{ padding: '12px 8px' }}>使用者名稱</th>
                <th style={{ padding: '12px 8px' }}>電子信箱</th>
                <th style={{ padding: '12px 8px' }}>註冊日期</th>
                <th style={{ padding: '12px 8px' }}>狀態</th>
              </tr>
            </thead>
            <tbody>
              {members.map((member) => (
                <tr key={member.id} style={{ borderBottom: '1px solid #f1f5f9', color: '#334155' }}>
                  <td style={{ padding: '14px 8px', fontWeight: '600' }}>{member.id}</td>
                  <td style={{ padding: '14px 8px', fontWeight: '500' }}>{member.name}</td>
                  <td style={{ padding: '14px 8px' }}>{member.email}</td>
                  <td style={{ padding: '14px 8px', color: '#64748b' }}>{member.date}</td>
                  <td style={{ padding: '14px 8px' }}>{member.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default MemberTab
