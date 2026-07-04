import React from 'react'

function SecurityTab() {
  const cardStyle = {
    backgroundColor: '#ffffff',
    padding: '24px',
    borderRadius: '16px',
    border: '1px solid #e2e8f0',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.01)',
    boxSizing: 'border-box'
  };

  const tableHeaderStyle = { padding: '12px 8px', borderBottom: '2px solid #edeff2', textAlign: 'left', color: '#64748b', fontSize: '13px', fontWeight: '600' };
  const tableDataStyle = { padding: '14px 8px', borderBottom: '1px solid #f1f5f9', fontSize: '14px', color: '#334155' };

  const permissionBadge = (allowed) => ({
    padding: '4px 10px',
    borderRadius: '8px',
    fontSize: '12px',
    fontWeight: '700',
    backgroundColor: allowed ? '#d1fae5' : '#fee2e2',
    color: allowed ? '#047857' : '#b91c1c'
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '100%' }}>
      <div>
        <h2 style={{ fontSize: '24px', fontWeight: '800', color: '#0f172a', margin: '0 0 6px 0' }}>🔒 安全權限設定</h2>
        <p style={{ color: '#94a3b8', margin: 0, fontSize: '14px', fontWeight: '500' }}>配置各個使用者群組的角色功能存取權限 (RBAC 安全防禦機制)。</p>
      </div>

      <div style={cardStyle}>
        <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#0f172a', margin: '0 0 16px 0' }}>⚙️ 頁面存取權限矩陣</h3>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th style={tableHeaderStyle}>系統群組角色</th>
                <th style={tableHeaderStyle}>📊 系統總覽</th>
                <th style={tableHeaderStyle}>🏋️ 教練名單</th>
                <th style={tableHeaderStyle}>👥 會員分析</th>
                <th style={tableHeaderStyle}>🔒 安全設定</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ ...tableDataStyle, fontWeight: '700', color: '#4f46e5' }}>超級管理員 (Admin)</td>
                <td style={tableDataStyle}><span style={permissionBadge(true)}>🟢 允許</span></td>
                <td style={tableDataStyle}><span style={permissionBadge(true)}>🟢 允許</span></td>
                <td style={tableDataStyle}><span style={permissionBadge(true)}>🟢 允許</span></td>
                <td style={tableDataStyle}><span style={permissionBadge(true)}>🟢 允許</span></td>
              </tr>
              <tr>
                <td style={{ ...tableDataStyle, fontWeight: '700', color: '#64748b' }}>一般註冊會員 (Member)</td>
                <td style={tableDataStyle}><span style={permissionBadge(true)}>🟢 允許</span></td>
                <td style={tableDataStyle}><span style={permissionBadge(true)}>🟢 允許</span></td>
                <td style={tableDataStyle}><span style={permissionBadge(false)}>❌ 封鎖</span></td>
                <td style={tableDataStyle}><span style={permissionBadge(false)}>❌ 封鎖</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default SecurityTab
