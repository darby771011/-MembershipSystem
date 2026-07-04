import React from 'react'

function SettingsTab({ isMobile, setActiveTab }) {
  const cardStyle = {
    backgroundColor: '#ffffff',
    padding: '24px',
    borderRadius: '16px',
    border: '1px solid #e2e8f0',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.01)'
  };

  const inputStyle = {
    width: '100%',
    padding: '10px 14px',
    fontSize: '14px',
    border: '1px solid #cbd5e1',
    borderRadius: '8px',
    outline: 'none',
    backgroundColor: '#f8fafc',
    boxSizing: 'border-box',
    fontFamily: 'inherit'
  };

  return (
    <>
      <div>
        <h2 style={{ fontSize: '24px', fontWeight: '800', color: '#0f172a', margin: '0 0 6px 0' }}>👤 帳戶設定</h2>
        <p style={{ color: '#94a3b8', margin: 0, fontSize: '14px', fontWeight: '500' }}>更新您的公開基本資料、聯絡資訊與系統群組角色偏好設定。</p>
      </div>

      <div style={cardStyle}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', borderBottom: '1px solid #f1f5f9', paddingBottom: '24px', marginBottom: '24px' }}>
          <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: '#4f46e5', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px', fontWeight: 'bold', boxShadow: '0 4px 10px rgba(79, 70, 229, 0.2)' }}>W</div>
          <div>
            <h4 style={{ margin: '0 0 6px 0', fontSize: '15px', fontWeight: '700', color: '#0f172a' }}>變更個人大頭貼</h4>
            <p style={{ margin: '0 0 10px 0', fontSize: '12px', color: '#94a3b8' }}>支援 JPG, PNG 格式，檔案大小不超過 2MB。</p>
            <button type="button" style={{ padding: '6px 14px', fontSize: '12px', fontWeight: '600', backgroundColor: '#f1f5f9', color: '#334155', border: '1px solid #cbd5e1', borderRadius: '6px', cursor: 'pointer' }} onClick={() => alert('觸發本地檔案選取')}>上傳新照片</button>
          </div>
        </div>

        <form onSubmit={(e) => { e.preventDefault(); alert('設定已成功儲存！'); }}>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#64748b', marginBottom: '6px' }}>登入帳號 (無法修改)</label>
              <input type="text" value="wangdaming" disabled style={{ ...inputStyle, backgroundColor: '#f1f5f9', color: '#94a3b8', cursor: 'not-allowed' }} />
            </div>

            {/* 🌟 全新核心區塊：系統群組角色下拉選單 */}
            <div>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#64748b', marginBottom: '6px' }}>系統群組角色</label>
              <select style={inputStyle} defaultValue="Admin">
                <option value="Admin">超級管理員 (Admin)</option>
                <option value="Coach">場館教練 (Coach)</option>
                <option value="Member">一般註冊會員 (Member)</option>
              </select>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#64748b', marginBottom: '6px' }}>真實姓名</label>
              <input type="text" placeholder="請輸入姓名" defaultValue="王大明" style={inputStyle} />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#64748b', marginBottom: '6px' }}>電子信箱</label>
              <input type="email" defaultValue="daming@example.com" style={inputStyle} />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#64748b', marginBottom: '6px' }}>聯絡電話</label>
              <input type="text" placeholder="0912-345-678" style={inputStyle} />
            </div>
          </div>

          <div style={{ display: 'flex', gap: '12px', justifyContent: 'end', marginTop: '32px', borderTop: '1px solid #f1f5f9', paddingTop: '20px' }}>
            <button type="button" style={{ padding: '10px 20px', fontSize: '14px', fontWeight: '600', backgroundColor: '#ffffff', color: '#64748b', border: '1px solid #cbd5e1', borderRadius: '8px', cursor: 'pointer' }} onClick={() => setActiveTab('overview')}>取消</button>
            <button type="submit" style={{ padding: '10px 24px', fontSize: '14px', fontWeight: '600', backgroundColor: '#4f46e5', color: '#ffffff', border: 'none', borderRadius: '8px', cursor: 'pointer', boxShadow: '0 4px 6px -1px rgba(79, 70, 229, 0.2)' }}>儲存修改</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default SettingsTab
