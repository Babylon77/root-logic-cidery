import Image from 'next/image'
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
        <Image
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
              <Image
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
              <Image
                src="/images/orchard 2.webp"
                alt="Our apple trees"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Marketing Strategy */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-12">Marketing Strategy</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Brand Identity</h3>
              <p className="text-gray-600">
                Our branding emphasizes our heritage apple varieties, sustainable farming practices, and the unique terroir of our orchard. Our packaging features clean, rustic design elements that communicate both tradition and quality.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Distribution Strategy</h3>
              <p className="text-gray-600">
                We will focus on establishing strong relationships with specialty retailers, craft beer pubs, and farmers markets. Our online store will feature subscription options and seasonal releases to build a loyal direct customer base.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Digital Marketing</h3>
              <p className="text-gray-600">
                Our digital strategy includes content marketing highlighting our production process, social media engagement, email marketing for limited releases, and partnerships with influencers in the craft beverage space to extend our reach.
              </p>
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