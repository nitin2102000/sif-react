import { useState, useMemo, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTableCellsLarge, faList, faFilter
} from '@fortawesome/free-solid-svg-icons'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FundsHero from '../components/FundsHero'
import FundFilters from '../components/FundFilters'
import ActiveFilters from '../components/ActiveFilters'
import FundGrid from '../components/FundGrid'
import Pagination from '../components/Pagination'
import Newsletter from '../components/Newsletter'
import { fundsData } from '../data/funds'

const ITEMS_PER_PAGE = 9

const defaultFilters = {
  assetClass: '',
  category: '',
  risk: '',
  amc: '',
  minInvestment: '',
  search: '',
  sort: 'returns',
}

const minInvestmentOrder = { '₹500': 500, '₹1,000': 1000, '₹5,000': 5000, '₹10,000': 10000, '₹50,000': 50000 }
const riskOrder = { 'Low': 1, 'Moderate': 2, 'High': 3, 'Very High': 4 }

function parseReturns(str) {
  if (!str || str === '—') return 0
  return parseFloat(str.replace('%', ''))
}

function parseAUM(str) {
  if (!str) return 0
  const num = str.replace(/[₹,\s]/g, '').replace('Cr', '')
  return parseFloat(num) || 0
}

export default function Funds() {
  const [filters, setFilters] = useState(defaultFilters)
  const [isGrid, setIsGrid] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [loading, setLoading] = useState(true)

  // Simulate loading
  useEffect(() => {
    setLoading(true)
    const t = setTimeout(() => setLoading(false), 800)
    return () => clearTimeout(t)
  }, [])

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1)
  }, [filters])

  const filteredFunds = useMemo(() => {
    let result = [...fundsData]

    if (filters.assetClass) result = result.filter(f => f.assetClass === filters.assetClass)
    if (filters.category) result = result.filter(f => f.category === filters.category)
    if (filters.risk) result = result.filter(f => f.risk === filters.risk)
    if (filters.amc) result = result.filter(f => f.amc === filters.amc)
    if (filters.minInvestment) {
      result = result.filter(f => {
        const min = minInvestmentOrder[filters.minInvestment]
        const fundMin = minInvestmentOrder[f.minInvestment]
        return fundMin && fundMin <= min
      })
    }
    if (filters.search) {
      const q = filters.search.toLowerCase()
      result = result.filter(f =>
        f.name.toLowerCase().includes(q) ||
        f.amc.toLowerCase().includes(q) ||
        f.category.toLowerCase().includes(q)
      )
    }

    // Sort
    switch (filters.sort) {
      case 'aum':
        result.sort((a, b) => parseAUM(b.aum) - parseAUM(a.aum))
        break
      case 'returns':
        result.sort((a, b) => parseReturns(b.returns1Y) - parseReturns(a.returns1Y))
        break
      case 'risk':
        result.sort((a, b) => (riskOrder[b.risk] || 0) - (riskOrder[a.risk] || 0))
        break
      case 'alpha':
        result.sort((a, b) => a.name.localeCompare(b.name))
        break
      case 'newest':
        result.sort((a, b) => new Date(b.launchDate) - new Date(a.launchDate))
        break
      default:
        break
    }
    return result
  }, [filters])

  const totalPages = Math.ceil(filteredFunds.length / ITEMS_PER_PAGE)
  const paginatedFunds = filteredFunds.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  )

  const clearFilters = () => setFilters(defaultFilters)

  return (
    <div className="min-h-screen bg-[#f7f9fc]">
      <Navbar />

      <main>
        {/* Hero */}
        <FundsHero />

        {/* Filters */}
        <FundFilters filters={filters} setFilters={setFilters} onClear={clearFilters} />

        {/* Active Filter Chips */}
        <ActiveFilters filters={filters} setFilters={setFilters} />

        {/* Results Area */}
        <section className="py-6 bg-[#f7f9fc]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">

            {/* Result header bar */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex items-center justify-between mb-6 bg-white rounded-2xl border border-[#e8edf7] px-5 py-3.5 shadow-sm">
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faFilter} className="text-[#032e92] text-sm" />
                <span className="text-sm font-semibold text-gray-700">
                  Showing{' '}
                  <span className="text-[#032e92] font-bold">{filteredFunds.length}</span>
                  {' '}Fund{filteredFunds.length !== 1 ? 's' : ''}
                  {filteredFunds.length !== fundsData.length && (
                    <span className="text-gray-400 font-medium"> of {fundsData.length} total</span>
                  )}
                </span>
              </div>

              {/* View Toggle */}
              <div className="flex items-center gap-1 bg-[#f7f9fc] border border-[#e8edf7] rounded-xl p-1">
                <button
                  onClick={() => setIsGrid(false)}
                  title="List View"
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    !isGrid
                      ? 'bg-[#032e92] text-white shadow-md shadow-blue-900/20'
                      : 'text-gray-500 hover:text-[#032e92]'
                  }`}>
                  <FontAwesomeIcon icon={faList} />
                  <span className="hidden sm:inline">List</span>
                </button>
                <button
                  onClick={() => setIsGrid(true)}
                  title="Grid View"
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    isGrid
                      ? 'bg-[#032e92] text-white shadow-md shadow-blue-900/20'
                      : 'text-gray-500 hover:text-[#032e92]'
                  }`}>
                  <FontAwesomeIcon icon={faTableCellsLarge} />
                  <span className="hidden sm:inline">Grid</span>
                </button>
              </div>
            </motion.div>

            {/* Fund Cards */}
            <FundGrid
              funds={loading ? [] : paginatedFunds}
              isGrid={isGrid}
              loading={loading} />

            {/* Pagination */}
            {!loading && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={(page) => {
                  setCurrentPage(page)
                  window.scrollTo({ top: 400, behavior: 'smooth' })
                }} />
            )}
          </div>
        </section>

        {/* Newsletter */}
        <Newsletter />
      </main>

      <Footer />
    </div>
  )
}
