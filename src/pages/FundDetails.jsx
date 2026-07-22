import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChartLine, faCalculator, faComments, faChevronUp,
  faArrowRight, faScaleBalanced
} from '@fortawesome/free-solid-svg-icons'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FundSummaryCard from '../components/FundSummaryCard'
import FundTabs from '../components/FundTabs'
import OverviewSection from '../components/OverviewSection'
import ObjectiveSection from '../components/ObjectiveSection'
import FundInformation from '../components/FundInformation'
import PerformanceSection from '../components/PerformanceSection'
import { AllocationChart, SectorChart } from '../components/AllocationChart'
import HoldingsTable from '../components/HoldingsTable'
import FundManager from '../components/FundManager'
import DocumentsSection from '../components/DocumentsSection'
import RelatedFunds from '../components/RelatedFunds'
import FundFAQ from '../components/FundFAQ'
import Newsletter from '../components/Newsletter'
import { fundDetails } from '../data/fundDetails'

// Floating Action Button
function FloatingActions() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const fn = () => setShowTop(window.scrollY > 400)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const actions = [
    { icon: faScaleBalanced, label: 'Compare', color: 'bg-[#032e92]' },
    { icon: faCalculator, label: 'Calculator', color: 'bg-purple-600' },
    { icon: faComments, label: 'Support', color: 'bg-green-600' },
  ]

  return (
    <div className="fixed right-5 bottom-6 z-50 flex flex-col items-center gap-3">
      {actions.map((a) => (
        <motion.button
          key={a.label}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          title={a.label}
          className={`w-12 h-12 ${a.color} text-white rounded-2xl shadow-xl shadow-black/20 flex items-center justify-center`}>
          <FontAwesomeIcon icon={a.icon} className="text-sm" />
        </motion.button>
      ))}
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.7 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-12 h-12 bg-white border-2 border-[#032e92] text-[#032e92] rounded-2xl shadow-xl flex items-center justify-center">
            <FontAwesomeIcon icon={faChevronUp} className="text-sm" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FundDetails() {
  const fund = fundDetails

  return (
    <div className="min-h-screen bg-[#f7f9fc]">
      <Navbar />

      {/* Hero strip */}
      <div className="pt-20 bg-gradient-to-br from-[#032e92] via-[#0a4fd4] to-[#021d63]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 text-blue-200 text-xs font-medium mb-4">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <FontAwesomeIcon icon={faArrowRight} className="text-[10px]" />
            <a href="/funds" className="hover:text-white transition-colors">Funds</a>
            <FontAwesomeIcon icon={faArrowRight} className="text-[10px]" />
            <span className="text-white font-semibold">{fund.category}</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4">
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${fund.logoColor} flex items-center justify-center text-3xl shadow-xl border-2 border-white/20`}>
              {fund.logo}
            </div>
            <div>
              <h1 className="text-xl lg:text-2xl font-bold text-white leading-tight">{fund.name}</h1>
              <p className="text-blue-200 text-sm font-medium mt-1">{fund.amc} • {fund.category} • {fund.assetClass}</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Sticky Tabs */}
      <FundTabs />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8 items-start">

          {/* Sticky Left Sidebar */}
          <div className="w-full lg:w-72 xl:w-80 flex-shrink-0 lg:sticky lg:top-32 order-first lg:order-none">
            <FundSummaryCard fund={fund} />
          </div>

          {/* Right Content */}
          <div className="flex-1 min-w-0 space-y-6">
            <OverviewSection fund={fund} />
            <ObjectiveSection fund={fund} />
            <FundInformation fund={fund} />
            <PerformanceSection fund={fund} />

            {/* Holdings section */}
            <section id="holdings" className="scroll-mt-32 space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <AllocationChart fund={fund} />
                <SectorChart fund={fund} />
              </div>
              <HoldingsTable fund={fund} />
            </section>

            <FundManager fund={fund} />
            <DocumentsSection fund={fund} />
          </div>
        </div>
      </main>

      {/* Below-the-fold sections (full width) */}
      <RelatedFunds funds={fund.relatedFunds} />
      <FundFAQ fund={fund} />
      <Newsletter />
      <Footer />

      {/* Floating Action Buttons */}
      <FloatingActions />
    </div>
  )
}
