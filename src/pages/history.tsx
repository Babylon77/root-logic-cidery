import Layout from '../components/Layout'
import Link from 'next/link'
import OptimizedImage from '../components/OptimizedImage'

export default function History() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[40vh] hero-overlay">
        <OptimizedImage
          src="/images/Cider Tree.jpg"
          alt="Historic view of Colonial Cider Farm"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-center text-white max-w-4xl px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">Our History</h1>
            <p className="text-xl md:text-2xl mb-8 drop-shadow-md">The Evolution from Colonial Cider to Root Logic</p>
          </div>
        </div>
      </section>

      {/* History Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="accent-divider w-24 mx-auto mb-12"></div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">The Colonial Cider Legacy</h2>
              
              <p className="text-lg text-gray-600 mb-6">
                Before becoming Root Logic Cidery, this 50-acre farm in Wantage, New Jersey was known as Colonial Cider. 
                The property's history dates back to the 1700s, with the farmhouse itself originally built in 1740.
              </p>
              
              <p className="text-lg text-gray-600 mb-6">
                In 2001, a visionary farmer purchased what was then a run-down and dilapidated property. Over the next 24 years, 
                he meticulously transformed the land into a thriving agricultural venture dedicated to heritage apples and 
                artisanal cider production.
              </p>

              <div className="my-12 aspect-video relative">
                <iframe 
                  className="w-full h-full" 
                  src="https://www.youtube.com/embed/QDrgSOVk0iU" 
                  title="Colonial Cider Farm Tour" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen>
                </iframe>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">A Labor of Love</h3>
              <p className="text-lg text-gray-600 mb-6">
                The previous owner dedicated more than two decades to bringing this farm back to life, working tirelessly 
                to create an agricultural destination focused on sustainability and organic farming practices. His vision 
                included transforming the property into a hub for agricultural tourism in the region.
              </p>

              <p className="text-lg text-gray-600 mb-6">
                In 2017, the farm was officially designated as preserved farmland under the Sussex County Farmland Preservation 
                Program, ensuring its agricultural heritage would be protected for generations to come.
              </p>

              <div className="bg-gray-50 p-8 rounded-lg my-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Notable Achievements</h3>
                <ul className="space-y-3 mb-6 list-disc pl-6">
                  <li className="text-gray-600">
                    Developed an 18-acre organic orchard with 20 different 200-year-old American apple varieties
                  </li>
                  <li className="text-gray-600">
                    Converted a large dairy barn into a fully-equipped commercial cider-making facility
                  </li>
                  <li className="text-gray-600">
                    Cultivated diverse fruits including blueberries, raspberries, cherries, peaches, and plums
                  </li>
                  <li className="text-gray-600">
                    Planted English, French, and Spanish pear trees for Perry wine production
                  </li>
                  <li className="text-gray-600">
                    Restored the 1740s farmhouse while preserving its historic character
                  </li>
                  <li className="text-gray-600">
                    Built a second entrance and farm road using reclaimed stone from the property
                  </li>
                  <li className="text-gray-600">
                    Secured a valuable Plenary Winery license for both wholesale and retail operations
                  </li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">The Transition to Root Logic</h3>
              <p className="text-lg text-gray-600 mb-6">
                After bringing Colonial Cider to the cusp of profitability through years of hard work and dedication, 
                the previous owner decided to pass the torch. The farm was ready for its next chapter, which led to 
                the birth of Root Logic Cidery under new ownership.
              </p>
              
              <p className="text-lg text-gray-600 mb-6">
                While we've rebranded as Root Logic, we remain deeply committed to honoring the legacy of Colonial Cider 
                and the incredible foundation that was established here. We continue to embrace organic farming practices, 
                heritage apple varieties, and sustainable agriculture as we build upon this remarkable history.
              </p>

              <div className="mt-8">
                <a 
                  href="https://www.facebook.com/Colonialcider" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center text-leaf-green font-semibold hover:text-green-700 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                  Follow Colonial Cider's Legacy on Facebook
                </a>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Farm Facts</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="h-5 w-5 rounded-full bg-leaf-green flex-shrink-0 mt-1"></span>
                      <span className="ml-3 text-gray-600">50-acre farm in Wantage, NJ</span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-5 w-5 rounded-full bg-leaf-green flex-shrink-0 mt-1"></span>
                      <span className="ml-3 text-gray-600">Farm dates back to the 1700s</span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-5 w-5 rounded-full bg-leaf-green flex-shrink-0 mt-1"></span>
                      <span className="ml-3 text-gray-600">Farmhouse built in 1740</span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-5 w-5 rounded-full bg-leaf-green flex-shrink-0 mt-1"></span>
                      <span className="ml-3 text-gray-600">Preserved farmland designation (2017)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-5 w-5 rounded-full bg-leaf-green flex-shrink-0 mt-1"></span>
                      <span className="ml-3 text-gray-600">Certified organic practices</span>
                    </li>
                  </ul>
                </div>

                <div className="relative h-[300px] md:h-[400px] mb-8">
                  <OptimizedImage
                    src="/images/cider-room.webp"
                    alt="Cider production at Colonial Cider"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>

                <a 
                  href="https://www.northjersey.com/story/money/real-estate/2025/01/29/colonial-cider-nj-wantage-farm-for-sale-cider-facility/77992780007/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block bg-apple-red text-white text-center font-medium rounded-lg px-6 py-3 hover:bg-red-700 transition-colors"
                >
                  Read the Full News Article
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Experience Our Heritage</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Visit Root Logic today to experience the continuation of a proud agricultural tradition.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link href="/explore" className="btn-primary">
              Explore the Farm
            </Link>
            <Link href="/products" className="inline-block px-6 py-3 bg-white border-2 border-leaf-green text-leaf-green font-semibold rounded-lg transition-colors duration-200 hover:bg-gray-50">
              See Our Products
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
} 