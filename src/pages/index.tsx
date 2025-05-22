import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/Layout'
import OptimizedImage from '../components/OptimizedImage'

export default function Home() {
  return (
    <Layout 
      title="Root Logic Cidery - Craft Hard Cider from Heritage Apples"
      description="Craft hard cider made from organic heritage apple varieties grown in the heart of Sussex County, New Jersey."
    >
      {/* Hero Section */}
      <section className="relative h-[70vh] hero-overlay">
        <OptimizedImage
          src="/images/Apple Drone.jpg"
          alt="Aerial view of Root Logic"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-center text-white max-w-4xl px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">Root Logic</h1>
            <p className="text-xl md:text-2xl mb-8 drop-shadow-md">Artisanal Cider & Sustainable Farming</p>
            <Link href="/explore" className="btn-primary">
              Explore Our Farm
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="accent-divider w-24 mx-auto mb-12"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Welcome to Root Logic, a family-owned orchard nestled in the scenic hills of Wantage, New Jersey. For over three decades, Jason and Laney have been cultivating heritage apple varieties and producing award-winning craft ciders using sustainable farming practices.
              </p>
              <p className="text-lg text-gray-600">
                Our 25-acre farm is home to over 500 apple trees, an integrated apiary for honey production, and thoughtfully designed spaces where visitors can experience the rhythms of farm life and the joys of artisanal food production.
              </p>
              <div className="mt-8">
                <Link href="/our-story" className="inline-block text-leaf-green font-semibold hover:text-green-700 transition-colors">
                  Learn More <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px]">
              <div className="absolute inset-y-0 -right-6 w-6 bg-leaf-green"></div>
              <OptimizedImage
                src="/images/Heritage Apples.jpg"
                alt="Our apple orchard"
                fill
                className="object-cover accent-box"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">Experience Root Logic</h2>
          <p className="text-xl text-gray-500 text-center mb-12 max-w-3xl mx-auto">Discover our sustainable orchard, artisanal cider production, and farm stays</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="feature-card">
              <div className="feature-card-header"></div>
              <div className="p-8">
                <div className="h-12 w-12 rounded-full bg-light-blue flex items-center justify-center mb-6 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-leaf-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 text-center mb-4">Craft Cider</h3>
                <p className="text-gray-600 text-center mb-6">
                  Our artisanal ciders are crafted from heritage apple varieties and infused with honey from our own apiary, creating unique flavor profiles you won't find anywhere else.
                </p>
                <div className="text-center">
                  <Link href="/products" className="text-leaf-green font-medium hover:text-green-700 transition-colors">
                    View Our Products →
                  </Link>
                </div>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-card-header"></div>
              <div className="p-8">
                <div className="h-12 w-12 rounded-full bg-light-blue flex items-center justify-center mb-6 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-leaf-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 text-center mb-4">Farm Stays</h3>
                <p className="text-gray-600 text-center mb-6">
                  Experience the tranquility of orchard life with a stay in our renovated farmhouse or cozy barn loft. Wake up to stunning views and farm-fresh breakfasts.
                </p>
                <div className="text-center">
                  <Link href="/stay" className="text-leaf-green font-medium hover:text-green-700 transition-colors">
                    Book Your Stay →
                  </Link>
                </div>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-card-header"></div>
              <div className="p-8">
                <div className="h-12 w-12 rounded-full bg-light-blue flex items-center justify-center mb-6 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-leaf-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 text-center mb-4">Farm Tours</h3>
                <p className="text-gray-600 text-center mb-6">
                  Join us for guided tours of our orchard, cider production facility, and apiary. Learn about sustainable farming practices and the art of cider-making.
                </p>
                <div className="text-center">
                  <Link href="/explore" className="text-leaf-green font-medium hover:text-green-700 transition-colors">
                    Explore the Farm →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[300px] md:h-[400px]">
              <div className="absolute inset-y-0 -left-6 w-6 bg-apple-red"></div>
              <OptimizedImage
                src="/images/cider.jpg"
                alt="Our cider production"
                fill
                className="object-cover accent-box"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Our Products</h2>
              <p className="text-lg text-gray-600 mb-6">
                From our signature hard ciders to sweet apple cider, honey, and specialty preserves, every product we create reflects our commitment to quality and sustainability.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3 text-gray-600">
                  <span className="h-5 w-5 rounded-full bg-leaf-green flex-shrink-0"></span>
                  <span>Heritage Apple Hard Ciders</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-600">
                  <span className="h-5 w-5 rounded-full bg-leaf-green flex-shrink-0"></span>
                  <span>Fresh-Pressed Sweet Cider</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-600">
                  <span className="h-5 w-5 rounded-full bg-leaf-green flex-shrink-0"></span>
                  <span>Raw and Infused Honey</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-600">
                  <span className="h-5 w-5 rounded-full bg-leaf-green flex-shrink-0"></span>
                  <span>Apple Cider Vinegar</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-600">
                  <span className="h-5 w-5 rounded-full bg-leaf-green flex-shrink-0"></span>
                  <span>Seasonal Fruit Preserves</span>
                </li>
              </ul>
              <Link href="/products" className="inline-block text-leaf-green font-semibold hover:text-green-700 transition-colors">
                See Our Products <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <OptimizedImage
            src="/images/Cider Tree.jpg"
            alt="Apple orchard background"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Visit Root Logic</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Come experience the beauty and bounty of our sustainable orchard. Taste our craft ciders, stroll through our apple trees, and connect with the land.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link href="/contact" className="btn-primary">
                Plan Your Visit
              </Link>
              <Link href="/business-plan" className="inline-block px-6 py-3 bg-white border-2 border-leaf-green text-leaf-green font-semibold rounded-lg transition-colors duration-200 hover:bg-gray-50">
                Business Plan
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
} 