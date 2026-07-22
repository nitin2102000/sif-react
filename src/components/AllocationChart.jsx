import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartPie } from '@fortawesome/free-solid-svg-icons'
import {
  Chart as ChartJS, ArcElement, Tooltip, Legend,
  CategoryScale, LinearScale, BarElement
} from 'chart.js'
import { Doughnut, Bar } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement)

// ─── Allocation Doughnut ───
export function AllocationChart({ fund }) {
  const { ref, inView } = useInView({ triggerOnce: true })
  const { equity, debt, cash, others } = fund.allocation

  const data = {
    labels: ['Equity', 'Debt', 'Cash', 'Others'],
    datasets: [{
      data: [equity, debt, cash, others],
      backgroundColor: ['#032e92', '#0a4fd4', '#60a5fa', '#bfdbfe'],
      borderColor: ['#fff', '#fff', '#fff', '#fff'],
      borderWidth: 3,
      hoverOffset: 8,
    }],
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '68%',
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          usePointStyle: true,
          pointStyle: 'circle',
          font: { family: 'Poppins', size: 11, weight: '600' },
          padding: 16,
          color: '#64748b',
        },
      },
      tooltip: {
        backgroundColor: '#fff',
        borderColor: '#e8edf7',
        borderWidth: 1,
        titleColor: '#1e293b',
        bodyColor: '#64748b',
        bodyFont: { family: 'Poppins', size: 12 },
        callbacks: { label: ctx => ` ${ctx.label}: ${ctx.raw}%` },
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-3xl border border-[#e8edf7] shadow-lg shadow-blue-900/5 p-6">
      <div className="flex items-center gap-2 mb-5">
        <div className="w-8 h-8 rounded-xl bg-[#eef4ff] flex items-center justify-center">
          <FontAwesomeIcon icon={faChartPie} className="text-[#032e92] text-sm" />
        </div>
        <h3 className="font-bold text-gray-900">Asset Allocation</h3>
      </div>
      <div className="h-56 relative">
        {inView && <Doughnut data={data} options={options} />}
        {/* Center text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <p className="text-2xl font-bold text-[#032e92]">{equity}%</p>
          <p className="text-xs text-gray-400 font-medium">Equity</p>
        </div>
      </div>
      {/* Allocation bars */}
      <div className="mt-4 space-y-2">
        {[
          { label: 'Equity', val: equity, color: 'bg-[#032e92]' },
          { label: 'Debt', val: debt, color: 'bg-[#0a4fd4]' },
          { label: 'Cash', val: cash, color: 'bg-blue-400' },
          { label: 'Others', val: others, color: 'bg-blue-200' },
        ].map(item => (
          <div key={item.label} className="flex items-center gap-3">
            <span className="text-xs font-medium text-gray-500 w-12">{item.label}</span>
            <div className="flex-1 bg-gray-100 rounded-full h-1.5 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={inView ? { width: `${item.val}%` } : {}}
                transition={{ duration: 1, delay: 0.3 }}
                className={`h-full ${item.color} rounded-full`} />
            </div>
            <span className="text-xs font-bold text-gray-700 w-8 text-right">{item.val}%</span>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

// ─── Sector Bar Chart ───
export function SectorChart({ fund }) {
  const { ref, inView } = useInView({ triggerOnce: true })

  const data = {
    labels: fund.sectorAllocation.map(s => s.sector),
    datasets: [{
      label: 'Allocation %',
      data: fund.sectorAllocation.map(s => s.weight),
      backgroundColor: [
        '#032e92', '#0a4fd4', '#2563eb', '#3b82f6',
        '#60a5fa', '#93c5fd', '#bfdbfe', '#dbeafe', '#eff6ff',
      ],
      borderRadius: 6,
      borderSkipped: false,
    }],
  }

  const options = {
    indexAxis: 'y',
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: '#fff',
        borderColor: '#e8edf7',
        borderWidth: 1,
        bodyFont: { family: 'Poppins', size: 12 },
        callbacks: { label: ctx => ` ${ctx.raw}%` },
      },
    },
    scales: {
      x: {
        grid: { color: '#f1f5f9' },
        ticks: { font: { family: 'Poppins', size: 10 }, color: '#94a3b8', callback: v => `${v}%` },
        border: { display: false },
      },
      y: {
        grid: { display: false },
        ticks: { font: { family: 'Poppins', size: 11 }, color: '#64748b' },
        border: { display: false },
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.15 }}
      className="bg-white rounded-3xl border border-[#e8edf7] shadow-lg shadow-blue-900/5 p-6">
      <div className="flex items-center gap-2 mb-5">
        <div className="w-8 h-8 rounded-xl bg-purple-50 flex items-center justify-center">
          <FontAwesomeIcon icon={faChartPie} className="text-purple-600 text-sm" />
        </div>
        <h3 className="font-bold text-gray-900">Sector Allocation</h3>
      </div>
      <div className="h-64">
        {inView && <Bar data={data} options={options} />}
      </div>
    </motion.div>
  )
}
