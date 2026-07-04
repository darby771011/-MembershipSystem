import React from 'react'

function CoachCalendar({ coach, onBack }) {
  const cardStyle = { backgroundColor: '#ffffff', padding: '28px', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.01)', boxSizing: 'border-box' };
  
  const timeSlots = ["09:00 - 10:00", "10:30 - 11:30", "13:30 - 14:30", "15:00 - 16:00", "18:30 - 19:30"];
  const weekDays = ["週一", "週二", "週三", "週四", "週五", "週六", "週日"];

  const getStatusBadge = (status) => ({
    padding: '6px 12px',
    borderRadius: '8px',
    fontSize: '12px',
    fontWeight: '700',
    display: 'inline-block',
    whiteSpace: 'nowrap',
    backgroundColor: status === 'available' ? '#d1fae5' : status === 'booked' ? '#fee2e2' : '#f1f5f9',
    color: status === 'available' ? '#047857' : status === 'booked' ? '#b91c1c' : '#475569',
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100%' }}>
      
      {/* 頂部導覽列 */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <button onClick={onBack} style={{ padding: '8px 16px', fontSize: '13px', fontWeight: '600', backgroundColor: '#ffffff', color: '#64748b', border: '1px solid #cbd5e1', borderRadius: '8px', cursor: 'pointer', transition: 'all 0.2s' }}>
          ⬅️ 返回教練名單
        </button>
        <h2 style={{ fontSize: '22px', fontWeight: '800', color: '#0f172a', margin: '0' }}>教練詳細檔案管理</h2>
      </div>

      {/* 上半層：橫向教練名片 Banner (空間極度寬敞) */}
      <div style={{ ...cardStyle, display: 'flex', flexWrap: 'wrap', gap: '32px', alignItems: 'center' }}>
        <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: '#4f46e5', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px', fontWeight: 'bold', flexShrink: 0, boxShadow: '0 4px 12px rgba(79, 70, 229, 0.15)' }}>
          {coach.name.charAt(0)}
        </div>
        
        <div style={{ flex: 1, minWidth: '250px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
            <h3 style={{ margin: 0, fontSize: '20px', fontWeight: '800', color: '#0f172a' }}>{coach.name}</h3>
            <span style={{ fontSize: '12px', fontWeight: '700', color: '#4f46e5', backgroundColor: '#f5f3ff', padding: '4px 10px', borderRadius: '12px' }}>{coach.id}</span>
            <span style={{ fontSize: '12px', fontWeight: '700', color: '#10b981', backgroundColor: '#e0f2fe', padding: '4px 10px', borderRadius: '12px' }}>{coach.status}</span>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', fontSize: '14px', color: '#475569' }}>
            <div><strong style={{ color: '#64748b' }}>資歷：</strong>{coach.experience}</div>
            <div><strong style={{ color: '#64748b' }}>國際認證：</strong><span style={{ color: '#4f46e5', fontWeight: '600' }}>{coach.license}</span></div>
          </div>
          <div style={{ marginTop: '10px', fontSize: '14px', color: '#64748b' }}>
            <strong style={{ color: '#64748b' }}>擅長專長：</strong>{coach.expertise}
          </div>
        </div>
      </div>

      {/* 下半層：獨立、100% 寬度的完整行事曆課表 (徹底解決壓縮問題) */}
      <div style={cardStyle}>
        <h4 style={{ margin: '0 0 ' + (window.innerWidth < 768 ? '16px' : '24px') + ' 0', fontSize: '16px', fontWeight: '700', color: '#0f172a' }}>📅 本週授課預約行程表</h4>
        <div style={{ overflowX: 'auto', margin: '0 -4px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px', textAlign: 'center', minWidth: '800px' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #edeff2', color: '#64748b', fontWeight: '600' }}>
                <th style={{ padding: '14px 12px', textAlign: 'left', width: '130px' }}>時段時間</th>
                {weekDays.map(day => <th key={day} style={{ padding: '14px 12px' }}>{day}</th>)}
              </tr>
            </thead>
            <tbody>
              {timeSlots.map((slot, index) => (
                <tr key={slot} style={{ borderBottom: '1px solid #f1f5f9', color: '#334155' }}>
                  <td style={{ padding: '18px 12px', textAlign: 'left', fontWeight: '700', color: '#64748b', backgroundColor: '#f8fafc' }}>{slot}</td>
                  <td style={{ padding: '14px 8px' }}><span style={getStatusBadge(index % 2 === 0 ? 'booked' : 'available')}>{index % 2 === 0 ? '🔒 已約' : '🟢 可約'}</span></td>
                  <td style={{ padding: '14px 8px' }}><span style={getStatusBadge('available')}>🟢 可約</span></td>
                  <td style={{ padding: '14px 8px' }}><span style={getStatusBadge(index === 1 ? 'booked' : 'available')}>{index === 1 ? '🔒 已約' : '🟢 可約'}</span></td>
                  <td style={{ padding: '14px 8px' }}><span style={getStatusBadge('off')}>⚪ 休息</span></td>
                  <td style={{ padding: '14px 8px' }}><span style={getStatusBadge(index > 2 ? 'booked' : 'available')}>{index > 2 ? '🔒 已約' : '🟢 可約'}</span></td>
                  <td style={{ padding: '14px 8px' }}><span style={getStatusBadge('available')}>🟢 可約</span></td>
                  <td style={{ padding: '14px 8px' }}><span style={getStatusBadge('off')}>⚪ 休息</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  )
}

export default CoachCalendar
