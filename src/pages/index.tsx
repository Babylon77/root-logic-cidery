import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Layout from '../components/Layout'
import OptimizedImage from '../components/OptimizedImage'

export default function Home() {
  const router = useRouter();

  // Handle GitHub Pages redirect from 404.html
  useEffect(() => {
    // Check if we have a redirect query parameter
    const { redirect } = router.query;
    if (redirect && typeof redirect === 'string') {
      // Strip leading and trailing slashes and redirect
      const path = redirect.replace(/^\/+|\/+$/g, '');
      if (path) {
        router.push('/' + path);
      }
    }
  }, [router]);

  return (
    <Layout 
      title="Colonial Cidery and Orchard - Heritage Apple Ciders"
      description="Premium heritage apple ciders made with Harrison and Virginia Hewes Crab apples. Organic, naturally fermented with no additives. Our signature Rose of ciders blends Harrison and Redfield apples."
    >
      {/* Hero Section */}
      <section className="relative h-[70vh] hero-overlay">
        <OptimizedImage
          src="/images/Apple Drone.jpg"
          alt="Aerial view of Colonial Cidery and Orchard"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-center text-white max-w-4xl px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">Colonial Cidery & Orchard</h1>
            <p className="text-xl md:text-2xl mb-8 drop-shadow-md">Heritage Apple Ciders & Traditional Farming</p>
            <Link href="/explore" className="btn-primary">
              Discover Our Heritage
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Our Heritage Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Welcome to Colonial Cidery and Orchard, where we revive America's cider heritage in the scenic hills of Wantage, New Jersey. Our heritage ciders feature Harrison and Virginia Hewes Crab apples as the foundation, expertly blended with other heritage varieties including our signature "Rose of Ciders" — a unique blend of Harrison and Redfield apples.
              </p>
              <p className="text-lg text-gray-600">
                Every bottle we craft is organic, naturally fermented with no additives, focusing on quality and heritage rather than mass production.
              </p>
              <div className="mt-8">
                <Link href="/our-story" className="inline-block text-leaf-green font-semibold hover:text-green-700 transition-colors">
                  Learn Our Heritage <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px]">
              <div className="absolute inset-y-0 -right-6 w-6 bg-leaf-green"></div>
              <OptimizedImage
                src="/images/Heritage Apples.jpg"
                alt="Heritage apples including Harrison and Virginia Hewes Crab"
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">Experience Colonial Heritage</h2>
          <p className="text-xl text-gray-500 text-center mb-12 max-w-3xl mx-auto">Discover our heritage apple orchard, traditional cider making, and historic farm experiences</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="feature-card">
              <div className="feature-card-header"></div>
              <div className="p-8">
                <div className="h-12 w-12 rounded-full bg-light-blue flex items-center justify-center mb-6 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-leaf-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 text-center mb-4">Heritage Ciders</h3>
                <p className="text-gray-600 text-center mb-6">
                  Our premium ciders feature Harrison and Virginia Hewes Crab apple bases, blended with heritage varieties. Our signature Rose of ciders combines Harrison and Redfield apples for a unique flavor profile.
                </p>
                <div className="text-center">
                  <Link href="/products" className="text-leaf-green font-medium hover:text-green-700 transition-colors">
                    View Our Ciders →
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
                <h3 className="text-xl font-bold text-gray-900 text-center mb-4">Historic Farm Stays</h3>
                <p className="text-gray-600 text-center mb-6">
                  Experience colonial farm life in our restored historic farmhouse. Wake up to heritage apple orchards and learn about traditional American cider making.
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
                <h3 className="text-xl font-bold text-gray-900 text-center mb-4">Heritage Tours</h3>
                <p className="text-gray-600 text-center mb-6">
                  Join us for educational tours of our heritage apple orchard and traditional cider production. Learn about Harrison, Virginia Hewes Crab, and other historic American apple varieties.
                </p>
                <div className="text-center">
                  <Link href="/explore" className="text-leaf-green font-medium hover:text-green-700 transition-colors">
                    Explore Our Heritage →
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
                alt="Premium heritage cider bottles"
                fill
                className="object-cover accent-box"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Our Premium Products</h2>
              <p className="text-lg text-gray-600 mb-6">
                Every product we create reflects our commitment to heritage apple varieties, organic farming, and traditional cider making. Our ciders are naturally fermented with no additives and priced competitively with fine wines.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3 text-gray-600">
                  <span className="h-5 w-5 rounded-full bg-leaf-green flex-shrink-0"></span>
                  <span>Heritage Apple Ciders (Harrison & Virginia Hewes Crab base)</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-600">
                  <span className="h-5 w-5 rounded-full bg-leaf-green flex-shrink-0"></span>
                  <span>Rose of Ciders (Harrison & Redfield blend)</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-600">
                  <span className="h-5 w-5 rounded-full bg-leaf-green flex-shrink-0"></span>
                  <span>500ml & 750ml Premium Bottles ($15-22)</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-600">
                  <span className="h-5 w-5 rounded-full bg-leaf-green flex-shrink-0"></span>
                  <span>Organic, Naturally Fermented, No Additives</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-600">
                  <span className="h-5 w-5 rounded-full bg-leaf-green flex-shrink-0"></span>
                  <span>Limited Release Heritage Varieties</span>
                </li>
              </ul>
              <Link href="/products" className="inline-block text-leaf-green font-semibold hover:text-green-700 transition-colors">
                See Our Ciders <span aria-hidden="true">→</span>
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
            alt="Heritage apple orchard background"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Visit Colonial Cidery & Orchard</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Come experience America's cider heritage in our historic orchard. Taste our premium heritage ciders, walk among Harrison and Virginia Hewes Crab apple trees, and discover traditional cider making.
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