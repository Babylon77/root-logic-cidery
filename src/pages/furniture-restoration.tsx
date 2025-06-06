import Head from 'next/head'
import OptimizedImage from '../components/OptimizedImage'
import Layout from '../components/Layout'

const FurnitureRestorationPage = () => {
  return (
    <Layout>
      <Head>
        <title>Furniture Restoration Business Plan | Restored Roots</title>
        <meta
          name="description"
          content="Business plan for Restored Roots Furniture, a family-run business specializing in upcycling high-quality wood furniture."
        />
      </Head>

      {/* Hero Section */}
      <section className="relative h-[60vh]">
        <OptimizedImage
          src="/images/Furniture Shop.png"
          alt="The Restored Roots Furniture workshop."
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              Restored Roots Furniture
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-300">
              A Business Plan for a Sustainable Future in Furniture Restoration
            </p>
            <a
              href="/Restored_Roots.md"
              download
              className="mt-8 inline-block bg-green-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-green-600 transition duration-300"
            >
              Download Full Business Plan (.md)
            </a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Executive Summary */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Executive Summary</h2>
            <div className="prose prose-lg max-w-none text-gray-600 space-y-4 bg-white p-8 rounded-lg shadow-sm">
              <p>
                Restored Roots Furniture is a part-time, family-run furniture restoration business operating from the upstairs of the bank barn on a 50-acre orchard in Wantage, NJ. Led by an experienced professional with a passion for woodworking, the business sources discarded wood furniture from bulk trash pickup days and social media platforms in affluent communities. Restored pieces are sold through Wantage and Kinnelon farmstands (60% of sales) and online marketplaces (40%). With family labor and low overhead, the business projects 2026 revenues of $48,000, scaling to $96,000 by 2029. Startup costs of $15,000 are funded by family cash.
              </p>
            </div>
          </section>

          {/* Company Description */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Company Description</h2>
            <div className="prose prose-lg max-w-none text-gray-600 space-y-4">
              <p>
                <strong>Vision:</strong> To transform discarded furniture into cherished, sustainable pieces, enhancing the family's farm-based lifestyle and community engagement.
              </p>
              <p>
                <strong>Mission:</strong> To restore high-quality wood furniture sourced from affluent NJ communities, offering unique, eco-friendly pieces while fostering family collaboration and creative expression.
              </p>
               <p>
                <strong>Unique Selling Proposition:</strong> Family-run, eco-friendly restoration of high-quality wood furniture sourced from affluent areas, sold at competitive prices with a sustainability narrative, integrated with the farm's cidery and agritourism.
              </p>
            </div>
          </section>

          {/* Products and Services */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Products & Services</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow text-center">
                <h3 className="text-xl font-bold mb-2">Adirondack Chairs</h3>
                <p className="text-gray-600">Refinished or rebuilt.<br/><b>Price:</b> $150–$250</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow text-center">
                <h3 className="text-xl font-bold mb-2">Dining Tables & Sets</h3>
                <p className="text-gray-600">Restored sets.<br/><b>Price:</b> $500–$1,200</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow text-center">
                <h3 className="text-xl font-bold mb-2">Dressers</h3>
                <p className="text-gray-600">Refinished or upcycled.<br/><b>Price:</b> $300–$600</p>
              </div>
            </div>
          </section>

          {/* Our Restoration Process */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Restoration Process</h2>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-2">1. Sourcing</h3>
                <p className="text-gray-600">Free furniture from bulk pickups in Kinnelon, Morris, & Sussex (2–3 days/month), plus social media.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-2">2. Assessment</h3>
                <p className="text-gray-600">Each piece is cleaned and assessed to map out the restoration plan (1–2 hours/piece).</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-2">3. Restoration</h3>
                <p className="text-gray-600">Sanding, repairs, and refinishing using eco-friendly stains and waxes (4–8 hours/piece).</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-2">4. Sales</h3>
                <p className="text-gray-600">Finished pieces are sold via farmstands, online marketplaces, and cidery events.</p>
              </div>
            </div>
          </section>

          {/* Market Analysis */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Market Analysis</h2>
            <div className="prose prose-lg max-w-none text-gray-600 space-y-4">
              <p>The U.S. secondhand furniture market is projected to reach $16 billion by 2028 (6% CAGR), driven by demand for sustainable, vintage, and custom decor. Our target market includes adults aged 30-65 with household incomes over $150,000 who value sustainability and local craftsmanship. By sourcing high-quality discarded furniture from affluent communities, we tap into a low-cost supply chain to meet this growing demand.</p>
              <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Competitive Advantage</h3>
              <p>While competitors like Heirloom Refinishing or Morris Habitat ReStore exist, they focus on high-end custom repairs or low-cost donated goods. Restored Roots differentiates itself by focusing specifically on upcycling high-quality, free-sourced wood furniture with an artisanal, vintage aesthetic. Our integration with Colonial Cidery's agritourism and farmstand sales channels provides a unique, low-cost marketing and distribution advantage that no local competitor can match.</p>
            </div>
          </section>

          {/* Marketing & Sales Strategy */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Marketing & Sales Strategy</h2>
            <div className="prose prose-lg max-w-none text-gray-600 space-y-4">
               <p>Our brand is positioned as an eco-friendly, family-crafted furniture line with a vintage aesthetic, integrated with Colonial Cider's historical narrative. Marketing is grassroots and low-cost, leveraging the cidery's existing customer base and digital presence.</p>
              <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Sales Channels</h3>
               <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white p-6 rounded-lg shadow">
                    <h3 className="text-xl font-bold mb-2">Direct Sales (60%)</h3>
                    <p className="text-gray-600">Sales are split between the Wantage farmstand (30%) and a new Kinnelon farmstand (30%), capitalizing on cidery events and local agritourism traffic.</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow">
                    <h3 className="text-xl font-bold mb-2">Online Sales (40%)</h3>
                    <p className="text-gray-600">We utilize Facebook Marketplace, Etsy, and local NJ buy/sell groups to reach a broader online audience.</p>
                  </div>
                </div>
            </div>
          </section>

          {/* Project Gallery */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Project Gallery</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md overflow-hidden group">
                <div className="relative h-80 w-full">
                  <OptimizedImage
                    src="/images/Restored Hutch.jpg"
                    alt="A beautifully restored wooden hutch with a dark finish."
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 bg-white">
                  <h3 className="font-bold text-lg text-center text-gray-800">Vintage Hutch</h3>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden group">
                <div className="relative h-80 w-full">
                  <OptimizedImage
                    src="/images/Restored Dresser.webp"
                    alt="A restored mid-century modern dresser with a two-tone finish."
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 bg-white">
                  <h3 className="font-bold text-lg text-center text-gray-800">Mid-Century Dresser</h3>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden group">
                <div className="relative h-80 w-full">
                  <OptimizedImage
                    src="/images/Restored Adirondack.jpg"
                    alt="A bright blue restored Adirondack chair."
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 bg-white">
                  <h3 className="font-bold text-lg text-center text-gray-800">Adirondack Chair</h3>
                </div>
              </div>
            </div>
          </section>
          
          {/* Financial Overview */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Financial Overview</h2>
            <div className="prose prose-lg max-w-none text-gray-600 space-y-8">
                <p>
                    The financial model for Restored Roots Furniture is designed for sustainable, lean growth, leveraging existing workshop space on the orchard to minimize overhead. Our focus is on maximizing profit per piece through quality craftsmanship and strategic sourcing. All startup costs are funded by $15,000 in family cash.
                </p>

                {/* Startup Costs */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Startup Costs</h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full bg-white rounded-lg shadow">
                      <thead className="bg-gray-200">
                        <tr>
                          <th className="py-2 px-4 text-left">Item</th>
                          <th className="py-2 px-4 text-right">Estimated Cost</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="py-2 px-4">Power Sander</td>
                          <td className="py-2 px-4 text-right">$500</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2 px-4">Air Compressor</td>
                          <td className="py-2 px-4 text-right">$500</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2 px-4">Spray Gun</td>
                          <td className="py-2 px-4 text-right">$300</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2 px-4">Woodworking Tools</td>
                          <td className="py-2 px-4 text-right">$1,200</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2 px-4">Storage Racks</td>
                          <td className="py-2 px-4 text-right">$500</td>
                        </tr>
                         <tr className="border-b">
                          <td className="py-2 px-4">Cleaning Supplies</td>
                          <td className="py-2 px-4 text-right">$500</td>
                        </tr>
                         <tr className="border-b">
                          <td className="py-2 px-4">Truck Bed Cover for GMC Sierra</td>
                          <td className="py-2 px-4 text-right">$1,000</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-4 font-bold">Total Estimated Startup Costs</td>
                          <td className="py-2 px-4 font-bold text-right">$15,000</td>
                        </tr>
                      </tbody>
                    </table>
                     <p className="text-sm text-gray-500 mt-2">*Total startup funding of $15,000 from family cash includes the itemized list above plus additional working capital.</p>
                  </div>
                </div>

                {/* Pricing Strategy */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Pricing Strategy</h3>
                  <p>Our strategy uses a mid-range pricing model to appeal to eco-conscious consumers, with premium options for custom orders. Prices reflect the quality of restoration and unique nature of each piece.</p>
                  <ul className="list-disc pl-5 mt-2">
                    <li><b>Adirondack Chairs:</b> $150 – $250</li>
                    <li><b>Dining Tables/Sets:</b> $500 – $1,200</li>
                    <li><b>Dressers:</b> $300 – $600</li>
                    <li><b>Small Business Custom Orders:</b> $500 – $2,000</li>
                  </ul>
                </div>

                {/* Revenue Projections */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Revenue & Production Forecast</h3>
                   <div className="overflow-x-auto">
                    <table className="min-w-full bg-white rounded-lg shadow">
                      <thead className="bg-gray-200">
                        <tr>
                          <th className="py-2 px-4 text-left">Year</th>
                          <th className="py-2 px-4 text-right">Pieces/Year</th>
                          <th className="py-2 px-4 text-right">Projected Revenue</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="py-2 px-4 font-bold">2025</td>
                          <td className="py-2 px-4 text-right">120</td>
                          <td className="py-2 px-4 text-right">$24,000</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2 px-4 font-bold">2026</td>
                          <td className="py-2 px-4 text-right">240</td>
                          <td className="py-2 px-4 text-right">$48,000</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2 px-4 font-bold">2027</td>
                          <td className="py-2 px-4 text-right">360</td>
                          <td className="py-2 px-4 text-right">$72,000</td>
                        </tr>
                         <tr className="border-b">
                          <td className="py-2 px-4 font-bold">2028</td>
                          <td className="py-2 px-4 text-right">420</td>
                          <td className="py-2 px-4 text-right">$84,000</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-4 font-bold">2029</td>
                          <td className="py-2 px-4 text-right">480</td>
                          <td className="py-2 px-4 text-right">$96,000</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

            </div>
          </section>

        </div>
      </main>

    </Layout>
  )
}

export default FurnitureRestorationPage 