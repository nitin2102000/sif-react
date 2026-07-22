export const heatmapData = {
  equity: {
    subCategories: [
      {
        id: 1,
        name: "Equity Long-Short Fund",
        funds: []
      },
      {
        id: 2,
        name: "Equity Ex-Top 100 Long-Short Fund",
        funds: []
      },
      {
        id: 3,
        name: "Sector Rotation Long-Short Fund",
        funds: []
      }
    ]
  },
  debt: {
    subCategories: [
      {
        id: 1,
        name: "Debt Long-Short Fund",
        funds: []
      },
      {
        id: 2,
        name: "Sector Debt Long-Short Fund",
        funds: []
      }
    ]
  },
  hybrid: {
    subCategories: [
      {
        id: 1,
        name: "Hybrid Long-Short Fund",
        funds: []
      },
      {
        id: 2,
        name: "Active Asset Allocator Long-Short Fund",
        funds: []
      }
    ]
  }
};

// Helper to generate a random fund
const generateFund = (id, subCatName) => {
  const amcs = ["SBI Mutual Fund", "HDFC Mutual Fund", "ICICI Prudential", "Nippon India", "Axis Mutual Fund", "Kotak Mahindra"];
  const names = ["Magnum", "qsif", "Altiva", "Titanium", "Arudha", "iSIF", "Dyna", "Apex", "Platinum", "RedHex", "Infinity"];
  
  const generateReturns = () => {
    const months = ['apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec', 'jan', 'feb', 'mar'];
    const ret = {};
    months.forEach(m => {
      // randomly sometimes return "N/L" (Not Listed) to match screenshot empty states? 
      // The screenshot has some empty grey cells with N/L. I'll add 10% chance for N/L just for realism.
      if (Math.random() < 0.1) {
        ret[m] = "N/L";
      } else {
        ret[m] = parseFloat((Math.random() * 16 - 8).toFixed(2)); // -8.00 to +8.00
      }
    });
    return ret;
  };

  return {
    id,
    logo: "", // Leaving empty as per prompt instruction, or I could put initials
    name: names[Math.floor(Math.random() * names.length)],
    amc: amcs[Math.floor(Math.random() * amcs.length)],
    aum: Math.floor(Math.random() * 50000) + 1000,
    risk: "Moderate",
    monthlyReturns: generateReturns()
  };
};

// Populate funds
Object.keys(heatmapData).forEach(cat => {
  heatmapData[cat].subCategories.forEach(sub => {
    // 8-10 dummy funds
    const numFunds = Math.floor(Math.random() * 3) + 8;
    for (let i = 1; i <= numFunds; i++) {
      sub.funds.push(generateFund(`${cat}-${sub.id}-${i}`, sub.name));
    }
  });
});
