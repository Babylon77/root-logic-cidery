'use client'

import { useState, useEffect, ReactNode } from 'react'
import { 
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement 
} from 'chart.js'
import { Bar, Pie, Line } from 'react-chartjs-2'

// Add InfoBox component with proper TypeScript types
interface InfoBoxProps {
  title: string;
  children: ReactNode;
}

const InfoBox = ({ title, children }: InfoBoxProps) => {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <div className="inline-block relative">
      <button 
        className="ml-1 text-gray-500 hover:text-gray-700 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute z-10 w-64 p-3 bg-white rounded-lg shadow-lg border border-gray-200 text-sm text-left mt-1 right-0">
          <h5 className="font-medium text-gray-900 mb-1">{title}</h5>
          <div className="text-gray-700">
            {children}
          </div>
        </div>
      )}
    </div>
  )
}

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
)

// Default values
const DEFAULT_VALUES = {
  propertyValue: 1150000,
  downPayment: 20,
  interestRate: 6,
  loanTerm: 30,
  propertyTax: 8000,
  insurance: 3600,
  orchardAcres: 12,
  treesPerAcre: 131,
  matureTreePercentage: 70,
  applesPerMatureTree: 750, // updated to 750 based on user research for well-managed semi-dwarf trees
  applesPerYoungTree: 180, // increased to approx. 24% of mature tree yield
  averageAppleWeightOz: 6, // adjusted back to original weight
  applesPerBushel: 125, // standard conversion
  ciderYield: 100, // percentage of apples for hard cider
  ciderPrice: 18, // per gallon
  pintPrice: 6, // per pint direct sales
  kegPrice: 180, // per 1/6 barrel keg (5.16 gallons)
  canPrice: 4, // per 16oz can
  cansPerGallon: 8, // 16oz cans per gallon (8 pints)
  gallonsPerBushel: 3.1, // gallons of cider per bushel
  packagingCostPerGallon: 3.50, // bottles, cans, labels, etc.
  exciseTaxPerGallon: 1.07, // federal excise tax on hard cider
  licensingCosts: 3500, // annual licensing fees
  distributionCostPercent: 15, // percentage of revenue for distribution costs
  directSalesPercent: 40, // percentage of sales direct to consumer
  abnbNights: 0, // nights per year - initially zero
  abnbRate: 250, // per night
  utilityExpenses: 12000, // annual
  laborExpenses: 85000, // annual (will be calculated from labor analysis)
  maintenanceExpenses: 15000, // annual
  marketingExpenses: 18000, // annual
  equipmentCost: 165000, // Total for production and packaging equipment
  equipmentLifespan: 10, // years for depreciation
  productionEfficiency: 85, // percentage of theoretical yield actually achieved
  salesEfficiency: 90, // percentage of product actually sold
  wasteSpoilage: 5, // percentage of product lost to waste/spoilage
  additionalCapitalExpenses: 70000, // renovations, initial inventory, etc.
  additionalCapitalLifespan: 5, // years to amortize additional capital expenses
  farmLaborPercent: 40, // percentage of total labor
  harvestLaborPercent: 25, // percentage of total labor
  productionLaborPercent: 20, // percentage of total labor
  salesAdminPercent: 15, // percentage of total labor
  laborHourlyRate: 18, // average hourly rate for farm labor
  automationLevel: 40, // percentage of automation vs manual labor
}

interface BusinessCalculatorProps {
  onResultsChange?: (results: any) => void;
}

