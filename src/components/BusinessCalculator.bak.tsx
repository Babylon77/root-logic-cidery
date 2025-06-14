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
  applesPerMatureTree: 750, // heritage varieties with proper management
  applesPerYoungTree: 180, 
  averageAppleWeightOz: 6, 
  applesPerBushel: 125, 
  ciderYield: 100, // percentage of apples for hard cider
  ciderPrice: 38, // per gallon equivalent (higher due to premium bottle pricing)
  bottlePrice500ml: 15, // 500ml bottles at $15-18
  bottlePrice750ml: 18, // 750ml bottles at $18-22 (average $18)
  bottlesPerGallon: 8, // 500ml bottles per gallon (16.9 oz each)
  gallonsPerBushel: 3.1, // gallons of cider per bushel
  packagingCostPerBottle: 3.50, // premium glass bottles, labels, corks
  exciseTaxPerGallon: 1.07, // federal excise tax on hard cider
  licensingCosts: 3600, // annual licensing fees
  distributionCostPercent: 3, // higher percentage due to premium positioning
  directSalesPercent: 70, // focus on direct sales for premium positioning
  abnbNights: 0, // nights per year - initially zero
  abnbRate: 250, // per night
  utilityExpenses: 6000, // annual (lower for small-scale operations)
  laborExpenses: 35000, // annual base labor
  maintenanceExpenses: 4000, // annual (lower since you have equipment already)
  marketingExpenses: 12000, // more realistic for small premium operation
  equipmentCost: 45000, // basic farm equipment (tractor, mower, sprayer) that needs to be financed
  equipmentFinanceRate: 6.5, // annual interest rate for equipment loans
  equipmentLoanTerm: 7, // years for equipment loan
  equipmentLifespan: 15, // years for depreciation (farm equipment lasts longer)
  
  // Capital Equipment Financing (for phase investments)
  capitalFinanceRate: 5.5, // annual interest rate for capital equipment loans (better rate)
  capitalLoanTerm: 5, // years for capital equipment loan (shorter term)
  productionEfficiency: 85, // percentage of theoretical yield actually achieved
  salesEfficiency: 95, // higher for premium, limited production
  wasteSpoilage: 3, // lower waste with careful handling of premium product
  additionalCapitalExpenses: 15000, // basic infrastructure improvements
  additionalCapitalLifespan: 10,
  farmLaborPercent: 40,
  harvestLaborPercent: 25,
  productionLaborPercent: 20,
  salesAdminPercent: 15,
  laborHourlyRate: 15, // higher rate for specialized heritage apple work
  automationLevel: 30, // less automation, more handcraft approach
  
  // Premium Bottle Sales Model (no draft, no cans)
  tastroomSalesPercent: 60, // high percentage direct sales for premium margin
  retailSalesPercent: 35, // premium wine shops and specialty stores
  restaurantBarSalesPercent: 5, // minimal restaurant sales, focus on wine bars
  
  // Premium Pricing Strategy
  applePricePerBushel: 30, // premium heritage varieties command higher prices
  tastroomBottlePrice: 20, // premium tasting room price (750ml)
  retailBottlePrice: 18, // average bottle price (750ml)
  restaurantBottlePrice: 16, // wholesale price to restaurants (750ml)
  
  // Channel-specific costs for premium positioning
  slottingFeesPerSKU: 300, // lower fees due to premium positioning
  numberOfSKUs: 3, // fewer, more focused product line
  numberOfRetailers: 5, // selective premium retailers
  promotionalAllowancePercent: 5, // lower promotional needs for premium products
  salesRepCommissionPercent: 5, // higher commission for premium sales
  retailerMarginPercent: 40, // higher retailer margin for premium products
  distributorMarginPercent: 25, // distributor margin
  workingCapitalPercent: 6, // higher working capital needs for premium inventory
  
  // Heritage Apple Production Timeline Model
  implementationPhase: 1, // 1 = Phase 1, 2 = Phase 2, 3 = Phase 3
  
  // Phase 1 (Year 1): Premium Brand Building
  phase1CiderGallons: 400, // start very small with premium focus
  phase1AppleSalesPercent: 90, // sell most apples initially for cash flow
  phase1TastroomEvents: 24, // bi-weekly events focusing on education
  phase1FarmersMarkets: 12, // monthly premium farmers markets
  phase1CapitalInvestment: 8000, // minimal additional equipment (already have most cider equipment)
  
  // Phase 2 (Years 2-4): Premium Market Expansion  
  phase2CiderGallons: 1200, // controlled growth maintaining premium pricing
  phase2AppleSalesPercent: 85, // still selling majority of apples
  phase2TastroomDays: 156, // 3 days/week open for tastings
  phase2DistributionAccounts: 8, // carefully selected premium accounts
  phase2CapitalInvestment: 15000, // tasting room improvements, additional bottling capacity
  
  // Phase 3 (Years 5+): Premium Market Leadership
  phase3CiderGallons: 2500, // moderate volume with premium margins
  phase3AppleSalesPercent: 80, // continue apple sales for revenue diversity
  phase3TastroomDays: 260, // 5 days/week open
  phase3DistributionAccounts: 25, // regional premium distribution
  phase3CapitalInvestment: 45000, // bright tank for carbonation/bottling, 2x 1000L SS fermentors
  
  // Marketing Strategy for Premium Positioning
  marketingBudgetPercent: 5, // higher percentage for premium brand building
  brandingInvestment: 25000, // significant investment in premium branding
  digitalMarketingPercent: 40, // higher digital focus for premium audience
  eventMarketingPercent: 30, // more events and tastings
  tradingMarketingPercent: 15, // trade marketing for premium placement
  prMarketingPercent: 15, // PR and content marketing
  
  // Premium Market Effectiveness
  customerAcquisitionCost: 40, // higher cost for premium customers
  customerLifetimeValue: 350, // much higher lifetime value for premium customers
  brandAwarenessTarget: 25, // higher awareness target in premium market
  tastroomConversionRate: 55, // higher conversion for premium experience
  
  // Heritage Apple Focus
  heritageAppleFocus: true, // emphasize heritage varieties
  organicCertification: true, // organic positioning
  premiumPositioning: true, // wine-competitive pricing strategy
  
  // Add missing UI compatibility fields

  packagingCostPerGallon: 28.0, // calculated from bottle costs
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
    totalBottleEquivalent: 0,
    ciderGallons: 0,
    packagingCosts: 0,
    exciseTax: 0,
    licensingCosts: 0,
    bottleEquivalent: 0,
    costPerBottle: 0,
    revenuePerBottle: 0,
    profitPerBottle: 0,
    directSalesRevenue: 0,
    wholesaleRevenue: 0,
    distributionCosts: 0,
    monthlyEquipmentPayment: 0,
    annualEquipmentPayments: 0,
    monthlyCapitalPayment: 0,
    annualCapitalPayments: 0,
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
    freshAppleRevenue: 0,
    freshAppleBushels: 0,
    bushelsForCider: 0,
    effectiveTotalBushels: 0,
    phaseAppleSalesPercent: 0,
    ciderRevenue: 0,
    otherProductsRevenue: 0,
    abnbRevenue: 0,
  })
  
  // Calculate financial outcomes whenever sliders change
  useEffect(() => {
    calculateFinancials()
  }, [sliders])
  
  const calculateFinancials = () => {
    // Define phase-specific labor multiplier
    let laborHoursMultiplier = 1.0;
    switch(sliders.implementationPhase) {
      case 1:
        laborHoursMultiplier = 0.6; // Phase 1: part-time operations
        break;
      case 2:
        laborHoursMultiplier = 0.8; // Phase 2: expanding operations
        break;
      case 3:
        laborHoursMultiplier = 1.0; // Phase 3: full operations
        break;
    }
    
    // Phase-adjusted utility and maintenance expenses
    const phaseUtilityExpenses = sliders.utilityExpenses * (sliders.implementationPhase === 1 ? 0.4 : sliders.implementationPhase === 2 ? 0.7 : 1.0);
    const phaseMaintenanceExpenses = sliders.maintenanceExpenses * (sliders.implementationPhase === 1 ? 0.3 : sliders.implementationPhase === 2 ? 0.7 : 1.0);
    const phaseLicensingCosts = sliders.licensingCosts;
    
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
    
    // Calculate farm equipment loan payments
    const equipmentMonthlyRate = sliders.equipmentFinanceRate / 100 / 12
    const equipmentPayments = sliders.equipmentLoanTerm * 12
    const monthlyEquipmentPayment = sliders.equipmentCost * equipmentMonthlyRate * Math.pow(1 + equipmentMonthlyRate, equipmentPayments) / 
      (Math.pow(1 + equipmentMonthlyRate, equipmentPayments) - 1)
    const annualEquipmentPayments = monthlyEquipmentPayment * 12
    
    // Calculate loan payments for phase-specific capital investments (financed, not cash)
    const capitalMonthlyRate = sliders.capitalFinanceRate / 100 / 12
    const capitalPayments = sliders.capitalLoanTerm * 12
    let monthlyCapitalPayment = 0
    if (phaseCapitalInvestment > 0) {
      monthlyCapitalPayment = phaseCapitalInvestment * capitalMonthlyRate * Math.pow(1 + capitalMonthlyRate, capitalPayments) / 
        (Math.pow(1 + capitalMonthlyRate, capitalPayments) - 1)
    }
    const annualCapitalPayments = monthlyCapitalPayment * 12
    
    // Only additional capital expenses are depreciated (minor infrastructure improvements)
    const additionalCapitalAmortization = sliders.additionalCapitalExpenses / sliders.additionalCapitalLifespan
    
    // Calculate annual fixed costs (all equipment financed)
    const annualFixedCosts = annualMortgage + sliders.propertyTax + sliders.insurance + 
                           annualEquipmentPayments + annualCapitalPayments + additionalCapitalAmortization
    
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
    
    // CORRECT APPLE ALLOCATION: Ensure apples for cider + apples for fresh sales = total bushels
    // Get effective total bushels (after production efficiency)
    const effectiveTotalBushels = totalBushels * (sliders.productionEfficiency / 100);
    
    // Get phase-specific apple sales percentage
    let phaseAppleSalesPercent = 0;
    switch(sliders.implementationPhase) {
      case 1:
        phaseAppleSalesPercent = sliders.phase1AppleSalesPercent;
        break;
      case 2:
        phaseAppleSalesPercent = sliders.phase2AppleSalesPercent;
        break;
      case 3:
        phaseAppleSalesPercent = sliders.phase3AppleSalesPercent;
        break;
      default:
        phaseAppleSalesPercent = 100 - sliders.ciderYield;
    }
    
    // Calculate allocation: apples for fresh sales vs cider
    const freshAppleBushels = effectiveTotalBushels * (phaseAppleSalesPercent / 100) * (sliders.salesEfficiency / 100);
    const bushelsForCider = effectiveTotalBushels - (effectiveTotalBushels * (phaseAppleSalesPercent / 100));
    
    // Calculate cider production from allocated bushels
    const ciderGallons = bushelsForCider * sliders.gallonsPerBushel;
    
    // Calculate bottles (500ml and 750ml mix)
    const totalBottleEquivalent = ciderGallons * sliders.bottlesPerGallon
    
    // Account for waste/spoilage
    const netCiderGallons = ciderGallons * (1 - sliders.wasteSpoilage / 100)
    const netBottles = totalBottleEquivalent * (1 - sliders.wasteSpoilage / 100)
    
    // Account for sales efficiency (not all product gets sold)
    const soldCiderGallons = netCiderGallons * (sliders.salesEfficiency / 100)
    const soldBottles = netBottles * (sliders.salesEfficiency / 100)
    
    // Calculate sales by channel with phase-specific mix optimization
    let phaseTaproomPercent = sliders.tastroomSalesPercent;
    let phaseRetailPercent = sliders.retailSalesPercent;
    let phaseRestaurantPercent = sliders.restaurantBarSalesPercent;
    
    // Premium bottle sales mix by phase
    switch(sliders.implementationPhase) {
      case 1: // Focus on highest margin direct sales
        phaseTaproomPercent = 70; // Higher direct sales focus for premium pricing
        phaseRetailPercent = 25;
        phaseRestaurantPercent = 5;
        break;
      case 2: // Balanced premium growth
        phaseTaproomPercent = 60;
        phaseRetailPercent = 35;
        phaseRestaurantPercent = 5;
        break;
      case 3: // Established premium distribution
        phaseTaproomPercent = 50;
        phaseRetailPercent = 45;
        phaseRestaurantPercent = 5;
        break;
    }
    
    const taproomBottles = soldBottles * (phaseTaproomPercent / 100)
    const retailBottles = soldBottles * (phaseRetailPercent / 100)
    const restaurantBottles = soldBottles * (phaseRestaurantPercent / 100)
    
    // Calculate revenue by channel - premium bottle pricing
    const taproomRevenue = taproomBottles * sliders.tastroomBottlePrice
    const retailRevenue = retailBottles * sliders.retailBottlePrice 
    const restaurantRevenue = restaurantBottles * sliders.restaurantBottlePrice
    
    // Total cider revenue
    const ciderRevenue = taproomRevenue + retailRevenue + restaurantRevenue
    
    // Fresh apple revenue
    const freshAppleRevenue = freshAppleBushels * sliders.applePricePerBushel
    
    // Add Airbnb revenue (fixed)
    const abnbRevenue = sliders.abnbNights * sliders.abnbRate
    
    // Other products revenue (15% of apple products revenue)
    const otherProductsRevenue = (ciderRevenue + freshAppleRevenue) * 0.15
    
    // Total revenue
    const totalRevenue = ciderRevenue + freshAppleRevenue + abnbRevenue + otherProductsRevenue
    
    // Define revenue-dependent variables
    const slottingFees = sliders.slottingFeesPerSKU * sliders.numberOfSKUs * sliders.numberOfRetailers;
    const promotionalAllowances = (retailRevenue + restaurantRevenue) * sliders.promotionalAllowancePercent / 100;
    const workingCapitalCost = totalRevenue * sliders.workingCapitalPercent / 100 * 0.06;
    
    // Calculate phase-specific expenses
    const packagingCosts = soldBottles * sliders.packagingCostPerBottle
    const exciseTax = soldCiderGallons * sliders.exciseTaxPerGallon
    const distributionCosts = totalRevenue * (sliders.distributionCostPercent / 100)
    
    // Calculate phase-adjusted labor expenses
    const baseLaborHours = sliders.orchardAcres * 500; // Base hours per acre
    const phaseLaborHours = baseLaborHours * laborHoursMultiplier * (1 - sliders.automationLevel / 100);
    const calculatedLaborExpenses = phaseLaborHours * sliders.laborHourlyRate;
    
    // Marketing for lean family operation - mostly DIY with minimal paid advertising
    let baseMarketingBudget = 0;
    switch(sliders.implementationPhase) {
      case 1:
        baseMarketingBudget = 3000; // Basic website, business cards, farmers market fees
        break;
      case 2:
        baseMarketingBudget = 6000; // Add some paid social media, signage, events
        break;
      case 3:
        baseMarketingBudget = 10000; // Professional photography, expanded advertising
        break;
    }
    const calculatedMarketingExpenses = baseMarketingBudget;
    
    // Phase-adjusted channel costs (minimal with self-distribution)
    const phaseSlottingFees = sliders.implementationPhase >= 3 ? slottingFees * 0.3 : 0; // Only for major chains in Phase 3
    const phasePromotionalAllowances = sliders.implementationPhase >= 3 ? promotionalAllowances * 0.2 : 0; // Minimal promotional support
    const phaseSalesRepCommissions = 0; // No sales reps needed with self-distribution
    const phaseWorkingCapitalCost = workingCapitalCost * 0.5; // Lower working capital needs with direct sales
    
    const annualExpenses = phaseUtilityExpenses + calculatedLaborExpenses + 
      phaseMaintenanceExpenses + calculatedMarketingExpenses + annualFixedCosts +
      packagingCosts + exciseTax + phaseLicensingCosts + distributionCosts +
      phaseSlottingFees + phasePromotionalAllowances + phaseSalesRepCommissions + phaseWorkingCapitalCost
    
    // Calculate profit and ROI
    const annualProfit = totalRevenue - annualExpenses
    const totalInvestment = sliders.propertyValue * (sliders.downPayment / 100) + 
                           sliders.equipmentCost + sliders.additionalCapitalExpenses
    const roi = (annualProfit / totalInvestment) * 100
    
    // Calculate per-unit metrics
    const bottleEquivalent = soldBottles * sliders.bottlesPerGallon
    const costPerBottle = soldBottles > 0 ? annualExpenses / soldBottles : 0
    const revenuePerBottle = soldBottles > 0 ? totalRevenue / soldBottles : 0
    const profitPerBottle = soldBottles > 0 ? (totalRevenue - annualExpenses) / soldBottles : 0
    
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
      annualRevenue: Math.round(totalRevenue),
      annualExpenses: Math.round(annualExpenses),
      annualProfit: Math.round(annualProfit),
      roi: Math.round(roi * 10) / 10, // Round to 1 decimal place
      totalTrees: totalTrees,
      totalApples: Math.round(totalApples),
      totalBushels: Math.round(totalBushels),
      totalBottleEquivalent: Math.round(totalBottleEquivalent),
      ciderGallons: Math.round(netCiderGallons),
      packagingCosts: Math.round(packagingCosts),
      exciseTax: Math.round(exciseTax),
      licensingCosts: Math.round(phaseLicensingCosts),
      bottleEquivalent: Math.round(soldBottles),
      costPerBottle: soldBottles > 0 ? annualExpenses / soldBottles : 0,
      revenuePerBottle: soldBottles > 0 ? totalRevenue / soldBottles : 0,
      profitPerBottle: soldBottles > 0 ? (totalRevenue - annualExpenses) / soldBottles : 0,
      directSalesRevenue: Math.round(taproomRevenue),
      wholesaleRevenue: Math.round(retailRevenue + restaurantRevenue),
      distributionCosts: Math.round(distributionCosts),
      monthlyEquipmentPayment: Math.round(monthlyEquipmentPayment),
      annualEquipmentPayments: Math.round(annualEquipmentPayments),
      monthlyCapitalPayment: Math.round(monthlyCapitalPayment),
      annualCapitalPayments: Math.round(annualCapitalPayments),
      additionalCapitalAmortization: Math.round(additionalCapitalAmortization),
      productLoss: Math.round(gallonsLost),
      actualGallonsProduced: Math.round(netCiderGallons),
      actualGallonsSold: Math.round(soldCiderGallons),
      effectiveRevenue: Math.round(totalRevenue),
      theoreticalMaxGallons: Math.round(bushelsForCider * sliders.gallonsPerBushel),
      totalLaborHours: Math.round(totalLaborHours),
      farmLaborHours: Math.round(farmLaborHours),
      harvestLaborHours: Math.round(harvestLaborHours),
      productionLaborHours: Math.round(productionLaborHours),
      salesAdminHours: Math.round(salesAdminHours),
      monthlyLaborHours: monthlyLaborHours,
      automationSavings: Math.round(automationSavings),
      laborExpenses: Math.round(calculatedLaborExpenses), 
      marketingExpenses: Math.round(calculatedMarketingExpenses),
      freshAppleRevenue: Math.round(freshAppleRevenue),
      freshAppleBushels: Math.round(freshAppleBushels),
      bushelsForCider: Math.round(bushelsForCider),
      effectiveTotalBushels: Math.round(effectiveTotalBushels),
      phaseAppleSalesPercent: phaseAppleSalesPercent,
      ciderRevenue: Math.round(ciderRevenue),
      otherProductsRevenue: Math.round(otherProductsRevenue),
      abnbRevenue: Math.round(abnbRevenue),
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
          // Use the calculated fresh apple revenue from the main calculation
          results.freshAppleRevenue || 0,
          // Other products revenue
          results.otherProductsRevenue || 0
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
    // Use the same corrected allocation logic as main calculation
    const effectiveBushels = bushels * (sliders.productionEfficiency / 100);
    
    // Get phase-specific apple sales percentage
    let phaseAppleSalesPercent = 0;
    switch(sliders.implementationPhase) {
      case 1:
        phaseAppleSalesPercent = sliders.phase1AppleSalesPercent;
        break;
      case 2:
        phaseAppleSalesPercent = sliders.phase2AppleSalesPercent;
        break;
      case 3:
        phaseAppleSalesPercent = sliders.phase3AppleSalesPercent;
        break;
      default:
        phaseAppleSalesPercent = 100 - sliders.ciderYield;
    }
    
    // Calculate allocation
    const freshAppleBushels = effectiveBushels * (phaseAppleSalesPercent / 100) * (sliders.salesEfficiency / 100);
    const bushelsUsedForCider = effectiveBushels - (effectiveBushels * (phaseAppleSalesPercent / 100));
    
    // Calculate cider production
    const ciderGallonsProduced = bushelsUsedForCider * sliders.gallonsPerBushel;
    
    // Account for waste/spoilage
    const netCiderGallons = ciderGallonsProduced * (1 - sliders.wasteSpoilage / 100)
    
    // Account for sales efficiency
    const soldCiderGallons = netCiderGallons * (sliders.salesEfficiency / 100)
    
    // Calculate bottles produced
    const soldBottles = soldCiderGallons * sliders.bottlesPerGallon
    
    // Calculate revenue by channel using bottle pricing with phase-specific mix
    let phaseTaproomPercent, phaseRetailPercent, phaseRestaurantPercent;
    switch(sliders.implementationPhase) {
      case 1:
        phaseTaproomPercent = 70; phaseRetailPercent = 25; phaseRestaurantPercent = 5;
        break;
      case 2:
        phaseTaproomPercent = 60; phaseRetailPercent = 35; phaseRestaurantPercent = 5;
        break;
      case 3:
        phaseTaproomPercent = 50; phaseRetailPercent = 45; phaseRestaurantPercent = 5;
        break;
      default:
        phaseTaproomPercent = sliders.tastroomSalesPercent;
        phaseRetailPercent = sliders.retailSalesPercent;
        phaseRestaurantPercent = sliders.restaurantBarSalesPercent;
    }
    
    const tastroomBottles = soldBottles * (phaseTaproomPercent / 100)
    const retailBottles = soldBottles * (phaseRetailPercent / 100)
    const restaurantBottles = soldBottles * (phaseRestaurantPercent / 100)
    
    const tastroomRevenue = tastroomBottles * sliders.tastroomBottlePrice
    const retailRevenue = retailBottles * sliders.retailBottlePrice
    const restaurantRevenue = restaurantBottles * sliders.restaurantBottlePrice
    
    // Total cider revenue
    const ciderRevenue = tastroomRevenue + retailRevenue + restaurantRevenue
    
    // Fresh apple revenue
    const freshAppleRevenue = freshAppleBushels * sliders.applePricePerBushel
    
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

  // Helper function to calculate cider gallons for any phase
  const calculatePhaseValues = (phase: number) => {
    const effectiveTotalBushels = results.totalBushels * (sliders.productionEfficiency / 100);
    
    let phaseAppleSalesPercent = 0;
    switch(phase) {
      case 1:
        phaseAppleSalesPercent = sliders.phase1AppleSalesPercent;
        break;
      case 2:
        phaseAppleSalesPercent = sliders.phase2AppleSalesPercent;
        break;
      case 3:
        phaseAppleSalesPercent = sliders.phase3AppleSalesPercent;
        break;
    }
    
    const bushelsForCider = effectiveTotalBushels - (effectiveTotalBushels * (phaseAppleSalesPercent / 100));
    const phaseCiderGallons = bushelsForCider * sliders.gallonsPerBushel;
    
    return {
      ciderGallons: Math.round(phaseCiderGallons),
      appleSalesPercent: phaseAppleSalesPercent
    };
  };

  // Calculate values for all phases
  const phase1Values = calculatePhaseValues(1);
  const phase2Values = calculatePhaseValues(2);
  const phase3Values = calculatePhaseValues(3);

  // Calculate labor costs based on labor analysis inputs
  // Use a more realistic base calculation - typical orchard needs ~500 hours per acre annually
  const baseHoursPerAcre = 500; // Industry average for apple orchards with cider production
  const totalPotentialHours = sliders.orchardAcres * baseHoursPerAcre;
  const totalLaborHours = totalPotentialHours * (1 - sliders.automationLevel / 100);
  
  // Calculate the labor expenses from hours
  const calculatedLaborExpenses = totalLaborHours * sliders.laborHourlyRate;

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Apple Farm Cidery Business Plan</h1>
      <p className="text-gray-600 mb-8">Interactive financial modeling for a heritage apple farm and craft cidery operation</p>
      
      {/* Business Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg border border-green-200">
          <h3 className="text-lg font-bold text-green-800 mb-2">Orchard Capacity</h3>
          <p className="text-3xl font-bold text-green-900">{results.totalTrees}</p>
          <p className="text-sm text-green-700">trees on {sliders.orchardAcres} acres</p>
          <p className="text-xs text-green-600 mt-1">{results.totalBushels.toLocaleString()} bushels potential</p>
        </div>
        
        <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-6 rounded-lg border border-amber-200">
          <h3 className="text-lg font-bold text-amber-800 mb-2">Phase {sliders.implementationPhase} Production</h3>
          <p className="text-3xl font-bold text-amber-900">{results.ciderGallons.toLocaleString()}</p>
          <p className="text-sm text-amber-700">gallons cider annually</p>
          <p className="text-xs text-amber-600 mt-1">{Math.round(results.ciderGallons * sliders.bottlesPerGallon).toLocaleString()} bottles equivalent</p>
        </div>
        
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200">
          <h3 className="text-lg font-bold text-blue-800 mb-2">Annual Revenue</h3>
          <p className="text-3xl font-bold text-blue-900">${results.annualRevenue.toLocaleString()}</p>
          <p className="text-sm text-blue-700">total revenue</p>
          <p className="text-xs text-blue-600 mt-1">${Math.round(results.annualRevenue/12).toLocaleString()}/month average</p>
        </div>
        
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg border border-purple-200">
          <h3 className="text-lg font-bold text-purple-800 mb-2">Annual Profit</h3>
          <p className={`text-3xl font-bold ${results.annualProfit >= 0 ? 'text-purple-900' : 'text-red-600'}`}>
            ${results.annualProfit.toLocaleString()}
          </p>
          <p className="text-sm text-purple-700">{results.roi}% ROI</p>
          <p className="text-xs text-purple-600 mt-1">
            {((results.annualProfit / results.annualRevenue) * 100).toFixed(1)}% margin
          </p>
        </div>
      </div>

      {/* Implementation Phase Selection */}
      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Implementation Strategy</h2>
        <p className="text-gray-600 mb-6">Choose your current business phase to see phase-specific financial projections</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <button
            onClick={() => setSliders(prev => ({...prev, implementationPhase: 1}))}
            className={`p-6 rounded-lg border-2 text-left transition-all ${
              sliders.implementationPhase === 1 
                ? 'border-blue-500 bg-blue-50 shadow-md' 
                : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-bold text-gray-800">Phase 1</h3>
              <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">Year 1</span>
            </div>
            <h4 className="font-medium text-gray-700 mb-2">Brand Building & Market Entry</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• {phase1Values.ciderGallons.toLocaleString()} gallons cider production</li>
              <li>• {sliders.phase1AppleSalesPercent}% apple sales to cideries</li>
              <li>• Monthly barn events & farmers markets</li>
              <li>• ${sliders.phase1CapitalInvestment.toLocaleString()} equipment financing</li>
            </ul>
          </button>
          
          <button
            onClick={() => setSliders(prev => ({...prev, implementationPhase: 2}))}
            className={`p-6 rounded-lg border-2 text-left transition-all ${
              sliders.implementationPhase === 2 
                ? 'border-blue-500 bg-blue-50 shadow-md' 
                : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-bold text-gray-800">Phase 2</h3>
              <span className="text-sm bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Years 2-4</span>
            </div>
            <h4 className="font-medium text-gray-700 mb-2">Expansion & Distribution</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• {phase2Values.ciderGallons.toLocaleString()} gallons cider production</li>
              <li>• {sliders.phase2AppleSalesPercent}% apple sales</li>
              <li>• Regular taproom + local distribution</li>
              <li>• ${sliders.phase2CapitalInvestment.toLocaleString()} equipment financing</li>
            </ul>
          </button>
          
          <button
            onClick={() => setSliders(prev => ({...prev, implementationPhase: 3}))}
            className={`p-6 rounded-lg border-2 text-left transition-all ${
              sliders.implementationPhase === 3 
                ? 'border-blue-500 bg-blue-50 shadow-md' 
                : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-bold text-gray-800">Phase 3</h3>
              <span className="text-sm bg-purple-100 text-purple-800 px-2 py-1 rounded">Years 5+</span>
            </div>
            <h4 className="font-medium text-gray-700 mb-2">Full Operations & Regional Growth</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• {phase3Values.ciderGallons.toLocaleString()} gallons cider production</li>
              <li>• {sliders.phase3AppleSalesPercent}% apple sales</li>
              <li>• Full taproom + regional distribution</li>
              <li>• ${sliders.phase3CapitalInvestment.toLocaleString()} equipment financing</li>
            </ul>
          </button>
        </div>
        
        {/* Current Phase Strategy */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h4 className="text-lg font-bold text-gray-800 mb-3">
            Current Strategy: Phase {sliders.implementationPhase}
          </h4>
          
          {sliders.implementationPhase === 1 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-medium text-gray-700 mb-2">Revenue Focus</h5>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• High-margin apple sales ($45/bushel to craft cideries)</li>
                  <li>• Small-batch premium cider (750 gallons)</li>
                  <li>• Direct-to-consumer emphasis (60% taproom sales)</li>
                  <li>• Build brand recognition and customer base</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-gray-700 mb-2">Cost Management</h5>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Minimal equipment financing ($8k capital loan)</li>
                  <li>• Heavy family labor (60% of full operation)</li>
                  <li>• Lean marketing ($3k - DIY approach)</li>
                  <li>• Basic licensing and minimal distribution</li>
                </ul>
              </div>
            </div>
          )}
          
          {sliders.implementationPhase === 2 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-medium text-gray-700 mb-2">Revenue Focus</h5>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Balanced cider production (2,000 gallons)</li>
                  <li>• Continued apple sales ($35/bushel mixed markets)</li>
                  <li>• Local distribution development (15 accounts)</li>
                  <li>• Regular taproom operations (104 days/year)</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-gray-700 mb-2">Cost Management</h5>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Expanded equipment financing ($15k capital loan)</li>
                  <li>• Moderate labor increase (80% of full operation)</li>
                  <li>• Strategic marketing ($6k with some paid advertising)</li>
                  <li>• Channel costs for wholesale accounts</li>
                </ul>
              </div>
            </div>
          )}
          
          {sliders.implementationPhase === 3 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-medium text-gray-700 mb-2">Revenue Focus</h5>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Full cider production (4,500 gallons)</li>
                  <li>• Premium positioning and regional distribution</li>
                  <li>• Destination taproom (312 days/year)</li>
                  <li>• 75 distribution accounts across NJ/PA/NY</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-gray-700 mb-2">Cost Management</h5>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Full equipment financing ($45k capital loan)</li>
                  <li>• Efficient operations (100% with automation)</li>
                  <li>• Professional marketing ($10k with expanded reach)</li>
                  <li>• Full channel costs but efficient distribution</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Key Business Parameters */}
      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Business Parameters</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Property & Financial */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Property & Financing</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
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
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>$900k</span>
                  <span>Monthly Payment: ${results.monthlyMortgage.toLocaleString()}</span>
                  <span>$1.4M</span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
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
                  <label className="block text-sm font-medium text-gray-700 mb-1">
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
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Farm Equipment Cost: ${sliders.equipmentCost.toLocaleString()} (Financed)
                  <InfoBox title="Farm Equipment Financing">
                    <p>Basic farm equipment that will be financed with a loan.</p>
                    <ul className="list-disc pl-4 mt-1 space-y-1">
                      <li>Tractor (35-50 HP)</li>
                      <li>Mower, sprayer, spreader attachments</li>
                      <li>Orchard maintenance tools</li>
                      <li>Financed at {sliders.equipmentFinanceRate}% for {sliders.equipmentLoanTerm} years</li>
                    </ul>
                  </InfoBox>
                </label>
                <input
                  type="range"
                  min="25000"
                  max="75000"
                  step="2500"
                  name="equipmentCost"
                  value={sliders.equipmentCost}
                  onChange={handleSliderChange}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>$25k (basic)</span>
                  <span>Monthly payment: ${Math.round(results.monthlyEquipmentPayment || 0).toLocaleString()}</span>
                  <span>$75k (premium)</span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Equipment Interest Rate: {sliders.equipmentFinanceRate}%
                  </label>
                  <input
                    type="range"
                    min="4.5"
                    max="9.5"
                    step="0.25"
                    name="equipmentFinanceRate"
                    value={sliders.equipmentFinanceRate}
                    onChange={handleSliderChange}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Equipment loan interest rate
                  </p>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Equipment Loan Term: {sliders.equipmentLoanTerm} years
                  </label>
                  <input
                    type="range"
                    min="3"
                    max="10"
                    step="1"
                    name="equipmentLoanTerm"
                    value={sliders.equipmentLoanTerm}
                    onChange={handleSliderChange}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Annual payment: ${Math.round(results.annualEquipmentPayments || 0).toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
            
            {/* Capital Equipment Financing */}
            <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h4 className="text-md font-bold text-blue-800 mb-3">Phase Capital Equipment Financing</h4>
              <p className="text-sm text-blue-700 mb-4">
                Equipment for each phase is financed separately at better rates (bottling equipment, fermentation tanks, etc.)
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-blue-700 mb-1">
                    Capital Interest Rate: {sliders.capitalFinanceRate}%
                  </label>
                  <input
                    type="range"
                    min="3.5"
                    max="8.5"
                    step="0.25"
                    name="capitalFinanceRate"
                    value={sliders.capitalFinanceRate}
                    onChange={handleSliderChange}
                    className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <p className="text-xs text-blue-600 mt-1">
                    Better rate for production equipment
                  </p>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-blue-700 mb-1">
                    Capital Loan Term: {sliders.capitalLoanTerm} years
                  </label>
                  <input
                    type="range"
                    min="3"
                    max="7"
                    step="1"
                    name="capitalLoanTerm"
                    value={sliders.capitalLoanTerm}
                    onChange={handleSliderChange}
                    className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <p className="text-xs text-blue-600 mt-1">
                    Monthly payment: ${Math.round(results.monthlyCapitalPayment || 0).toLocaleString()}
                  </p>
                </div>
              </div>
              
              <div className="mt-3 p-3 bg-white rounded border">
                <div className="text-sm text-gray-700">
                  <span className="font-medium">Current Phase {sliders.implementationPhase}:</span>
                  {sliders.implementationPhase === 1 && ` $${sliders.phase1CapitalInvestment.toLocaleString()} financed`}
                  {sliders.implementationPhase === 2 && ` $${(sliders.phase1CapitalInvestment + sliders.phase2CapitalInvestment).toLocaleString()} financed`}
                  {sliders.implementationPhase === 3 && ` $${(sliders.phase1CapitalInvestment + sliders.phase2CapitalInvestment + sliders.phase3CapitalInvestment).toLocaleString()} financed`}
                  <br />
                  <span className="font-medium">Annual Payment:</span> ${Math.round(results.annualCapitalPayments || 0).toLocaleString()}
                </div>
              </div>
            </div>
          </div>
          
          {/* Orchard Production */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Orchard Production</h3>
            
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Orchard Size: {sliders.orchardAcres} acres
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
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Mature Trees: {sliders.matureTreePercentage}%
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
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Production Efficiency: {sliders.productionEfficiency}%
                  <InfoBox title="Production Efficiency">
                    <p>Accounts for real-world conditions affecting yield.</p>
                    <ul className="list-disc pl-4 mt-1 space-y-1">
                      <li>Weather variations and crop losses</li>
                      <li>Pest and disease management</li>
                      <li>Harvesting and handling losses</li>
                      <li>Quality control standards</li>
                    </ul>
                  </InfoBox>
                </label>
                <input
                  type="range"
                  min="70"
                  max="95"
                  step="1"
                  name="productionEfficiency"
                  value={sliders.productionEfficiency}
                  onChange={handleSliderChange}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Effective yield: {Math.round(results.totalBushels * (sliders.productionEfficiency/100)).toLocaleString()} bushels
                </p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Sales Efficiency: {sliders.salesEfficiency}%
                  <InfoBox title="Sales Efficiency">
                    <p>Percentage of produced goods that actually get sold.</p>
                    <ul className="list-disc pl-4 mt-1 space-y-1">
                      <li>Market demand limitations</li>
                      <li>Distribution challenges</li>
                      <li>Seasonal sales variations</li>
                      <li>Competition and pricing pressure</li>
                    </ul>
                  </InfoBox>
                </label>
                <input
                  type="range"
                  min="50"
                  max="100"
                  step="1"
                  name="salesEfficiency"
                  value={sliders.salesEfficiency}
                  onChange={handleSliderChange}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Actual sales: {Math.round(results.totalBushels * (sliders.productionEfficiency/100) * (sliders.salesEfficiency/100)).toLocaleString()} bushels
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Controls */}
      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Pricing Strategy</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Apple Pricing */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Apple Sales Pricing</h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Apple Price per Bushel: ${sliders.applePricePerBushel.toFixed(2)}
                <InfoBox title="Apple Pricing">
                  <p>Wholesale price for heritage organic cider apples.</p>
                  <ul className="list-disc pl-4 mt-1 space-y-1">
                    <li>Premium varieties command higher prices</li>
                    <li>Organic certification adds value</li>
                    <li>Local craft cideries pay premium</li>
                    <li>Range: $18.75 - $31.25 per bushel</li>
                  </ul>
                </InfoBox>
              </label>
              <input
                type="range"
                min="18.75"
                max="31.25"
                step="0.25"
                name="applePricePerBushel"
                value={sliders.applePricePerBushel}
                onChange={handleSliderChange}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>$18.75 (-25%)</span>
                <span>Base: $25</span>
                <span>$31.25 (+25%)</span>
              </div>
            </div>
          </div>
          
          {/* Bottle Pricing */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-bold text-gray-800 mb-4">750ml Bottle Pricing Strategy</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tasting Room Price: ${sliders.tastroomBottlePrice.toFixed(2)}
                  <InfoBox title="Tasting Room Pricing">
                    <p>Direct-to-consumer pricing in your tasting room.</p>
                    <ul className="list-disc pl-4 mt-1 space-y-1">
                      <li>Premium pricing for direct sales</li>
                      <li>Highest profit margin</li>
                      <li>Includes experience value</li>
                      <li>750ml bottles</li>
                    </ul>
                  </InfoBox>
                </label>
                <input
                  type="range"
                  min="12"
                  max="24"
                  step="0.5"
                  name="tastroomBottlePrice"
                  value={sliders.tastroomBottlePrice}
                  onChange={handleSliderChange}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>$12 (Low)</span>
                  <span>$18 (Target)</span>
                  <span>$24 (Premium)</span>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Retail Wholesale Price: ${sliders.retailBottlePrice.toFixed(2)}
                  <InfoBox title="Retail Wholesale Pricing">
                    <p>Wholesale price to retail stores.</p>
                    <ul className="list-disc pl-4 mt-1 space-y-1">
                      <li>Retailer typically marks up 40-50%</li>
                      <li>Medium profit margin</li>
                      <li>750ml bottles</li>
                      <li>Should average around $18</li>
                    </ul>
                  </InfoBox>
                </label>
                <input
                  type="range"
                  min="12"
                  max="24"
                  step="0.5"
                  name="retailBottlePrice"
                  value={sliders.retailBottlePrice}
                  onChange={handleSliderChange}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>$12 (Low)</span>
                  <span>$18 (Target)</span>
                  <span>$24 (Premium)</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Retail shelf price: ~${(sliders.retailBottlePrice * 1.45).toFixed(2)} (45% markup)
                </p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Restaurant Wholesale Price: ${sliders.restaurantBottlePrice.toFixed(2)}
                  <InfoBox title="Restaurant Wholesale Pricing">
                    <p>Wholesale price to restaurants and bars.</p>
                    <ul className="list-disc pl-4 mt-1 space-y-1">
                      <li>Restaurant marks up 200-300%</li>
                      <li>Lower profit margin</li>
                      <li>750ml bottles</li>
                      <li>Volume pricing</li>
                    </ul>
                  </InfoBox>
                </label>
                <input
                  type="range"
                  min="12"
                  max="24"
                  step="0.5"
                  name="restaurantBottlePrice"
                  value={sliders.restaurantBottlePrice}
                  onChange={handleSliderChange}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>$12 (Low)</span>
                  <span>$18 (Target)</span>
                  <span>$24 (Premium)</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Restaurant menu price: ~${(sliders.restaurantBottlePrice * 2.5).toFixed(2)} (150% markup)
                </p>
              </div>
              
              <div className="mt-4 bg-blue-100 p-3 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Average Bottle Price:</strong> ${((sliders.tastroomBottlePrice * sliders.tastroomSalesPercent + sliders.retailBottlePrice * sliders.retailSalesPercent + sliders.restaurantBottlePrice * sliders.restaurantBarSalesPercent) / 100).toFixed(2)} across all channels
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Financial Results */}
      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Financial Results</h2>
        
        {/* Revenue & Profit Summary */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Revenue Breakdown</h3>
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
                  ${results.freshAppleRevenue.toLocaleString()}
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
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Expense Breakdown</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-700">Fixed Costs</span>
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
                <span className="text-sm font-medium text-gray-700">Packaging & Production</span>
                <span className="text-sm font-bold text-red-600">${Math.round(results.packagingCosts + results.exciseTax).toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-700">Utilities & Maintenance</span>
                <span className="text-sm font-bold text-red-600">
                  ${Math.round(
                    (sliders.implementationPhase === 1 ? sliders.utilityExpenses * 0.4 : 
                     sliders.implementationPhase === 2 ? sliders.utilityExpenses * 0.7 : 
                     sliders.utilityExpenses) +
                    (sliders.implementationPhase === 1 ? sliders.maintenanceExpenses * 0.3 : 
                     sliders.implementationPhase === 2 ? sliders.maintenanceExpenses * 0.7 : 
                     sliders.maintenanceExpenses)
                  ).toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-700">Distribution & Channel Costs</span>
                <span className="text-sm font-bold text-red-600">
                  ${Math.round(results.distributionCosts + 
                    (sliders.implementationPhase >= 2 ? sliders.slottingFeesPerSKU * sliders.numberOfSKUs * sliders.numberOfRetailers : 0) + 
                    (sliders.implementationPhase >= 2 ? results.wholesaleRevenue * (sliders.promotionalAllowancePercent + sliders.salesRepCommissionPercent) / 100 : 0)
                  ).toLocaleString()}
                </span>
              </div>
              <div className="border-t pt-2 flex justify-between items-center">
                <span className="font-bold text-gray-800">Total Expenses</span>
                <span className="font-bold text-red-600">${results.annualExpenses.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Profit Metrics */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <h4 className="text-sm font-medium text-gray-500 mb-2">Net Profit</h4>
              <p className={`text-2xl font-bold ${results.annualProfit >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                ${results.annualProfit.toLocaleString()}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                {((results.annualProfit / results.annualRevenue) * 100).toFixed(1)}% margin
              </p>
            </div>
            <div className="text-center">
              <h4 className="text-sm font-medium text-gray-500 mb-2">Monthly Cash Flow</h4>
              <p className={`text-2xl font-bold ${results.annualProfit >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                ${Math.round(results.annualProfit / 12).toLocaleString()}
              </p>
              <p className="text-xs text-gray-500 mt-1">Average per month</p>
            </div>
            <div className="text-center">
              <h4 className="text-sm font-medium text-gray-500 mb-2">Return on Investment</h4>
              <p className={`text-2xl font-bold ${results.roi >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                {results.roi}%
              </p>
              <p className="text-xs text-gray-500 mt-1">Annual ROI</p>
            </div>
            <div className="text-center">
              <h4 className="text-sm font-medium text-gray-500 mb-2">Per Bottle Profit</h4>
              <p className={`text-2xl font-bold ${results.profitPerBottle >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                ${results.profitPerBottle.toFixed(2)}
              </p>
              <p className="text-xs text-gray-500 mt-1">Profit per bottle sold</p>
            </div>
          </div>
        </div>
      </div>

              {/* Detailed Expense Flow Analysis */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Expense Flow Analysis</h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Expense Waterfall */}
            <div>
              <h4 className="font-medium text-gray-700 mb-4">Expense Categories (Phase {sliders.implementationPhase})</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-red-50 rounded">
                  <span className="text-sm font-medium">Fixed Costs (Mortgage, Taxes, Insurance)</span>
                  <span className="font-bold text-red-600">${results.annualFixedCosts.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-orange-50 rounded">
                  <span className="text-sm font-medium">Labor (Family + Hired Help)</span>
                  <span className="font-bold text-orange-600">${results.laborExpenses.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-yellow-50 rounded">
                  <span className="text-sm font-medium">Production (Packaging + Excise Tax)</span>
                  <span className="font-bold text-yellow-600">${Math.round(results.packagingCosts + results.exciseTax).toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-blue-50 rounded">
                  <span className="text-sm font-medium">Operations (Utilities + Maintenance)</span>
                  <span className="font-bold text-blue-600">
                    ${Math.round(
                      (sliders.implementationPhase === 1 ? sliders.utilityExpenses * 0.4 : 
                       sliders.implementationPhase === 2 ? sliders.utilityExpenses * 0.7 : 
                       sliders.utilityExpenses) +
                      (sliders.implementationPhase === 1 ? sliders.maintenanceExpenses * 0.3 : 
                       sliders.implementationPhase === 2 ? sliders.maintenanceExpenses * 0.7 : 
                       sliders.maintenanceExpenses)
                    ).toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between items-center p-3 bg-purple-50 rounded">
                  <span className="text-sm font-medium">Marketing (DIY + Paid)</span>
                  <span className="font-bold text-purple-600">${results.marketingExpenses.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-green-50 rounded">
                  <span className="text-sm font-medium">Self-Distribution</span>
                  <span className="font-bold text-green-600">${results.distributionCosts.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                  <span className="text-sm font-medium">Licensing & Permits</span>
                  <span className="font-bold text-gray-600">${results.licensingCosts.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-pink-50 rounded">
                  <span className="text-sm font-medium">Channel Costs (Minimal w/ Self-Dist)</span>
                  <span className="font-bold text-pink-600">
                    ${Math.round(
                      (sliders.implementationPhase >= 3 ? sliders.slottingFeesPerSKU * sliders.numberOfSKUs * sliders.numberOfRetailers * 0.3 : 0) + 
                      (sliders.implementationPhase >= 3 ? results.wholesaleRevenue * (sliders.promotionalAllowancePercent * 0.2) / 100 : 0)
                    ).toLocaleString()}
                  </span>
                </div>
                <div className="border-t-2 border-gray-300 pt-3 flex justify-between items-center p-3 bg-gray-100 rounded font-bold">
                  <span>Total Annual Expenses</span>
                  <span className="text-red-700">${results.annualExpenses.toLocaleString()}</span>
                </div>
              </div>
            </div>
            
            {/* Phase Scaling Explanation */}
            <div>
              <h4 className="font-medium text-gray-700 mb-4">How Expenses Scale by Phase</h4>
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h5 className="font-medium text-gray-800 mb-2">Phase 1 (Current: {sliders.implementationPhase === 1 ? 'Active' : 'Inactive'})</h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Utilities: 40% of full capacity (${Math.round(sliders.utilityExpenses * 0.4).toLocaleString()})</li>
                    <li>• Maintenance: 30% of full capacity (${Math.round(sliders.maintenanceExpenses * 0.3).toLocaleString()})</li>
                    <li>• Labor: 65% efficiency with family help</li>
                    <li>• Distribution: 0.5% (minimal self-delivery)</li>
                    <li>• No channel costs (direct sales only)</li>
                  </ul>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4">
                  <h5 className="font-medium text-gray-800 mb-2">Phase 2 (Current: {sliders.implementationPhase === 2 ? 'Active' : 'Inactive'})</h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Utilities: 70% of full capacity (${Math.round(sliders.utilityExpenses * 0.7).toLocaleString()})</li>
                    <li>• Maintenance: 70% of full capacity (${Math.round(sliders.maintenanceExpenses * 0.7).toLocaleString()})</li>
                    <li>• Labor: 75% efficiency with some hired help</li>
                    <li>• Distribution: 1.5% (regular delivery routes)</li>
                    <li>• Minimal channel costs for local accounts</li>
                  </ul>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4">
                  <h5 className="font-medium text-gray-800 mb-2">Phase 3 (Current: {sliders.implementationPhase === 3 ? 'Active' : 'Inactive'})</h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Utilities: 100% of full capacity (${sliders.utilityExpenses.toLocaleString()})</li>
                    <li>• Maintenance: 100% of full capacity (${sliders.maintenanceExpenses.toLocaleString()})</li>
                    <li>• Labor: 85% efficiency with automation</li>
                    <li>• Distribution: 2.5% (regional delivery operation)</li>
                    <li>• Some channel costs for major retail chains</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Cost Per Unit Analysis */}
          <div className="mt-6 bg-gray-50 p-4 rounded-lg">
            <h4 className="font-medium text-gray-800 mb-3">Cost Per Unit Analysis</h4>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="text-center">
                <p className="text-sm text-gray-600">Cider Cost per Gallon</p>
                <p className="text-lg font-bold text-gray-800">
                  ${(() => {
                    // Calculate ONLY the incremental costs of making cider (what it costs to turn apples into cider)
                    // Direct cider costs (packaging + excise tax)
                    const directCiderCosts = results.packagingCosts + results.exciseTax;
                    
                    // Incremental labor: only the hours spent pressing, fermenting, packaging
                    // Estimate 0.5 hours per gallon (pressing is efficient, fermentation is passive)
                    const ciderProductionHours = results.ciderGallons * 0.5;
                    const incrementalLaborCost = ciderProductionHours * sliders.laborHourlyRate;
                    
                    // Minimal equipment depreciation for cider-specific equipment
                    const ciderEquipmentCost = 15000; // Press, fermentation tanks, packaging equipment
                    const ciderEquipmentDepreciation = ciderEquipmentCost / 10; // 10 year life
                    
                    const totalCiderCosts = directCiderCosts + incrementalLaborCost + ciderEquipmentDepreciation;
                    return (totalCiderCosts / Math.max(results.ciderGallons, 1)).toFixed(2);
                  })()}
                </p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600">Cider Profit per Pint</p>
                <p className="text-lg font-bold text-gray-800">${results.profitPerBottle.toFixed(2)}</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600">Apple Cost per Bushel</p>
                <p className="text-lg font-bold text-gray-800">
                  ${(() => {
                    // Calculate incremental cost of growing apples (variable costs only)
                    // Orchard labor: farm operations + harvest (but not fixed overhead)
                    const orchardLaborCost = results.laborExpenses * ((sliders.farmLaborPercent + sliders.harvestLaborPercent) / 100);
                    
                    // Variable orchard costs: fertilizer, spraying, fuel, etc. (estimate $500/acre)
                    const variableOrchardCosts = sliders.orchardAcres * 500;
                    
                    // Small portion of marketing for apple sales
                    const appleMarketing = results.marketingExpenses * 0.2;
                    
                    const totalAppleCosts = orchardLaborCost + variableOrchardCosts + appleMarketing;
                    const effectiveBushels = results.totalBushels * (sliders.productionEfficiency/100);
                    return (totalAppleCosts / Math.max(effectiveBushels, 1)).toFixed(2);
                  })()}
                </p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600">Break-even Revenue</p>
                <p className="text-lg font-bold text-gray-800">
                  ${Math.round(results.annualExpenses / 1000)}k
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  {((results.annualExpenses / results.annualRevenue) * 100).toFixed(1)}% of current revenue
                </p>
              </div>
            </div>
          </div>
        </div>

      {/* Detailed Analysis Sections */}
      
      {/* Labor Analysis */}
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
      


      {/* Advanced Parameters - Collapsible */}
      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-gray-900">Advanced Parameters</h2>
          <button
            onClick={() => {
              const section = document.getElementById('advancedParams');
              if (section) {
                section.classList.toggle('hidden');
              }
            }}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Toggle Advanced Settings
          </button>
        </div>
        
        <div id="advancedParams" className="hidden">
          {/* Sales Mix & Distribution */}
          <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Sales Mix & Distribution Channels</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Taproom Sales: {sliders.tastroomSalesPercent}%
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
              name="tastroomSalesPercent"
              value={sliders.tastroomSalesPercent}
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
                            <p className="text-sm text-gray-500">({Math.round(sliders.tastroomSalesPercent)}% of cider sales)</p>
          </div>
          
          <div className="bg-white shadow-md rounded-lg p-6 border-l-4 border-teal-200">
            <h4 className="text-sm text-gray-500">Wholesale Revenue</h4>
            <p className="text-2xl font-bold">${results.wholesaleRevenue.toLocaleString()}</p>
            <p className="text-sm text-gray-500">({Math.round(sliders.retailSalesPercent + sliders.restaurantBarSalesPercent)}% of cider sales)</p>
          </div>
          
          <div className="bg-white shadow-md rounded-lg p-6 border-l-4 border-cyan-200">
            <h4 className="text-sm text-gray-500">Per-Pint Economics</h4>
            <p className="text-lg font-bold">Cost: ${results.costPerBottle.toFixed(2)} | Revenue: ${results.revenuePerBottle.toFixed(2)}</p>
            <p className="text-sm text-gray-500">Profit per pint: ${results.profitPerBottle.toFixed(2)}</p>
          </div>
        </div>
          </div>
        </div>
      </div>
      
      {/* Self-Distribution Advantage */}
      <div className="mt-8 bg-green-50 p-6 rounded-lg border border-green-200">
        <h3 className="text-xl font-bold text-green-800 mb-4">🚚 Self-Distribution Advantage (NJ Plenary Winery License)</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h4 className="font-bold text-green-700 mb-3">Cost Savings vs. Traditional Distribution</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Traditional Distribution:</span>
                <span className="text-red-600 font-medium">8-15% of revenue</span>
              </div>
              <div className="flex justify-between">
                <span>Self-Distribution:</span>
                <span className="text-green-600 font-medium">0.5-2.5% of revenue</span>
              </div>
              <div className="flex justify-between border-t pt-2">
                <span className="font-medium">Annual Savings:</span>
                <span className="text-green-600 font-bold">
                  ${Math.round(results.annualRevenue * 0.08 - results.distributionCosts).toLocaleString()}
                </span>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h4 className="font-bold text-green-700 mb-3">Additional Benefits</h4>
            <ul className="text-sm text-green-700 space-y-1">
              <li>• Direct customer relationships</li>
              <li>• Better profit margins (no distributor markup)</li>
              <li>• Faster payment cycles</li>
              <li>• Control over product placement</li>
              <li>• Immediate market feedback</li>
              <li>• Flexible pricing strategies</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-4 bg-green-100 p-3 rounded-lg">
          <p className="text-sm text-green-800">
            <strong>NJ Plenary Winery License:</strong> Allows self-distribution of up to 50,000 gallons annually for just $100/year. 
            This eliminates distributor fees (typically 28-35% markup), sales rep commissions (3-8%), and most slotting fees.
          </p>
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
              Self-Distribution Cost: {sliders.distributionCostPercent}% of revenue
              <InfoBox title="Self-Distribution Costs">
                <p>With NJ Plenary Winery license, you can self-distribute up to 50,000 gallons.</p>
                <ul className="list-disc pl-4 mt-1 space-y-1">
                  <li>Vehicle fuel and maintenance</li>
                  <li>Delivery time and labor</li>
                  <li>Insurance and permits ($100/year)</li>
                  <li>Much lower than traditional distribution (8-15%)</li>
                </ul>
              </InfoBox>
            </label>
            <input
              type="range"
              min="0.5"
              max="5"
              step="0.1"
              name="distributionCostPercent"
              value={sliders.distributionCostPercent}
              onChange={handleSliderChange}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <p className="text-sm text-gray-500 mt-1">Annual cost: ${results.distributionCosts.toLocaleString()}</p>
            <p className="text-xs text-green-600 mt-1">Savings vs traditional distribution: ${Math.round(results.annualRevenue * 0.08 - results.distributionCosts).toLocaleString()}/year</p>
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
            <p className="text-sm text-gray-500 mt-1">Fixed budget based on implementation phase</p>
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
                  ${results.freshAppleRevenue.toLocaleString()}
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
        
        {/* Apple Allocation Breakdown */}
        <div className="mt-6 bg-green-50 p-6 rounded-lg border border-green-200">
          <h4 className="text-lg font-bold text-green-800 mb-4">🍎 Apple Allocation Math Check</h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h5 className="font-medium text-green-700 mb-3">Orchard Production</h5>
              <div className="text-sm space-y-2">
                <div className="flex justify-between">
                  <span>Total Bushels (Raw):</span>
                  <span className="font-mono">{results.totalBushels.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Production Efficiency:</span>
                  <span className="font-mono">{sliders.productionEfficiency}%</span>
                </div>
                <div className="flex justify-between border-t pt-2">
                  <span className="font-medium">Effective Total Bushels:</span>
                  <span className="font-mono font-bold">{results.effectiveTotalBushels.toLocaleString()}</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-3">
              <h5 className="font-medium text-green-700 mb-3">Phase {sliders.implementationPhase} Allocation</h5>
              <div className="text-sm space-y-2">
                <div className="flex justify-between">
                  <span>Fresh Apple Sales %:</span>
                  <span className="font-mono">{results.phaseAppleSalesPercent}%</span>
                </div>
                <div className="flex justify-between">
                  <span>Cider Production %:</span>
                  <span className="font-mono">{(100 - results.phaseAppleSalesPercent)}%</span>
                </div>
                <div className="border-t pt-2 space-y-1">
                  <div className="flex justify-between">
                    <span>Fresh Apple Bushels:</span>
                    <span className="font-mono">{results.freshAppleBushels.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Cider Bushels:</span>
                    <span className="font-mono">{results.bushelsForCider.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between border-t pt-1 font-medium">
                    <span>Total Check:</span>
                    <span className="font-mono">{(results.freshAppleBushels + results.bushelsForCider).toLocaleString()}</span>
                  </div>
                                     <div className="flex justify-between text-xs">
                     <span>Allocation %:</span>
                     <span className="font-mono">{Math.round((results.freshAppleBushels / (results.freshAppleBushels + results.bushelsForCider)) * 100)}% fresh, {Math.round((results.bushelsForCider / (results.freshAppleBushels + results.bushelsForCider)) * 100)}% cider</span>
                   </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Revenue Verification */}
          <div className="mt-4 pt-4 border-t border-green-300">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="text-center">
                <div className="font-medium text-green-700">Fresh Apple Revenue</div>
                <div className="text-lg font-bold text-green-600">${results.freshAppleRevenue.toLocaleString()}</div>
                <div className="text-xs text-gray-600">{results.freshAppleBushels} bushels × ${sliders.applePricePerBushel}/bushel</div>
              </div>
              <div className="text-center">
                <div className="font-medium text-green-700">Cider Revenue</div>
                <div className="text-lg font-bold text-green-600">${results.ciderRevenue.toLocaleString()}</div>
                <div className="text-xs text-gray-600">{results.bushelsForCider} bushels → {Math.round(results.ciderGallons)} gallons</div>
              </div>
              <div className="text-center">
                <div className="font-medium text-green-700">Total Apple Revenue</div>
                <div className="text-lg font-bold text-green-600">${(results.freshAppleRevenue + results.ciderRevenue).toLocaleString()}</div>
                <div className="text-xs text-gray-600">Fresh + Cider combined</div>
              </div>
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
                <strong>Key Metrics:</strong> {results.ciderGallons.toLocaleString()} gallons cider production with minimal apple sales for maximum value-add.
              </p>
              <p className="text-sm text-blue-700">
                <strong>Optimization:</strong> Focus on premium pricing, efficiency improvements, and market expansion.
              </p>
            </div>
          )}
        </div>
      </div>
      
      {/* Detailed Financial Analysis - DEBUG MODE */}
      <div className="mt-8 bg-red-50 p-6 rounded-lg border border-red-200">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-red-800">🔍 Detailed Financial Analysis (Debug Mode)</h3>
          <button
            onClick={() => {
              const section = document.getElementById('debugMode');
              if (section) {
                section.classList.toggle('hidden');
              }
            }}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm"
          >
            Toggle Debug Details
          </button>
        </div>
        
        <div id="debugMode" className="hidden">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Phase 1 Calculation */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h4 className="font-bold text-gray-800 mb-3">Phase 1 Breakdown</h4>
            <div className="text-xs space-y-1">
              <div className="flex justify-between">
                <span>Cider Revenue:</span>
                                 <span className="font-mono">
                   {sliders.implementationPhase === 1 ? 
                     `$${Math.round(results.directSalesRevenue + results.wholesaleRevenue).toLocaleString()}` : 
                     `$${Math.round(750 * 0.95 * 0.9 * sliders.bottlesPerGallon * (0.6 * sliders.tastroomBottlePrice + 0.3 * sliders.retailBottlePrice + 0.1 * sliders.restaurantBottlePrice)).toLocaleString()}`
                   }
                </span>
              </div>
                             <div className="flex justify-between">
                 <span>Apple Revenue:</span>
                 <span className="font-mono">
                   ${Math.round(results.totalBushels * 0.85 * 0.85 * 0.9 * sliders.applePricePerBushel).toLocaleString()}
                 </span>
               </div>
              <div className="flex justify-between">
                <span>Total Revenue:</span>
                <span className="font-mono font-bold">
                                     ${Math.round(750 * 0.95 * 0.9 * sliders.bottlesPerGallon * (0.6 * sliders.tastroomBottlePrice + 0.3 * sliders.retailBottlePrice + 0.1 * sliders.restaurantBottlePrice) + 
                     results.totalBushels * 0.85 * 0.85 * 0.9 * sliders.applePricePerBushel + 
                     (750 * 0.95 * 0.9 * sliders.bottlesPerGallon * (0.6 * sliders.tastroomBottlePrice + 0.3 * sliders.retailBottlePrice + 0.1 * sliders.restaurantBottlePrice) + results.totalBushels * 0.85 * 0.85 * 0.9 * sliders.applePricePerBushel) * 0.15).toLocaleString()}
                </span>
              </div>
              <div className="border-t pt-1 mt-2">
                <div className="flex justify-between">
                  <span>Marketing (8%):</span>
                  <span className="font-mono text-red-600">
                                         -$3,000
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Labor (60%):</span>
                  <span className="font-mono text-red-600">
                                         -${Math.round(results.totalBushels * 500 * 0.65 * 0.6 * 12).toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Fixed Costs:</span>
                  <span className="font-mono text-red-600">-${results.annualFixedCosts.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Phase 2 Calculation */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h4 className="font-bold text-gray-800 mb-3">Phase 2 Breakdown</h4>
            <div className="text-xs space-y-1">
              <div className="flex justify-between">
                <span>Cider Revenue:</span>
                <span className="font-mono">
                                     ${Math.round(2000 * 0.95 * 0.9 * sliders.bottlesPerGallon * (0.45 * sliders.tastroomBottlePrice + 0.4 * sliders.retailBottlePrice + 0.15 * sliders.restaurantBottlePrice)).toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Apple Revenue:</span>
                <span className="font-mono">
                                     ${Math.round((results.totalBushels * 0.85 - 2000/3.1) * 1.0 * 0.9 * 28).toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Total Revenue:</span>
                <span className="font-mono font-bold">
                                     ${Math.round(2000 * 0.95 * 0.9 * sliders.bottlesPerGallon * (0.45 * sliders.tastroomBottlePrice + 0.4 * sliders.retailBottlePrice + 0.15 * sliders.restaurantBottlePrice) + 
                     (results.totalBushels * 0.85 - 2000/3.1) * 1.0 * 0.9 * sliders.applePricePerBushel + 
                     (2000 * 0.95 * 0.9 * sliders.bottlesPerGallon * (0.45 * sliders.tastroomBottlePrice + 0.4 * sliders.retailBottlePrice + 0.15 * sliders.restaurantBottlePrice) + (results.totalBushels * 0.85 - 2000/3.1) * 1.0 * 0.9 * sliders.applePricePerBushel) * 0.15).toLocaleString()}
                </span>
              </div>
              <div className="border-t pt-1 mt-2">
                <div className="flex justify-between">
                  <span>Marketing (8%):</span>
                  <span className="font-mono text-red-600">
                                         -$6,000
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Labor (80%):</span>
                  <span className="font-mono text-red-600">
                                         -${Math.round(results.totalBushels * 500 * 0.75 * 0.6 * 12).toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Channel Costs:</span>
                  <span className="font-mono text-red-600">
                                         -${Math.round(500 * 2 * 3 + (2000 * 0.95 * 0.9 * sliders.bottlesPerGallon * (0.4 * sliders.retailBottlePrice + 0.15 * sliders.restaurantBottlePrice)) * (8 + 3) / 100).toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Phase 3 Calculation */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h4 className="font-bold text-gray-800 mb-3">Phase 3 Breakdown</h4>
            <div className="text-xs space-y-1">
              <div className="flex justify-between">
                <span>Cider Revenue:</span>
                <span className="font-mono">
                                     ${Math.round(4500 * 0.95 * 0.9 * sliders.bottlesPerGallon * (0.35 * sliders.tastroomBottlePrice + 0.45 * sliders.retailBottlePrice + 0.2 * sliders.restaurantBottlePrice)).toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Apple Revenue:</span>
                <span className="font-mono">
                                     ${Math.round((results.totalBushels * 0.85 - 4500/3.1) * 1.0 * 0.9 * 28).toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Total Revenue:</span>
                <span className="font-mono font-bold">
                                     ${Math.round(4500 * 0.95 * 0.9 * sliders.bottlesPerGallon * (0.35 * sliders.tastroomBottlePrice + 0.45 * sliders.retailBottlePrice + 0.2 * sliders.restaurantBottlePrice) + 
                     (results.totalBushels * 0.85 - 4500/3.1) * 1.0 * 0.9 * sliders.applePricePerBushel + 
                     (4500 * 0.95 * 0.9 * sliders.bottlesPerGallon * (0.35 * sliders.tastroomBottlePrice + 0.45 * sliders.retailBottlePrice + 0.2 * sliders.restaurantBottlePrice) + (results.totalBushels * 0.85 - 4500/3.1) * 1.0 * 0.9 * sliders.applePricePerBushel) * 0.15).toLocaleString()}
                </span>
              </div>
              <div className="border-t pt-1 mt-2">
                <div className="flex justify-between">
                  <span>Marketing (8%):</span>
                  <span className="font-mono text-red-600">
                                         -$10,000
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Labor (100%):</span>
                  <span className="font-mono text-red-600">
                                         -${Math.round(results.totalBushels * 500 * 0.85 * 0.6 * 12).toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Channel Costs:</span>
                  <span className="font-mono text-red-600">
                                         -${Math.round(500 * 2 * 3 + (4500 * 0.95 * 0.9 * sliders.bottlesPerGallon * (0.45 * sliders.retailBottlePrice + 0.2 * sliders.restaurantBottlePrice)) * (8 + 3) / 100).toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
                 <div className="mt-6 bg-yellow-100 p-4 rounded-lg">
           <h4 className="font-bold text-yellow-800 mb-2">📊 Revenue Analysis by Phase:</h4>
                       <div className="grid grid-cols-3 gap-4 text-xs">
              <div>
                <h5 className="font-medium">Phase 1</h5>
                <div>Cider: 750 gal × $46 avg = $35k</div>
                <div>Apples: ~1,400 bu × 85% × ${sliders.applePricePerBushel} = ${Math.round(1400 * 0.85 * sliders.applePricePerBushel / 1000)}k</div>
                <div><strong>Total: ~$68k + 15% other = $78k</strong></div>
              </div>
              <div>
                <h5 className="font-medium">Phase 2</h5>
                <div>Cider: 2,000 gal × $50 avg = $100k</div>
                <div>Apples: ~850 bu × 100% × ${sliders.applePricePerBushel} = ${Math.round(850 * 1.0 * sliders.applePricePerBushel / 1000)}k</div>
                <div><strong>Total: ~$124k + 15% other = $143k</strong></div>
              </div>
              <div>
                <h5 className="font-medium">Phase 3</h5>
                <div>Cider: 4,500 gal × $52 avg = $234k</div>
                <div>Apples: ~200 bu × 100% × ${sliders.applePricePerBushel} = ${Math.round(200 * 1.0 * sliders.applePricePerBushel / 1000)}k</div>
                <div><strong>Total: ~$240k + 15% other = $276k</strong></div>
              </div>
            </div>
                       <div className="mt-3 text-sm text-yellow-700">
              <strong>Key Insight:</strong> Revenue should increase dramatically as we shift from apple sales to higher-value cider production. 
              The value-add from processing apples into cider should more than compensate for reduced apple sales volume.
            </div>
            
            <div className="mt-4 bg-blue-100 p-3 rounded-lg">
              <h5 className="font-medium text-blue-800 mb-2">🍎 Apple Allocation Analysis:</h5>
              <div className="grid grid-cols-3 gap-4 text-xs">
                <div>
                  <h6 className="font-medium">Phase 1</h6>
                  <div>Total bushels: {Math.round(results.totalBushels * 0.85)}</div>
                  <div>For cider: {Math.round(750 / 3.1)} bushels</div>
                  <div>For sale: {Math.round((results.totalBushels * 0.85 - 750/3.1) * 0.85)} bushels</div>
                  <div>Unused: {Math.round((results.totalBushels * 0.85 - 750/3.1) * 0.15)} bushels</div>
                </div>
                                 <div>
                   <h6 className="font-medium">Phase 2</h6>
                   <div>Total bushels: {Math.round(results.totalBushels * 0.85)}</div>
                   <div>For cider: {Math.round(2000 / 3.1)} bushels</div>
                   <div>For sale: {Math.round((results.totalBushels * 0.85 - 2000/3.1) * 1.0)} bushels</div>
                   <div>Unused: 0 bushels ✅</div>
                 </div>
                 <div>
                   <h6 className="font-medium">Phase 3</h6>
                   <div>Total bushels: {Math.round(results.totalBushels * 0.85)}</div>
                   <div>For cider: {Math.round(4500 / 3.1)} bushels</div>
                   <div>For sale: {Math.round((results.totalBushels * 0.85 - 4500/3.1) * 1.0)} bushels</div>
                   <div>Unused: 0 bushels ✅</div>
                 </div>
              </div>
                             <div className="mt-2 text-xs text-blue-700">
                 <strong>Fixed:</strong> Now selling ALL remaining apples in every phase for maximum revenue!
               </div>
             </div>
             
             <div className="mt-4 bg-green-100 p-3 rounded-lg">
               <h5 className="font-medium text-green-800 mb-2">💰 Lean Marketing Budget Breakdown:</h5>
               <div className="grid grid-cols-3 gap-4 text-xs">
                 <div>
                   <h6 className="font-medium">Phase 1 ($3k)</h6>
                   <div>• Website setup: $800</div>
                   <div>• Business cards/signage: $400</div>
                   <div>• Farmers market fees: $600</div>
                   <div>• Social media tools: $300</div>
                   <div>• Photography/content: $500</div>
                   <div>• Misc/events: $400</div>
                 </div>
                 <div>
                   <h6 className="font-medium">Phase 2 ($6k)</h6>
                   <div>• Phase 1 costs: $3k</div>
                   <div>• Paid social ads: $1,200</div>
                   <div>• Professional signage: $800</div>
                   <div>• Event sponsorships: $600</div>
                   <div>• Print materials: $400</div>
                 </div>
                 <div>
                   <h6 className="font-medium">Phase 3 ($10k)</h6>
                   <div>• Phase 2 costs: $6k</div>
                   <div>• Professional photos: $1,500</div>
                   <div>• Expanded advertising: $1,500</div>
                   <div>• Trade show/events: $1,000</div>
                 </div>
               </div>
               <div className="mt-2 text-xs text-green-700">
                 <strong>Note:</strong> Heavy DIY approach - you're doing website, social media, content creation yourself. 
                 These are just out-of-pocket costs for tools, materials, and advertising.
               </div>
            </div>
            
            <div className="mt-4 bg-green-100 p-3 rounded-lg">
              <h5 className="font-medium text-green-800 mb-2">🚚 Self-Distribution Savings Analysis:</h5>
              <div className="grid grid-cols-3 gap-4 text-xs">
                <div>
                  <h6 className="font-medium">Phase 1 Savings</h6>
                  <div>Traditional: ${Math.round(results.annualRevenue * 0.08).toLocaleString()}</div>
                  <div>Self-Dist: ${Math.round(results.annualRevenue * 0.005).toLocaleString()}</div>
                  <div className="font-bold text-green-700">Saves: ${Math.round(results.annualRevenue * 0.075).toLocaleString()}</div>
                </div>
                <div>
                  <h6 className="font-medium">Phase 2 Savings</h6>
                  <div>Traditional: ${Math.round(143000 * 0.10).toLocaleString()}</div>
                  <div>Self-Dist: ${Math.round(143000 * 0.015).toLocaleString()}</div>
                  <div className="font-bold text-green-700">Saves: ${Math.round(143000 * 0.085).toLocaleString()}</div>
                </div>
                <div>
                  <h6 className="font-medium">Phase 3 Savings</h6>
                  <div>Traditional: ${Math.round(276000 * 0.12).toLocaleString()}</div>
                  <div>Self-Dist: ${Math.round(276000 * 0.025).toLocaleString()}</div>
                  <div className="font-bold text-green-700">Saves: ${Math.round(276000 * 0.095).toLocaleString()}</div>
                </div>
              </div>
              <div className="mt-2 text-xs text-green-700">
                <strong>Key Advantage:</strong> NJ Plenary Winery license allows self-distribution up to 50,000 gallons for just $100/year. 
                This eliminates distributor markups (28-35%), sales rep commissions (3-8%), and most channel fees.
                           </div>
           </div>
         </div>
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
      
      {/* Key Performance Charts */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">        
        <div className="bg-white p-6 rounded-lg shadow">
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
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Revenue vs Expense Comparison</h3>
          <div className="h-64 flex items-center justify-center">
            <div className="grid grid-cols-2 gap-8 w-full max-w-md">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-2">
                  <span className="text-2xl font-bold text-green-600">
                    ${Math.round(results.annualRevenue / 1000)}k
                  </span>
                </div>
                <p className="text-sm font-medium text-gray-700">Revenue</p>
                <p className="text-xs text-gray-500">Annual Income</p>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 mx-auto bg-red-100 rounded-full flex items-center justify-center mb-2">
                  <span className="text-2xl font-bold text-red-600">
                    ${Math.round(results.annualExpenses / 1000)}k
                  </span>
                </div>
                <p className="text-sm font-medium text-gray-700">Expenses</p>
                <p className="text-xs text-gray-500">Annual Costs</p>
              </div>
            </div>
          </div>
          <div className="mt-4 text-center">
            <p className="text-lg font-bold">
              Net Profit: 
              <span className={`ml-2 ${results.annualProfit >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                ${results.annualProfit.toLocaleString()}
              </span>
            </p>
            <p className="text-sm text-gray-500">
              {((results.annualProfit / results.annualRevenue) * 100).toFixed(1)}% profit margin
            </p>
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
                <td className="px-4 py-2 font-medium">Bottles (500/750ml)</td>
                <td className="px-4 py-2">{Math.round(results.totalBushels * (sliders.ciderYield/100) * sliders.gallonsPerBushel * sliders.bottlesPerGallon).toLocaleString()}</td>
                <td className="px-4 py-2">{Math.round(results.totalBushels * (sliders.ciderYield/100) * (sliders.productionEfficiency/100) * sliders.gallonsPerBushel * sliders.bottlesPerGallon).toLocaleString()}</td>
                <td className="px-4 py-2">{Math.round(results.totalBushels * (sliders.ciderYield/100) * (sliders.productionEfficiency/100) * sliders.gallonsPerBushel * sliders.bottlesPerGallon * (1-sliders.wasteSpoilage/100) * (sliders.salesEfficiency/100)).toLocaleString()}</td>
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