import OptimizedImage from '../components/OptimizedImage'
import { useState } from 'react'
import Layout from '../components/Layout'
import BusinessCalculator from '../components/BusinessCalculator'
import BusinessDashboard from '../components/BusinessDashboard'

export default function BusinessPlan() {
  const [calculatorResults, setCalculatorResults] = useState({
    annualRevenue: 859260,
    annualExpenses: 256100,
    annualProfit: 603160,
    roi: 109.7,
    annualFixedCosts: 142000,
    directSalesRevenue: 343680,
    wholesaleRevenue: 374580,
    laborExpenses: 85000,
    monthlyMortgage: 5750,
    distributionCosts: 42000,
    packagingCosts: 25060,
    exciseTax: 19179,
    ciderGallons: 17900,
    profitPerPint: 4.21
  })

  const handleResultsChange = (results: any) => {
    setCalculatorResults(results)
  }
  
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh]">
        <OptimizedImage
          src="/images/Heirloom Apples ID.jpg"
          alt="Our apple orchard"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Business Plan</h1>
            <p className="text-xl md:text-2xl">Our Vision for Sustainable Growth</p>
          </div>
        </div>
      </section>

      {/* Financial Dashboard */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-8">Financial Dashboard</h2>
          <BusinessDashboard results={calculatorResults} />
        </div>
      </section>

      {/* Executive Summary */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-12">Executive Summary</h2>
          <div className="bg-green-50 p-8 rounded-lg">
            <p className="text-lg text-gray-600 mb-6">
              Root Logic is a 50-acre craft hard cider production facility located in Wantage, New Jersey. With approximately 1,570 heritage apple trees, an established apiary, and berry production, we produce premium craft hard ciders, apple cider vinegar, and seasonal food products.
            </p>
            <p className="text-lg text-gray-600">
              Our business model focuses on distribution through farmers markets, online direct-to-consumer sales, and wholesale distribution to specialty retailers and pubs. While a tasting room is part of our future growth plan, our initial focus is on establishing our brand and distribution channels for our craft hard cider products.
            </p>
          </div>
        </div>
      </section>

      {/* Business Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative h-[400px]">
              <OptimizedImage
                src="/images/apple cider vinegar.webp"
                alt="Our cider production facility"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="section-title">Business Overview</h2>
              <p className="text-lg text-gray-600 mb-6">
                Root Logic specializes in craft hard cider production, utilizing approximately 1,570 trees of heritage apple varieties grown on our 50-acre property. Our product line includes:
              </p>
              <ul className="list-disc pl-6 mb-6 text-lg text-gray-600">
                <li className="mb-2">Premium hard ciders (traditional, honey-infused, and berry varieties)</li>
                <li className="mb-2">Specialty seasonal ciders</li>
                <li className="mb-2">Artisanal apple cider vinegar</li>
                <li className="mb-2">Raw and infused honey from our apiary</li>
                <li>Seasonal products (preserves, apple products)</li>
              </ul>
              <p className="text-lg text-gray-600">
                Our business stands out through our commitment to sustainable farming practices, use of heritage apple varieties, and integration of honey production. We focus on quality and authenticity in our products, targeting craft beverage enthusiasts and farm-to-table supporters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Market Analysis */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-12">Market Analysis</h2>
          
          {/* Market Overview Card */}
          <div className="bg-green-50 p-8 rounded-lg mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Market Overview</h3>
            <p className="text-lg text-gray-600 mb-6">
              The U.S. cider market was valued at over $1.32 billion in 2022 and is projected to grow at a compound annual growth rate (CAGR) of 5.0% from 2025 to 2030. Hard cider is one of the fastest-growing segments of the alcohol industry, with a 73% annual production increase from 2008 to 2014, and continued growth since.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-bold text-gray-900 mb-2">Market Value</h4>
                <p className="text-3xl font-bold text-green-700 mb-2">$1.32B</p>
                <p className="text-gray-600">U.S. cider market value in 2022</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-bold text-gray-900 mb-2">Growth Rate</h4>
                <p className="text-3xl font-bold text-green-700 mb-2">5.0%</p>
                <p className="text-gray-600">Projected annual growth 2025-2030</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-bold text-gray-900 mb-2">Consumer Growth</h4>
                <p className="text-3xl font-bold text-green-700 mb-2">3.6×</p>
                <p className="text-gray-600">Increase in cider drinkers 2008-2016</p>
              </div>
            </div>
            <p className="text-lg text-gray-600">
              In 2021, cider generated $553.6 million in chain retail sales, with total revenue exceeding $1 billion when including on-premise sales. The number of hard cider drinkers grew from 6.8 million to 24.5 million between 2008 and 2016, with younger demographics (18–29 years old) consuming nearly three times more cider than older groups.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Regional Market Strength</h3>
              <p className="text-lg text-gray-600 mb-6">
                The Northeast, including New York, Vermont, Massachusetts, and New Hampshire, leads in premium cider penetration due to its apple-growing heritage and consumer preference for "farm-to-glass" narratives.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                New York and Vermont are particularly notable for their craft cider scenes, with producers like Eve's Cidery and Shacksbury Cider setting benchmarks for quality. Our location in Wantage, New Jersey positions us perfectly to capture this regional market.
              </p>
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h4 className="font-bold text-gray-900 mb-3">Seasonal Opportunities</h4>
                <p className="text-gray-600 mb-4">
                  Seasonal consumption peaks in the Northeast during:
                </p>
                <ul className="list-disc pl-6 text-gray-600">
                  <li className="mb-2">Summer (June–August): Crisp, refreshing varieties</li>
                  <li>Late Fall to Early Winter: Spiced and barrel-aged options</li>
                </ul>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Consumer Preferences</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
                    <span className="text-green-800 text-sm font-bold">1</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-gray-900">Health & Sustainability</h4>
                    <p className="text-gray-600">Gen Z and Millennials prioritize gluten-free, natural, and sustainable products. Organic ciders are highly desirable as apples appear on the "dirty dozen" list for pesticide residues.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
                    <span className="text-green-800 text-sm font-bold">2</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-gray-900">Heritage Varieties</h4>
                    <p className="text-gray-600">Growing demand for ciders made from heritage apple varieties like Dabinett and Northern Spy, with 15% year-over-year sales growth for these premium products.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
                    <span className="text-green-800 text-sm font-bold">3</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-gray-900">Local Appeal</h4>
                    <p className="text-gray-600">Regional and local brands capture 54% of hard cider sales, as consumers value locally sourced products and authentic orchard stories.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
                    <span className="text-green-800 text-sm font-bold">4</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-gray-900">Innovative Flavors</h4>
                    <p className="text-gray-600">68% of Millennials prefer adventurous flavor profiles, including elderflower, hibiscus, or co-ferments with berries or pears.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Competitive Advantage */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Root Logic's Competitive Advantage</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-3">Organic Certification</h4>
                <p className="text-gray-600">
                  Our organic growing practices align perfectly with consumer health consciousness and environmental concerns, commanding premium pricing and appealing to eco-conscious consumers.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-3">Heritage Apple Varieties</h4>
                <p className="text-gray-600">
                  Our 20+ heritage varieties allow for complex blends that balance tannin, acidity, and sweetness—qualities that craft cider consumers seek and are willing to pay premium prices for.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-3">Northeast Location</h4>
                <p className="text-gray-600">
                  Our Wantage, NJ location capitalizes on the Northeast's strong cider tradition and provides access to major markets like New York City, just 60 miles away.
                </p>
              </div>
            </div>
          </div>
          
          {/* Distribution Strategy - Keep existing content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Distribution Channels</h3>
              <p className="text-lg text-gray-600 mb-6">
                Our primary distribution channels include:
              </p>
              <ul className="list-disc pl-6 mb-6 text-lg text-gray-600">
                <li className="mb-2">Direct-to-consumer online sales</li>
                <li className="mb-2">Farmers markets in the region</li>
                <li className="mb-2">Wholesale distribution to craft beer pubs and restaurants</li>
                <li className="mb-2">Specialty food and beverage retailers</li>
                <li>Regional festivals and events</li>
              </ul>
              <p className="text-lg text-gray-600">
                With our location just 60 miles from New York City, we have access to a large metropolitan market of potential customers and specialty retailers.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Market Challenges</h3>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="h-5 w-5 rounded-full bg-red-100 text-red-800 flex items-center justify-center flex-shrink-0 mt-1">!</span>
                    <span className="ml-3 text-gray-600"><span className="font-medium text-gray-900">Supply Constraints:</span> Our 18-acre orchard with heritage varieties gives us a competitive advantage by ensuring a consistent supply.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-5 w-5 rounded-full bg-red-100 text-red-800 flex items-center justify-center flex-shrink-0 mt-1">!</span>
                    <span className="ml-3 text-gray-600"><span className="font-medium text-gray-900">Economic Viability:</span> Heritage varieties may have lower yields but command premium prices that offset this challenge.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-5 w-5 rounded-full bg-red-100 text-red-800 flex items-center justify-center flex-shrink-0 mt-1">!</span>
                    <span className="ml-3 text-gray-600"><span className="font-medium text-gray-900">Competition:</span> Differentiating through organic certification, heritage varieties, and unique blends sets us apart.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-5 w-5 rounded-full bg-red-100 text-red-800 flex items-center justify-center flex-shrink-0 mt-1">!</span>
                    <span className="ml-3 text-gray-600"><span className="font-medium text-gray-900">Seasonal Variability:</span> We embrace the concept of "vintage quality" ciders, similar to wine vintages, as a marketing opportunity.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Financial Analysis */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-12">Interactive Financial Analysis</h2>
          <p className="text-lg text-gray-600 text-center mb-8">
            Use the sliders below to explore different scenarios and understand how various factors impact the financial performance of Root Logic. Adjust property values, mortgage terms, production levels, and more to see how they affect overall profitability.
          </p>
          <BusinessCalculator onResultsChange={handleResultsChange} />
        </div>
      </section>

      {/* Orchard Management */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Orchard Management</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our 50-acre property includes approximately 12 acres dedicated to apple production with around 1,570 trees. About 70% of these trees are mature, with the remainder in various stages of growth. We cultivate over 20 heritage and cider-specific apple varieties, including:
              </p>
              <ul className="list-disc pl-6 mb-6 text-lg text-gray-600">
                <li className="mb-2">Kingston Black</li>
                <li className="mb-2">Dabinett</li>
                <li className="mb-2">Yarlington Mill</li>
                <li className="mb-2">Northern Spy</li>
                <li className="mb-2">Golden Russet</li>
                <li>Wickson Crab</li>
              </ul>
              <p className="text-lg text-gray-600">
                We employ sustainable orchard management techniques including integrated pest management, natural soil amendments, and water conservation practices. Our apiary not only produces honey but provides essential pollination services to the orchard.
              </p>
            </div>
            <div className="relative h-[400px]">
              <OptimizedImage
                src="/images/orchard 2.webp"
                alt="Our apple trees"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Marketing Strategy */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-12">Marketing Strategy</h2>
          
          {/* Market Research Foundation */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Market Research Foundation</h3>
            <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
              <p className="text-lg text-gray-600 mb-6 text-center">
                Our marketing strategy is built on comprehensive market research and analysis conducted specifically for the craft cider industry and our Wantage, NJ location. These studies provide detailed insights into buyer behavior, wholesale market conditions, and location-specific opportunities.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-lg border-l-4 border-green-500">
                  <div className="flex items-center mb-4">
                    <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                      <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-bold text-gray-900">Buyer Analysis</h4>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Comprehensive analysis of organic heirloom apple cidery buyers, including demographic profiles, purchasing behavior, and market preferences.
                  </p>
                  <a 
                    href="/resources/Organic Heirloom Apple Cidery Buyers_.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-green-700 hover:text-green-800 font-medium"
                  >
                    <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download Report
                  </a>
                </div>
                
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-lg border-l-4 border-blue-500">
                  <div className="flex items-center mb-4">
                    <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                      <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-bold text-gray-900">Wholesale Market</h4>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Detailed analysis of wholesale market opportunities, distribution channels, and pricing strategies for craft cider products.
                  </p>
                  <a 
                    href="/resources/Market Report_ Wholesale Heirloom Cider Apples in NJ, NY, PA, and CT.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-700 hover:text-blue-800 font-medium"
                  >
                    <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download Report
                  </a>
                </div>
                
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg border-l-4 border-purple-500">
                  <div className="flex items-center mb-4">
                    <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                      <svg className="h-6 w-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-bold text-gray-900">Location Analysis</h4>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Location-specific market analysis for launching a cidery at 25 Clove Road, Wantage, NJ, including local market conditions and opportunities.
                  </p>
                  <a 
                    href="/resources/Launching a Cidery at 25 Clove Road, Wantage, NJ_ Location and Market Analysis.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-purple-700 hover:text-purple-800 font-medium"
                  >
                    <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download Report
                  </a>
                </div>
              </div>
            </div>
            
            {/* Key Research Insights */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h4 className="text-xl font-bold text-gray-900 mb-6">Key Market Insights</h4>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
                      <svg className="h-4 w-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h5 className="font-bold text-gray-900">Premium Market Positioning</h5>
                      <p className="text-gray-600 text-sm">Heritage apple varieties and organic certification position us in the premium segment with 15-25% higher margins.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
                      <svg className="h-4 w-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h5 className="font-bold text-gray-900">Target Demographics</h5>
                      <p className="text-gray-600 text-sm">Primary buyers are 25-45 years old, college-educated, with household incomes above $75k, prioritizing quality and sustainability.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
                      <svg className="h-4 w-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h5 className="font-bold text-gray-900">Distribution Opportunities</h5>
                      <p className="text-gray-600 text-sm">Strong wholesale opportunities in NYC metro area, with craft beer bars showing 20% annual growth in cider sales.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h4 className="text-xl font-bold text-gray-900 mb-6">Location Advantages</h4>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mt-1">
                      <svg className="h-4 w-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h5 className="font-bold text-gray-900">Strategic Location</h5>
                      <p className="text-gray-600 text-sm">Wantage, NJ provides access to NYC metro market (60 miles) while maintaining rural authenticity.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mt-1">
                      <svg className="h-4 w-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h5 className="font-bold text-gray-900">Regulatory Environment</h5>
                      <p className="text-gray-600 text-sm">NJ Plenary Winery License allows self-distribution up to 50,000 gallons annually, providing significant cost advantages.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mt-1">
                      <svg className="h-4 w-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h5 className="font-bold text-gray-900">Tourism Potential</h5>
                      <p className="text-gray-600 text-sm">Sussex County attracts 2.3 million visitors annually for agritourism, providing strong foundation for direct sales.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Brand Positioning & Strategy */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Brand Positioning & Strategy</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h4 className="text-xl font-bold text-gray-900 mb-6">Core Brand Identity</h4>
                <div className="space-y-6">
                  <div className="border-l-4 border-green-500 pl-4">
                    <h5 className="font-bold text-gray-900 mb-2">Heritage Apple Story</h5>
                    <p className="text-gray-600 text-sm">Our 20+ heritage varieties tell the story of American apple heritage, connecting consumers to agricultural history and authentic flavors lost in commercial production.</p>
                  </div>
                  
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h5 className="font-bold text-gray-900 mb-2">Organic & Sustainable</h5>
                    <p className="text-gray-600 text-sm">Certified organic practices and sustainable farming methods appeal to environmentally conscious consumers willing to pay premium prices.</p>
                  </div>
                  
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h5 className="font-bold text-gray-900 mb-2">Dry & Sophisticated</h5>
                    <p className="text-gray-600 text-sm">Complex, dry ciders that compete with wine rather than sweet commercial ciders, targeting sophisticated palates and food pairing opportunities.</p>
                  </div>
                  
                  <div className="border-l-4 border-orange-500 pl-4">
                    <h5 className="font-bold text-gray-900 mb-2">Health Benefits</h5>
                    <p className="text-gray-600 text-sm">Naturally gluten-free, lower alcohol content than wine, and antioxidant properties from heritage apples appeal to health-conscious consumers.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h4 className="text-xl font-bold text-gray-900 mb-6">Competitive Positioning</h4>
                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-bold text-green-800 mb-2">vs. Commercial Ciders</h5>
                    <p className="text-gray-700 text-sm">Premium pricing justified by organic heritage apples, complex flavors, and artisanal production methods vs. mass-produced sweet ciders.</p>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h5 className="font-bold text-blue-800 mb-2">vs. Craft Beer</h5>
                    <p className="text-gray-700 text-sm">Naturally gluten-free alternative with lower alcohol content, appealing to health-conscious craft beverage consumers seeking variety.</p>
                  </div>
                  
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h5 className="font-bold text-purple-800 mb-2">vs. Wine</h5>
                    <p className="text-gray-700 text-sm">More approachable price point with food-friendly acidity and unique terroir expression, positioned as "American wine alternative."</p>
                  </div>
                  
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h5 className="font-bold text-orange-800 mb-2">vs. Local Cideries</h5>
                    <p className="text-gray-700 text-sm">Differentiated by heritage variety focus, organic certification, and integrated agritourism experience with farm stays and tours.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Distribution & Sales Strategy */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Distribution & Sales Strategy</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-6 mx-auto">
                  <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-gray-900 text-center mb-4">Direct-to-Consumer</h4>
                <ul className="text-gray-600 space-y-2 mb-6">
                  <li>• On-site tasting room & farm store</li>
                  <li>• Farmers markets (3-5 locations)</li>
                  <li>• Online sales & subscription boxes</li>
                  <li>• Farm events & private tastings</li>
                  <li>• Agritourism integration</li>
                </ul>
                <div className="text-center">
                  <span className="text-2xl font-bold text-green-600">35-60%</span>
                  <p className="text-sm text-gray-500">of total sales</p>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-6 mx-auto">
                  <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m0 0H5m0 0h2M7 7h10M7 11h10M7 15h10" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-gray-900 text-center mb-4">Retail Wholesale</h4>
                <ul className="text-gray-600 space-y-2 mb-6">
                  <li>• Specialty liquor stores</li>
                  <li>• Whole Foods & premium grocers</li>
                  <li>• Wine shops with craft beer sections</li>
                  <li>• Local co-ops & farm stores</li>
                  <li>• Self-distribution advantage</li>
                </ul>
                <div className="text-center">
                  <span className="text-2xl font-bold text-blue-600">30-45%</span>
                  <p className="text-sm text-gray-500">of total sales</p>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mb-6 mx-auto">
                  <svg className="h-6 w-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-gray-900 text-center mb-4">On-Premise</h4>
                <ul className="text-gray-600 space-y-2 mb-6">
                  <li>• Craft beer bars & gastropubs</li>
                  <li>• Farm-to-table restaurants</li>
                  <li>• Wine bars with cider programs</li>
                  <li>• Event venues & catering</li>
                  <li>• Seasonal tap accounts</li>
                </ul>
                <div className="text-center">
                  <span className="text-2xl font-bold text-purple-600">10-20%</span>
                  <p className="text-sm text-gray-500">of total sales</p>
                </div>
              </div>
            </div>
            
            {/* Sales Velocity Tactics */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold text-gray-900 mb-6 text-center">Key Sales Velocity Tactics</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center mb-4 mx-auto">
                    <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h5 className="font-bold text-gray-900 mb-2">Shelf Placement</h5>
                  <p className="text-gray-600 text-sm">Premium positioning in craft beer coolers, end-cap displays, and cross-merchandising with local products.</p>
                </div>
                
                <div className="text-center">
                  <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center mb-4 mx-auto">
                    <svg className="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                    </svg>
                  </div>
                  <h5 className="font-bold text-gray-900 mb-2">Staff Education</h5>
                  <p className="text-gray-600 text-sm">Training programs for retail staff and bartenders on heritage varieties, tasting notes, and food pairings.</p>
                </div>
                
                <div className="text-center">
                  <div className="h-16 w-16 rounded-full bg-purple-100 flex items-center justify-center mb-4 mx-auto">
                    <svg className="h-8 w-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 0v1m-2 0V6a2 2 0 00-2 0v1m2 0V9.5m0 0v3m0-3h3m-3 0h-3" />
                    </svg>
                  </div>
                  <h5 className="font-bold text-gray-900 mb-2">Sampling Programs</h5>
                  <p className="text-gray-600 text-sm">In-store tastings, festival participation, and targeted sampling at farmers markets and events.</p>
                </div>
                
                <div className="text-center">
                  <div className="h-16 w-16 rounded-full bg-orange-100 flex items-center justify-center mb-4 mx-auto">
                    <svg className="h-8 w-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h5 className="font-bold text-gray-900 mb-2">Seasonal Promotions</h5>
                  <p className="text-gray-600 text-sm">Limited releases, harvest celebrations, and holiday-themed marketing to drive trial and repeat purchases.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Digital Marketing Strategy */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Digital Marketing Strategy</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h4 className="text-xl font-bold text-gray-900 mb-6">Content Marketing</h4>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
                      <svg className="h-4 w-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h5 className="font-bold text-gray-900">Heritage Apple Stories</h5>
                      <p className="text-gray-600 text-sm">Blog posts and videos about the history and characteristics of each heritage variety we grow.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
                      <svg className="h-4 w-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h5 className="font-bold text-gray-900">Production Process</h5>
                      <p className="text-gray-600 text-sm">Behind-the-scenes content showing organic farming practices and artisanal cider-making process.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
                      <svg className="h-4 w-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h5 className="font-bold text-gray-900">Food Pairing Guides</h5>
                      <p className="text-gray-600 text-sm">Educational content on pairing our ciders with food, targeting food enthusiasts and restaurants.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
                      <svg className="h-4 w-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h5 className="font-bold text-gray-900">Seasonal Updates</h5>
                      <p className="text-gray-600 text-sm">Regular updates on orchard activities, harvest progress, and seasonal product releases.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h4 className="text-xl font-bold text-gray-900 mb-6">Digital Channels</h4>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h5 className="font-bold text-blue-800 mb-2">Website & SEO</h5>
                    <p className="text-gray-700 text-sm">Professional website with e-commerce, blog, and local SEO optimization for "craft cider NJ" and related terms.</p>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-bold text-green-800 mb-2">Social Media</h5>
                    <p className="text-gray-700 text-sm">Instagram and Facebook for visual storytelling, TikTok for younger demographics, LinkedIn for B2B connections.</p>
                  </div>
                  
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h5 className="font-bold text-purple-800 mb-2">Email Marketing</h5>
                    <p className="text-gray-700 text-sm">Newsletter with harvest updates, new releases, and exclusive offers for direct customers and trade accounts.</p>
                  </div>
                  
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h5 className="font-bold text-orange-800 mb-2">Influencer Partnerships</h5>
                    <p className="text-gray-700 text-sm">Collaborations with local food bloggers, craft beverage influencers, and farm-to-table advocates.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Phase-Specific Implementation */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Phase-Specific Marketing Implementation</h3>
            
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-green-500">
                <h4 className="text-xl font-bold text-green-800 mb-4">Phase 1: Brand Building & Local Awareness (Year 1)</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-bold text-gray-900 mb-3">Focus Areas</h5>
                    <ul className="text-gray-600 space-y-1 text-sm">
                      <li>• Establish brand identity and packaging</li>
                      <li>• Build local customer base through farmers markets</li>
                      <li>• Create foundational digital presence</li>
                      <li>• Develop relationships with local media</li>
                      <li>• Focus on direct-to-consumer sales (60%)</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900 mb-3">Budget: $3,000 (DIY Approach)</h5>
                    <ul className="text-gray-600 space-y-1 text-sm">
                      <li>• Basic website development: $1,000</li>
                      <li>• Business cards & signage: $500</li>
                      <li>• Farmers market fees: $800</li>
                      <li>• Social media tools: $300</li>
                      <li>• Photography & content: $400</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-blue-500">
                <h4 className="text-xl font-bold text-blue-800 mb-4">Phase 2: Market Expansion (Years 2-4)</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-bold text-gray-900 mb-3">Focus Areas</h5>
                    <ul className="text-gray-600 space-y-1 text-sm">
                      <li>• Expand to wholesale accounts (15 locations)</li>
                      <li>• Develop tasting room operations</li>
                      <li>• Increase digital marketing presence</li>
                      <li>• Participate in regional events and festivals</li>
                      <li>• Balance direct (45%) and wholesale (40%) sales</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900 mb-3">Budget: $6,000 (Strategic Growth)</h5>
                    <ul className="text-gray-600 space-y-1 text-sm">
                      <li>• Paid social media advertising: $2,000</li>
                      <li>• Trade show participation: $1,500</li>
                      <li>• Professional photography: $800</li>
                      <li>• Print materials & signage: $1,000</li>
                      <li>• Website enhancements: $700</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-purple-500">
                <h4 className="text-xl font-bold text-purple-800 mb-4">Phase 3: Regional Brand Leadership (Years 5+)</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-bold text-gray-900 mb-3">Focus Areas</h5>
                    <ul className="text-gray-600 space-y-1 text-sm">
                      <li>• Expand to 75+ wholesale accounts</li>
                      <li>• Develop destination agritourism</li>
                      <li>• Launch premium limited releases</li>
                      <li>• Build regional brand recognition</li>
                      <li>• Optimize retail (45%) and on-premise (20%) mix</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900 mb-3">Budget: $10,000 (Professional Marketing)</h5>
                    <ul className="text-gray-600 space-y-1 text-sm">
                      <li>• Digital advertising campaigns: $3,500</li>
                      <li>• Trade marketing & promotions: $2,500</li>
                      <li>• Event sponsorships: $2,000</li>
                      <li>• Professional PR services: $1,500</li>
                      <li>• Content creation & video: $500</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-12">Implementation Timeline</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-800"></div>
            <div className="space-y-12">
              {/* Phase 1 */}
              <div className="relative pl-8 md:pl-0">
                <div className="md:grid md:grid-cols-5 md:gap-8">
                  <div className="md:col-span-2 md:text-right md:pr-8">
                    <h3 className="text-2xl font-bold text-gray-900">Phase 1: Foundation</h3>
                    <p className="text-gray-500">Months 1-6</p>
                  </div>
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 mt-3 md:mt-1">
                    <div className="h-8 w-8 rounded-full bg-green-800 border-4 border-white flex items-center justify-center">
                      <span className="text-white font-bold">1</span>
                    </div>
                  </div>
                  <div className="md:col-span-3 pt-3 md:pt-0 md:pl-8">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <ul className="list-disc pl-5 text-gray-600 space-y-2">
                        <li>Acquire property and assess orchard condition</li>
                        <li>Set up production facility and equipment</li>
                        <li>Obtain necessary licenses and permits</li>
                        <li>Develop initial product recipes</li>
                        <li>Establish branding and packaging design</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phase 2 */}
              <div className="relative pl-8 md:pl-0">
                <div className="md:grid md:grid-cols-5 md:gap-8">
                  <div className="md:col-span-2 md:text-right md:pr-8">
                    <h3 className="text-2xl font-bold text-gray-900">Phase 2: Market Entry</h3>
                    <p className="text-gray-500">Months 7-12</p>
                  </div>
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 mt-3 md:mt-1">
                    <div className="h-8 w-8 rounded-full bg-green-800 border-4 border-white flex items-center justify-center">
                      <span className="text-white font-bold">2</span>
                    </div>
                  </div>
                  <div className="md:col-span-3 pt-3 md:pt-0 md:pl-8">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <ul className="list-disc pl-5 text-gray-600 space-y-2">
                        <li>First harvest and production run</li>
                        <li>Launch online store and initial product line</li>
                        <li>Establish presence at farmers markets</li>
                        <li>Begin outreach to potential wholesale accounts</li>
                        <li>Implement digital marketing strategy</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phase 3 */}
              <div className="relative pl-8 md:pl-0">
                <div className="md:grid md:grid-cols-5 md:gap-8">
                  <div className="md:col-span-2 md:text-right md:pr-8">
                    <h3 className="text-2xl font-bold text-gray-900">Phase 3: Growth</h3>
                    <p className="text-gray-500">Year 2</p>
                  </div>
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 mt-3 md:mt-1">
                    <div className="h-8 w-8 rounded-full bg-green-800 border-4 border-white flex items-center justify-center">
                      <span className="text-white font-bold">3</span>
                    </div>
                  </div>
                  <div className="md:col-span-3 pt-3 md:pt-0 md:pl-8">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <ul className="list-disc pl-5 text-gray-600 space-y-2">
                        <li>Expand product line with seasonal and limited editions</li>
                        <li>Increase wholesale distribution</li>
                        <li>Enhance online presence and direct sales</li>
                        <li>Optimize production processes</li>
                        <li>Begin planning for tasting room development</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phase 4 */}
              <div className="relative pl-8 md:pl-0">
                <div className="md:grid md:grid-cols-5 md:gap-8">
                  <div className="md:col-span-2 md:text-right md:pr-8">
                    <h3 className="text-2xl font-bold text-gray-900">Phase 4: Expansion</h3>
                    <p className="text-gray-500">Years 3-5</p>
                  </div>
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 mt-3 md:mt-1">
                    <div className="h-8 w-8 rounded-full bg-green-800 border-4 border-white flex items-center justify-center">
                      <span className="text-white font-bold">4</span>
                    </div>
                  </div>
                  <div className="md:col-span-3 pt-3 md:pt-0 md:pl-8">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <ul className="list-disc pl-5 text-gray-600 space-y-2">
                        <li>Develop and open on-site tasting room</li>
                        <li>Expand distribution to neighboring states</li>
                        <li>Increase production capacity</li>
                        <li>Establish agritourism components</li>
                        <li>Develop farm stay accommodations</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grants and Funding */}
      <section className="py-16 bg-white" id="grants-funding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-12">Grants & Funding Opportunities</h2>
          <p className="text-lg text-gray-600 text-center mb-8 max-w-4xl mx-auto">
            As a sustainable agricultural business focused on heritage apple varieties and craft beverages, 
            Root Logic is eligible for various grants and funding opportunities that support our mission
            and growth objectives.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Available Grant Programs</h3>
              <div className="space-y-8">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">USDA Specialty Crop Block Grant</h4>
                  <p className="text-gray-600 mb-4">
                    Administered by the NJ Department of Agriculture, these grants support projects that enhance 
                    the competitiveness of specialty crops like heritage apples used in our cider production.
                  </p>
                  <div className="flex items-center text-gray-700">
                    <span className="font-semibold mr-2">Funding Range:</span> 
                    <span>$10,000 - $100,000</span>
                  </div>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Value-Added Producer Grants (VAPG)</h4>
                  <p className="text-gray-600 mb-4">
                    This USDA program supports agricultural producers entering value-added activities like hard cider production,
                    with funds for planning or working capital requirements.
                  </p>
                  <div className="flex items-center text-gray-700">
                    <span className="font-semibold mr-2">Funding Range:</span> 
                    <span>$75,000 - $250,000</span>
                  </div>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">NJEDA Programs</h4>
                  <p className="text-gray-600 mb-4">
                    The New Jersey Economic Development Authority offers various support programs including 
                    tax credits, grants, and low-interest loans for businesses in rural areas that create jobs 
                    and invest in infrastructure.
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Strategic Approach</h3>
              <ul className="space-y-6">
                <li className="flex">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-green-100 flex items-center justify-center mt-1">
                    <span className="text-green-800 font-bold">1</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-xl font-bold text-gray-900">Sustainable Practices</h4>
                    <p className="text-gray-600">Our organic growing practices and heritage apple varieties align perfectly with grant priorities for sustainable agriculture and biodiversity preservation.</p>
                  </div>
                </li>
                
                <li className="flex">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-green-100 flex items-center justify-center mt-1">
                    <span className="text-green-800 font-bold">2</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-xl font-bold text-gray-900">Economic Impact</h4>
                    <p className="text-gray-600">Our business creates rural jobs, attracts tourism, and supports local agriculture, strengthening our eligibility for economic development programs.</p>
                  </div>
                </li>
                
                <li className="flex">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-green-100 flex items-center justify-center mt-1">
                    <span className="text-green-800 font-bold">3</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-xl font-bold text-gray-900">Research & Innovation</h4>
                    <p className="text-gray-600">We're pursuing partnerships with Rutgers University for research on heritage cider apples, making us eligible for research and education grants.</p>
                  </div>
                </li>
                
                <li className="flex">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-green-100 flex items-center justify-center mt-1">
                    <span className="text-green-800 font-bold">4</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-xl font-bold text-gray-900">Conservation Efforts</h4>
                    <p className="text-gray-600">Our water management system and soil conservation practices qualify for environmental grants through NRCS and other conservation programs.</p>
                  </div>
                </li>
              </ul>
              
              <div className="mt-8 p-6 border border-green-200 rounded-lg bg-green-50">
                <h4 className="text-xl font-bold text-gray-900 mb-3">Key Resources</h4>
                <ul className="space-y-2 text-gray-700">
                  <li><span className="font-medium">NJ Department of Agriculture:</span> www.nj.gov/agriculture</li>
                  <li><span className="font-medium">USDA Rural Development NJ:</span> www.rd.usda.gov/nj</li>
                  <li><span className="font-medium">NJ Economic Development Authority:</span> www.njeda.com</li>
                  <li><span className="font-medium">Sustainable Agriculture Research:</span> www.northeastsare.org</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-title text-center">Conclusion</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-600 mb-8">
              Root Logic represents a compelling business opportunity that aligns with growing consumer demand for authentic, sustainable, and locally-produced artisanal products. By combining cider production with agritourism and direct sales, we create multiple revenue streams and a resilient business model.
            </p>
            <p className="text-lg text-gray-600">
              With our established orchard, production facilities, and clear implementation plan, Root Logic is positioned for success in the thriving craft beverage and agritourism markets, offering attractive returns over the five-year projection period and beyond.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
} 