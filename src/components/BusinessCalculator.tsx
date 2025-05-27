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
  packagingCostPerGallon: 2.75, // bottles, cans, labels, etc. (reduced)
  exciseTaxPerGallon: 1.07, // federal excise tax on hard cider
  licensingCosts: 3500, // annual licensing fees
  distributionCostPercent: 8, // percentage of revenue for distribution costs (reduced for small cidery)
  directSalesPercent: 40, // percentage of sales direct to consumer
  abnbNights: 0, // nights per year - initially zero
  abnbRate: 250, // per night
  utilityExpenses: 12000, // annual
  laborExpenses: 65000, // annual base labor (reduced to avoid double-counting with calculated labor)
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
  
  // New Sales Mix Model
  taproomSalesPercent: 35, // percentage sold direct in taproom (highest margin)
  retailSalesPercent: 45, // percentage sold through liquor stores/grocery (medium margin)
  restaurantBarSalesPercent: 20, // percentage sold to restaurants/bars (lowest margin)
  
  // Channel-specific pricing (realistic craft cider pricing)
  taproomPintPrice: 8, // per pint in taproom ($8/pint = $64/gallon)
  retailWholesalePrice: 18, // per gallon wholesale to retailers (allows $15 retail 4-pack with retailer margin)
  restaurantWholesalePrice: 22, // per gallon wholesale to restaurants/bars (allows $8/pint with bar margin)
  
  // Channel-specific costs (adjusted to more realistic levels for small cidery)
  slottingFeesPerSKU: 500, // annual slotting fees per product per major retailer (reduced)
  numberOfSKUs: 2, // number of different products (reduced)
  numberOfRetailers: 3, // number of retail accounts (reduced)
  promotionalAllowancePercent: 8, // promotional allowances as % of wholesale revenue (reduced)
  salesRepCommissionPercent: 3, // sales rep commission on wholesale sales (reduced)
  retailerMarginPercent: 35, // retailer markup
  distributorMarginPercent: 28, // distributor markup
  workingCapitalPercent: 4, // working capital as % of revenue (reduced from 8% to 4%)
  
  // New Implementation Timeline Model
  implementationPhase: 1, // 1 = Phase 1, 2 = Phase 2, 3 = Phase 3
  
  // Phase 1 (Year 1): Brand Building & Market Entry
  phase1CiderGallons: 750, // Start small with brand building
  phase1AppleSalesPercent: 85, // Sell most apples to established cideries
  phase1TaproomEvents: 12, // Monthly events in barn
  phase1FarmersMarkets: 24, // Bi-weekly farmers markets
  phase1CapitalInvestment: 45000, // Basic equipment: small press, fermentation tanks
  
  // Phase 2 (Years 2-4): Expansion & Distribution
  phase2CiderGallons: 2500, // More conservative ramp up to maintain profitability
  phase2AppleSalesPercent: 70, // Still selling majority of apples for cash flow
  phase2TaproomDays: 104, // 2 days/week open
  phase2DistributionAccounts: 15, // Local restaurants and bottle shops
  phase2CapitalInvestment: 85000, // Expanded equipment, packaging line
  
  // Phase 3 (Years 5+): Full Operations
  phase3CiderGallons: 6000, // More realistic full capacity that maintains margins
  phase3AppleSalesPercent: 40, // Keep significant apple sales for cash flow
  phase3TaproomDays: 312, // 6 days/week open
  phase3DistributionAccounts: 75, // Regional distribution NJ/PA/NY
  phase3CapitalInvestment: 125000, // Taproom expansion, full automation
  
  // Marketing Strategy Parameters
  marketingBudgetPercent: 8, // percentage of revenue for marketing
  brandingInvestment: 15000, // initial branding and design investment
  digitalMarketingPercent: 35, // percentage of marketing budget for digital
  eventMarketingPercent: 25, // percentage for events and tastings
  tradingMarketingPercent: 20, // percentage for trade marketing (shelf placement, etc.)
  prMarketingPercent: 20, // percentage for PR and content marketing
  
  // Marketing Effectiveness Metrics
  customerAcquisitionCost: 25, // cost to acquire new customer
  customerLifetimeValue: 180, // average customer lifetime value
  brandAwarenessTarget: 15, // target brand awareness percentage in local market
  taproomConversionRate: 35, // percentage of visitors who make purchase
  
  // Health & Heritage Positioning
  healthPositioningFocus: true, // emphasize health benefits vs other alcohol
  heritageAppleFocus: true, // emphasize heritage apple varieties
  organicCertification: true, // highlight organic practices
  dryNotSweetPositioning: true, // position against overly sweet mass market ciders
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
    marketingExpenses: 0, // Add this property for calculated marketing expenses
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
    
    // Calculate equipment depreciation and capital expense amortization based on phase
    let phaseCapitalInvestment = 0;
    switch(sliders.implementationPhase) {
      case 1:
        phaseCapitalInvestment = sliders.phase1CapitalInvestment;
        break;
      case 2:
        phaseCapitalInvestment = sliders.phase1CapitalInvestment + sliders.phase2CapitalInvestment;
        break;
      case 3:
        phaseCapitalInvestment = sliders.phase1CapitalInvestment + sliders.phase2CapitalInvestment + sliders.phase3CapitalInvestment;
        break;
      default:
        phaseCapitalInvestment = sliders.equipmentCost;
    }
    
    const equipmentDepreciation = phaseCapitalInvestment / sliders.equipmentLifespan
    const additionalCapitalAmortization = sliders.additionalCapitalExpenses / sliders.additionalCapitalLifespan
    
    // Calculate annual fixed costs
    const annualFixedCosts = annualMortgage + sliders.propertyTax + sliders.insurance + 
                           equipmentDepreciation + additionalCapitalAmortization
    
    // Calculate cider production based on implementation phase
    let targetCiderGallons = 0;
    let appleSalesPercent = 0;
    
    switch(sliders.implementationPhase) {
      case 1:
        targetCiderGallons = sliders.phase1CiderGallons;
        appleSalesPercent = sliders.phase1AppleSalesPercent;
        break;
      case 2:
        targetCiderGallons = sliders.phase2CiderGallons;
        appleSalesPercent = sliders.phase2AppleSalesPercent;
        break;
      case 3:
        targetCiderGallons = sliders.phase3CiderGallons;
        appleSalesPercent = sliders.phase3AppleSalesPercent;
        break;
      default:
        targetCiderGallons = totalBushels * (sliders.ciderYield / 100) * (sliders.productionEfficiency / 100) * sliders.gallonsPerBushel;
        appleSalesPercent = 100 - sliders.ciderYield;
    }
    
    // Use the smaller of target production or orchard capacity
    const maxPossibleGallons = totalBushels * (sliders.productionEfficiency / 100) * sliders.gallonsPerBushel;
    const ciderGallons = Math.min(targetCiderGallons, maxPossibleGallons);
    
    // Calculate bushels used for cider (reverse calculation)
    const bushelsForCider = ciderGallons / sliders.gallonsPerBushel;
    
    // Calculate cans (16 oz)
    const totalCanEquivalent = ciderGallons * sliders.cansPerGallon
    
    // Account for waste/spoilage
    const netCiderGallons = ciderGallons * (1 - sliders.wasteSpoilage / 100)
    const netCans = totalCanEquivalent * (1 - sliders.wasteSpoilage / 100)
    
    // Account for sales efficiency (not all product gets sold)
    const soldCiderGallons = netCiderGallons * (sliders.salesEfficiency / 100)
    const soldCans = netCans * (sliders.salesEfficiency / 100)
    
    // Calculate sales by channel with phase-specific mix optimization
    let phaseTaproomPercent = sliders.taproomSalesPercent;
    let phaseRetailPercent = sliders.retailSalesPercent;
    let phaseRestaurantPercent = sliders.restaurantBarSalesPercent;
    
    // Optimize sales mix by phase for better margins
    switch(sliders.implementationPhase) {
      case 1: // Focus on highest margin channels
        phaseTaproomPercent = 60; // Higher taproom focus
        phaseRetailPercent = 30;
        phaseRestaurantPercent = 10;
        break;
      case 2: // Balanced growth
        phaseTaproomPercent = 45;
        phaseRetailPercent = 40;
        phaseRestaurantPercent = 15;
        break;
      case 3: // Full distribution but maintain margins
        phaseTaproomPercent = 35;
        phaseRetailPercent = 45;
        phaseRestaurantPercent = 20;
        break;
    }
    
    const taproomGallons = soldCiderGallons * (phaseTaproomPercent / 100)
    const retailGallons = soldCiderGallons * (phaseRetailPercent / 100)
    const restaurantGallons = soldCiderGallons * (phaseRestaurantPercent / 100)
    
    // Calculate revenue by channel
    const pintsPerGallon = 8
    const taproomRevenue = taproomGallons * pintsPerGallon * sliders.taproomPintPrice
    const retailRevenue = retailGallons * sliders.retailWholesalePrice
    const restaurantRevenue = restaurantGallons * sliders.restaurantWholesalePrice
    
    // Total cider revenue
    const ciderRevenue = taproomRevenue + retailRevenue + restaurantRevenue
    
    // Calculate channel-specific costs
    const slottingFees = sliders.slottingFeesPerSKU * sliders.numberOfSKUs * sliders.numberOfRetailers
    const wholesaleRevenue = retailRevenue + restaurantRevenue
    const promotionalAllowances = wholesaleRevenue * (sliders.promotionalAllowancePercent / 100)
    const salesRepCommissions = wholesaleRevenue * (sliders.salesRepCommissionPercent / 100)
    const workingCapitalCost = ciderRevenue * (sliders.workingCapitalPercent / 100) * 0.06 // assume 6% interest rate
    
    // 2. Fresh apple sales - calculated based on phase strategy
    const remainingBushels = totalBushels * (sliders.productionEfficiency / 100) - bushelsForCider;
    const appleSalesBushels = remainingBushels * (appleSalesPercent / 100) * (sliders.salesEfficiency / 100);
    
    // Premium pricing for heritage organic cider apples to craft cideries
    let applePricePerBushel = 0;
    if (sliders.implementationPhase === 1) {
      applePricePerBushel = 45; // Premium price to craft cideries for heritage organic cider apples
    } else if (sliders.implementationPhase === 2) {
      applePricePerBushel = 35; // Still selling some to cideries, some direct
    } else {
      applePricePerBushel = 25; // Mostly direct sales, lower volume to cideries
    }
    
    const freshAppleRevenue = appleSalesBushels * applePricePerBushel;
    
    // 3. Airbnb revenue
    const abnbRevenue = sliders.abnbNights * sliders.abnbRate
    
    // 4. Other products (honey, vinegar, etc.) - estimated at 15% of apple product revenue
    const otherProductsRevenue = (ciderRevenue + freshAppleRevenue) * 0.15
    
    // Total revenue
    const annualRevenue = ciderRevenue + freshAppleRevenue + abnbRevenue + otherProductsRevenue
    
    // Calculate phase-specific expenses
    const packagingCosts = soldCiderGallons * sliders.packagingCostPerGallon
    const exciseTax = soldCiderGallons * sliders.exciseTaxPerGallon
    
    // Scale expenses by phase
    let phaseLicensingCosts = 0;
    let phaseUtilityExpenses = 0;
    let phaseMaintenanceExpenses = 0;
    let phaseDistributionCostPercent = 0;
    let laborHoursMultiplier = 1;
    
    switch(sliders.implementationPhase) {
      case 1: // Minimal operations, mostly apple sales
        phaseLicensingCosts = sliders.licensingCosts * 0.3; // Basic licenses only
        phaseUtilityExpenses = sliders.utilityExpenses * 0.4; // Minimal facility use
        phaseMaintenanceExpenses = sliders.maintenanceExpenses * 0.3; // Basic orchard maintenance
        phaseDistributionCostPercent = 2; // Minimal distribution costs
        laborHoursMultiplier = 0.6; // Reduced labor needs
        break;
      case 2: // Moderate operations
        phaseLicensingCosts = sliders.licensingCosts * 0.7; // More licenses needed
        phaseUtilityExpenses = sliders.utilityExpenses * 0.7; // Moderate facility use
        phaseMaintenanceExpenses = sliders.maintenanceExpenses * 0.7; // More equipment to maintain
        phaseDistributionCostPercent = sliders.distributionCostPercent * 0.8; // Growing distribution
        laborHoursMultiplier = 0.8; // Moderate labor needs
        break;
      case 3: // Full operations
        phaseLicensingCosts = sliders.licensingCosts; // All licenses
        phaseUtilityExpenses = sliders.utilityExpenses; // Full facility use
        phaseMaintenanceExpenses = sliders.maintenanceExpenses; // Full maintenance
        phaseDistributionCostPercent = sliders.distributionCostPercent; // Full distribution costs
        laborHoursMultiplier = 1; // Full labor needs
        break;
    }
    
    const distributionCosts = annualRevenue * (phaseDistributionCostPercent / 100)
    
    // Calculate phase-adjusted labor expenses
    const baseLaborHours = sliders.orchardAcres * 500; // Base hours per acre
    const phaseLaborHours = baseLaborHours * laborHoursMultiplier * (1 - sliders.automationLevel / 100);
    const calculatedLaborExpenses = phaseLaborHours * sliders.laborHourlyRate;
    
    const calculatedMarketingExpenses = annualRevenue * (sliders.marketingBudgetPercent / 100)
    
    // Phase-adjusted channel costs (only apply to wholesale operations)
    const phaseSlottingFees = sliders.implementationPhase >= 2 ? slottingFees : 0;
    const phasePromotionalAllowances = sliders.implementationPhase >= 2 ? promotionalAllowances : 0;
    const phaseSalesRepCommissions = sliders.implementationPhase >= 2 ? salesRepCommissions : 0;
    const phaseWorkingCapitalCost = workingCapitalCost * (sliders.implementationPhase / 3); // Scale with phase
    
    const annualExpenses = phaseUtilityExpenses + calculatedLaborExpenses + 
      phaseMaintenanceExpenses + calculatedMarketingExpenses + annualFixedCosts +
      packagingCosts + exciseTax + phaseLicensingCosts + distributionCosts +
      phaseSlottingFees + phasePromotionalAllowances + phaseSalesRepCommissions + phaseWorkingCapitalCost
    
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
    const totalLaborHours = phaseLaborHours
    
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
      licensingCosts: Math.round(phaseLicensingCosts),
      pintEquivalent: Math.round(pintEquivalent),
      costPerPint: Math.round(costPerPint * 100) / 100,
      revenuePerPint: Math.round(revenuePerPint * 100) / 100,
      profitPerPint: Math.round(profitPerPint * 100) / 100,
      directSalesRevenue: Math.round(taproomRevenue),
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
      marketingExpenses: Math.round(calculatedMarketingExpenses), // Store calculated marketing expense
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
    labels: ['Taproom Sales', 'Retail Wholesale', 'Restaurant/Bar Sales', 'Fresh Apple Sales', 'Other Products'],
    datasets: [
      {
        data: [
          results.directSalesRevenue, // This is now taproom revenue
          Math.round(results.wholesaleRevenue * (sliders.retailSalesPercent / (sliders.retailSalesPercent + sliders.restaurantBarSalesPercent))), // Retail portion
          Math.round(results.wholesaleRevenue * (sliders.restaurantBarSalesPercent / (sliders.retailSalesPercent + sliders.restaurantBarSalesPercent))), // Restaurant portion
          // Fix fresh apple sales calculation to match the same pattern used in main calculator
          Math.round(results.totalBushels * (1 - sliders.ciderYield / 100) * (sliders.productionEfficiency/100) * (sliders.salesEfficiency/100) * sliders.applesPerBushel * 0.25),
          // Make sure other products revenue is exactly 15% of the two above
          (results.directSalesRevenue + results.wholesaleRevenue + 
            Math.round(results.totalBushels * (1 - sliders.ciderYield / 100) * (sliders.productionEfficiency/100) * (sliders.salesEfficiency/100) * sliders.applesPerBushel * 0.25)) * 0.15
        ],
        backgroundColor: [
          'rgba(255, 159, 64, 0.6)', // amber for taproom
          'rgba(20, 184, 166, 0.6)', // teal for retail
          'rgba(52, 152, 219, 0.6)', // blue for restaurant/bar
          'rgba(153, 102, 255, 0.6)', // purple for fresh apples
          'rgba(75, 192, 192, 0.6)'   // turquoise for other products
        ],
        borderColor: [
          'rgba(255, 159, 64, 1)',
          'rgba(20, 184, 166, 1)',
          'rgba(52, 152, 219, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(75, 192, 192, 1)'
        ],
        borderWidth: 1,
      },
    ],
  }

  // Expenses breakdown chart data
  const expensesData = {
    labels: ['Mortgage', 'Taxes & Insurance', 'Packaging', 'Excise Tax', 'Licensing', 'Distribution', 'Utilities', 'Labor', 'Maintenance', 'Marketing', 'Channel Costs', 'Working Capital'],
    datasets: [
      {
        data: [
          results.monthlyMortgage * 12,
          sliders.propertyTax + sliders.insurance,
          results.packagingCosts,
          results.exciseTax,
          results.licensingCosts,
          results.distributionCosts,
          // Calculate phase-adjusted utility expenses
          Math.round(sliders.utilityExpenses * (sliders.implementationPhase === 1 ? 0.4 : sliders.implementationPhase === 2 ? 0.7 : 1)),
          results.laborExpenses,
          // Calculate phase-adjusted maintenance expenses  
          Math.round(sliders.maintenanceExpenses * (sliders.implementationPhase === 1 ? 0.3 : sliders.implementationPhase === 2 ? 0.7 : 1)),
          results.marketingExpenses,
          // Calculate phase-adjusted channel costs
          Math.round((sliders.implementationPhase >= 2 ? sliders.slottingFeesPerSKU * sliders.numberOfSKUs * sliders.numberOfRetailers : 0) + 
                    (sliders.implementationPhase >= 2 ? results.wholesaleRevenue * (sliders.promotionalAllowancePercent + sliders.salesRepCommissionPercent) / 100 : 0)),
          Math.round(results.annualRevenue * sliders.workingCapitalPercent / 100 * 0.06 * (sliders.implementationPhase / 3))
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
          'rgba(254, 202, 202, 0.6)',  // light red
          'rgba(255, 193, 7, 0.6)',    // amber for channel costs
          'rgba(156, 39, 176, 0.6)'    // deep purple for working capital
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
          'rgba(254, 202, 202, 1)',
          'rgba(255, 193, 7, 1)',
          'rgba(156, 39, 176, 1)'
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
        // Calculate profit at different yield levels - normalize to more realistic values
        Math.min(calculateProfitWithYield(results.totalBushels * 0.7), 1000000),
        Math.min(calculateProfitWithYield(results.totalBushels * 0.85), 1000000),
        Math.min(calculateProfitWithYield(results.totalBushels), 1000000),
        Math.min(calculateProfitWithYield(results.totalBushels * 1.15), 1000000),
        Math.min(calculateProfitWithYield(results.totalBushels * 1.3), 1000000)
      ],
      backgroundColor: 'rgba(75, 192, 192, 0.6)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1
    }]
  }

  function calculateProfitWithYield(bushels: number) {
    // Calculate cider production from bushels
    const bushelsForCider = bushels * (sliders.ciderYield / 100) * (sliders.productionEfficiency / 100)
    const ciderGallons = bushelsForCider * sliders.gallonsPerBushel
    
    // Account for waste/spoilage
    const netCiderGallons = ciderGallons * (1 - sliders.wasteSpoilage / 100)
    
    // Account for sales efficiency
    const soldCiderGallons = netCiderGallons * (sliders.salesEfficiency / 100)
    
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
    
    // Fresh apple sales - based on bushels not used for cider (accounting for production efficiency)
    const freshAppleBushels = bushels * (1 - sliders.ciderYield / 100) * (sliders.productionEfficiency / 100) * (sliders.salesEfficiency / 100)
    const freshAppleRevenue = freshAppleBushels * sliders.applesPerBushel * 0.25 // Assuming $0.25 per apple
    
    // Add Airbnb revenue (fixed)
    const abnbRevenue = sliders.abnbNights * sliders.abnbRate
    
    // Other products revenue (15% of apple products revenue)
    const otherProductsRevenue = (ciderRevenue + freshAppleRevenue) * 0.15
    
    // Total revenue
    const totalRevenue = ciderRevenue + freshAppleRevenue + abnbRevenue + otherProductsRevenue
    
    // Calculate specific expenses that vary with production
    const packagingCosts = soldCiderGallons * sliders.packagingCostPerGallon
    const exciseTax = soldCiderGallons * sliders.exciseTaxPerGallon
    const distributionCosts = totalRevenue * (sliders.distributionCostPercent / 100)
    
    // Variable expenses (those that change with production)
    const variableExpenses = packagingCosts + exciseTax + distributionCosts
    
    // Fixed expenses (those that don't change with production)
    const fixedExpenses = results.annualFixedCosts + sliders.utilityExpenses + 
                         results.laborExpenses + sliders.maintenanceExpenses + 
                         sliders.marketingExpenses + sliders.licensingCosts
    
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
            <p className="text-sm text-gray-500">{Math.round(results.ciderGallons * sliders.cansPerGallon).toLocaleString()} 16oz cans</p>
            <p className="text-xs text-gray-400 mt-1">Phase {sliders.implementationPhase} target production</p>
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
            <h4 className="text-sm text-gray-500">Fresh Apple Sales</h4>
            <p className="text-2xl font-bold">
              {(() => {
                const remainingBushels = results.totalBushels * (sliders.productionEfficiency / 100) - (results.ciderGallons / sliders.gallonsPerBushel);
                const appleSalesPercent = sliders.implementationPhase === 1 ? sliders.phase1AppleSalesPercent : 
                                        sliders.implementationPhase === 2 ? sliders.phase2AppleSalesPercent : 
                                        sliders.phase3AppleSalesPercent;
                return Math.round(remainingBushels * (appleSalesPercent / 100)).toLocaleString();
              })()} bushels
            </p>
            <p className="text-sm text-gray-500">
              {(() => {
                const appleSalesPercent = sliders.implementationPhase === 1 ? sliders.phase1AppleSalesPercent : 
                                        sliders.implementationPhase === 2 ? sliders.phase2AppleSalesPercent : 
                                        sliders.phase3AppleSalesPercent;
                return `${appleSalesPercent}% of remaining apples`;
              })()}
            </p>
            <p className="text-xs text-gray-400 mt-1">
              {sliders.implementationPhase === 1 ? `$45/bushel to craft cideries` : 
               sliders.implementationPhase === 2 ? `$35/bushel mixed sales` : 
               `$25/bushel direct sales`}
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
                    
                    <div className="font-medium">Production Efficiency</div>
                    <div className="col-span-2">{sliders.productionEfficiency}%</div>
                    
                    <div className="font-medium">Effective Bushels for Cider</div>
                    <div className="col-span-2 font-bold">
                      {Math.round(results.totalBushels * (sliders.ciderYield/100) * (sliders.productionEfficiency/100)).toLocaleString()} bushels
                    </div>
                  </div>
                  <div className="mt-2 text-xs text-gray-500">
                    Formula: Total Bushels × Cider Percentage × Production Efficiency = Effective Bushels for Cider
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-800 mb-2">Step 2: Convert Bushels to Cider Gallons</h4>
                  <div className="grid grid-cols-3 gap-2 text-sm">
                    <div className="font-medium">Effective Bushels for Cider</div>
                    <div className="col-span-2">{Math.round(results.totalBushels * (sliders.ciderYield/100) * (sliders.productionEfficiency/100)).toLocaleString()} bushels</div>
                    
                    <div className="font-medium">Conversion Rate</div>
                    <div className="col-span-2">{sliders.gallonsPerBushel} gallons per bushel</div>
                    
                    <div className="font-medium">Theoretical Gallons</div>
                    <div className="col-span-2 font-bold">
                      {Math.round(results.totalBushels * (sliders.ciderYield/100) * (sliders.productionEfficiency/100) * sliders.gallonsPerBushel).toLocaleString()} gallons
                    </div>
                  </div>
                  <div className="mt-2 text-xs text-gray-500">
                    Formula: Effective Bushels for Cider × Gallons per Bushel = Theoretical Gallons
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-800 mb-2">Step 3: Convert to 16oz Cans</h4>
                  <div className="grid grid-cols-3 gap-2 text-sm">
                    <div className="font-medium">Theoretical Gallons</div>
                    <div className="col-span-2">{Math.round(results.totalBushels * (sliders.ciderYield/100) * (sliders.productionEfficiency/100) * sliders.gallonsPerBushel).toLocaleString()} gallons</div>
                    
                    <div className="font-medium">Cans per Gallon</div>
                    <div className="col-span-2">{sliders.cansPerGallon} 16oz cans</div>
                    
                    <div className="font-medium">Total Cans</div>
                    <div className="col-span-2 font-bold">
                      {Math.round(results.totalBushels * (sliders.ciderYield/100) * (sliders.productionEfficiency/100) * sliders.gallonsPerBushel * sliders.cansPerGallon).toLocaleString()} cans
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
      
      {/* Implementation Timeline */}
      <div className="mt-8 bg-gray-50 p-6 rounded-lg">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Implementation Timeline & Business Phases</h3>
        
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Current Implementation Phase
          </label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button
              onClick={() => setSliders(prev => ({...prev, implementationPhase: 1}))}
              className={`p-4 rounded-lg border-2 text-left ${
                sliders.implementationPhase === 1 
                  ? 'border-blue-500 bg-blue-50' 
                  : 'border-gray-200 bg-white hover:border-gray-300'
              }`}
            >
              <h4 className="font-bold text-gray-800">Phase 1: Brand Building</h4>
              <p className="text-sm text-gray-600 mt-1">Year 1 - Market Entry</p>
              <ul className="text-xs text-gray-500 mt-2 space-y-1">
                <li>• {sliders.phase1CiderGallons} gallons cider production</li>
                <li>• {sliders.phase1AppleSalesPercent}% apples sold to cideries</li>
                <li>• Monthly barn events</li>
                <li>• Farmers markets</li>
              </ul>
            </button>
            
            <button
              onClick={() => setSliders(prev => ({...prev, implementationPhase: 2}))}
              className={`p-4 rounded-lg border-2 text-left ${
                sliders.implementationPhase === 2 
                  ? 'border-blue-500 bg-blue-50' 
                  : 'border-gray-200 bg-white hover:border-gray-300'
              }`}
            >
              <h4 className="font-bold text-gray-800">Phase 2: Expansion</h4>
              <p className="text-sm text-gray-600 mt-1">Years 2-4 - Growth</p>
              <ul className="text-xs text-gray-500 mt-2 space-y-1">
                <li>• {sliders.phase2CiderGallons} gallons cider production</li>
                <li>• {sliders.phase2AppleSalesPercent}% apples sold</li>
                <li>• Regular taproom hours</li>
                <li>• Local distribution</li>
              </ul>
            </button>
            
            <button
              onClick={() => setSliders(prev => ({...prev, implementationPhase: 3}))}
              className={`p-4 rounded-lg border-2 text-left ${
                sliders.implementationPhase === 3 
                  ? 'border-blue-500 bg-blue-50' 
                  : 'border-gray-200 bg-white hover:border-gray-300'
              }`}
            >
              <h4 className="font-bold text-gray-800">Phase 3: Full Operations</h4>
              <p className="text-sm text-gray-600 mt-1">Years 5+ - Maturity</p>
              <ul className="text-xs text-gray-500 mt-2 space-y-1">
                <li>• {sliders.phase3CiderGallons} gallons cider production</li>
                <li>• {sliders.phase3AppleSalesPercent}% apples sold</li>
                <li>• Expanded taproom</li>
                <li>• Regional distribution</li>
              </ul>
            </button>
          </div>
        </div>
        
        {/* Phase-specific details */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h4 className="text-lg font-bold text-gray-800 mb-4">
            Current Phase Details: Phase {sliders.implementationPhase}
          </h4>
          
          {sliders.implementationPhase === 1 && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-medium text-gray-700">Production Strategy</h5>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Start with {sliders.phase1CiderGallons} gallons annually</li>
                    <li>• Focus on quality over quantity</li>
                    <li>• Sell {sliders.phase1AppleSalesPercent}% of apples to established cideries</li>
                    <li>• Generate revenue while building brand</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-gray-700">Market Strategy</h5>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• {sliders.phase1TaproomEvents} barn events per year</li>
                    <li>• {sliders.phase1FarmersMarkets} farmers market appearances</li>
                    <li>• Build local brand recognition</li>
                    <li>• Develop customer base</li>
                  </ul>
                </div>
              </div>
              <div>
                <h5 className="font-medium text-gray-700">Capital Investment: ${sliders.phase1CapitalInvestment.toLocaleString()}</h5>
                <ul className="text-sm text-gray-600 mt-2 space-y-1">
                  <li>• Small-scale press and fermentation equipment</li>
                  <li>• Basic packaging capabilities</li>
                  <li>• Barn renovation for events</li>
                  <li>• Initial inventory and supplies</li>
                </ul>
              </div>
            </div>
          )}
          
          {sliders.implementationPhase === 2 && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-medium text-gray-700">Production Strategy</h5>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Scale up to {sliders.phase2CiderGallons} gallons annually</li>
                    <li>• Reduce apple sales to {sliders.phase2AppleSalesPercent}%</li>
                    <li>• Develop multiple cider varieties</li>
                    <li>• Improve production efficiency</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-gray-700">Market Strategy</h5>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Open taproom {sliders.phase2TaproomDays} days per year</li>
                    <li>• Establish {sliders.phase2DistributionAccounts} distribution accounts</li>
                    <li>• Local restaurants and bottle shops</li>
                    <li>• Build wholesale relationships</li>
                  </ul>
                </div>
              </div>
              <div>
                <h5 className="font-medium text-gray-700">Capital Investment: ${sliders.phase2CapitalInvestment.toLocaleString()}</h5>
                <ul className="text-sm text-gray-600 mt-2 space-y-1">
                  <li>• Expanded fermentation capacity</li>
                  <li>• Professional packaging line</li>
                  <li>• Taproom improvements</li>
                  <li>• Distribution equipment</li>
                </ul>
              </div>
            </div>
          )}
          
          {sliders.implementationPhase === 3 && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-medium text-gray-700">Production Strategy</h5>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Full capacity: {sliders.phase3CiderGallons} gallons annually</li>
                    <li>• Minimal apple sales: {sliders.phase3AppleSalesPercent}%</li>
                    <li>• Premium product lines</li>
                    <li>• Seasonal and specialty offerings</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-gray-700">Market Strategy</h5>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Full taproom operation {sliders.phase3TaproomDays} days per year</li>
                    <li>• {sliders.phase3DistributionAccounts} distribution accounts</li>
                    <li>• Regional distribution: NJ, PA, NY</li>
                    <li>• Tourism and events destination</li>
                  </ul>
                </div>
              </div>
              <div>
                <h5 className="font-medium text-gray-700">Capital Investment: ${sliders.phase3CapitalInvestment.toLocaleString()}</h5>
                <ul className="text-sm text-gray-600 mt-2 space-y-1">
                  <li>• Taproom expansion and renovation</li>
                  <li>• Full automation systems</li>
                  <li>• Visitor facilities and parking</li>
                  <li>• Advanced quality control equipment</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Sales Mix & Distribution */}
      <div className="mt-8 bg-gray-50 p-6 rounded-lg">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Sales Mix & Distribution Channels</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Taproom Sales: {sliders.taproomSalesPercent}%
              <InfoBox title="Taproom Sales">
                <p>Direct-to-consumer sales in your tasting room.</p>
                <ul className="list-disc pl-4 mt-1 space-y-1">
                  <li>Highest profit margin (~$6/pint)</li>
                  <li>No distributor or retailer markup</li>
                  <li>Direct customer relationship</li>
                  <li>Limited by physical capacity</li>
                </ul>
              </InfoBox>
            </label>
            <input
              type="range"
              min="20"
              max="60"
              step="5"
              name="taproomSalesPercent"
              value={sliders.taproomSalesPercent}
              onChange={handleSliderChange}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Retail Sales: {sliders.retailSalesPercent}%
              <InfoBox title="Retail Sales">
                <p>Sales through liquor stores, grocery stores, and bottle shops.</p>
                <ul className="list-disc pl-4 mt-1 space-y-1">
                  <li>Medium profit margin (~$12/gallon wholesale)</li>
                  <li>Retailer takes 35% markup</li>
                  <li>Requires slotting fees and promotional support</li>
                  <li>Broader market reach</li>
                </ul>
              </InfoBox>
            </label>
            <input
              type="range"
              min="20"
              max="60"
              step="5"
              name="retailSalesPercent"
              value={sliders.retailSalesPercent}
              onChange={handleSliderChange}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Restaurant/Bar Sales: {sliders.restaurantBarSalesPercent}%
              <InfoBox title="Restaurant/Bar Sales">
                <p>Sales to restaurants, bars, and on-premise accounts.</p>
                <ul className="list-disc pl-4 mt-1 space-y-1">
                  <li>Lowest profit margin (~$10/gallon wholesale)</li>
                  <li>Venue takes 200-300% markup</li>
                  <li>Requires sales rep support</li>
                  <li>Brand exposure and trial</li>
                </ul>
              </InfoBox>
            </label>
            <input
              type="range"
              min="10"
              max="40"
              step="5"
              name="restaurantBarSalesPercent"
              value={sliders.restaurantBarSalesPercent}
              onChange={handleSliderChange}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white shadow-md rounded-lg p-6 border-l-4 border-amber-200">
            <h4 className="text-sm text-gray-500">Taproom Revenue</h4>
            <p className="text-2xl font-bold">${results.directSalesRevenue.toLocaleString()}</p>
            <p className="text-sm text-gray-500">({Math.round(sliders.taproomSalesPercent)}% of cider sales)</p>
          </div>
          
          <div className="bg-white shadow-md rounded-lg p-6 border-l-4 border-teal-200">
            <h4 className="text-sm text-gray-500">Wholesale Revenue</h4>
            <p className="text-2xl font-bold">${results.wholesaleRevenue.toLocaleString()}</p>
            <p className="text-sm text-gray-500">({Math.round(sliders.retailSalesPercent + sliders.restaurantBarSalesPercent)}% of cider sales)</p>
          </div>
          
          <div className="bg-white shadow-md rounded-lg p-6 border-l-4 border-cyan-200">
            <h4 className="text-sm text-gray-500">Per-Pint Economics</h4>
            <p className="text-lg font-bold">Cost: ${results.costPerPint.toFixed(2)} | Revenue: ${results.revenuePerPint.toFixed(2)}</p>
            <p className="text-sm text-gray-500">Profit per pint: ${results.profitPerPint.toFixed(2)}</p>
          </div>
        </div>
      </div>

      {/* Marketing Strategy */}
      <div className="mt-8 bg-gray-50 p-6 rounded-lg">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Marketing Strategy & Brand Positioning</h3>
        
        {/* Core Brand Positioning */}
        <div className="mb-8 bg-white p-6 rounded-lg shadow">
          <h4 className="text-lg font-bold text-gray-800 mb-4">Core Brand Positioning</h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="border border-green-200 rounded-lg p-4 bg-green-50">
                <h5 className="font-medium text-green-800 mb-2">🍎 Heritage Apple Story</h5>
                <p className="text-sm text-green-700">
                  "Crafted from heritage apple varieties that have been grown in this region for generations. 
                  Each sip connects you to the authentic flavors that built America's cider tradition."
                </p>
                <ul className="text-xs text-green-600 mt-2 space-y-1">
                  <li>• Emphasize historical apple varieties</li>
                  <li>• Connect to local agricultural heritage</li>
                  <li>• Differentiate from mass-produced ciders</li>
                </ul>
              </div>
              
              <div className="border border-blue-200 rounded-lg p-4 bg-blue-50">
                <h5 className="font-medium text-blue-800 mb-2">🌱 Organic & Sustainable</h5>
                <p className="text-sm text-blue-700">
                  "Organically grown, sustainably farmed. Our apples are cultivated without synthetic pesticides, 
                  creating pure, clean ciders that are better for you and the environment."
                </p>
                <ul className="text-xs text-blue-600 mt-2 space-y-1">
                  <li>• Highlight organic certification</li>
                  <li>• Emphasize environmental stewardship</li>
                  <li>• Appeal to health-conscious consumers</li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="border border-purple-200 rounded-lg p-4 bg-purple-50">
                <h5 className="font-medium text-purple-800 mb-2">🍷 Dry & Sophisticated</h5>
                <p className="text-sm text-purple-700">
                  "Not your typical sweet cider. Our dry, complex ciders offer wine-like sophistication 
                  with the refreshing character of premium apples. For those who appreciate nuanced flavors."
                </p>
                <ul className="text-xs text-purple-600 mt-2 space-y-1">
                  <li>• Position against overly sweet mass market</li>
                  <li>• Target sophisticated palates</li>
                  <li>• Emphasize complexity and craftsmanship</li>
                </ul>
              </div>
              
              <div className="border border-orange-200 rounded-lg p-4 bg-orange-50">
                <h5 className="font-medium text-orange-800 mb-2">💪 Health Benefits</h5>
                <p className="text-sm text-orange-700">
                  "Naturally gluten-free with antioxidants from real apples. Lower in alcohol than wine, 
                  with probiotics from natural fermentation. A healthier choice for mindful drinkers."
                </p>
                <ul className="text-xs text-orange-600 mt-2 space-y-1">
                  <li>• Gluten-free alternative to beer</li>
                  <li>• Lower alcohol than wine/spirits</li>
                  <li>• Natural antioxidants and probiotics</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Phase-Specific Marketing Strategy */}
        <div className="mb-8 bg-white p-6 rounded-lg shadow">
          <h4 className="text-lg font-bold text-gray-800 mb-4">Phase-Specific Marketing Strategy</h4>
          
          {sliders.implementationPhase === 1 && (
            <div className="space-y-4">
              <h5 className="font-medium text-blue-600">Phase 1: Brand Building & Local Awareness</h5>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h6 className="font-medium text-gray-800">Grassroots Marketing</h6>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Monthly barn events with tastings</li>
                    <li>• Farmers market presence (24 events/year)</li>
                    <li>• Local food blogger outreach</li>
                    <li>• Community event sponsorships</li>
                    <li>• Word-of-mouth referral program</li>
                  </ul>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h6 className="font-medium text-gray-800">Digital Foundation</h6>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Professional website with story</li>
                    <li>• Instagram showcasing farm life</li>
                    <li>• Facebook for event promotion</li>
                    <li>• Google My Business optimization</li>
                    <li>• Email newsletter signup</li>
                  </ul>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h6 className="font-medium text-gray-800">PR & Storytelling</h6>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Local newspaper features</li>
                    <li>• Heritage apple education content</li>
                    <li>• Farm-to-glass story videos</li>
                    <li>• Organic certification PR</li>
                    <li>• Founder story development</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
          
          {sliders.implementationPhase === 2 && (
            <div className="space-y-4">
              <h5 className="font-medium text-blue-600">Phase 2: Market Expansion & Distribution Support</h5>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h6 className="font-medium text-gray-800">Trade Marketing</h6>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• In-store tastings and demos</li>
                    <li>• Point-of-sale materials</li>
                    <li>• Bartender education programs</li>
                    <li>• Menu placement incentives</li>
                    <li>• Seasonal promotional campaigns</li>
                  </ul>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h6 className="font-medium text-gray-800">Digital Growth</h6>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Targeted social media advertising</li>
                    <li>• Influencer partnerships</li>
                    <li>• SEO content marketing</li>
                    <li>• Email marketing automation</li>
                    <li>• Online ordering system</li>
                  </ul>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h6 className="font-medium text-gray-800">Experience Marketing</h6>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Regular taproom events</li>
                    <li>• Cider education classes</li>
                    <li>• Food pairing experiences</li>
                    <li>• Harvest participation events</li>
                    <li>• Private group bookings</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
          
          {sliders.implementationPhase === 3 && (
            <div className="space-y-4">
              <h5 className="font-medium text-blue-600">Phase 3: Regional Brand Leadership</h5>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h6 className="font-medium text-gray-800">Regional Expansion</h6>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Multi-state distribution support</li>
                    <li>• Regional trade show presence</li>
                    <li>• Distributor relationship management</li>
                    <li>• Chain account development</li>
                    <li>• Regional media campaigns</li>
                  </ul>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h6 className="font-medium text-gray-800">Premium Positioning</h6>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Premium packaging design</li>
                    <li>• Limited edition releases</li>
                    <li>• Awards and competition entries</li>
                    <li>• Sommelier education programs</li>
                    <li>• High-end restaurant placement</li>
                  </ul>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h6 className="font-medium text-gray-800">Destination Marketing</h6>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1">
                    <li>• Tourism board partnerships</li>
                    <li>• Agritourism experiences</li>
                    <li>• Wedding and event venue</li>
                    <li>• Cider trail participation</li>
                    <li>• Regional food festivals</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
        
        {/* Marketing Budget Allocation */}
        <div className="mb-8 bg-white p-6 rounded-lg shadow">
          <h4 className="text-lg font-bold text-gray-800 mb-4">Marketing Budget Allocation</h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Marketing Budget: {sliders.marketingBudgetPercent}% of Revenue
              </label>
              <input
                type="range"
                min="5"
                max="15"
                step="1"
                name="marketingBudgetPercent"
                value={sliders.marketingBudgetPercent}
                onChange={handleSliderChange}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <p className="text-sm text-gray-500 mt-1">
                Annual budget: ${Math.round(results.annualRevenue * sliders.marketingBudgetPercent / 100).toLocaleString()}
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-700">Digital Marketing</span>
                <span className="text-sm text-gray-600">{sliders.digitalMarketingPercent}%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-700">Events & Tastings</span>
                <span className="text-sm text-gray-600">{sliders.eventMarketingPercent}%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-700">Trade Marketing</span>
                <span className="text-sm text-gray-600">{sliders.tradingMarketingPercent}%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-700">PR & Content</span>
                <span className="text-sm text-gray-600">{sliders.prMarketingPercent}%</span>
              </div>
            </div>
          </div>
          
          <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h6 className="font-medium text-blue-800">Digital Marketing</h6>
              <p className="text-lg font-bold text-blue-900">
                ${Math.round(results.annualRevenue * sliders.marketingBudgetPercent / 100 * sliders.digitalMarketingPercent / 100).toLocaleString()}
              </p>
              <p className="text-xs text-blue-600">Social media, SEO, email</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h6 className="font-medium text-green-800">Events & Tastings</h6>
              <p className="text-lg font-bold text-green-900">
                ${Math.round(results.annualRevenue * sliders.marketingBudgetPercent / 100 * sliders.eventMarketingPercent / 100).toLocaleString()}
              </p>
              <p className="text-xs text-green-600">Farmers markets, demos</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h6 className="font-medium text-purple-800">Trade Marketing</h6>
              <p className="text-lg font-bold text-purple-900">
                ${Math.round(results.annualRevenue * sliders.marketingBudgetPercent / 100 * sliders.tradingMarketingPercent / 100).toLocaleString()}
              </p>
              <p className="text-xs text-purple-600">POS, incentives, training</p>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg">
              <h6 className="font-medium text-orange-800">PR & Content</h6>
              <p className="text-lg font-bold text-orange-900">
                ${Math.round(results.annualRevenue * sliders.marketingBudgetPercent / 100 * sliders.prMarketingPercent / 100).toLocaleString()}
              </p>
              <p className="text-xs text-orange-600">Stories, media, content</p>
            </div>
          </div>
        </div>
        
        {/* Key Marketing Tactics for Sales Velocity */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h4 className="text-lg font-bold text-gray-800 mb-4">Key Tactics for Sales Velocity</h4>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-amber-200 rounded-lg p-4 bg-amber-50">
              <h5 className="font-medium text-amber-800 mb-3">🏪 Shelf Velocity Drivers</h5>
              <ul className="text-sm text-amber-700 space-y-2">
                <li><strong>Eye-catching packaging:</strong> Heritage-inspired design that stands out</li>
                <li><strong>Shelf talkers:</strong> "Dry, not sweet" messaging at point of sale</li>
                <li><strong>Staff education:</strong> Train store staff on taste profile differences</li>
                <li><strong>Cross-merchandising:</strong> Place near craft beer, not sweet ciders</li>
                <li><strong>Sampling programs:</strong> Let taste drive the sale</li>
                <li><strong>Seasonal displays:</strong> Harvest themes, local pride positioning</li>
              </ul>
            </div>
            
            <div className="border border-teal-200 rounded-lg p-4 bg-teal-50">
              <h5 className="font-medium text-teal-800 mb-3">🍺 Bar & Restaurant Flow</h5>
              <ul className="text-sm text-teal-700 space-y-2">
                <li><strong>Bartender incentives:</strong> Spiffs for recommending our cider</li>
                <li><strong>Menu positioning:</strong> In craft beer section, not wine/cocktails</li>
                <li><strong>Glassware program:</strong> Proper glassware enhances experience</li>
                <li><strong>Food pairing suggestions:</strong> Specific menu item pairings</li>
                <li><strong>Happy hour features:</strong> Special pricing during key hours</li>
                <li><strong>Tap handle design:</strong> Heritage apple imagery, local pride</li>
              </ul>
            </div>
            
            <div className="border border-green-200 rounded-lg p-4 bg-green-50">
              <h5 className="font-medium text-green-800 mb-3">🏡 Taproom Traffic Drivers</h5>
              <ul className="text-sm text-green-700 space-y-2">
                <li><strong>Educational experiences:</strong> Cider vs beer/wine tastings</li>
                <li><strong>Instagram moments:</strong> Scenic views, harvest activities</li>
                <li><strong>Local partnerships:</strong> Food trucks, live music, artisans</li>
                <li><strong>Seasonal events:</strong> Harvest festivals, apple picking</li>
                <li><strong>Corporate groups:</strong> Team building, private events</li>
                <li><strong>Loyalty program:</strong> Rewards for repeat visits and referrals</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Channel-Specific Costs */}
      <div className="mt-8 bg-gray-50 p-6 rounded-lg">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Channel-Specific Costs</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Slotting Fees per SKU: ${sliders.slottingFeesPerSKU.toLocaleString()}
              <InfoBox title="Slotting Fees">
                <p>Fees paid to retailers for shelf space placement.</p>
                <ul className="list-disc pl-4 mt-1 space-y-1">
                  <li>$500-5000 per SKU per major retailer</li>
                  <li>Required for grocery and liquor store placement</li>
                  <li>Annual or one-time fees</li>
                </ul>
              </InfoBox>
            </label>
            <input
              type="range"
              min="500"
              max="5000"
              step="250"
              name="slottingFeesPerSKU"
              value={sliders.slottingFeesPerSKU}
              onChange={handleSliderChange}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <p className="text-sm text-gray-500 mt-1">
              Total: ${(sliders.slottingFeesPerSKU * sliders.numberOfSKUs * sliders.numberOfRetailers).toLocaleString()}
            </p>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Promotional Allowances: {sliders.promotionalAllowancePercent}%
              <InfoBox title="Promotional Allowances">
                <p>Marketing support paid to retailers and distributors.</p>
                <ul className="list-disc pl-4 mt-1 space-y-1">
                  <li>10-20% of wholesale revenue</li>
                  <li>Covers in-store displays, advertising</li>
                  <li>Required for competitive placement</li>
                </ul>
              </InfoBox>
            </label>
            <input
              type="range"
              min="5"
              max="25"
              step="1"
              name="promotionalAllowancePercent"
              value={sliders.promotionalAllowancePercent}
              onChange={handleSliderChange}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Sales Rep Commission: {sliders.salesRepCommissionPercent}%
              <InfoBox title="Sales Rep Commission">
                <p>Commission paid to sales representatives.</p>
                <ul className="list-disc pl-4 mt-1 space-y-1">
                  <li>3-8% of wholesale sales</li>
                  <li>Required for restaurant/bar sales</li>
                  <li>May include distributor rep fees</li>
                </ul>
              </InfoBox>
            </label>
            <input
              type="range"
              min="2"
              max="10"
              step="0.5"
              name="salesRepCommissionPercent"
              value={sliders.salesRepCommissionPercent}
              onChange={handleSliderChange}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Working Capital: {sliders.workingCapitalPercent}% of revenue
              <InfoBox title="Working Capital">
                <p>Cost of financing inventory and accounts receivable.</p>
                <ul className="list-disc pl-4 mt-1 space-y-1">
                  <li>Inventory financing costs</li>
                  <li>30-60 day payment terms</li>
                  <li>Assumes 6% interest rate</li>
                </ul>
              </InfoBox>
            </label>
            <input
              type="range"
              min="3"
              max="15"
              step="1"
              name="workingCapitalPercent"
              value={sliders.workingCapitalPercent}
              onChange={handleSliderChange}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
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
              Annual Marketing: ${results.marketingExpenses.toLocaleString()}
            </label>
            <div className="w-full h-2 bg-gray-200 rounded-lg">
              <div 
                className="h-2 bg-purple-400 rounded-lg" 
                style={{width: '100%'}}
              ></div>
            </div>
            <p className="text-sm text-gray-500 mt-1">Calculated from Marketing Strategy section ({sliders.marketingBudgetPercent}% of revenue)</p>
          </div>
        </div>
      </div>
      
      {/* Phase-Specific Financial Summary */}
      <div className="mt-8 bg-gray-50 p-6 rounded-lg">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Phase {sliders.implementationPhase} Financial Summary</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Revenue Breakdown */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h4 className="text-lg font-bold text-gray-800 mb-4">Revenue Sources</h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-700">Cider Sales</span>
                <span className="text-sm font-bold text-green-600">
                  ${Math.round(results.directSalesRevenue + results.wholesaleRevenue).toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-700">Apple Sales</span>
                <span className="text-sm font-bold text-green-600">
                  ${(() => {
                    const remainingBushels = results.totalBushels * (sliders.productionEfficiency / 100) - (results.ciderGallons / sliders.gallonsPerBushel);
                    const appleSalesPercent = sliders.implementationPhase === 1 ? sliders.phase1AppleSalesPercent : 
                                            sliders.implementationPhase === 2 ? sliders.phase2AppleSalesPercent : 
                                            sliders.phase3AppleSalesPercent;
                    const appleSalesBushels = remainingBushels * (appleSalesPercent / 100) * (sliders.salesEfficiency / 100);
                    const applePricePerBushel = sliders.implementationPhase === 1 ? 45 : 
                                              sliders.implementationPhase === 2 ? 35 : 25;
                    return Math.round(appleSalesBushels * applePricePerBushel).toLocaleString();
                  })()}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-700">Other Products</span>
                <span className="text-sm font-bold text-green-600">
                  ${Math.round((results.directSalesRevenue + results.wholesaleRevenue) * 0.15).toLocaleString()}
                </span>
              </div>
              <div className="border-t pt-2 flex justify-between items-center">
                <span className="font-bold text-gray-800">Total Revenue</span>
                <span className="font-bold text-green-600">${results.annualRevenue.toLocaleString()}</span>
              </div>
            </div>
          </div>
          
          {/* Expense Breakdown */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h4 className="text-lg font-bold text-gray-800 mb-4">Major Expenses</h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-700">Fixed Costs (Mortgage, etc.)</span>
                <span className="text-sm font-bold text-red-600">${results.annualFixedCosts.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-700">Labor</span>
                <span className="text-sm font-bold text-red-600">${results.laborExpenses.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-700">Marketing</span>
                <span className="text-sm font-bold text-red-600">${results.marketingExpenses.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-700">Production Costs</span>
                <span className="text-sm font-bold text-red-600">
                  ${Math.round(results.packagingCosts + results.exciseTax + results.licensingCosts).toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-700">Other Operating</span>
                <span className="text-sm font-bold text-red-600">
                  ${Math.round(results.annualExpenses - results.annualFixedCosts - results.laborExpenses - results.marketingExpenses - results.packagingCosts - results.exciseTax - results.licensingCosts).toLocaleString()}
                </span>
              </div>
              <div className="border-t pt-2 flex justify-between items-center">
                <span className="font-bold text-gray-800">Total Expenses</span>
                <span className="font-bold text-red-600">${results.annualExpenses.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Profit Summary */}
        <div className="mt-6 bg-white p-6 rounded-lg shadow">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <h5 className="text-sm font-medium text-gray-500 mb-2">Annual Profit</h5>
              <p className={`text-3xl font-bold ${results.annualProfit >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                ${results.annualProfit.toLocaleString()}
              </p>
              <p className="text-sm text-gray-500 mt-1">
                {((results.annualProfit / results.annualRevenue) * 100).toFixed(1)}% margin
              </p>
            </div>
            <div className="text-center">
              <h5 className="text-sm font-medium text-gray-500 mb-2">Return on Investment</h5>
              <p className={`text-3xl font-bold ${results.roi >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                {results.roi}%
              </p>
              <p className="text-sm text-gray-500 mt-1">Annual ROI</p>
            </div>
            <div className="text-center">
              <h5 className="text-sm font-medium text-gray-500 mb-2">Monthly Cash Flow</h5>
              <p className={`text-3xl font-bold ${results.annualProfit >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                ${Math.round(results.annualProfit / 12).toLocaleString()}
              </p>
              <p className="text-sm text-gray-500 mt-1">After all expenses</p>
            </div>
          </div>
        </div>
        
        {/* Phase Progression Insights */}
        <div className="mt-6 bg-blue-50 p-6 rounded-lg">
          <h4 className="text-lg font-bold text-blue-800 mb-4">Phase Strategy Insights</h4>
          
          {sliders.implementationPhase === 1 && (
            <div className="space-y-3">
              <p className="text-sm text-blue-700">
                <strong>Focus:</strong> High-margin apple sales to craft cideries fund brand building and initial cider production.
              </p>
              <p className="text-sm text-blue-700">
                <strong>Key Metrics:</strong> Selling {Math.round(results.totalBushels * 0.85 * 0.85)} bushels at $45/bushel = 
                ${Math.round(results.totalBushels * 0.85 * 0.85 * 45).toLocaleString()} apple revenue.
              </p>
              <p className="text-sm text-blue-700">
                <strong>Next Phase:</strong> Use profits to invest in expanded cider production equipment and taproom improvements.
              </p>
            </div>
          )}
          
          {sliders.implementationPhase === 2 && (
            <div className="space-y-3">
              <p className="text-sm text-blue-700">
                <strong>Focus:</strong> Balanced approach with growing cider sales while maintaining profitable apple sales.
              </p>
              <p className="text-sm text-blue-700">
                <strong>Key Metrics:</strong> {sliders.phase2CiderGallons} gallons cider + {Math.round(results.totalBushels * 0.6 * 0.9)} bushels apples at $35/bushel.
              </p>
              <p className="text-sm text-blue-700">
                <strong>Next Phase:</strong> Scale cider production to full capacity and expand regional distribution.
              </p>
            </div>
          )}
          
          {sliders.implementationPhase === 3 && (
            <div className="space-y-3">
              <p className="text-sm text-blue-700">
                <strong>Focus:</strong> Full cider operations with premium positioning and regional distribution.
              </p>
              <p className="text-sm text-blue-700">
                <strong>Key Metrics:</strong> {sliders.phase3CiderGallons} gallons cider production with minimal apple sales for maximum value-add.
              </p>
              <p className="text-sm text-blue-700">
                <strong>Optimization:</strong> Focus on premium pricing, efficiency improvements, and market expansion.
              </p>
            </div>
          )}
        </div>
      </div>
      
      {/* Phase Comparison Table */}
      <div className="mt-8 bg-gray-50 p-6 rounded-lg">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Phase Progression Comparison</h3>
        
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-700">
            <thead className="text-xs text-gray-700 uppercase bg-gray-100">
              <tr>
                <th className="px-4 py-2">Metric</th>
                <th className="px-4 py-2 text-center">Phase 1<br/>Brand Building</th>
                <th className="px-4 py-2 text-center">Phase 2<br/>Expansion</th>
                <th className="px-4 py-2 text-center">Phase 3<br/>Full Operations</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b">
                <td className="px-4 py-2 font-medium">Cider Production</td>
                <td className="px-4 py-2 text-center">{sliders.phase1CiderGallons} gallons</td>
                <td className="px-4 py-2 text-center">{sliders.phase2CiderGallons} gallons</td>
                <td className="px-4 py-2 text-center">{sliders.phase3CiderGallons} gallons</td>
              </tr>
              <tr className="bg-white border-b">
                <td className="px-4 py-2 font-medium">Apple Sales</td>
                <td className="px-4 py-2 text-center">{sliders.phase1AppleSalesPercent}% @ $45/bu</td>
                <td className="px-4 py-2 text-center">{sliders.phase2AppleSalesPercent}% @ $35/bu</td>
                <td className="px-4 py-2 text-center">{sliders.phase3AppleSalesPercent}% @ $25/bu</td>
              </tr>
              <tr className="bg-white border-b">
                <td className="px-4 py-2 font-medium">Taproom Focus</td>
                <td className="px-4 py-2 text-center">60% of cider sales</td>
                <td className="px-4 py-2 text-center">45% of cider sales</td>
                <td className="px-4 py-2 text-center">35% of cider sales</td>
              </tr>
              <tr className="bg-white border-b">
                <td className="px-4 py-2 font-medium">Capital Investment</td>
                <td className="px-4 py-2 text-center">${sliders.phase1CapitalInvestment.toLocaleString()}</td>
                <td className="px-4 py-2 text-center">${sliders.phase2CapitalInvestment.toLocaleString()}</td>
                <td className="px-4 py-2 text-center">${sliders.phase3CapitalInvestment.toLocaleString()}</td>
              </tr>
              <tr className="bg-white border-b">
                <td className="px-4 py-2 font-medium">Operating Intensity</td>
                <td className="px-4 py-2 text-center">Low (60% labor)</td>
                <td className="px-4 py-2 text-center">Medium (80% labor)</td>
                <td className="px-4 py-2 text-center">High (100% labor)</td>
              </tr>
              <tr className="bg-gray-100 font-medium">
                <td className="px-4 py-2">Expected Profit Trend</td>
                <td className="px-4 py-2 text-center text-green-600">High apple margins</td>
                <td className="px-4 py-2 text-center text-blue-600">Balanced growth</td>
                <td className="px-4 py-2 text-center text-purple-600">Premium cider focus</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="mt-4 bg-yellow-50 p-4 rounded-lg">
          <h4 className="font-medium text-yellow-800 mb-2">💡 Progression Strategy</h4>
          <p className="text-sm text-yellow-700">
            The model is designed so profits should <strong>increase</strong> with each phase by: 
            (1) maintaining profitable apple sales longer, (2) optimizing cider sales mix toward higher-margin channels, 
            and (3) achieving economies of scale. If Phase 2 or 3 show lower profits, consider adjusting production targets 
            or pricing to maintain the upward trajectory.
          </p>
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
                          return '$' + ((value as number)/1000).toLocaleString() + 'k';
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
                <td className="px-4 py-2">{Math.round(results.totalBushels * (sliders.ciderYield/100) * (sliders.productionEfficiency/100) * sliders.gallonsPerBushel).toLocaleString()}</td>
                <td className="px-4 py-2">{Math.round(results.totalBushels * (sliders.ciderYield/100) * (sliders.productionEfficiency/100) * sliders.gallonsPerBushel * (1-sliders.wasteSpoilage/100) * (sliders.salesEfficiency/100)).toLocaleString()}</td>
              </tr>
              <tr className="bg-white">
                <td className="px-4 py-2 font-medium">16oz Cans</td>
                <td className="px-4 py-2">{Math.round(results.totalBushels * (sliders.ciderYield/100) * sliders.gallonsPerBushel * sliders.cansPerGallon).toLocaleString()}</td>
                <td className="px-4 py-2">{Math.round(results.totalBushels * (sliders.ciderYield/100) * (sliders.productionEfficiency/100) * sliders.gallonsPerBushel * sliders.cansPerGallon).toLocaleString()}</td>
                <td className="px-4 py-2">{Math.round(results.totalBushels * (sliders.ciderYield/100) * (sliders.productionEfficiency/100) * sliders.gallonsPerBushel * sliders.cansPerGallon * (1-sliders.wasteSpoilage/100) * (sliders.salesEfficiency/100)).toLocaleString()}</td>
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