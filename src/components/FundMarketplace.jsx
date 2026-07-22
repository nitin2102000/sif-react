import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faStar, faBookmark, faArrowTrendUp } from '@fortawesome/free-solid-svg-icons'
import { faBookmark as faBookmarkRegular } from '@fortawesome/free-regular-svg-icons'
import { fundsData } from '../data/data'

const riskColors = {
  'Low': 'bg-green-100 text-green-700',
  'Moderate': 'bg-amber-100 text-amber-700',
  'High': 'bg-red-100 text-red-700',
}

export default function FundMarketplace() {
  const [bookmarked, setBookmarked] = useState([])
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  const toggleBookmark = (id) => {
    setBookmarked(prev =>
      prev.includes(id) ? prev.filter(b => b !== id) : [...prev, id]
    )
  }

  return (
    <section id="marketplace" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 gap-4">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#eef4ff] text-[#032e92] text-sm font-semibold mb-3">
              🛒 Investment Marketplace
            </span>
            <h2 className="text-4xl font-bold text-gray-900">
              Explore <span className="gradient-text">Premium Funds</span>
            </h2>
          </div>
          <a href="#all" className="flex items-center gap-2 text-[#032e92] font-semibold hover:gap-3 transition-all">
            View All <FontAwesomeIcon icon={faArrowRight} />
          </a>
        </motion.div>

        {/* Fund Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {fundsData.map((fund, i) => (
            <motion.div
              key={fund.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="bg-white rounded-3xl border border-[#e8edf7] shadow-lg shadow-blue-900/5 hover:shadow-2xl hover:shadow-blue-900/10 hover:-translate-y-2 transition-all duration-300 group overflow-hidden">
              
              {/* Card Header */}
              <div className="p-6 pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#eef4ff] to-[#dbeafe] flex items-center justify-center text-2xl border border-[#e8edf7]">
                      {fund.logo}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-sm leading-tight group-hover:text-[#032e92] transition-colors">{fund.name}</h3>
                      <p className="text-xs text-gray-400 font-medium mt-0.5">{fund.category}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleBookmark(fund.id)}
                    className="w-9 h-9 rounded-xl flex items-center justify-center border border-[#e8edf7] hover:border-[#032e92] hover:bg-[#eef4ff] transition-all">
                    <FontAwesomeIcon
                      icon={bookmarked.includes(fund.id) ? faBookmark : faBookmarkRegular}
                      className={`text-sm ${bookmarked.includes(fund.id) ? 'text-[#032e92]' : 'text-gray-400'}`} />
                  </button>
                </div>

                {/* Returns highlight */}
                <div className="bg-gradient-to-br from-[#eef4ff] to-[#dbeafe] rounded-2xl p-4 mb-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-xs text-gray-400 font-medium">1Y Returns</p>
                      <div className="flex items-center gap-1">
                        <FontAwesomeIcon icon={faArrowTrendUp} className="text-green-500 text-sm" />
                        <span className="text-2xl font-bold text-green-600">{fund.returns1Y}%</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-400 font-medium">3Y Returns</p>
                      <span className="text-lg font-bold text-gray-700">{fund.returns3Y}%</span>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-400 font-medium">NAV</p>
                      <span className="text-sm font-bold text-[#032e92]">₹{fund.nav}</span>
                    </div>
                  </div>
                </div>

                {/* Details Row */}
                <div className="flex items-center justify-between text-xs mb-4">
                  <div>
                    <p className="text-gray-400 font-medium">Min. Investment</p>
                    <p className="font-bold text-gray-800">{fund.minInvestment}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 font-medium">AUM</p>
                    <p className="font-bold text-gray-800">{fund.aum}</p>
                  </div>
                  <div>
                    <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${riskColors[fund.risk]}`}>
                      {fund.risk} Risk
                    </span>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <FontAwesomeIcon key={i} icon={faStar}
                      className={`text-xs ${i < fund.rating ? 'text-amber-400' : 'text-gray-200'}`} />
                  ))}
                  <span className="text-xs text-gray-400 ml-1 font-medium">{fund.rating}.0/5</span>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-6 pb-6 flex gap-3">
                <button className="flex-1 py-3 rounded-2xl bg-[#032e92] text-white text-sm font-semibold hover:bg-[#021d63] shadow-md shadow-blue-900/20 transition-all duration-200 flex items-center justify-center gap-2 group-hover:gap-3">
                  Invest Now <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
                </button>
                <button className="px-4 py-3 rounded-2xl border-2 border-[#e8edf7] text-gray-600 text-sm font-semibold hover:border-[#032e92] hover:text-[#032e92] transition-all duration-200">
                  Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
