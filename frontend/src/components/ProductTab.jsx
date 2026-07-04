import React from 'react'

function ProductTab({ isMobile }) {
  const gridContainerStyle = {
    display: 'grid',
    gridTemplateColumns: window.innerWidth < 640 ? '1fr' : window.innerWidth < 1024 ? '1fr 1fr' : 'repeat(3, 1fr)',
    gap: '20px',
    width: '100%',
    boxSizing: 'border-box'
  };

  const productCardStyle = {
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    border: '1px solid #e2e8f0',
    padding: '24px',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.01), 0 2px 4px -1px rgba(0, 0, 0, 0.01)',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
    boxSizing: 'border-box'
  };

  const stockBadgeStyle = (stock) => ({
    display: 'inline-block',
    padding: '4px 10px',
    borderRadius: '8px',
    fontSize: '12px',
    fontWeight: '700',
    backgroundColor: stock < 10 ? '#fee2e2' : '#d1fae5',
    color: stock < 10 ? '#b91c1c' : '#047857',
    marginTop: '6px'
  });

  const products = [
    { id: 'P001', name: '分離式乳清蛋白粉 (香草口味 / 1kg)', price: '1,280', stock: 45, category: '營養補給', sku: 'WHEY-VAN-01' },
    { id: 'P002', name: '不鏽鋼雙層保溫搖搖杯 (極致黑 / 750ml)', price: '650', stock: 8, category: '運動週邊', sku: 'SHAKER-BLK-02' },
    { id: 'P003', name: '專業級高密度純棉超吸水運動毛巾', price: '390', stock: 120, category: '場館週邊', sku: 'TOWEL-COT-03' }
  ];

  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h2 style={{ fontSize: '24px', fontWeight: '800', color: '#0f172a', margin: '0 0 6px 0', letterSpacing: '-0.5px' }}>📦 週邊商品與庫存</h2>
        <p style={{ color: '#94a3b8', margin: 0, fontSize: '14px', fontWeight: '500' }}>監控與配置場館內現有販售之週邊補給品，包含即時庫存水位追蹤、定價與商品編號條碼管理。</p>
      </div>

      <div style={gridContainerStyle}>
        {products.map((item) => (
          <div key={item.id} style={productCardStyle}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '8px', backgroundColor: '#f1f5f9', color: '#64748b', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', fontWeight: 'bold' }}>
                🛒
              </div>
              <div>
                <div style={{ fontSize: '12px', fontWeight: '700', color: '#94a3b8' }}>{item.sku}</div>
                <span style={{ fontSize: '11px', fontWeight: '700', color: '#4f46e5', backgroundColor: '#f5f3ff', padding: '2px 6px', borderRadius: '6px' }}>{item.category}</span>
              </div>
            </div>

            <h3 style={{ margin: '0 0 ' + (window.innerWidth < 768 ? '12px' : '16px') + ' 0', fontSize: '15px', fontWeight: '800', color: '#0f172a', minHeight: '44px', lineHeight: '1.4' }}>{item.name}</h3>
            
            <div style={{ marginBottom: '16px', borderTop: '1px solid #f1f5f9', paddingTop: '16px' }}>
              <div style={{ fontSize: '22px', fontWeight: '800', color: '#0f172a' }}>NT$ {item.price}</div>
              <span style={stockBadgeStyle(item.stock)}>
                {item.stock < 10 ? `⚠️ 庫存緊張：僅剩 ${item.stock} 件` : `🟢 庫存充沛：${item.stock} 件`}
              </span>
            </div>

            <button 
              type="button" 
              style={{
                width: '100%', padding: '10px', marginTop: 'auto',
                backgroundColor: item.stock < 10 ? '#ef4444' : '#ffffff',
                color: item.stock < 10 ? '#ffffff' : '#475569',
                border: item.stock < 10 ? 'none' : '1px solid #cbd5e1',
                borderRadius: '10px', fontSize: '13px', fontWeight: '700', cursor: 'pointer',
                boxShadow: item.stock < 10 ? '0 4px 12px rgba(239, 68, 68, 0.2)' : 'none'
              }}
              onClick={() => alert(`已觸發「${item.name}」的${item.stock < 10 ? '緊急補貨流程' : '盤點流程'}！`)}
            >
              {item.stock < 10 ? '🚨 發起緊急補貨' : '🔍 商品變更與盤點'}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductTab // 🌟 核心修正：正式補上預設導出標籤，大門開啟！
