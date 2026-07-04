import React, { useState } from 'react'

function OverviewTab({ userName }) {
  // 🌟 新增狀態：用來控制全場館大課表目前是展開 (true) 還是收起 (false)
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const cardStyle = {
    backgroundColor: '#ffffff',
    padding: '28px',
    borderRadius: '16px',
    border: '1px solid #e2e8f0',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.01)',
    boxSizing: 'border-box'
  };

  const bookingBadgeStyle = (status) => ({
    display: 'inline-block',
    padding: '4px 10px',
    borderRadius: '8px',
    fontSize: '12px',
    fontWeight: '700',
    backgroundColor: status === 'A' ? '#e0f2fe' : '#d1fae5',
    color: status === 'A' ? '#0369a1' : '#047857'
  });

  const calendarStatusStyle = (status) => ({
    padding: '6px 12px',
    borderRadius: '8px',
    fontSize: '12px',
    fontWeight: '700',
    display: 'inline-block',
    whiteSpace: 'nowrap',
    backgroundColor: status === 'busy' ? '#fee2e2' : status === 'available' ? '#d1fae5' : '#f1f5f9',
    color: status === 'busy' ? '#b91c1c' : status === 'available' ? '#047857' : '#475569'
  });

  const appointments = [
    { id: 'B01', time: '10:00 - 11:00', coach: '王大同 (David)', course: '1對1 私人重量訓練', type: 'A' },
    { id: 'B02', time: '13:30 - 14:30', coach: '李美玲 (Emma)', course: '核心皮拉提斯專班', type: 'B' },
    { id: 'B03', time: '19:00 - 20:00', coach: '張小豪 (Kevin)', course: '功能性拳擊有氧', type: 'A' }
  ];

  const timeSlots = [
    "09:00 - 11:00",
    "11:00 - 13:00",
    "14:00 - 16:00",
    "16:00 - 18:00",
    "19:00 - 21:00"
  ];

  const scheduleData = {
    "09:00 - 11:00": { david: "available", emma: "busy", kevin: "available" },
    "11:00 - 13:00": { david: "busy", emma: "available", kevin: "off" },
    "14:00 - 16:00": { david: "busy", emma: "busy", kevin: "available" },
    "16:00 - 18:00": { david: "off", emma: "available", kevin: "busy" },
    "19:00 - 21:00": { david: "busy", emma: "off", kevin: "busy" }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '100%' }}>
      <div>
        <h2 style={{ fontSize: '24px', fontWeight: '800', color: '#0f172a', margin: '0 0 6px 0', letterSpacing: '-0.5px' }}>歡迎回來，{userName} 👋</h2>
        <p style={{ color: '#94a3b8', margin: 0, fontSize: '14px', fontWeight: '500' }}>以下是系統目前的即時動態快訊、今日課程摘要與全場館行程總覽。</p>
      </div>

      {/* 今日事件摘要卡片 */}
      <div style={cardStyle}>
        <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#0f172a', margin: '0 0 16px 0' }}>📋 今日重要事件摘要</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {appointments.map((app) => (
            <div key={app.id} style={{ padding: '16px 20px', backgroundColor: '#f8fafc', borderRadius: '12px', border: '1px solid #f1f5f9', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px' }}>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '15px', fontWeight: '700', color: '#334155' }}>{app.course}</div>
                <div style={{ fontSize: '13px', color: '#94a3b8', marginTop: '4px' }}>時段：{app.time} | 授課教練：{app.coach}</div>
              </div>
              <div style={{ flexShrink: 0 }}>
                <span style={bookingBadgeStyle(app.type)}>
                  {app.type === 'A' ? '已扣堂' : '單堂約'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 全場館行程卡片（支援上下折疊） */}
      <div style={cardStyle}>
        {/* 頂部標題列與折疊按鈕 */}
        <div 
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', userSelect: 'none' }}
          onClick={() => setIsCalendarOpen(!isCalendarOpen)} // 🌟 點擊整排標題區塊都可以直接切換開關
        >
          <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#0f172a', margin: 0 }}>📅 全場館今日行程總覽</h3>
          <button 
            type="button" 
            style={{ padding: '6px 14px', fontSize: '13px', fontWeight: '700', backgroundColor: '#f1f5f9', color: '#475569', border: '1px solid #e2e8f0', borderRadius: '8px', cursor: 'pointer', transition: 'all 0.2s' }}
          >
            {isCalendarOpen ? '🔼 收起課表' : '🔽 展開課表'}
          </button>
        </div>

        {/* 🌟 核心折疊控制：當 isCalendarOpen 為 true 時才畫出表格，為 false 時自動隱藏（往上縮起來） */}
        {isCalendarOpen && (
          <div style={{ overflowX: 'auto', margin: '24px -4px 0 -4px' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px', textAlign: 'center', minWidth: '700px' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid #edeff2', color: '#64748b', fontWeight: '600' }}>
                  <th style={{ padding: '14px 12px', textAlign: 'left', width: '150px' }}>排班時段</th>
                  <th style={{ padding: '14px 12px' }}>王大同 (David)</th>
                  <th style={{ padding: '14px 12px' }}>李美玲 (Emma)</th>
                  <th style={{ padding: '14px 12px' }}>張小豪 (Kevin)</th>
                </tr>
              </thead>
              <tbody>
                {timeSlots.map((slot) => {
                  const row = scheduleData[slot];
                  return (
                    <tr key={slot} style={{ borderBottom: '1px solid #f1f5f9', color: '#334155' }}>
                      <td style={{ padding: '18px 12px', textAlign: 'left', fontWeight: '700', color: '#64748b', backgroundColor: '#f8fafc' }}>{slot}</td>
                      <td style={{ padding: '14px 8px' }}>
                        <span style={calendarStatusStyle(row.david)}>
                          {row.david === 'busy' ? '🔒 團課/私教中' : row.david === 'available' ? '🟢 現場可約' : '⚪ 休息不排班'}
                        </span>
                      </td>
                      <td style={{ padding: '14px 8px' }}>
                        <span style={calendarStatusStyle(row.emma)}>
                          {row.emma === 'busy' ? '🔒 團課/私教中' : row.emma === 'available' ? '🟢 現場可約' : '⚪ 休息不排班'}
                        </span>
                      </td>
                      <td style={{ padding: '14px 8px' }}>
                        <span style={calendarStatusStyle(row.kevin)}>
                          {row.kevin === 'busy' ? '🔒 團課/私教中' : row.kevin === 'available' ? '🟢 現場可約' : '⚪ 休息不排班'}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}

export default OverviewTab