export default function BusinessCalculator({ onResultsChange }: BusinessCalculatorProps) {
  const [sliders, setSliders] = useState(DEFAULT_VALUES)
  const [results, setResults] = useState({
    monthlyMortgage: 0,
    annualFixedCosts: 0,
    annualRevenue: 0,
    annualExpenses: 0,
    annualProfit: 0,
    roi: 0,
    totalTrees: 0,
    totalApples: 0,
    totalBushels: 0,
    totalCanEquivalent: 0,
    ciderGallons: 0,
    packagingCosts: 0,
    exciseTax: 0,
    licensingCosts: 0,
    pintEquivalent: 0,
    costPerPint: 0,
    revenuePerPint: 0,
    profitPerPint: 0,
    directSalesRevenue: 0,
    wholesaleRevenue: 0,
    distributionCosts: 0,
    equipmentDepreciation: 0,
    additionalCapitalAmortization: 0,
    productLoss: 0,
    actualGallonsProduced: 0,
    actualGallonsSold: 0,
    effectiveRevenue: 0,
    theoreticalMaxGallons: 0,
    totalLaborHours: 0,
    farmLaborHours: 0,
    harvestLaborHours: 0,
    productionLaborHours: 0,
    salesAdminHours: 0,
    monthlyLaborHours: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    automationSavings: 0,
    laborExpenses: 0, // Add this property to fix the type error
  })
  
  // Calculate financial outcomes whenever sliders change
  useEffect(() => {
    calculateFinancials()
  }, [sliders])
  
  const calculateFinancials = () => {
    // Calculate total trees and apple yield
    const totalTrees = Math.round(sliders.orchardAcres * sliders.treesPerAcre)
    const matureTrees = Math.round(totalTrees * (sliders.matureTreePercentage / 100))
    const youngTrees = totalTrees - matureTrees
    
    // Calculate in apples instead of pounds
    const matureTreeApples = matureTrees * sliders.applesPerMatureTree
    const youngTreeApples = youngTrees * sliders.applesPerYoungTree
    const totalApples = matureTreeApples + youngTreeApples
    
    // Convert to bushels
    const totalBushels = totalApples / sliders.applesPerBushel
    
    // For weight calculations if needed
    const ouncesPerApple = sliders.averageAppleWeightOz
    const totalAppleOunces = totalApples * ouncesPerApple
    const totalApplePounds = totalAppleOunces / 16 // 16 oz per pound
    
    // Apply production efficiency to account for real-world conditions
    const effectiveAppleYield = totalApplePounds * (sliders.productionEfficiency / 100)
    
    // Calculate mortgage payment
    const principal = sliders.propertyValue * (1 - sliders.downPayment / 100)
    const monthlyRate = sliders.interestRate / 100 / 12
    const payments = sliders.loanTerm * 12
    
    const monthlyMortgage = principal * monthlyRate * Math.pow(1 + monthlyRate, payments) / 
      (Math.pow(1 + monthlyRate, payments) - 1)
    
    const annualMortgage = monthlyMortgage * 12
    
    // Calculate equipment depreciation and capital expense amortization
    const equipmentDepreciation = sliders.equipmentCost / sliders.equipmentLifespan
    const additionalCapitalAmortization = sliders.additionalCapitalExpenses / sliders.additionalCapitalLifespan
    
    // Calculate annual fixed costs
    const annualFixedCosts = annualMortgage + sliders.propertyTax + sliders.insurance + 
                           equipmentDepreciation + additionalCapitalAmortization
    
    // Calculate cider production using bushels
    const bushelsForCider = totalBushels * (sliders.ciderYield / 100) * (sliders.productionEfficiency / 100)
    const ciderGallons = bushelsForCider * sliders.gallonsPerBushel
    
    // Calculate cans (16 oz)
    const totalCanEquivalent = ciderGallons * sliders.cansPerGallon
    
    // Account for waste/spoilage
    const netCiderGallons = ciderGallons * (1 - sliders.wasteSpoilage / 100)
    const netCans = totalCanEquivalent * (1 - sliders.wasteSpoilage / 100)
    
    // Account for sales efficiency (not all product gets sold)
    const soldCiderGallons = netCiderGallons * (sliders.salesEfficiency / 100)
    const soldCans = netCans * (sliders.salesEfficiency / 100)
    
    // Calculate direct sales vs wholesale
    const directSalesGallons = soldCiderGallons * (sliders.directSalesPercent / 100)
    const wholesaleGallons = soldCiderGallons - directSalesGallons
    
    // Calculate revenue from direct sales (higher margin)
    const pintsPerGallon = 8
    const directSalesRevenue = directSalesGallons * pintsPerGallon * sliders.pintPrice
    
    // Calculate revenue from wholesale (kegs, lower margin)
    const gallonsPerKeg = 5.16  // 1/6 barrel keg
    const kegs = wholesaleGallons / gallonsPerKeg
    const wholesaleRevenue = kegs * sliders.kegPrice
    
    // Total cider revenue
    const ciderRevenue = directSalesRevenue + wholesaleRevenue
    
    // 2. Fresh apple sales (assuming $1.50 per pound average for remaining apples)
    const freshApplePounds = effectiveAppleYield * (1 - sliders.ciderYield / 100) * (sliders.salesEfficiency / 100)
    const freshAppleRevenue = freshApplePounds * 1.5
    
    // 3. Airbnb revenue
    const abnbRevenue = sliders.abnbNights * sliders.abnbRate
    
    // 4. Other products (honey, vinegar, etc.) - estimated at 15% of apple product revenue
    const otherProductsRevenue = (ciderRevenue + freshAppleRevenue) * 0.15
    
    // Total revenue
    const annualRevenue = ciderRevenue + freshAppleRevenue + abnbRevenue + otherProductsRevenue
    
    // Calculate specific expenses
    const packagingCosts = soldCiderGallons * sliders.packagingCostPerGallon
    const exciseTax = soldCiderGallons * sliders.exciseTaxPerGallon
    const licensingCosts = sliders.licensingCosts
    const distributionCosts = annualRevenue * (sliders.distributionCostPercent / 100)
    
    // Calculate total expenses
    const calculatedLaborExpenses = sliders.laborHourlyRate * 
      (sliders.orchardAcres * 500) * (1 - sliders.automationLevel / 100) // 500 hours per acre annually
    const annualExpenses = sliders.utilityExpenses + calculatedLaborExpenses + 
      sliders.maintenanceExpenses + sliders.marketingExpenses + annualFixedCosts +
      packagingCosts + exciseTax + licensingCosts + distributionCosts
    
    // Calculate profit and ROI
    const annualProfit = annualRevenue - annualExpenses
    const totalInvestment = sliders.propertyValue * (sliders.downPayment / 100) + 
                           sliders.equipmentCost + sliders.additionalCapitalExpenses
    const roi = (annualProfit / totalInvestment) * 100
    
    // Calculate per-unit metrics
    const pintEquivalent = soldCiderGallons * pintsPerGallon
    const costPerPint = pintEquivalent > 0 ? annualExpenses / pintEquivalent : 0
    const revenuePerPint = pintEquivalent > 0 ? annualRevenue / pintEquivalent : 0
    const profitPerPint = revenuePerPint - costPerPint
    
    // Calculate product loss
    const gallonsLost = ciderGallons - soldCiderGallons
    
    // Calculate labor hours breakdown
    const totalLaborHours = calculatedLaborExpenses / sliders.laborHourlyRate
    
    // Calculate hours by type
    const farmLaborHours = totalLaborHours * (sliders.farmLaborPercent / 100)
    const harvestLaborHours = totalLaborHours * (sliders.harvestLaborPercent / 100)
    const productionLaborHours = totalLaborHours * (sliders.productionLaborPercent / 100)
    const salesAdminHours = totalLaborHours * (sliders.salesAdminPercent / 100)
    
    // Calculate automation savings
    const potentialHoursWithoutAutomation = totalLaborHours / (1 - sliders.automationLevel/100)
    const automationSavings = potentialHoursWithoutAutomation - totalLaborHours
    
    // Calculate seasonal distribution (approximate for apple farm)
    // Indexed by month (0 = Jan, 11 = Dec)
    const seasonalDistribution = [
      0.04, // January
      0.04, // February
      0.06, // March
      0.08, // April
      0.10, // May
      0.10, // June
      0.10, // July
      0.12, // August
      0.16, // September (peak harvest)
      0.12, // October (harvest/production)
      0.05, // November
      0.03  // December
    ]
    
    // Calculate monthly labor hours
    const monthlyLaborHours = seasonalDistribution.map(factor => 
      Math.round(totalLaborHours * factor)
    )
    
    const updatedResults = {
      monthlyMortgage: Math.round(monthlyMortgage),
      annualFixedCosts: Math.round(annualFixedCosts),
      annualRevenue: Math.round(annualRevenue),
      annualExpenses: Math.round(annualExpenses),
      annualProfit: Math.round(annualProfit),
      roi: Math.round(roi * 10) / 10, // Round to 1 decimal place
      totalTrees: totalTrees,
      totalApples: Math.round(totalApples),
      totalBushels: Math.round(totalBushels),
      totalCanEquivalent: Math.round(totalCanEquivalent),
      ciderGallons: Math.round(netCiderGallons),
      packagingCosts: Math.round(packagingCosts),
      exciseTax: Math.round(exciseTax),
      licensingCosts: licensingCosts,
      pintEquivalent: Math.round(pintEquivalent),
      costPerPint: Math.round(costPerPint * 100) / 100,
      revenuePerPint: Math.round(revenuePerPint * 100) / 100,
      profitPerPint: Math.round(profitPerPint * 100) / 100,
      directSalesRevenue: Math.round(directSalesRevenue),
      wholesaleRevenue: Math.round(wholesaleRevenue),
      distributionCosts: Math.round(distributionCosts),
      equipmentDepreciation: Math.round(equipmentDepreciation),
      additionalCapitalAmortization: Math.round(additionalCapitalAmortization),
      productLoss: Math.round(gallonsLost),
      actualGallonsProduced: Math.round(netCiderGallons),
      actualGallonsSold: Math.round(soldCiderGallons),
      effectiveRevenue: Math.round(annualRevenue),
      theoreticalMaxGallons: Math.round(bushelsForCider * sliders.gallonsPerBushel),
      totalLaborHours: Math.round(totalLaborHours),
      farmLaborHours: Math.round(farmLaborHours),
      harvestLaborHours: Math.round(harvestLaborHours),
      productionLaborHours: Math.round(productionLaborHours),
      salesAdminHours: Math.round(salesAdminHours),
      monthlyLaborHours: monthlyLaborHours,
      automationSavings: Math.round(automationSavings),
      laborExpenses: Math.round(calculatedLaborExpenses), // Store calculated labor expense
    }
    
    setResults(updatedResults)
    
    // Call the callback if provided
    if (onResultsChange) {
      onResultsChange(updatedResults)
    }
  }
  
  // Handle slider changes
  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setSliders(prev => ({
      ...prev,
      [name]: parseFloat(value)
    }))
  }

  // Revenue breakdown chart data
  const revenueData = {
    labels: ['Direct Cider Sales', 'Wholesale Cider', 'Fresh Apple Sales', 'Other Products'],
    datasets: [
      {
        data: [
          results.directSalesRevenue,
          results.wholesaleRevenue,
          results.totalApples * (1 - sliders.ciderYield / 100) * 1.5,
          (results.directSalesRevenue + results.wholesaleRevenue + 
            results.totalApples * (1 - sliders.ciderYield / 100) * 1.5) * 0.15
        ],
        backgroundColor: [
          'rgba(255, 159, 64, 0.6)', // amber for direct sales
          'rgba(20, 184, 166, 0.6)', // teal for wholesale
          'rgba(153, 102, 255, 0.6)', // purple for fresh apples
          'rgba(75, 192, 192, 0.6)'   // turquoise for other products
        ],
        borderColor: [
          'rgba(255, 159, 64, 1)',
          'rgba(20, 184, 166, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(75, 192, 192, 1)'
        ],
        borderWidth: 1,
      },
    ],
  }

  // Expenses breakdown chart data
  const expensesData = {
    labels: ['Mortgage', 'Taxes & Insurance', 'Packaging', 'Excise Tax', 'Licensing', 'Distribution', 'Utilities', 'Labor', 'Maintenance', 'Marketing'],
    datasets: [
      {
        data: [
          results.monthlyMortgage * 12,
          sliders.propertyTax + sliders.insurance,
          results.packagingCosts,
          results.exciseTax,
          results.licensingCosts,
          results.distributionCosts,
          sliders.utilityExpenses,
          results.laborExpenses,
          sliders.maintenanceExpenses,
          sliders.marketingExpenses
        ],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',   // red
          'rgba(54, 162, 235, 0.6)',   // blue
          'rgba(255, 206, 86, 0.6)',   // yellow
          'rgba(75, 192, 192, 0.6)',   // green
          'rgba(153, 102, 255, 0.6)',  // purple
          'rgba(255, 159, 64, 0.6)',   // orange
          'rgba(199, 210, 254, 0.6)',  // light purple
          'rgba(165, 243, 252, 0.6)',  // light cyan
          'rgba(187, 247, 208, 0.6)',  // light green
          'rgba(254, 202, 202, 0.6)'   // light red
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(199, 210, 254, 1)',
          'rgba(165, 243, 252, 1)',
          'rgba(187, 247, 208, 1)',
          'rgba(254, 202, 202, 1)'
        ],
        borderWidth: 1,
      },
    ],
  }

  // Sensitivity analysis - profit vs apple yield
  const yieldAnalysisData = {
    labels: ['Low Yield (-30%)', 'Moderate (-15%)', 'Expected Yield', 'Good Yield (+15%)', 'Excellent (+30%)'],
    datasets: [{
      label: 'Annual Profit ($)',
      data: [
        // Calculate profit at different yield levels
        calculateProfitWithYield(results.totalApples * 0.7),
        calculateProfitWithYield(results.totalApples * 0.85),
        calculateProfitWithYield(results.totalApples),
        calculateProfitWithYield(results.totalApples * 1.15),
        calculateProfitWithYield(results.totalApples * 1.3)
      ],
      backgroundColor: 'rgba(75, 192, 192, 0.6)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1
    }]
  }

  function calculateProfitWithYield(yield_: number) {
    // Calculate cider production from yield
    const bushelsForCider = yield_ * (sliders.ciderYield / 100) * (sliders.productionEfficiency / 100)
    const ciderGallons = bushelsForCider * sliders.gallonsPerBushel
    
    // Calculate direct sales vs wholesale
    const directSalesGallons = ciderGallons * (sliders.directSalesPercent / 100)
    const wholesaleGallons = ciderGallons - directSalesGallons
    
    // Calculate revenue from direct sales (higher margin)
    const pintsPerGallon = 8
    const directSalesRevenue = directSalesGallons * pintsPerGallon * sliders.pintPrice
    
    // Calculate revenue from wholesale (kegs, lower margin)
    const gallonsPerKeg = 5.16  // 1/6 barrel keg
    const kegs = wholesaleGallons / gallonsPerKeg
    const wholesaleRevenue = kegs * sliders.kegPrice
    
    // Total cider revenue
    const ciderRevenue = directSalesRevenue + wholesaleRevenue
    
    // Fresh apple sales
    const freshApplePounds = yield_ * (1 - sliders.ciderYield / 100)
    const freshAppleRevenue = freshApplePounds * 1.5
    
    // Other products revenue
    const otherProductsRevenue = (ciderRevenue + freshAppleRevenue) * 0.15
    
    // Total revenue
    const totalRevenue = ciderRevenue + freshAppleRevenue + otherProductsRevenue
    
    // Calculate specific expenses that vary with yield
    const packagingCosts = ciderGallons * sliders.packagingCostPerGallon
    const exciseTax = ciderGallons * sliders.exciseTaxPerGallon
    const distributionCosts = totalRevenue * (sliders.distributionCostPercent / 100)
    
    // Variable expenses (those that change with production)
    const variableExpenses = packagingCosts + exciseTax + distributionCosts
    
    // Fixed expenses (those that don't change with production)
    const fixedExpenses = results.annualExpenses - results.packagingCosts - results.exciseTax - results.distributionCosts
    
    // Total expenses
    const totalExpenses = fixedExpenses + variableExpenses
    
    return Math.round(totalRevenue - totalExpenses)
  }

  // Labor breakdown chart data
  const laborTypeData = {
    labels: ['Farm Operations', 'Harvest', 'Production', 'Sales/Admin'],
    datasets: [
      {
        data: [
          results.farmLaborHours,
          results.harvestLaborHours,
          results.productionLaborHours,
          results.salesAdminHours,
        ],
        backgroundColor: [
          'rgba(46, 204, 113, 0.6)', // green for farm operations
          'rgba(241, 196, 15, 0.6)', // yellow for harvest
          'rgba(52, 152, 219, 0.6)', // blue for production
          'rgba(155, 89, 182, 0.6)'  // purple for sales/admin
        ],
        borderColor: [
          'rgba(46, 204, 113, 1)',
          'rgba(241, 196, 15, 1)',
          'rgba(52, 152, 219, 1)',
          'rgba(155, 89, 182, 1)'
        ],
        borderWidth: 1,
      },
    ],
  }

  // Labor hours by month chart data
  const seasonalLaborData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Labor Hours',
        data: results.monthlyLaborHours,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.3,
        fill: true
      }
    ],
  }

  // Calculate labor costs based on labor analysis inputs
  // Use a more realistic base calculation - typical orchard needs ~500 hours per acre annually
  const baseHoursPerAcre = 500; // Industry average for apple orchards with cider production
  const totalPotentialHours = sliders.orchardAcres * baseHoursPerAcre;
  const totalLaborHours = totalPotentialHours * (1 - sliders.automationLevel / 100);
  
  // Calculate the labor expenses from hours
  const calculatedLaborExpenses = totalLaborHours * sliders.laborHourlyRate;

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Interactive Financial Analysis</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Property and Loan Information */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Property & Loan Information</h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Property Value: ${sliders.propertyValue.toLocaleString()}
              </label>
              <input
                type="range"
                min="900000"
                max="1400000"
                step="10000"
                name="propertyValue"
                value={sliders.propertyValue}
                onChange={handleSliderChange}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Down Payment: {sliders.downPayment}%
              </label>
              <input
                type="range"
                min="10"
                max="40"
                step="1"
                name="downPayment"
                value={sliders.downPayment}
                onChange={handleSliderChange}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Interest Rate: {sliders.interestRate}%
              </label>
              <input
                type="range"
                min="3"
                max="9"
                step="0.125"
                name="interestRate"
                value={sliders.interestRate}
                onChange={handleSliderChange}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Loan Term: {sliders.loanTerm} years
              </label>
              <input
                type="range"
                min="15"
                max="30"
                step="5"
                name="loanTerm"
                value={sliders.loanTerm}
                onChange={handleSliderChange}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Annual Property Tax: ${sliders.propertyTax.toLocaleString()}
              </label>
              <input
                type="range"
                min="6000"
                max="12000"
                step="100"
                name="propertyTax"
                value={sliders.propertyTax}
                onChange={handleSliderChange}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Annual Insurance: ${sliders.insurance.toLocaleString()}
              </label>
              <input
                type="range"
                min="2400"
                max="6000"
                step="100"
                name="insurance"
                value={sliders.insurance}
                onChange={handleSliderChange}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>
          </div>
        </div>
        
        {/* Production and Revenue */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Orchard & Production</h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Orchard Acres: {sliders.orchardAcres} acres
              </label>
              <input
                type="range"
                min="8"
                max="20"
                step="0.5"
                name="orchardAcres"
                value={sliders.orchardAcres}
                onChange={handleSliderChange}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Trees Per Acre: {sliders.treesPerAcre} trees
              </label>
              <input
                type="range"
                min="100"
                max="160"
                step="1"
                name="treesPerAcre"
                value={sliders.treesPerAcre}
                onChange={handleSliderChange}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Mature Tree Percentage: {sliders.matureTreePercentage}% 
              </label>
              <input
                type="range"
                min="50"
                max="90"
                step="5"
                name="matureTreePercentage"
                value={sliders.matureTreePercentage}
                onChange={handleSliderChange}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Total Trees: {results.totalTrees} trees (~ {Math.round(results.totalApples/results.totalTrees)} lbs per tree avg)
              </label>
              <div className="h-2 bg-green-200 rounded-lg">
                <div 
                  className="h-2 bg-green-600 rounded-lg" 
                  style={{width: `${sliders.matureTreePercentage}%`}}
                ></div>
              </div>
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>Young Trees: {Math.round(results.totalTrees * (1-sliders.matureTreePercentage/100))}</span>
                <span>Mature Trees: {Math.round(results.totalTrees * (sliders.matureTreePercentage/100))}</span>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Percentage for Cider: {sliders.ciderYield}%
              </label>
              <input
                type="range"
                min="30"
                max="100"
                step="5"
                name="ciderYield"
                value={sliders.ciderYield}
                onChange={handleSliderChange}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Cider Price per Gallon: ${sliders.ciderPrice}
              </label>
              <input
                type="range"
                min="12"
                max="24"
                step="1"
                name="ciderPrice"
                value={sliders.ciderPrice}
                onChange={handleSliderChange}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Production Results */}
      <div className="mt-8 bg-gray-50 p-6 rounded-lg">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Production Statistics</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white shadow-md rounded-lg p-6 border-l-4 border-green-200">
            <h4 className="text-sm text-gray-500">Annual Apple Harvest</h4>
            <p className="text-2xl font-bold">{results.totalApples.toLocaleString()} apples</p>
            <p className="text-sm text-gray-500">({results.totalBushels.toLocaleString()} bushels)</p>
            <button 
              onClick={() => {
                document.getElementById('yieldDetailsModal')?.classList.remove('hidden');
              }}
              className="mt-2 text-xs px-2 py-1 bg-gray-100 hover:bg-gray-200 rounded text-gray-700"
            >
              View Calculation Details
            </button>
          </div>
          
          <div className="bg-white shadow-md rounded-lg p-6 border-l-4 border-blue-200">
            <h4 className="text-sm text-gray-500">Hard Cider Production</h4>
            <p className="text-2xl font-bold">{results.ciderGallons.toLocaleString()} gallons</p>
            <p className="text-sm text-gray-500">{Math.round(results.totalCanEquivalent).toLocaleString()} 16oz cans</p>
            <button 
              onClick={() => {
                document.getElementById('ciderDetailsModal')?.classList.remove('hidden');
              }}
              className="mt-2 text-xs px-2 py-1 bg-gray-100 hover:bg-gray-200 rounded text-gray-700"
            >
              View Calculation Details
            </button>
          </div>
          
          <div className="bg-white shadow-md rounded-lg p-6 border-l-4 border-purple-200">
            <h4 className="text-sm text-gray-500">Fresh Apples</h4>
            <p className="text-2xl font-bold">
              {Math.round(results.totalApples * (1-sliders.ciderYield/100)).toLocaleString()} apples
            </p>
            <p className="text-sm text-gray-500">
              ({Math.round(results.totalBushels * (1-sliders.ciderYield/100))} bushels)
            </p>
          </div>
        </div>
        
        {/* Yield Calculation Modal */}
        <div id="yieldDetailsModal" className="hidden fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-gray-900">Apple Yield Calculation Details</h3>
                <button 
                  onClick={() => {
                    document.getElementById('yieldDetailsModal')?.classList.add('hidden');
                  }}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-800 mb-2">Step 1: Calculate Total Trees</h4>
                  <div className="grid grid-cols-3 gap-2 text-sm">
                    <div className="font-medium">Orchard Size</div>
                    <div className="col-span-2">{sliders.orchardAcres} acres</div>
                    
                    <div className="font-medium">Density</div>
                    <div className="col-span-2">{sliders.treesPerAcre} trees per acre</div>
                    
                    <div className="font-medium">Total Trees</div>
                    <div className="col-span-2 font-bold">{results.totalTrees} trees</div>
                  </div>
                  <div className="mt-2 text-xs text-gray-500">
                    Formula: Orchard Size × Tree Density = Total Trees
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-800 mb-2">Step 2: Calculate Tree Yield in Apples</h4>
                  <div className="grid grid-cols-3 gap-2 text-sm">
                    <div className="font-medium">Mature Trees</div>
                    <div className="col-span-2">{Math.round(results.totalTrees * (sliders.matureTreePercentage/100))} trees ({sliders.matureTreePercentage}%)</div>
                    
                    <div className="font-medium">Young Trees</div>
                    <div className="col-span-2">{Math.round(results.totalTrees * (1-sliders.matureTreePercentage/100))} trees ({100-sliders.matureTreePercentage}%)</div>
                    
                    <div className="font-medium">Mature Tree Yield</div>
                    <div className="col-span-2">{sliders.applesPerMatureTree} apples per tree</div>
                    
                    <div className="font-medium">Young Tree Yield</div>
                    <div className="col-span-2">{sliders.applesPerYoungTree} apples per tree</div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-800 mb-2">Step 3: Calculate Theoretical Apple Count</h4>
                  <div className="grid grid-cols-3 gap-2 text-sm">
                    <div className="font-medium">Mature Trees Yield</div>
                    <div className="col-span-2">
                      {Math.round(results.totalTrees * (sliders.matureTreePercentage/100))} trees × {sliders.applesPerMatureTree} apples = 
                      {(Math.round(results.totalTrees * (sliders.matureTreePercentage/100)) * sliders.applesPerMatureTree).toLocaleString()} apples
                    </div>
                    
                    <div className="font-medium">Young Trees Yield</div>
                    <div className="col-span-2">
                      {Math.round(results.totalTrees * (1-sliders.matureTreePercentage/100))} trees × {sliders.applesPerYoungTree} apples = 
                      {(Math.round(results.totalTrees * (1-sliders.matureTreePercentage/100)) * sliders.applesPerYoungTree).toLocaleString()} apples
                    </div>
                    
                    <div className="font-medium">Total Apples</div>
                    <div className="col-span-2 font-bold">
                      {results.totalApples.toLocaleString()} apples
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-800 mb-2">Step 4: Convert to Bushels</h4>
                  <div className="grid grid-cols-3 gap-2 text-sm">
                    <div className="font-medium">Total Apples</div>
                    <div className="col-span-2">{results.totalApples.toLocaleString()} apples</div>
                    
                    <div className="font-medium">Conversion Rate</div>
                    <div className="col-span-2">{sliders.applesPerBushel} apples per bushel</div>
                    
                    <div className="font-medium">Total Bushels</div>
                    <div className="col-span-2 font-bold">{results.totalBushels.toLocaleString()} bushels</div>
                  </div>
                  <div className="mt-2 text-xs text-gray-500">
                    Formula: Total Apples ÷ Apples per Bushel = Total Bushels
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-800 mb-2">Step 5: Apply Production Efficiency</h4>
                  <div className="grid grid-cols-3 gap-2 text-sm">
                    <div className="font-medium">Production Efficiency</div>
                    <div className="col-span-2">{sliders.productionEfficiency}%</div>
                    
                    <div className="font-medium">Effective Bushels</div>
                    <div className="col-span-2 font-bold text-green-600">
                      {Math.round(results.totalBushels * (sliders.productionEfficiency/100)).toLocaleString()} bushels
                    </div>
                  </div>
                  <div className="mt-2 text-xs text-gray-500">
                    Formula: Theoretical Bushels × Production Efficiency = Actual Bushels
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Cider Production Modal */}
        <div id="ciderDetailsModal" className="hidden fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-gray-900">Cider Production Calculation Details</h3>
                <button 
                  onClick={() => {
                    document.getElementById('ciderDetailsModal')?.classList.add('hidden');
                  }}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-800 mb-2">Step 1: Determine Bushels for Cider</h4>
                  <div className="grid grid-cols-3 gap-2 text-sm">
                    <div className="font-medium">Total Bushels</div>
                    <div className="col-span-2">{results.totalBushels.toLocaleString()} bushels</div>
                    
                    <div className="font-medium">Cider Percentage</div>
                    <div className="col-span-2">{sliders.ciderYield}% of harvest</div>
                    
                    <div className="font-medium">Bushels for Cider</div>
                    <div className="col-span-2 font-bold">
                      {Math.round(results.totalBushels * (sliders.ciderYield/100)).toLocaleString()} bushels
                    </div>
                  </div>
                  <div className="mt-2 text-xs text-gray-500">
                    Formula: Total Bushels × Cider Percentage = Bushels for Cider
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-800 mb-2">Step 2: Convert Bushels to Cider Gallons</h4>
                  <div className="grid grid-cols-3 gap-2 text-sm">
                    <div className="font-medium">Bushels for Cider</div>
                    <div className="col-span-2">{Math.round(results.totalBushels * (sliders.ciderYield/100)).toLocaleString()} bushels</div>
                    
                    <div className="font-medium">Conversion Rate</div>
                    <div className="col-span-2">{sliders.gallonsPerBushel} gallons per bushel</div>
                    
                    <div className="font-medium">Theoretical Gallons</div>
                    <div className="col-span-2 font-bold">
                      {results.ciderGallons.toLocaleString()} gallons
                    </div>
                  </div>
                  <div className="mt-2 text-xs text-gray-500">
                    Formula: Bushels for Cider × Gallons per Bushel = Theoretical Gallons
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-800 mb-2">Step 3: Convert to 16oz Cans</h4>
                  <div className="grid grid-cols-3 gap-2 text-sm">
                    <div className="font-medium">Theoretical Gallons</div>
                    <div className="col-span-2">{results.ciderGallons.toLocaleString()} gallons</div>
                    
                    <div className="font-medium">Cans per Gallon</div>
                    <div className="col-span-2">{sliders.cansPerGallon} 16oz cans</div>
                    
                    <div className="font-medium">Total Cans</div>
                    <div className="col-span-2 font-bold">
                      {results.totalCanEquivalent.toLocaleString()} cans
                    </div>
                  </div>
                  <div className="mt-2 text-xs text-gray-500">
                    Formula: Gallons × Cans per Gallon = Total Cans
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-800 mb-2">Step 4: Account for Production Loss</h4>
                  <div className="grid grid-cols-3 gap-2 text-sm">
                    <div className="font-medium">Waste/Spoilage</div>
                    <div className="col-span-2">{sliders.wasteSpoilage}% loss</div>
                    
                    <div className="font-medium">Actual Production</div>
                    <div className="col-span-2 font-bold">
                      {Math.round(results.ciderGallons * (1-sliders.wasteSpoilage/100)).toLocaleString()} gallons
                    </div>
                    
                    <div className="font-medium">Actual Cans</div>
                    <div className="col-span-2">
                      {Math.round(results.totalCanEquivalent * (1-sliders.wasteSpoilage/100)).toLocaleString()} cans
                    </div>
                  </div>
                  <div className="mt-2 text-xs text-gray-500">
                    Formula: Theoretical Amount × (1 - Waste Percentage) = Actual Production
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-800 mb-2">Step 5: Calculate Sellable Product</h4>
                  <div className="grid grid-cols-3 gap-2 text-sm">
                    <div className="font-medium">Sales Efficiency</div>
                    <div className="col-span-2">{sliders.salesEfficiency}% sold</div>
                    
                    <div className="font-medium">Gallons Sold</div>
                    <div className="col-span-2 font-bold text-blue-600">
                      {Math.round(results.ciderGallons * (1-sliders.wasteSpoilage/100) * (sliders.salesEfficiency/100)).toLocaleString()} gallons
                    </div>
                    
                    <div className="font-medium">Cans Sold</div>
                    <div className="col-span-2 text-blue-600">
                      {Math.round(results.totalCanEquivalent * (1-sliders.wasteSpoilage/100) * (sliders.salesEfficiency/100)).toLocaleString()} cans
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Move Labor Analysis section before expenses */}
      
      {/* Labor Analysis Section - MOVED UP */}
      <div className="mt-8 bg-gray-50 p-6 rounded-lg">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Labor Analysis</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Average Hourly Rate: ${sliders.laborHourlyRate.toFixed(2)}
              <InfoBox title="Hourly Rate">
                <p>Average wage paid to workers across all roles.</p>
                <ul className="list-disc pl-4 mt-1 space-y-1">
                  <li>Determines total labor costs</li>
                  <li>Varies by skill level and job type</li>
                  <li>Includes taxes and benefits</li>
                </ul>
              </InfoBox>
            </label>
            <input
              type="range"
              min="14"
              max="25"
              step="0.5"
              name="laborHourlyRate"
              value={sliders.laborHourlyRate}
              onChange={handleSliderChange}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <p className="text-sm text-gray-500 mt-1">Total annual hours: {results.totalLaborHours.toLocaleString()}</p>
            <p className="text-sm font-medium text-gray-700 mt-1">Annual labor expense: ${results.laborExpenses.toLocaleString()}</p>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Automation Level: {sliders.automationLevel}%
              <InfoBox title="Automation Level">
                <p>Percentage of work handled by machines vs. manual labor.</p>
                <ul className="list-disc pl-4 mt-1 space-y-1">
                  <li>Higher levels reduce labor costs</li>
                  <li>Requires capital investment</li>
                  <li>Different tasks have different automation potential</li>
                  <li>Impacts production consistency and quality control</li>
                </ul>
              </InfoBox>
            </label>
            <input
              type="range"
              min="10"
              max="70"
              step="5"
              name="automationLevel"
              value={sliders.automationLevel}
              onChange={handleSliderChange}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <p className="text-sm text-gray-500 mt-1">Hours saved through automation: {results.automationSavings.toLocaleString()}</p>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Farm Labor: {sliders.farmLaborPercent}%
              <InfoBox title="Farm Labor">
                <p>Year-round work focused on orchard maintenance and care.</p>
                <ul className="list-disc pl-4 mt-1 space-y-1">
                  <li>Pruning, spraying, and irrigation</li>
                  <li>Performed by permanent staff</li>
                  <li>Consistent workload throughout growing season</li>
                  <li>Critical for orchard health and productivity</li>
                </ul>
              </InfoBox>
            </label>
            <input
              type="range"
              min="20"
              max="60"
              step="5"
              name="farmLaborPercent"
              value={sliders.farmLaborPercent}
              onChange={handleSliderChange}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <p className="text-sm text-gray-500 mt-1">{results.farmLaborHours.toLocaleString()} hours annually</p>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Harvest Labor: {sliders.harvestLaborPercent}%
              <InfoBox title="Harvest Labor">
                <p>Concentrated seasonal work during harvest periods.</p>
                <ul className="list-disc pl-4 mt-1 space-y-1">
                  <li>Picking, collecting, and transporting apples</li>
                  <li>Often requires temporary/seasonal workers</li>
                  <li>Concentrated in Aug-Oct timeframe</li>
                  <li>Directly impacts product quality and yield</li>
                </ul>
              </InfoBox>
            </label>
            <input
              type="range"
              min="15"
              max="40"
              step="5"
              name="harvestLaborPercent"
              value={sliders.harvestLaborPercent}
              onChange={handleSliderChange}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <p className="text-sm text-gray-500 mt-1">{results.harvestLaborHours.toLocaleString()} hours annually</p>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Production Labor: {sliders.productionLaborPercent}%
              <InfoBox title="Production Labor">
                <p>Work related to processing and creating finished products.</p>
                <ul className="list-disc pl-4 mt-1 space-y-1">
                  <li>Pressing, fermenting, and packaging</li>
                  <li>Quality control and monitoring</li>
                  <li>Peaks after harvest but continues year-round</li>
                  <li>Benefits most from equipment automation</li>
                </ul>
              </InfoBox>
            </label>
            <input
              type="range"
              min="10"
              max="40"
              step="5"
              name="productionLaborPercent"
              value={sliders.productionLaborPercent}
              onChange={handleSliderChange}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <p className="text-sm text-gray-500 mt-1">{results.productionLaborHours.toLocaleString()} hours annually</p>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Sales & Admin: {sliders.salesAdminPercent}%
              <InfoBox title="Sales & Admin Labor">
                <p>Business operations and customer-facing activities.</p>
                <ul className="list-disc pl-4 mt-1 space-y-1">
                  <li>Tasting room staffing and customer service</li>
                  <li>Marketing, accounting, and compliance</li>
                  <li>Relatively consistent throughout the year</li>
                  <li>Critical for revenue generation and business management</li>
                </ul>
              </InfoBox>
            </label>
            <input
              type="range"
              min="5"
              max="30"
              step="5"
              name="salesAdminPercent"
              value={sliders.salesAdminPercent}
              onChange={handleSliderChange}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <p className="text-sm text-gray-500 mt-1">{results.salesAdminHours.toLocaleString()} hours annually</p>
          </div>
        </div>
        
        {/* Labor visualization */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Labor Hours by Type</h3>
            <div className="h-64">
              <Pie 
                data={laborTypeData} 
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      position: 'bottom',
                    }
                  }
                }} 
              />
            </div>
            <div className="mt-4 bg-blue-50 p-3 rounded-lg">
              <p className="text-sm text-gray-700">
                <span className="font-medium">Farm operations</span> include pruning, spraying, mowing, and orchard maintenance.
              </p>
              <p className="text-sm text-gray-700">
                <span className="font-medium">Harvest labor</span> includes picking, sorting, and transporting apples.
              </p>
              <p className="text-sm text-gray-700">
                <span className="font-medium">Production</span> covers pressing, fermentation monitoring, packaging, and quality control.
              </p>
              <p className="text-sm text-gray-700">
                <span className="font-medium">Sales/Admin</span> includes tasting room staffing, marketing, accounting, and compliance.
              </p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Seasonal Labor Distribution</h3>
            <div className="h-64">
              <Line 
                data={seasonalLaborData}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      display: false,
                    }
                  },
                  scales: {
                    y: {
                      beginAtZero: true,
                      title: {
                        display: true,
                        text: 'Labor Hours'
                      }
                    }
                  }
                }}
              />
            </div>
            <div className="mt-4 bg-yellow-50 p-3 rounded-lg">
              <p className="text-sm text-gray-700">
                <span className="font-medium">Peak labor periods:</span> August-October during harvest season.
              </p>
              <p className="text-sm text-gray-700">
                <span className="font-medium">Moderate labor periods:</span> April-July for orchard maintenance and production.
              </p>
              <p className="text-sm text-gray-700">
                <span className="font-medium">Low labor periods:</span> November-March with focus on maintenance and planning.
              </p>
            </div>
          </div>
        </div>

        {/* Automation Analysis */}
        <div className="mt-6 bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Automation Analysis</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-medium text-gray-800">Current Automation</h4>
              <ul className="mt-2 text-sm text-gray-600 list-disc list-inside">
                <li>Belt presser for apple processing</li>
                <li>Automated fermentation monitoring</li>
                <li>Semi-automated canning line</li>
                <li>Crushing equipment</li>
              </ul>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-medium text-gray-800">Manual Processes</h4>
              <ul className="mt-2 text-sm text-gray-600 list-disc list-inside">
                <li>Hand picking of apples</li>
                <li>Visual quality inspection</li>
                <li>Sorting and grading</li>
                <li>Package handling and storage</li>
              </ul>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-medium text-gray-800">Future Opportunities</h4>
              <ul className="mt-2 text-sm text-gray-600 list-disc list-inside">
                <li>Mechanical harvesters (partial)</li>
                <li>Automated sorting systems</li>
                <li>Fully automated bottling line</li>
                <li>Inventory management system</li>
              </ul>
            </div>
          </div>
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-700">
              With current automation level of {sliders.automationLevel}%, approximately {results.automationSavings.toLocaleString()} labor hours 
              are saved annually. This represents a savings of ${Math.round(results.automationSavings * sliders.laborHourlyRate).toLocaleString()} in labor costs.
            </p>
          </div>
        </div>
      </div>
      
      {/* Distribution & Pricing */}
      <div className="mt-8 bg-gray-50 p-6 rounded-lg">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Distribution & Pricing</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white shadow-md rounded-lg p-6 border-l-4 border-amber-200">
            <h4 className="text-sm text-gray-500">Direct Sales Revenue</h4>
            <p className="text-2xl font-bold">${results.directSalesRevenue.toLocaleString()}</p>
            <p className="text-sm text-gray-500">({Math.round(sliders.directSalesPercent)}% of cider sales)</p>
          </div>
          
          <div className="bg-white shadow-md rounded-lg p-6 border-l-4 border-teal-200">
            <h4 className="text-sm text-gray-500">Wholesale Revenue</h4>
            <p className="text-2xl font-bold">${results.wholesaleRevenue.toLocaleString()}</p>
            <p className="text-sm text-gray-500">({Math.round(100 - sliders.directSalesPercent)}% of cider sales)</p>
          </div>
          
          <div className="bg-white shadow-md rounded-lg p-6 border-l-4 border-cyan-200">
            <h4 className="text-sm text-gray-500">Per-Pint Economics</h4>
            <p className="text-lg font-bold">Cost: ${results.costPerPint.toFixed(2)} | Revenue: ${results.revenuePerPint.toFixed(2)}</p>
            <p className="text-sm text-gray-500">Profit per pint: ${results.profitPerPint.toFixed(2)}</p>
          </div>
        </div>
      </div>

      {/* Regulatory & Packaging Costs */}
      <div className="mt-8 bg-gray-50 p-6 rounded-lg">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Regulatory & Packaging</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Packaging Cost per Gallon: ${sliders.packagingCostPerGallon.toFixed(2)}
            </label>
            <input
              type="range"
              min="2"
              max="6"
              step="0.25"
              name="packagingCostPerGallon"
              value={sliders.packagingCostPerGallon}
              onChange={handleSliderChange}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <p className="text-sm text-gray-500 mt-1">Annual cost: ${results.packagingCosts.toLocaleString()}</p>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Excise Tax per Gallon: ${sliders.exciseTaxPerGallon.toFixed(2)}
            </label>
            <input
              type="range"
              min="0.25"
              max="2"
              step="0.01"
              name="exciseTaxPerGallon"
              value={sliders.exciseTaxPerGallon}
              onChange={handleSliderChange}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <p className="text-sm text-gray-500 mt-1">Annual tax: ${results.exciseTax.toLocaleString()}</p>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Annual Licensing Costs: ${sliders.licensingCosts.toLocaleString()}
            </label>
            <input
              type="range"
              min="1000"
              max="6000"
              step="500"
              name="licensingCosts"
              value={sliders.licensingCosts}
              onChange={handleSliderChange}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Distribution Cost: {sliders.distributionCostPercent}% of revenue
            </label>
            <input
              type="range"
              min="5"
              max="30"
              step="1"
              name="distributionCostPercent"
              value={sliders.distributionCostPercent}
              onChange={handleSliderChange}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <p className="text-sm text-gray-500 mt-1">Annual cost: ${results.distributionCosts.toLocaleString()}</p>
          </div>
        </div>
      </div>

      {/* Operating Expenses - MOVED DOWN */}
      <div className="mt-8 bg-gray-50 p-6 rounded-lg">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Operating Expenses</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Annual Utilities: ${sliders.utilityExpenses.toLocaleString()}
            </label>
            <input
              type="range"
              min="8000"
              max="18000"
              step="500"
              name="utilityExpenses"
              value={sliders.utilityExpenses}
              onChange={handleSliderChange}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Annual Labor: ${results.laborExpenses.toLocaleString()}
            </label>
            <div className="w-full h-2 bg-gray-200 rounded-lg">
              <div 
                className="h-2 bg-blue-400 rounded-lg" 
                style={{width: '100%'}}
              ></div>
            </div>
            <p className="text-sm text-gray-500 mt-1">Calculated from Labor Analysis section</p>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Annual Maintenance: ${sliders.maintenanceExpenses.toLocaleString()}
            </label>
            <input
              type="range"
              min="10000"
              max="25000"
              step="1000"
              name="maintenanceExpenses"
              value={sliders.maintenanceExpenses}
              onChange={handleSliderChange}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Annual Marketing: ${sliders.marketingExpenses.toLocaleString()}
            </label>
            <input
              type="range"
              min="10000"
              max="30000"
              step="1000"
              name="marketingExpenses"
              value={sliders.marketingExpenses}
              onChange={handleSliderChange}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
        </div>
      </div>
      
      {/* Results */}
      <div className="mt-8">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Financial Results</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white shadow-md rounded-lg p-6 border-l-4 border-blue-200">
            <h4 className="text-sm text-gray-500">Monthly Mortgage</h4>
            <p className="text-2xl font-bold">${results.monthlyMortgage.toLocaleString()}</p>
          </div>
          
          <div className="bg-white shadow-md rounded-lg p-6 border-l-4 border-purple-200">
            <h4 className="text-sm text-gray-500">Annual Revenue</h4>
            <p className="text-2xl font-bold">${results.annualRevenue.toLocaleString()}</p>
          </div>
          
          <div className="bg-white shadow-md rounded-lg p-6 border-l-4 border-red-200">
            <h4 className="text-sm text-gray-500">Annual Expenses</h4>
            <p className="text-2xl font-bold">${results.annualExpenses.toLocaleString()}</p>
          </div>
          
          <div className="bg-white shadow-md rounded-lg p-6 border-l-4 border-green-200">
            <h4 className="text-sm text-gray-500">Annual Profit</h4>
            <p className="text-2xl font-bold">${results.annualProfit.toLocaleString()}</p>
          </div>
          
          <div className="bg-white shadow-md rounded-lg p-6 border-l-4 border-yellow-200">
            <h4 className="text-sm text-gray-500">Return on Investment</h4>
            <p className="text-2xl font-bold">{results.roi}%</p>
          </div>
          
          <div className="bg-white shadow-md rounded-lg p-6 border-l-4 border-indigo-200">
            <h4 className="text-sm text-gray-500">Annual Fixed Costs</h4>
            <p className="text-2xl font-bold">${results.annualFixedCosts.toLocaleString()}</p>
          </div>
        </div>
      </div>
      
      {/* Charts and Graphs */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Revenue Breakdown</h3>
          <div className="h-64">
            <Pie 
              data={revenueData} 
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    position: 'bottom',
                  }
                }
              }} 
            />
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Expenses Breakdown</h3>
          <div className="h-64">
            <Pie 
              data={expensesData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    position: 'bottom'
                  }
                }
              }}
            />
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow md:col-span-2">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Profit Sensitivity to Apple Yield</h3>
          <div className="h-64">
            <Bar 
              data={yieldAnalysisData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    display: false
                  },
                  tooltip: {
                    callbacks: {
                      label: function(context) {
                        let value = context.raw;
                        return 'Annual Profit: $' + (value as number).toLocaleString();
                      }
                    }
                  }
                },
                scales: {
                  y: {
                    beginAtZero: true,
                    title: {
                      display: true,
                      text: 'Annual Profit ($)'
                    },
                    ticks: {
                      callback: function(value) {
                        if ((value as number) >= 1000) {
                          return '$' + ((value as number)/1000) + 'k';
                        }
                        return '$' + value;
                      }
                    }
                  }
                }
              }}
            />
          </div>
        </div>
      </div>

      {/* Add new dynamic Production Capacity table after the production efficiency section */}
      <div className="mt-8 bg-gray-50 p-6 rounded-lg">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Production Capacity</h3>
        
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-700">
            <thead className="text-xs text-gray-700 uppercase bg-gray-100">
              <tr>
                <th className="px-4 py-2">Category</th>
                <th className="px-4 py-2">Raw Production</th>
                <th className="px-4 py-2">After Efficiency</th>
                <th className="px-4 py-2">Final Sellable</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b">
                <td className="px-4 py-2 font-medium">Apples</td>
                <td className="px-4 py-2">{results.totalApples.toLocaleString()} apples</td>
                <td className="px-4 py-2">{Math.round(results.totalApples * (sliders.productionEfficiency/100)).toLocaleString()} apples</td>
                <td className="px-4 py-2">{Math.round(results.totalApples * (sliders.productionEfficiency/100) * (sliders.salesEfficiency/100)).toLocaleString()} apples</td>
              </tr>
              <tr className="bg-white border-b">
                <td className="px-4 py-2 font-medium">Bushels</td>
                <td className="px-4 py-2">{results.totalBushels.toLocaleString()} bushels</td>
                <td className="px-4 py-2">{Math.round(results.totalBushels * (sliders.productionEfficiency/100)).toLocaleString()} bushels</td>
                <td className="px-4 py-2">{Math.round(results.totalBushels * (sliders.productionEfficiency/100) * (sliders.salesEfficiency/100)).toLocaleString()} bushels</td>
              </tr>
              <tr className="bg-white border-b">
                <td className="px-4 py-2 font-medium">Cider (Gallons)</td>
                <td className="px-4 py-2">{Math.round(results.totalBushels * (sliders.ciderYield/100) * sliders.gallonsPerBushel).toLocaleString()}</td>
                <td className="px-4 py-2">{results.ciderGallons.toLocaleString()}</td>
                <td className="px-4 py-2">{Math.round(results.ciderGallons * (1-sliders.wasteSpoilage/100) * (sliders.salesEfficiency/100)).toLocaleString()}</td>
              </tr>
              <tr className="bg-white">
                <td className="px-4 py-2 font-medium">16oz Cans</td>
                <td className="px-4 py-2">{Math.round(results.totalBushels * (sliders.ciderYield/100) * sliders.gallonsPerBushel * sliders.cansPerGallon).toLocaleString()}</td>
                <td className="px-4 py-2">{results.totalCanEquivalent.toLocaleString()}</td>
                <td className="px-4 py-2">{Math.round(results.totalCanEquivalent * (1-sliders.wasteSpoilage/100) * (sliders.salesEfficiency/100)).toLocaleString()}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Add a Startup Costs and Investments table before the results section */}
      <div className="mt-8 bg-gray-50 p-6 rounded-lg">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Startup Costs & Major Investments</h3>
        
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-700">
            <thead className="text-xs text-gray-700 uppercase bg-gray-100">
              <tr>
                <th className="px-4 py-2">Investment Category</th>
                <th className="px-4 py-2">Initial Cost</th>
                <th className="px-4 py-2">Annual Impact</th>
                <th className="px-4 py-2">Lifespan</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b">
                <td className="px-4 py-2 font-medium">Property Purchase</td>
                <td className="px-4 py-2">${sliders.propertyValue.toLocaleString()}</td>
                <td className="px-4 py-2">${Math.round(results.monthlyMortgage * 12).toLocaleString()} (mortgage)</td>
                <td className="px-4 py-2">{sliders.loanTerm} years</td>
              </tr>
              <tr className="bg-white border-b">
                <td className="px-4 py-2 font-medium">Down Payment</td>
                <td className="px-4 py-2">${Math.round(sliders.propertyValue * (sliders.downPayment/100)).toLocaleString()}</td>
                <td className="px-4 py-2">N/A</td>
                <td className="px-4 py-2">N/A</td>
              </tr>
              <tr className="bg-white border-b">
                <td className="px-4 py-2 font-medium">Equipment Investment</td>
                <td className="px-4 py-2">${sliders.equipmentCost.toLocaleString()}</td>
                <td className="px-4 py-2">${Math.round(sliders.equipmentCost / sliders.equipmentLifespan).toLocaleString()} (depreciation)</td>
                <td className="px-4 py-2">{sliders.equipmentLifespan} years</td>
              </tr>
              <tr className="bg-white">
                <td className="px-4 py-2 font-medium">Additional Capital</td>
                <td className="px-4 py-2">${sliders.additionalCapitalExpenses.toLocaleString()}</td>
                <td className="px-4 py-2">${Math.round(sliders.additionalCapitalExpenses / sliders.additionalCapitalLifespan).toLocaleString()} (amortization)</td>
                <td className="px-4 py-2">{sliders.additionalCapitalLifespan} years</td>
              </tr>
              <tr className="bg-gray-100 font-medium">
                <td className="px-4 py-2">Total Initial Investment</td>
                <td className="px-4 py-2">${(Math.round(sliders.propertyValue * (sliders.downPayment/100)) + sliders.equipmentCost + sliders.additionalCapitalExpenses).toLocaleString()}</td>
                <td className="px-4 py-2">${Math.round(results.annualFixedCosts - sliders.insurance - sliders.propertyTax).toLocaleString()} (annual)</td>
                <td className="px-4 py-2">Varied</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
} 