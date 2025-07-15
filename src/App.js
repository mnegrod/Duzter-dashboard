import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

const DuzterDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const revenueData = [
    { year: '2023', revenue: 205417 },
    { year: '2024', revenue: 221017 },
    { year: '2025 YTD', revenue: 134170 },
    { year: '2025 Proj', revenue: 248000 }
  ];

  const aovData = [
    { year: '2023', aov: 134.85 },
    { year: '2024', aov: 185.26 },
    { year: '2025 YTD', aov: 296.72 }
  ];

  const marginData = [
    { product: 'Pro Youth Shirts', margin: 72 },
    { product: 'Pro Youth Pants', margin: 72 },
    { product: 'Pro Shirts', margin: 74 },
    { product: 'Pro Pants', margin: 75 },
    { product: 'Wall Pro Shirts', margin: 82 },
    { product: 'Wall Pro Pants', margin: 80 }
  ];

  const marketingAttributionData = [
    { channel: 'Google Search', sales: 59890 },
    { channel: 'Facebook Social', sales: 21307 },
    { channel: 'Instagram Social', sales: 6193 },
    { channel: 'Shopify Direct', sales: 3576 },
    { channel: 'Bing Search', sales: 2614 }
  ];

  const marketData = [
    { region: 'Global Market', value: 2.17, growth: '6.3%', description: 'Billion USD, 2024' },
    { region: 'North America', value: 1.31, growth: '6.0%', description: 'Billion USD, 63.3% share' },
    { region: 'Europe', value: 0.615, growth: '6.5%', description: 'Billion USD, 28% share' },
    { region: 'Protective Gear', value: 1.06, growth: '49%', description: 'Billion USD, of total market' }
  ];

  const debtData = [
    { 
      lender: 'LEDC Business Loan', 
      balance: 218124.66, 
      payment: 4838.35, 
      rate: '10.0%',
      type: 'Term Loan',
      maturity: '60 months'
    },
    { lender: 'Bank of America Card', balance: 26375.68, payment: 902.83, rate: 'Variable', type: 'Credit Card', maturity: 'Revolving' },
    { lender: 'American Express Card', balance: 16207.79, payment: 506.00, rate: '29.99%', type: 'Credit Card', maturity: 'Revolving' },
    { lender: 'Toyota Auto Loan', balance: 35318.56, payment: 687.30, rate: 'Auto Rate', type: 'Auto Loan', maturity: '12/01/2029' }
  ];

  const totalDebt = debtData.reduce((sum, debt) => sum + debt.balance, 0);
  const totalPayments = debtData.reduce((sum, debt) => sum + debt.payment, 0);

  const recurringCosts = [
    { category: 'Shopify Platform', service: 'Shopify Grow Plan', monthlyEquivalent: 79 },
    { category: 'Shopify Apps', service: 'Combidesk + ReturnGO + Buzzbassador', monthlyEquivalent: 170 },
    { category: 'Social Media', service: 'Manager + Meta Ads Manager', monthlyEquivalent: 1100 },
    { category: 'CRM & Sales', service: 'HubSpot', monthlyEquivalent: 100 },
    { category: 'Other Services', service: 'Miscellaneous Tools & Services', monthlyEquivalent: 250 },
    { category: 'Trade Shows', service: 'Expos & Trade Shows', monthlyEquivalent: 250 }
  ];

  const totalMonthlyCosts = recurringCosts.reduce((sum, cost) => sum + cost.monthlyEquivalent, 0);
  const totalAnnualCosts = totalMonthlyCosts * 12;
  const currentInventoryValue = 399242.49;

  const MetricCard = ({ title, value, change, color = "blue" }) => (
    <div style={{
      backgroundColor: 'white',
      padding: '1.5rem',
      borderRadius: '0.5rem',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      borderLeft: `4px solid ${color === 'blue' ? '#3b82f6' : color === 'green' ? '#10b981' : '#3b82f6'}`,
      transition: 'box-shadow 0.3s ease',
      margin: '0.5rem',
      minWidth: '200px'
    }}>
      <div style={{
        fontSize: '1.875rem',
        fontWeight: 'bold',
        marginBottom: '0.5rem',
        color: color === 'blue' ? '#2563eb' : color === 'green' ? '#059669' : '#2563eb'
      }}>
        {value}
      </div>
      <div style={{
        color: '#4b5563',
        fontSize: '0.875rem',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        fontWeight: '500'
      }}>
        {title}
      </div>
      {change && (
        <div style={{
          fontSize: '0.875rem',
          marginTop: '0.5rem',
          padding: '0.25rem 0.75rem',
          borderRadius: '9999px',
          display: 'inline-block',
          backgroundColor: change.includes('+') ? '#dcfce7' : '#dbeafe',
          color: change.includes('+') ? '#166534' : '#1e40af'
        }}>
          {change}
        </div>
      )}
    </div>
  );

  const TabButton = ({ id, label, active, onClick }) => (
    <button
      onClick={() => onClick(id)}
      style={{
        padding: '0.75rem 1.5rem',
        borderRadius: '0.5rem',
        fontWeight: '500',
        backgroundColor: active ? '#2563eb' : '#f3f4f6',
        color: active ? 'white' : '#4b5563',
        border: 'none',
        cursor: 'pointer',
        boxShadow: active ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none',
        margin: '0.25rem',
        transition: 'all 0.2s ease'
      }}
      onMouseEnter={(e) => {
        if (!active) {
          e.target.style.backgroundColor = '#e5e7eb';
        }
      }}
      onMouseLeave={(e) => {
        if (!active) {
          e.target.style.backgroundColor = '#f3f4f6';
        }
      }}
    >
      {label}
    </button>
  );

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f9fafb',
      padding: '1.5rem',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
    }}>
      {/* Header */}
      <div style={{
        background: 'linear-gradient(to right, #1e40af, #2563eb)',
        color: 'white',
        padding: '2rem',
        borderRadius: '0.75rem',
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        marginBottom: '2rem',
        textAlign: 'center'
      }}>
        <h1 style={{
          fontSize: '2.25rem',
          fontWeight: '300',
          marginBottom: '0.5rem',
          letterSpacing: '-0.025em',
          margin: '0 0 0.5rem 0'
        }}>
          Duzter Hockey
        </h1>
        <p style={{
          fontSize: '1.25rem',
          opacity: '0.9',
          margin: '0 0 0.5rem 0'
        }}>
          Sales Performance & Market Opportunity Dashboard
        </p>
        <p style={{
          fontSize: '1rem',
          opacity: '0.75',
          margin: '0'
        }}>
          2023-2025 Financial Results & Strategic Analysis
        </p>
      </div>

      {/* Navigation */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '1rem',
        marginBottom: '2rem',
        justifyContent: 'center'
      }}>
        <TabButton id="overview" label="Overview" active={activeTab === 'overview'} onClick={setActiveTab} />
        <TabButton id="performance" label="Performance" active={activeTab === 'performance'} onClick={setActiveTab} />
        <TabButton id="market" label="Market Analysis" active={activeTab === 'market'} onClick={setActiveTab} />
        <TabButton id="debt" label="Debt Structure" active={activeTab === 'debt'} onClick={setActiveTab} />
        <TabButton id="costs" label="Operating Costs" active={activeTab === 'costs'} onClick={setActiveTab} />
      </div>

      {/* Overview Tab */}
      {activeTab === 'overview' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div style={{
            backgroundColor: 'white',
            padding: '2rem',
            borderRadius: '0.75rem',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
            borderLeft: '4px solid #3b82f6'
          }}>
            <h2 style={{
              fontSize: '1.5rem',
              fontWeight: '600',
              color: '#1e40af',
              marginBottom: '1.5rem',
              margin: '0 0 1.5rem 0'
            }}>
              Executive Summary
            </h2>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              color: '#374151',
              lineHeight: '1.6'
            }}>
              <p style={{ margin: '0' }}><strong>Revenue Growth:</strong> Duzter Hockey generated $205,417 in 2023, growing to $221,017 in 2024 (+7.6%), with $134,170 achieved in the first 6.5 months of 2025, projecting to $248,000 for full-year 2025 (+12% growth).</p>
              <p style={{ margin: '0' }}><strong>Strategic Transformation:</strong> Average order value increased 120% from $134.85 (2023) to $296.72 (2025 YTD), reflecting successful product portfolio evolution from entry-level Armor to premium Pro and Wall collections with BNQ certification.</p>
              <p style={{ margin: '0' }}><strong>Premium Positioning Success:</strong> Unit economics demonstrate 72-82% gross margins across all product lines, with wholesale averaging $2,383 per order versus $297 retail AOV.</p>
            </div>
          </div>

          {/* Key Metrics */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1rem'
          }}>
            <MetricCard title="2025 Projected Revenue" value="$248K" change="+12% vs 2024" />
            <MetricCard title="AOV Growth (2-Year)" value="120%" change="$135 → $297" />
            <MetricCard title="B2B Revenue Share" value="30.5%" change="$2,383 Avg Order" />
            <MetricCard title="Average Gross Margin" value="75%" change="Premium Pricing" />
            <MetricCard title="Current Inventory Value" value="$399K" change="Stock on Hand" color="green" />
          </div>

          {/* Inventory Details */}
          <div style={{
            backgroundColor: 'white',
            padding: '2rem',
            borderRadius: '0.75rem',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
            borderLeft: '4px solid #10b981'
          }}>
            <h2 style={{
              fontSize: '1.5rem',
              fontWeight: '600',
              color: '#065f46',
              marginBottom: '1.5rem',
              margin: '0 0 1.5rem 0'
            }}>
              Current Inventory Position
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '1.5rem'
            }}>
              <div style={{
                background: 'linear-gradient(to bottom right, #dcfce7, #bbf7d0)',
                padding: '1.5rem',
                borderRadius: '0.5rem',
                border: '1px solid #10b981'
              }}>
                <div style={{
                  fontSize: '1.875rem',
                  fontWeight: 'bold',
                  color: '#059669',
                  marginBottom: '0.5rem'
                }}>
                  ${currentInventoryValue.toLocaleString()}
                </div>
                <div style={{
                  fontSize: '1.125rem',
                  fontWeight: '600',
                  color: '#065f46',
                  marginBottom: '0.5rem'
                }}>
                  Total Inventory Value
                </div>
                <div style={{
                  fontSize: '0.875rem',
                  color: '#4b5563'
                }}>
                  Current stock on hand across all product lines
                </div>
              </div>
              
              <div style={{
                background: 'linear-gradient(to bottom right, #dbeafe, #bfdbfe)',
                padding: '1.5rem',
                borderRadius: '0.5rem',
                border: '1px solid #3b82f6'
              }}>
                <div style={{
                  fontSize: '1.875rem',
                  fontWeight: 'bold',
                  color: '#2563eb',
                  marginBottom: '0.5rem'
                }}>
                  {((currentInventoryValue / 248000) * 100).toFixed(1)}%
                </div>
                <div style={{
                  fontSize: '1.125rem',
                  fontWeight: '600',
                  color: '#1e40af',
                  marginBottom: '0.5rem'
                }}>
                  Inventory to Revenue Ratio
                </div>
                <div style={{
                  fontSize: '0.875rem',
                  color: '#4b5563'
                }}>
                  Inventory value as % of projected 2025 revenue
                </div>
              </div>
              
              <div style={{
                background: 'linear-gradient(to bottom right, #f3e8ff, #e9d5ff)',
                padding: '1.5rem',
                borderRadius: '0.5rem',
                border: '1px solid #8b5cf6'
              }}>
                <div style={{
                  fontSize: '1.875rem',
                  fontWeight: 'bold',
                  color: '#7c3aed',
                  marginBottom: '0.5rem'
                }}>
                  {(currentInventoryValue / 296.72).toFixed(0)}
                </div>
                <div style={{
                  fontSize: '1.125rem',
                  fontWeight: '600',
                  color: '#6d28d9',
                  marginBottom: '0.5rem'
                }}>
                  Orders Equivalent
                </div>
                <div style={{
                  fontSize: '0.875rem',
                  color: '#4b5563'
                }}>
                  Potential orders at current AOV of $297
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Performance Tab */}
      {activeTab === 'performance' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: '1.5rem'
          }}>
            <div style={{
              backgroundColor: 'white',
              padding: '1.5rem',
              borderRadius: '0.75rem',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
            }}>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: '600',
                color: '#1e40af',
                marginBottom: '1rem',
                borderBottom: '1px solid #e5e7eb',
                paddingBottom: '0.5rem',
                margin: '0 0 1rem 0'
              }}>
                Revenue Growth Trajectory
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="year" />
                  <YAxis tickFormatter={(value) => `$${(value/1000).toFixed(0)}K`} />
                  <Tooltip formatter={(value) => [`$${value.toLocaleString()}`, 'Revenue']} />
                  <Area type="monotone" dataKey="revenue" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.2} strokeWidth={3} />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            <div style={{
              backgroundColor: 'white',
              padding: '1.5rem',
              borderRadius: '0.75rem',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
            }}>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: '600',
                color: '#1e40af',
                marginBottom: '1rem',
                borderBottom: '1px solid #e5e7eb',
                paddingBottom: '0.5rem',
                margin: '0 0 1rem 0'
              }}>
                Average Order Value Evolution
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={aovData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="year" />
                  <YAxis tickFormatter={(value) => `$${value}`} />
                  <Tooltip formatter={(value) => [`$${value.toFixed(2)}`, 'AOV']} />
                  <Bar dataKey="aov" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div style={{
              backgroundColor: 'white',
              padding: '1.5rem',
              borderRadius: '0.75rem',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
            }}>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: '600',
                color: '#1e40af',
                marginBottom: '1rem',
                borderBottom: '1px solid #e5e7eb',
                paddingBottom: '0.5rem',
                margin: '0 0 1rem 0'
              }}>
                Product Margins
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={marginData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="product" angle={-45} textAnchor="end" height={80} fontSize={12} />
                  <YAxis domain={[60, 85]} tickFormatter={(value) => `${value}%`} />
                  <Tooltip formatter={(value) => [`${value}%`, 'Gross Margin']} />
                  <Bar dataKey="margin" fill="#10b981" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div style={{
              backgroundColor: 'white',
              padding: '1.5rem',
              borderRadius: '0.75rem',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
            }}>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: '600',
                color: '#1e40af',
                marginBottom: '1rem',
                borderBottom: '1px solid #e5e7eb',
                paddingBottom: '0.5rem',
                margin: '0 0 1rem 0'
              }}>
                Marketing Attribution
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={marketingAttributionData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="channel" angle={-45} textAnchor="end" height={80} fontSize={12} />
                  <YAxis tickFormatter={(value) => `${(value/1000).toFixed(0)}K`} />
                  <Tooltip formatter={(value) => [`${value.toLocaleString()}`, 'Attributed Sales']} />
                  <Bar dataKey="sales" fill="#1d4ed8" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      )}

      {/* Market Analysis Tab */}
      {activeTab === 'market' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div style={{
            backgroundColor: 'white',
            padding: '2rem',
            borderRadius: '0.75rem',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
            borderLeft: '4px solid #3b82f6'
          }}>
            <h2 style={{
              fontSize: '1.5rem',
              fontWeight: '600',
              color: '#1e40af',
              marginBottom: '1.5rem',
              margin: '0 0 1.5rem 0'
            }}>
              Total Addressable Market
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1.5rem'
            }}>
              {marketData.map((market, index) => (
                <div key={index} style={{
                  background: 'linear-gradient(to bottom right, #dbeafe, #bfdbfe)',
                  padding: '1.5rem',
                  borderRadius: '0.5rem',
                  border: '1px solid #3b82f6'
                }}>
                  <div style={{
                    fontSize: '1.125rem',
                    fontWeight: '600',
                    color: '#1e40af',
                    marginBottom: '0.5rem'
                  }}>
                    {market.region}
                  </div>
                  <div style={{
                    fontSize: '1.875rem',
                    fontWeight: 'bold',
                    color: '#2563eb',
                    marginBottom: '0.5rem'
                  }}>
                    ${market.value}B
                  </div>
                  <div style={{
                    color: '#059669',
                    fontWeight: '500'
                  }}>
                    {market.growth} CAGR
                  </div>
                  <div style={{
                    fontSize: '0.875rem',
                    color: '#4b5563',
                    marginTop: '0.5rem'
                  }}>
                    {market.description}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{
            background: '#dbeafe',
            border: '1px solid #3b82f6',
            padding: '1.5rem',
            borderRadius: '0.75rem'
          }}>
            <h3 style={{
              fontWeight: '600',
              color: '#1e40af',
              marginBottom: '0.75rem',
              margin: '0 0 0.75rem 0'
            }}>
              Regulatory Tailwinds
            </h3>
            <p style={{
              color: '#374151',
              margin: '0'
            }}>
              In January 2024, USA Hockey mandated neck laceration protection for all age classifications during games and practices, creating mandatory demand for cut-resistant products.
            </p>
          </div>
        </div>
      )}

      {/* Debt Structure Tab */}
      {activeTab === 'debt' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.5rem'
          }}>
            <div style={{
              backgroundColor: 'white',
              padding: '1.5rem',
              borderRadius: '0.75rem',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
              borderLeft: '4px solid #ef4444'
            }}>
              <div style={{
                fontSize: '1.875rem',
                fontWeight: 'bold',
                color: '#dc2626',
                marginBottom: '0.5rem'
              }}>
                ${totalDebt.toLocaleString()}
              </div>
              <div style={{
                color: '#4b5563',
                fontSize: '0.875rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                fontWeight: '500'
              }}>
                Total Debt Outstanding
              </div>
            </div>
            
            <div style={{
              backgroundColor: 'white',
              padding: '1.5rem',
              borderRadius: '0.75rem',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
              borderLeft: '4px solid #f97316'
            }}>
              <div style={{
                fontSize: '1.875rem',
                fontWeight: 'bold',
                color: '#ea580c',
                marginBottom: '0.5rem'
              }}>
                ${totalPayments.toLocaleString()}
              </div>
              <div style={{
                color: '#4b5563',
                fontSize: '0.875rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                fontWeight: '500'
              }}>
                Monthly Debt Service
              </div>
            </div>
            
            <div style={{
              backgroundColor: 'white',
              padding: '1.5rem',
              borderRadius: '0.75rem',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
              borderLeft: '4px solid #10b981'
            }}>
              <div style={{
                fontSize: '1.875rem',
                fontWeight: 'bold',
                color: '#059669',
                marginBottom: '0.5rem'
              }}>
                {((totalPayments * 12 / 248000) * 100).toFixed(1)}%
              </div>
              <div style={{
                color: '#4b5563',
                fontSize: '0.875rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                fontWeight: '500'
              }}>
                Debt Service Ratio
              </div>
            </div>
          </div>

          {/* Debt Structure Table */}
          <div style={{
            backgroundColor: 'white',
            padding: '1.5rem',
            borderRadius: '0.75rem',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
          }}>
            <h3 style={{
              fontSize: '1.25rem',
              fontWeight: '600',
              color: '#1e40af',
              marginBottom: '1rem',
              borderBottom: '1px solid #e5e7eb',
              paddingBottom: '0.5rem',
              margin: '0 0 1rem 0'
            }}>
              Debt Structure Details
            </h3>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ backgroundColor: '#f9fafb' }}>
                    <th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid #e5e7eb', fontWeight: '
                '600', color: '#374151' }}>Lender</th>
                    <th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid #e5e7eb', fontWeight: '600', color: '#374151' }}>Type</th>
                    <th style={{ textAlign: 'right', padding: '1rem', borderBottom: '1px solid #e5e7eb', fontWeight: '600', color: '#374151' }}>Balance</th>
                    <th style={{ textAlign: 'right', padding: '1rem', borderBottom: '1px solid #e5e7eb', fontWeight: '600', color: '#374151' }}>Monthly Payment</th>
                    <th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid #e5e7eb', fontWeight: '600', color: '#374151' }}>Rate</th>
                    <th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid #e5e7eb', fontWeight: '600', color: '#374151' }}>Term</th>
                  </tr>
                </thead>
                <tbody>
                  {debtData.map((debt, index) => (
                    <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#f9fafb' : 'white' }}>
                      <td style={{ padding: '1rem', borderBottom: '1px solid #e5e7eb', fontWeight: '500' }}>{debt.lender}</td>
                      <td style={{ padding: '1rem', borderBottom: '1px solid #e5e7eb' }}>{debt.type}</td>
                      <td style={{ padding: '1rem', borderBottom: '1px solid #e5e7eb', textAlign: 'right', fontWeight: '500' }}>${debt.balance.toLocaleString()}</td>
                      <td style={{ padding: '1rem', borderBottom: '1px solid #e5e7eb', textAlign: 'right' }}>${debt.payment.toLocaleString()}</td>
                      <td style={{ padding: '1rem', borderBottom: '1px solid #e5e7eb' }}>{debt.rate}</td>
                      <td style={{ padding: '1rem', borderBottom: '1px solid #e5e7eb' }}>{debt.maturity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Operating Costs Tab */}
      {activeTab === 'costs' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.5rem'
          }}>
            <div style={{
              backgroundColor: 'white',
              padding: '1.5rem',
              borderRadius: '0.75rem',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
              borderLeft: '4px solid #8b5cf6'
            }}>
              <div style={{
                fontSize: '1.875rem',
                fontWeight: 'bold',
                color: '#7c3aed',
                marginBottom: '0.5rem'
              }}>
                ${totalMonthlyCosts.toLocaleString()}
              </div>
              <div style={{
                color: '#4b5563',
                fontSize: '0.875rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                fontWeight: '500'
              }}>
                Monthly Recurring Costs
              </div>
            </div>
            
            <div style={{
              backgroundColor: 'white',
              padding: '1.5rem',
              borderRadius: '0.75rem',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
              borderLeft: '4px solid #6366f1'
            }}>
              <div style={{
                fontSize: '1.875rem',
                fontWeight: 'bold',
                color: '#4f46e5',
                marginBottom: '0.5rem'
              }}>
                ${totalAnnualCosts.toLocaleString()}
              </div>
              <div style={{
                color: '#4b5563',
                fontSize: '0.875rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                fontWeight: '500'
              }}>
                Annual Recurring Costs
              </div>
            </div>
            
            <div style={{
              backgroundColor: 'white',
              padding: '1.5rem',
              borderRadius: '0.75rem',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
              borderLeft: '4px solid #f97316'
            }}>
              <div style={{
                fontSize: '1.875rem',
                fontWeight: 'bold',
                color: '#ea580c',
                marginBottom: '0.5rem'
              }}>
                {((totalAnnualCosts / 248000) * 100).toFixed(1)}%
              </div>
              <div style={{
                color: '#4b5563',
                fontSize: '0.875rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                fontWeight: '500'
              }}>
                % of Projected Revenue
              </div>
            </div>
          </div>

          {/* Monthly Costs Chart */}
          <div style={{
            backgroundColor: 'white',
            padding: '1.5rem',
            borderRadius: '0.75rem',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
          }}>
            <h3 style={{
              fontSize: '1.25rem',
              fontWeight: '600',
              color: '#1e40af',
              marginBottom: '1rem',
              borderBottom: '1px solid #e5e7eb',
              paddingBottom: '0.5rem',
              margin: '0 0 1rem 0'
            }}>
              Monthly Costs by Category
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={recurringCosts}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="category" angle={-45} textAnchor="end" height={100} fontSize={11} />
                <YAxis tickFormatter={(value) => `$${value}`} />
                <Tooltip formatter={(value) => [`$${value.toLocaleString()}`, 'Monthly Cost']} />
                <Bar dataKey="monthlyEquivalent" fill="#7c3aed" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Cost Breakdown Table */}
          <div style={{
            backgroundColor: 'white',
            padding: '1.5rem',
            borderRadius: '0.75rem',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
          }}>
            <h3 style={{
              fontSize: '1.25rem',
              fontWeight: '600',
              color: '#1e40af',
              marginBottom: '1rem',
              borderBottom: '1px solid #e5e7eb',
              paddingBottom: '0.5rem',
              margin: '0 0 1rem 0'
            }}>
              Detailed Recurring Costs
            </h3>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ backgroundColor: '#f9fafb' }}>
                    <th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid #e5e7eb', fontWeight: '600', color: '#374151' }}>Category</th>
                    <th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid #e5e7eb', fontWeight: '600', color: '#374151' }}>Service</th>
                    <th style={{ textAlign: 'right', padding: '1rem', borderBottom: '1px solid #e5e7eb', fontWeight: '600', color: '#374151' }}>Monthly Cost</th>
                    <th style={{ textAlign: 'right', padding: '1rem', borderBottom: '1px solid #e5e7eb', fontWeight: '600', color: '#374151' }}>Annual Cost</th>
                  </tr>
                </thead>
                <tbody>
                  {recurringCosts.map((cost, index) => (
                    <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#f9fafb' : 'white' }}>
                      <td style={{ padding: '1rem', borderBottom: '1px solid #e5e7eb', fontWeight: '500' }}>{cost.category}</td>
                      <td style={{ padding: '1rem', borderBottom: '1px solid #e5e7eb' }}>{cost.service}</td>
                      <td style={{ padding: '1rem', borderBottom: '1px solid #e5e7eb', textAlign: 'right', fontWeight: '500' }}>${cost.monthlyEquivalent.toLocaleString()}</td>
                      <td style={{ padding: '1rem', borderBottom: '1px solid #e5e7eb', textAlign: 'right' }}>${(cost.monthlyEquivalent * 12).toLocaleString()}</td>
                    </tr>
                  ))}
                  <tr style={{ backgroundColor: '#f3e8ff', fontWeight: 'bold' }}>
                    <td style={{ padding: '1rem', borderBottom: '1px solid #e5e7eb' }} colSpan={2}>TOTAL RECURRING COSTS</td>
                    <td style={{ padding: '1rem', borderBottom: '1px solid #e5e7eb', textAlign: 'right' }}>${totalMonthlyCosts.toLocaleString()}</td>
                    <td style={{ padding: '1rem', borderBottom: '1px solid #e5e7eb', textAlign: 'right' }}>${totalAnnualCosts.toLocaleString()}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DuzterDashboard;
