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

  const salesByProductData = [
    { product: 'Pro Collection', revenue: 120000, units: 800, avgPrice: 150 },
    { product: 'Wall Pro Collection', revenue: 85000, units: 450, avgPrice: 189 },
    { product: 'Pro Youth Collection', revenue: 43000, units: 480, avgPrice: 90 }
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
      maturity: '60 months',
      apr: '10.765%',
      financeCharge: 62582.21,
      totalCost: 69463.76
    },
    { lender: 'Bank of America Card', balance: 26375.68, payment: 902.83, rate: 'Variable', type: 'Credit Card', maturity: 'Revolving' },
    { lender: 'American Express Card', balance: 16207.79, payment: 506.00, rate: '29.99%', type: 'Credit Card', maturity: 'Revolving' },
    { lender: 'Toyota Auto Loan', balance: 35318.56, payment: 687.30, rate: 'Auto Rate', type: 'Auto Loan', maturity: '12/01/2029' }
  ];

  const totalDebt = debtData.reduce((sum, debt) => sum + debt.balance, 0);
  const totalPayments = debtData.reduce((sum, debt) => sum + debt.payment, 0);

  // Operating Costs Data
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

  // Inventory Value
  const currentInventoryValue = 399242.49;

  // BNQ Certification Expenses (Non-recurring)
  const bnqExpenses = [
    { year: '2024', amount: 13578.10, description: 'BNQ Certification for Pro Collection' },
    { year: '2025', amount: 7171.71, description: 'BNQ Certification for Wall Pro Collection' }
  ];

  const MetricCard = ({ title, value, change, color = "blue" }) => (
    <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500 hover:shadow-xl transition-shadow">
      <div className={`text-3xl font-bold text-${color}-600 mb-2`}>{value}</div>
      <div className="text-gray-600 text-sm uppercase tracking-wide font-medium">{title}</div>
      {change && (
        <div className={`text-sm mt-2 px-3 py-1 rounded-full inline-block ${
          change.includes('+') ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
        }`}>
          {change}
        </div>
      )}
    </div>
  );

  const TabButton = ({ id, label, active, onClick }) => (
    <button
      onClick={() => onClick(id)}
      className={`px-6 py-3 rounded-lg font-medium transition-colors ${
        active 
          ? 'bg-blue-600 text-white shadow-lg' 
          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-800 to-blue-600 text-white p-8 rounded-xl shadow-lg mb-8 text-center">
        <h1 className="text-4xl font-light mb-2 tracking-tight">Duzter Hockey</h1>
        <p className="text-xl opacity-90">Sales Performance & Market Opportunity Dashboard</p>
        <p className="text-lg opacity-75 mt-2">2023-2025 Financial Results & Strategic Analysis</p>
      </div>

      {/* Navigation */}
      <div className="flex flex-wrap gap-4 mb-8 justify-center">
        <TabButton id="overview" label="Overview" active={activeTab === 'overview'} onClick={setActiveTab} />
        <TabButton id="performance" label="Performance" active={activeTab === 'performance'} onClick={setActiveTab} />
        <TabButton id="market" label="Market Analysis" active={activeTab === 'market'} onClick={setActiveTab} />
        <TabButton id="debt" label="Debt Structure" active={activeTab === 'debt'} onClick={setActiveTab} />
        <TabButton id="strategy" label="Strategy" active={activeTab === 'strategy'} onClick={setActiveTab} />
        <TabButton id="costs" label="Operating Costs" active={activeTab === 'costs'} onClick={setActiveTab} />
        <TabButton id="ownership" label="Ownership" active={activeTab === 'ownership'} onClick={setActiveTab} />
        <TabButton id="suppliers" label="Suppliers" active={activeTab === 'suppliers'} onClick={setActiveTab} />
      </div>

      {/* Overview Tab */}
      {activeTab === 'overview' && (
        <div className="space-y-8">
          <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-blue-500">
            <h2 className="text-2xl font-semibold text-blue-800 mb-6">Executive Summary</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p><strong>Revenue Growth:</strong> Duzter Hockey generated $205,417 in 2023, growing to $221,017 in 2024 (+7.6%), with $134,170 achieved in the first 6.5 months of 2025, projecting to $248,000 for full-year 2025 (+12% growth).</p>
              <p><strong>Strategic Transformation:</strong> Average order value increased 120% from $134.85 (2023) to $296.72 (2025 YTD), reflecting successful product portfolio evolution from entry-level Armor to premium Pro and Wall collections with BNQ certification.</p>
              <p><strong>Premium Positioning Success:</strong> Unit economics demonstrate 72-82% gross margins across all product lines, with wholesale averaging $2,383 per order versus $297 retail AOV.</p>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <MetricCard title="2025 Projected Revenue" value="$248K" change="+12% vs 2024" />
            <MetricCard title="AOV Growth (2-Year)" value="120%" change="$135 → $297" />
            <MetricCard title="B2B Revenue Share" value="30.5%" change="$2,383 Avg Order" />
            <MetricCard title="Average Gross Margin" value="75%" change="Premium Pricing" />
            <MetricCard title="Current Inventory Value" value="$399K" change="Stock on Hand" color="green" />
          </div>

          {/* Inventory Details */}
          <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-green-500">
            <h2 className="text-2xl font-semibold text-green-800 mb-6">Current Inventory Position</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg border border-green-200">
                <div className="text-3xl font-bold text-green-600 mb-2">${currentInventoryValue.toLocaleString()}</div>
                <div className="text-lg font-semibold text-green-800 mb-2">Total Inventory Value</div>
                <div className="text-sm text-gray-600">Current stock on hand across all product lines</div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200">
                <div className="text-3xl font-bold text-blue-600 mb-2">{((currentInventoryValue / 248000) * 100).toFixed(1)}%</div>
                <div className="text-lg font-semibold text-blue-800 mb-2">Inventory to Revenue Ratio</div>
                <div className="text-sm text-gray-600">Inventory value as % of projected 2025 revenue</div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg border border-purple-200">
                <div className="text-3xl font-bold text-purple-600 mb-2">{(currentInventoryValue / 296.72).toFixed(0)}</div>
                <div className="text-lg font-semibold text-purple-800 mb-2">Orders Equivalent</div>
                <div className="text-sm text-gray-600">Potential orders at current AOV of $297</div>
              </div>
            </div>
            <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
              <div className="text-sm text-gray-700">
                <strong>Inventory Strategy:</strong> Current inventory value of $399K represents 161% of projected annual revenue, indicating strong stock position to support growth and avoid stockouts during peak demand periods.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Performance Tab */}
      {activeTab === 'performance' && (
        <div className="space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-4 border-b pb-2">Revenue Growth Trajectory</h3>
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

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-4 border-b pb-2">Average Order Value Evolution</h3>
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

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-4 border-b pb-2">Product Margins</h3>
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

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-4 border-b pb-2">Marketing Attribution</h3>
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
        <div className="space-y-8">
          <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-blue-500">
            <h2 className="text-2xl font-semibold text-blue-800 mb-6">Total Addressable Market</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {marketData.map((market, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200">
                  <div className="text-lg font-semibold text-blue-800 mb-2">{market.region}</div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">${market.value}B</div>
                  <div className="text-green-600 font-medium">{market.growth} CAGR</div>
                  <div className="text-sm text-gray-600 mt-2">{market.description}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 p-6 rounded-xl">
            <h3 className="font-semibold text-blue-800 mb-3">Regulatory Tailwinds</h3>
            <p className="text-gray-700">In January 2024, USA Hockey mandated neck laceration protection for all age classifications during games and practices, creating mandatory demand for cut-resistant products.</p>
          </div>
        </div>
      )}

      {/* Debt Structure Tab */}
      {activeTab === 'debt' && (
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-red-500">
              <div className="text-3xl font-bold text-red-600 mb-2">${totalDebt.toLocaleString()}</div>
              <div className="text-gray-600 text-sm uppercase tracking-wide font-medium">Total Debt Outstanding</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-orange-500">
              <div className="text-3xl font-bold text-orange-600 mb-2">${totalPayments.toLocaleString()}</div>
              <div className="text-gray-600 text-sm uppercase tracking-wide font-medium">Monthly Debt Service</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-500">
              <div className="text-3xl font-bold text-green-600 mb-2">{((totalPayments * 12 / 248000) * 100).toFixed(1)}%</div>
              <div className="text-gray-600 text-sm uppercase tracking-wide font-medium">Debt Service Ratio</div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-blue-800 mb-4 border-b pb-2">Debt Structure Details</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left p-4 border-b font-semibold text-gray-700">Lender</th>
                    <th className="text-left p-4 border-b font-semibold text-gray-700">Type</th>
                    <th className="text-right p-4 border-b font-semibold text-gray-700">Balance</th>
                    <th className="text-right p-4 border-b font-semibold text-gray-700">Monthly Payment</th>
                    <th className="text-left p-4 border-b font-semibold text-gray-700">Rate</th>
                    <th className="text-left p-4 border-b font-semibold text-gray-700">Term</th>
                  </tr>
                </thead>
                <tbody>
                  {debtData.map((debt, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="p-4 border-b font-medium">{debt.lender}</td>
                      <td className="p-4 border-b">{debt.type}</td>
                      <td className="p-4 border-b text-right font-medium">${debt.balance.toLocaleString()}</td>
                      <td className="p-4 border-b text-right">${debt.payment.toLocaleString()}</td>
                      <td className="p-4 border-b">{debt.rate}</td>
                      <td className="p-4 border-b">{debt.maturity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* LEDC Loan Details */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-blue-800 mb-4 border-b pb-2">LEDC Business Loan Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-3">Loan Terms</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Original Loan Amount:</span>
                    <span className="font-medium">$227,719</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Interest Rate:</span>
                    <span className="font-medium">10.0%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>APR:</span>
                    <span className="font-medium">10.765%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Term:</span>
                    <span className="font-medium">60 months</span>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 p-4 rounded-lg">
                <h4 className="font-semibold text-orange-800 mb-3">Payment Structure</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Monthly Payment:</span>
                    <span className="font-medium">$4,838.35</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Total Finance Charge:</span>
                    <span className="font-medium">$62,582</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Total Cost of Capital:</span>
                    <span className="font-medium">$69,464</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Late Payment Fee:</span>
                    <span className="font-medium">$35 or 5%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Debt Analysis */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Debt Service Coverage</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                  <span className="font-medium">2025 Projected Revenue:</span>
                  <span className="font-bold text-green-600">$248,000</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                  <span className="font-medium">Annual Debt Service:</span>
                  <span className="font-bold text-red-600">${(totalPayments * 12).toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-blue-50 rounded border border-blue-200">
                  <span className="font-medium">Debt Service Ratio:</span>
                  <span className="font-bold text-blue-600">{((totalPayments * 12 / 248000) * 100).toFixed(1)}%</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Inventory Value Analysis</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                  <span className="font-medium">Current Inventory Value:</span>
                  <span className="font-bold text-green-600">${currentInventoryValue.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                  <span className="font-medium">Inventory to Revenue Ratio:</span>
                  <span className="font-bold text-blue-600">{((currentInventoryValue / 248000) * 100).toFixed(1)}%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                  <span className="font-medium">Inventory to Debt Ratio:</span>
                  <span className="font-bold text-purple-600">{((currentInventoryValue / totalDebt) * 100).toFixed(1)}%</span>
                </div>
                <div className="text-sm text-gray-600 mt-4">
                  <strong>Asset Position:</strong> Inventory value significantly exceeds total debt, providing strong asset coverage.
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Strategy Tab */}
      {activeTab === 'strategy' && (
        <div className="space-y-8">
          <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-blue-500">
            <h2 className="text-2xl font-semibold text-blue-800 mb-6">Strategic Product Evolution</h2>
            
            <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg mb-6">
              <h3 className="font-semibold text-yellow-800 mb-3">Market Catalyst Event - October 2023</h3>
              <p className="text-gray-700">The tragic death of a professional American player in Europe created unanticipated demand. Duzter sold out inventory in 2 days and ran a presale that also sold out, with delivery completed by December 2023.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="bg-gray-50 p-6 rounded-lg text-center border">
                <div className="font-semibold text-blue-800 mb-2">Pro Collection</div>
                <div className="text-xl font-bold text-green-600 mb-1">$99.99 - $124.99</div>
                <div className="text-sm text-gray-600">74-75% Margin • BNQ Certified</div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center border">
                <div className="font-semibold text-blue-800 mb-2">Wall Pro (Goalies)</div>
                <div className="text-xl font-bold text-green-600 mb-1">$159.99 - $169.99</div>
                <div className="text-sm text-gray-600">80-82% Margin • Specialized</div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center border">
                <div className="font-semibold text-blue-800 mb-2">Pro Youth</div>
                <div className="text-xl font-bold text-green-600 mb-1">$94.99 - $159.99</div>
                <div className="text-sm text-gray-600">72% Margin • Presales Active</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Operating Costs Tab */}
      {activeTab === 'costs' && (
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-purple-500">
              <div className="text-3xl font-bold text-purple-600 mb-2">${totalMonthlyCosts.toLocaleString()}</div>
              <div className="text-gray-600 text-sm uppercase tracking-wide font-medium">Monthly Recurring Costs</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-indigo-500">
              <div className="text-3xl font-bold text-indigo-600 mb-2">${totalAnnualCosts.toLocaleString()}</div>
              <div className="text-gray-600 text-sm uppercase tracking-wide font-medium">Annual Recurring Costs</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-orange-500">
              <div className="text-3xl font-bold text-orange-600 mb-2">{((totalAnnualCosts / 248000) * 100).toFixed(1)}%</div>
              <div className="text-gray-600 text-sm uppercase tracking-wide font-medium">% of Projected Revenue</div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-blue-800 mb-4 border-b pb-2">Monthly Costs by Category</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={recurringCosts}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="category" angle={-45} textAnchor="end" height={100} fontSize={11} />
                <YAxis tickFormatter={(value) => `${value}`} />
                <Tooltip formatter={(value) => [`${value.toLocaleString()}`, 'Monthly Cost']} />
                <Bar dataKey="monthlyEquivalent" fill="#7c3aed" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-blue-800 mb-4 border-b pb-2">Detailed Recurring Costs</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left p-4 border-b font-semibold text-gray-700">Category</th>
                    <th className="text-left p-4 border-b font-semibold text-gray-700">Service</th>
                    <th className="text-right p-4 border-b font-semibold text-gray-700">Monthly Cost</th>
                    <th className="text-right p-4 border-b font-semibold text-gray-700">Annual Cost</th>
                  </tr>
                </thead>
                <tbody>
                  {recurringCosts.map((cost, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="p-4 border-b font-medium">{cost.category}</td>
                      <td className="p-4 border-b">{cost.service}</td>
                      <td className="p-4 border-b text-right font-medium">${cost.monthlyEquivalent.toLocaleString()}</td>
                      <td className="p-4 border-b text-right">${(cost.monthlyEquivalent * 12).toLocaleString()}</td>
                    </tr>
                  ))}
                  <tr className="bg-purple-50 font-bold">
                    <td className="p-4 border-b" colSpan={2}>TOTAL RECURRING COSTS</td>
                    <td className="p-4 border-b text-right">${totalMonthlyCosts.toLocaleString()}</td>
                    <td className="p-4 border-b text-right">${totalAnnualCosts.toLocaleString()}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-blue-800 mb-4">Revenue Impact Analysis</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                  <span className="font-medium">Annual Recurring Costs:</span>
                  <span className="font-bold text-purple-600">${totalAnnualCosts.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                  <span className="font-medium">% of 2025 Projected Revenue:</span>
                  <span className="font-bold text-blue-600">{((totalAnnualCosts / 248000) * 100).toFixed(1)}%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                  <span className="font-medium">Funds Available for Growth:</span>
                  <span className="font-bold text-green-600">{(100 - (totalAnnualCosts / 248000) * 100).toFixed(1)}%</span>
                </div>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-3">Cost Breakdown Summary</h4>
                <div className="text-sm space-y-1">
                  <div>• Social Media: $1,100/mo (56.4%)</div>
                  <div>• Trade Shows: $250/mo (12.8%)</div>
                  <div>• Other Services: $250/mo (12.8%)</div>
                  <div>• Shopify Apps: $170/mo (8.7%)</div>
                  <div>• HubSpot: $100/mo (5.1%)</div>
                  <div>• Shopify Platform: $79/mo (4.1%)</div>
                </div>
              </div>
            </div>
          </div>

          {/* BNQ Certification Expenses */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-blue-800 mb-4 border-b pb-2">BNQ Certification Expenses (Non-Recurring)</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg border border-orange-200">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold text-orange-800">2024 Certification</h4>
                  <div className="px-3 py-1 bg-orange-200 text-orange-800 rounded-full text-sm font-medium">Completed</div>
                </div>
                <div className="text-3xl font-bold text-orange-600 mb-2">$13,578</div>
                <div className="text-sm text-gray-600">BNQ Certification for Pro Collection</div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold text-blue-800">2025 Certification</h4>
                  <div className="px-3 py-1 bg-blue-200 text-blue-800 rounded-full text-sm font-medium">Completed</div>
                </div>
                <div className="text-3xl font-bold text-blue-600 mb-2">$7,172</div>
                <div className="text-sm text-gray-600">BNQ Certification for Wall Pro Collection</div>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
              <h4 className="font-semibold text-yellow-800 mb-3">BNQ Certification Impact</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <strong>Total Investment:</strong> $20,750 over 2 years
                </div>
                <div>
                  <strong>Strategic Value:</strong> Third-party safety validation enabling premium pricing
                </div>
                <div>
                  <strong>Market Position:</strong> Differentiates from competitors without certification
                </div>
              </div>
              <div className="mt-3 text-xs text-gray-600">
                BNQ certification provides third-party safety validation enabling premium pricing.
              </div>
            </div>

            <div className="mt-6">
              <h4 className="font-semibold text-blue-800 mb-4">BNQ Expenses by Year</h4>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={bnqExpenses}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="year" />
                  <YAxis tickFormatter={(value) => `${(value/1000).toFixed(0)}K`} />
                  <Tooltip formatter={(value) => [`${value.toLocaleString()}`, 'BNQ Certification Cost']} />
                  <Bar dataKey="amount" fill="#f59e0b" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      )}

      {/* Ownership Tab */}
      {activeTab === 'ownership' && (
        <div className="space-y-8">
          {/* Founders Overview */}
          <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-blue-500">
            <h2 className="text-2xl font-semibold text-blue-800 mb-6">Founders & Ownership Structure</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Martin A. (Father) */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">MA</div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-blue-800">Martin A.</h3>
                    <p className="text-gray-600">Co-Founder & Father</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-700">Ownership Stake:</span>
                    <span className="font-bold text-blue-600">50%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-700">Annual Salary:</span>
                    <span className="font-bold text-green-600">$0</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-700">Benefits:</span>
                    <span className="font-bold text-green-600">None</span>
                  </div>
                  <div className="mt-4 p-3 bg-white rounded border">
                    <p className="text-sm text-gray-600">Martin A. does not take any salary or benefits from the business, reinvesting all proceeds back into company growth.</p>
                  </div>
                </div>
              </div>

              {/* Martin E. (Son) */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg border border-green-200">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl">ME</div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-green-800">Martin E.</h3>
                    <p className="text-gray-600">Co-Founder & Son</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-700">Ownership Stake:</span>
                    <span className="font-bold text-green-600">50%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-700">Weekly Allowance:</span>
                    <span className="font-bold text-green-600">$100</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-700">Total Annual Compensation:</span>
                    <span className="font-bold text-green-600">$10-12K</span>
                  </div>
                  <div className="mt-4 p-3 bg-white rounded border">
                    <p className="text-sm text-gray-600">Martin E. receives a weekly allowance plus hockey and school expenses totaling $10-12K annually.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Ownership Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-500">
              <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-gray-600 text-sm uppercase tracking-wide font-medium">Private Ownership</div>
              <div className="text-xs text-gray-500 mt-2">No outside investors</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-500">
              <div className="text-3xl font-bold text-green-600 mb-2">50/50</div>
              <div className="text-gray-600 text-sm uppercase tracking-wide font-medium">Equal Split</div>
              <div className="text-xs text-gray-500 mt-2">Father & Son Partnership</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-purple-500">
              <div className="text-3xl font-bold text-purple-600 mb-2">$10-12K</div>
              <div className="text-gray-600 text-sm uppercase tracking-wide font-medium">Annual Compensation</div>
              <div className="text-xs text-gray-500 mt-2">Martin E. total package</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-orange-500">
              <div className="text-3xl font-bold text-orange-600 mb-2">4.8%</div>
              <div className="text-gray-600 text-sm uppercase tracking-wide font-medium">Compensation to Revenue</div>
              <div className="text-xs text-gray-500 mt-2">Very lean structure</div>
            </div>
          </div>

          {/* Ownership Structure Details */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-blue-800 mb-4 border-b pb-2">Ownership Structure Details</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left p-4 border-b font-semibold text-gray-700">Owner</th>
                    <th className="text-center p-4 border-b font-semibold text-gray-700">Ownership %</th>
                    <th className="text-right p-4 border-b font-semibold text-gray-700">Weekly Compensation</th>
                    <th className="text-right p-4 border-b font-semibold text-gray-700">Annual Compensation</th>
                    <th className="text-left p-4 border-b font-semibold text-gray-700">Additional Benefits</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-gray-50">
                    <td className="p-4 border-b font-medium">Martin A. (Father)</td>
                    <td className="p-4 border-b text-center font-bold text-blue-600">50%</td>
                    <td className="p-4 border-b text-right">$0</td>
                    <td className="p-4 border-b text-right">$0</td>
                    <td className="p-4 border-b text-gray-600">None</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="p-4 border-b font-medium">Martin E. (Son)</td>
                    <td className="p-4 border-b text-center font-bold text-green-600">50%</td>
                    <td className="p-4 border-b text-right">$100</td>
                    <td className="p-4 border-b text-right">$10,000-12,000</td>
                    <td className="p-4 border-b text-gray-600">Weekly allowance + hockey/school expenses</td>
                  </tr>
                  <tr className="bg-blue-50 font-bold">
                    <td className="p-4 border-b">TOTAL</td>
                    <td className="p-4 border-b text-center">100%</td>
                    <td className="p-4 border-b text-right">$100</td>
                    <td className="p-4 border-b text-right">$10,000-12,000</td>
                    <td className="p-4 border-b">Allowance + hockey/school expenses</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Suppliers Tab */}
      {activeTab === 'suppliers' && (
        <div className="space-y-8">
          {/* Supplier Overview */}
          <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-blue-500">
            <h2 className="text-2xl font-semibold text-blue-800 mb-6">Primary Manufacturing Partner</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Supplier Details */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">🏭</div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-blue-800">Manufacturing Partner</h3>
                    <p className="text-gray-600">Dongguan, China</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-700">Partnership Duration:</span>
                    <span className="font-bold text-blue-600">Since Day One</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-700">Location:</span>
                    <span className="font-bold text-blue-600">Dongguan, China</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-700">Contract Type:</span>
                    <span className="font-bold text-orange-600">Per Order Agreement</span>
                  </div>
                  <div className="mt-4 p-3 bg-white rounded border">
                    <p className="text-sm text-gray-600">Long-standing manufacturing partnership established from company inception, providing consistency and reliability.</p>
                  </div>
                </div>
              </div>

              {/* Production Capacity */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg border border-green-200">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl">⚙️</div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-green-800">Production Capacity</h3>
                    <p className="text-gray-600">Manufacturing Specifications</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-700">Monthly Capacity:</span>
                    <span className="font-bold text-green-600">2,500 units</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-700">Lead Time:</span>
                    <span className="font-bold text-green-600">45 days</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-700">Annual Capacity:</span>
                    <span className="font-bold text-green-600">30,000 units</span>
                  </div>
                  <div className="mt-4 p-3 bg-white rounded border">
                    <p className="text-sm text-gray-600">Sufficient capacity to support current and projected growth requirements with 45-day production timeline.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Supplier Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-500">
              <div className="text-3xl font-bold text-blue-600 mb-2">2,500</div>
              <div className="text-gray-600 text-sm uppercase tracking-wide font-medium">Units/Month Capacity</div>
              <div className="text-xs text-gray-500 mt-2">Manufacturing limit</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-500">
              <div className="text-3xl font-bold text-green-600 mb-2">45</div>
              <div className="text-gray-600 text-sm uppercase tracking-wide font-medium">Days Lead Time</div>
              <div className="text-xs text-gray-500 mt-2">Order to delivery</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-purple-500">
              <div className="text-3xl font-bold text-purple-600 mb-2">30%</div>
              <div className="text-gray-600 text-sm uppercase tracking-wide font-medium">Deposit Required</div>
              <div className="text-xs text-gray-500 mt-2">Upfront payment</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-orange-500">
              <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
              <div className="text-gray-600 text-sm uppercase tracking-wide font-medium">Supplier Pays Tariffs</div>
              <div className="text-xs text-gray-500 mt-2">Export duties covered</div>
            </div>
          </div>

          {/* Contract & Payment Terms */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-blue-800 mb-4 border-b pb-2">Contract & Payment Terms</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left p-4 border-b font-semibold text-gray-700">Aspect</th>
                    <th className="text-left p-4 border-b font-semibold text-gray-700">Terms</th>
                    <th className="text-left p-4 border-b font-semibold text-gray-700">Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-gray-50">
                    <td className="p-4 border-b font-medium">Contract Structure</td>
                    <td className="p-4 border-b">No Formal Contract</td>
                    <td className="p-4 border-b text-gray-600">Agreement per order basis</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="p-4 border-b font-medium">Payment Schedule</td>
                    <td className="p-4 border-b">30% Deposit + Balance</td>
                    <td className="p-4 border-b text-gray-600">30% upon order, 70% prior to delivery</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-4 border-b font-medium">Export Responsibilities</td>
                    <td className="p-4 border-b">Supplier Handles</td>
                    <td className="p-4 border-b text-gray-600">Supplier pays all export tariffs</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="p-4 border-b font-medium">Production Timeline</td>
                    <td className="p-4 border-b">45-Day Delivery</td>
                    <td className="p-4 border-b text-gray-600">From order confirmation to shipment</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-4 border-b font-medium">Monthly Capacity</td>
                    <td className="p-4 border-b">2,500 Units Maximum</td>
                    <td className="p-4 border-b text-gray-600">Production capacity limit per month</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Supply Chain Analysis */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Supply Chain Strengths</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex-shrink-0 mt-1 flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">Established Partnership</div>
                    <div className="text-gray-600 text-sm">Supplier relationship since company inception</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex-shrink-0 mt-1 flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">Flexible Terms</div>
                    <div className="text-gray-600 text-sm">Per-order agreements allow adaptability</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex-shrink-0 mt-1 flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">Cost Efficiency</div>
                    <div className="text-gray-600 text-sm">Supplier covers export tariffs</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Capacity Analysis</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                  <span className="font-medium">Monthly Capacity:</span>
                  <span className="font-bold text-green-600">2,500 units</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                  <span className="font-medium">2025 YTD Units Sold:</span>
                  <span className="font-bold text-blue-600">~450 units</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                  <span className="font-medium">Capacity Utilization:</span>
                  <span className="font-bold text-purple-600">~18%</span>
                </div>
                <div className="text-sm text-gray-600 mt-4 p-3 bg-blue-50 rounded">
                  <strong>Growth Runway:</strong> Significant capacity available to support scaling operations and meet increased demand.
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DuzterDashboard;
