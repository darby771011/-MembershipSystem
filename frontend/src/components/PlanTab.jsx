import React from 'react'

function PlanTab({ isMobile }) {
  const gridContainerStyle = {
    display: 'grid',
    gridTemplateColumns: window.innerWidth < 640 ? '1fr' : window.innerWidth < 1024 ? '1fr 1fr' : 'repeat(3, 1fr)',
    gap: '20px',
    width: '100%',
    boxSizing: 'border-box'
  };

  const planCardStyle = (isPopular) => ({
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    border: isPopular ? '2px solid #4f46e5' : '1px solid #e2e8f0',
    padding: '28px 24px',
    boxShadow: isPopular ? '0 10px 25px -5px rgba(79, 70, 229, 0.1)' : '0 4px 6px -1px rgba(0, 0, 0, 0.01)',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    position: 'relative',
    boxSizing: 'border-box'
  });

  const popularBadgeStyle = {
    position: 'absolute',
    top: '-12px',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: '#4f46e5',
    color: '#ffffff',
    padding: '4px 12px',
    borderRadius: '12px',
    fontSize: '11px',
    fontWeight: '700',
    letterSpacing: '0.5px'
  };

  const featureItemStyle = {
    fontSize: '13px',
    color: '#475569',
    marginBottom: '8px',
    textAlign: 'left',
    display: 'flex',
    alignItems: 'center',
    gap: '6px'
  };

  const plans = [
    { id: 'P01', name: '體驗新星方案', price: '1,500', duration: '單次購買', sessions: '3 堂課', desc: '適合初次入館、想體驗教練風格與場館環境的新學員。', features: ['核心體能完整檢測 1 次', '1對1 專屬客製化教學', '信箱預約行程提醒功能'], popular: false },
    { id: 'P02', name: '高效雕塑會籍', price: '12,000', duration: '使用期限 90 天', sessions: '12 堂課', desc: '館內最熱銷的經典主力方案，適合每週規律維持健身習慣的你。', features: ['國際認證教練自由任選', '享週一至週日自主訓練免入場費', '數位大頭貼與個人資料修改'], popular: true },
    { id: 'P03', name: '尊榮超級總監', price: '28,800', duration: '使用期限 180 天', sessions: '30 堂課', desc: '專為追求極致體態表現、需要長期系統化專業追蹤的學員量身打造。', features: ['場館總監級別教練全程授課', '專屬課表行事曆彈性自由排課', '頂級獨立 VIP 淋浴盥洗室使用權'], popular: false }
  ];

  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h2 style={{ fontSize: '24px', fontWeight: '800', color: '#0f172a', margin: '0 0 6px 0', letterSpacing: '-0.5px' }}>💎 儲存方案與票券</h2>
        <p style={{ color: '#94a3b8', margin: 0, fontSize: '14px', fontWeight: '500' }}>配置與管理目前場館內上架的會員儲值方案、購買堂數、定價與對應的專屬權限。</p>
      </div>

      <div style={gridContainerStyle}>
        {plans.map((plan) => (
          <div key={plan.id} style={planCardStyle(plan.popular)}>
            {plan.popular && <div style={popularBadgeStyle}>🔥 本月熱銷推薦</div>}
            
            <div style={{ fontSize: '12px', fontWeight: '700', color: '#64748b', marginBottom: '4px' }}>{plan.id} | {plan.duration}</div>
            <h3 style={{ margin: '0 0 12px 0', fontSize: '18px', fontWeight: '800', color: '#0f172a' }}>{plan.name}</h3>
            
            <div style={{ margin: '8px 0 16px 0', borderBottom: '1px solid #f1f5f9', paddingBottom: '16px' }}>
              <span style={{ fontSize: '32px', fontWeight: '800', color: plan.popular ? '#4f46e5' : '#0f172a' }}>NT$ {plan.price}</span>
              <span style={{ fontSize: '13px', color: '#94a3b8', marginLeft: '4px' }}>/ 共 {plan.sessions}</span>
            </div>

            <p style={{ fontSize: '13px', color: '#64748b', lineHeight: '1.5', margin: '0 0 20px 0', textAlign: 'left', minHeight: '58px' }}>{plan.desc}</p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginBottom: '24px' }}>
              {plan.features.map((feat, idx) => (
                <div key={idx} style={featureItemStyle}>
                  <span style={{ color: '#10b981', fontWeight: 'bold' }}>✓</span> {feat}
                </div>
              ))}
            </div>

            <button 
              type="button" 
              style={{
                width: '100%', padding: '11px', marginTop: 'auto',
                backgroundColor: plan.popular ? '#4f46e5' : '#ffffff',
                color: plan.popular ? '#ffffff' : '#475569',
                border: plan.popular ? 'none' : '1px solid #cbd5e1',
                borderRadius: '10px', fontSize: '13px', fontWeight: '700', cursor: 'pointer',
                boxShadow: plan.popular ? '0 4px 12px rgba(79, 70, 229, 0.2)' : 'none'
              }}
              onClick={() => alert(`已模擬選擇「${plan.name}」方案！`)}
            >
              配置此方案
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PlanTab
