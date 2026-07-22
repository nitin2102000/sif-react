import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export default function RiskComparison({ selectedFunds }) {
  const activeFunds = selectedFunds.filter(f => f !== null);
  if (activeFunds.length === 0) return null;

  const colors = [
    { border: '#032e92', bg: 'rgba(3, 46, 146, 0.2)' },
    { border: '#c10000', bg: 'rgba(193, 0, 0, 0.2)' },
    { border: '#16A34A', bg: 'rgba(22, 163, 74, 0.2)' }
  ];

  const data = {
    labels: ['Standard Deviation (Volatility)', 'Beta (Market Risk)', 'Sharpe Ratio (Risk-Adj Return)', 'Sortino Ratio', 'Alpha'],
    datasets: activeFunds.map((fund, index) => ({
      label: fund.name,
      // Normalize values slightly for better radar chart visualization if needed, or use raw if scales handle it
      // Using raw for simplicity, standardizing in a real app might be better since Beta is 1 and SD is 15
      data: [
        fund.riskMetrics.standardDeviation,
        fund.riskMetrics.beta * 10, // scaled up for visibility against SD
        fund.riskMetrics.sharpeRatio * 10,
        fund.riskMetrics.sortinoRatio * 10,
        fund.riskMetrics.alpha
      ],
      backgroundColor: colors[index % 3].bg,
      borderColor: colors[index % 3].border,
      borderWidth: 2,
    })),
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: { font: { family: 'Poppins', size: 11 }, usePointStyle: true }
      },
      tooltip: {
        backgroundColor: '#1e293b',
        titleFont: { family: 'Poppins' },
        bodyFont: { family: 'Poppins' },
        callbacks: {
          label: function(context) {
            let label = context.dataset.label || '';
            let raw = context.raw;
            // Unscale the values for tooltip
            if (context.dataIndex === 1 || context.dataIndex === 2 || context.dataIndex === 3) {
              raw = raw / 10;
            }
            return `${label}: ${raw}`;
          }
        }
      }
    },
    scales: {
      r: {
        angleLines: { color: 'rgba(0, 0, 0, 0.1)' },
        grid: { color: 'rgba(0, 0, 0, 0.05)' },
        pointLabels: {
          font: { family: 'Poppins', size: 10, weight: 'bold' },
          color: '#64748b'
        },
        ticks: { display: false }
      }
    }
  };

  return (
    <div className="bg-white rounded-3xl border border-[#e8edf7] shadow-xl shadow-blue-900/5 mb-12 p-6 lg:p-8">
      <h3 className="text-xl font-bold text-[#1e293b] font-serif mb-6">Risk Profile Comparison</h3>
      
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        
        {/* Radar Chart */}
        <div className="h-[350px]">
          <Radar data={data} options={options} />
        </div>

        {/* Textual Metrics */}
        <div className="space-y-6">
          {activeFunds.map((fund, index) => (
            <div key={index} className="flex items-center gap-4 bg-[#f7f9fc] p-4 rounded-2xl border border-[#e8edf7]">
              <div className="w-2 h-12 rounded-full" style={{ backgroundColor: colors[index % 3].border }} />
              <div>
                <h4 className="text-sm font-bold text-[#1e293b] mb-1">{fund.name}</h4>
                <div className="flex gap-4 text-xs font-semibold text-[#64748b]">
                  <span>Risk: <strong className="text-[#032e92]">{fund.risk}</strong></span>
                  <span>Beta: <strong className="text-[#032e92]">{fund.riskMetrics.beta}</strong></span>
                  <span>Sharpe: <strong className="text-[#032e92]">{fund.riskMetrics.sharpeRatio}</strong></span>
                </div>
              </div>
            </div>
          ))}
          <p className="text-xs text-gray-500 font-medium leading-relaxed bg-blue-50 p-4 rounded-xl border border-blue-100">
            <strong>Note:</strong> Beta and Ratios in the chart are scaled for visual comparison against Volatility. Actual values are shown in the tooltips and table.
          </p>
        </div>
      </div>
    </div>
  );
}
