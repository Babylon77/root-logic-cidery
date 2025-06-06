import Layout from '../components/Layout'
import OptimizedImage from '../components/OptimizedImage'
import Link from 'next/link'

export default function Products() {
  return (
    <Layout
      title="Heritage Apple Ciders - Colonial Cidery and Orchard"
      description="Explore our lineup of premium heritage apple ciders made from Harrison, Virginia Hewes Crab, and Redfield apples. Organic, naturally fermented, 500ml and 750ml bottles."
    >
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh]">
        <OptimizedImage
          src="/images/fermentation.jpg"
          alt="Traditional cider fermentation"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Heritage Ciders</h1>
            <p className="text-xl md:text-2xl">Premium Apple Ciders Crafted from America's Heritage Varieties</p>
          </div>
        </div>
      </section>

      {/* Logo and Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
                          <div className="relative h-[360px] w-[600px] mx-auto mb-8">
              <OptimizedImage
                                  src="/images/Colonial_Cider.png"
                alt="Colonial Cidery and Orchard Logo"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Colonial Cidery and Orchard revives America's cider heritage through traditional varieties and time-honored production methods. 
              Each bottle reflects our passion for authentic heritage apples, organic farming, and natural fermentation.
            </p>
          </div>
        </div>
      </section>

      {/* Product Lineup */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-16">Our Heritage Cider Lineup</h2>

          {/* Harrison Heritage */}
          <div className="mb-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[300px] md:h-[400px]">
              <OptimizedImage
                src="/images/cider.jpg"
                alt="Harrison Heritage Cider"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">Harrison Heritage</h3>
              <div className="w-20 h-1 bg-leaf-green mb-6"></div>
              <p className="text-lg text-gray-600 mb-6">
                Our flagship cider made from 100% Harrison apples, the legendary "King of American Cider Apples." 
                This heritage variety produces a complex, structured cider with remarkable depth and character.
              </p>
              <div className="bg-gray-100 p-6 rounded-lg mb-6">
                <h4 className="font-bold text-gray-800 mb-2">Tasting Notes</h4>
                <p className="text-gray-600">
                  Rich apple | Honey undertones | Balanced tannins | Long finish
                </p>
              </div>
              <div className="flex items-center space-x-6">
                <div>
                  <span className="block text-sm text-gray-500">ABV</span>
                  <span className="text-gray-800 font-medium">7.5%</span>
                </div>
                <div>
                  <span className="block text-sm text-gray-500">Format</span>
                  <span className="text-gray-800 font-medium">750ml Bottles</span>
                </div>
                <div>
                  <span className="block text-sm text-gray-500">Price</span>
                  <span className="text-gray-800 font-medium">$22</span>
                </div>
              </div>
            </div>
          </div>

          {/* Rose of Ciders */}
          <div className="mb-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-1 md:order-2 relative h-[300px] md:h-[400px]">
              <OptimizedImage
                src="/images/cider room 2.webp"
                alt="Rose of Ciders"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="order-2 md:order-1">
              <h3 className="text-3xl font-bold text-gray-900 mb-2">Rose of Ciders</h3>
              <div className="w-20 h-1 bg-leaf-green mb-6"></div>
              <p className="text-lg text-gray-600 mb-6">
                Our signature blend combining Harrison apples with red-fleshed Redfield apples creates a unique rosé-style cider. 
                The Redfield adds subtle color and bright acidity to Harrison's rich foundation.
              </p>
              <div className="bg-gray-100 p-6 rounded-lg mb-6">
                <h4 className="font-bold text-gray-800 mb-2">Tasting Notes</h4>
                <p className="text-gray-600">
                  Blush pink | Bright acidity | Red fruit | Elegant structure
                </p>
              </div>
              <div className="flex items-center space-x-6">
                <div>
                  <span className="block text-sm text-gray-500">ABV</span>
                  <span className="text-gray-800 font-medium">6.8%</span>
                </div>
                <div>
                  <span className="block text-sm text-gray-500">Format</span>
                  <span className="text-gray-800 font-medium">500ml Bottles</span>
                </div>
                <div>
                  <span className="block text-sm text-gray-500">Price</span>
                  <span className="text-gray-800 font-medium">$18</span>
                </div>
              </div>
            </div>
          </div>

          {/* Virginia Hewes Crab */}
          <div className="mb-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[300px] md:h-[400px]">
              <OptimizedImage
                src="/images/Heritage Apples.jpg"
                alt="Virginia Hewes Crab Cider"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">Virginia Hewes Crab</h3>
              <div className="w-20 h-1 bg-leaf-green mb-6"></div>
              <p className="text-lg text-gray-600 mb-6">
                Made from the historic Virginia Hewes Crab apple, favored by Thomas Jefferson and colonial cider makers. 
                This small, intensely flavored apple produces a concentrated cider with exceptional character.
              </p>
              <div className="bg-gray-100 p-6 rounded-lg mb-6">
                <h4 className="font-bold text-gray-800 mb-2">Tasting Notes</h4>
                <p className="text-gray-600">
                  Intense apple | Floral notes | Crisp acidity | Historic authenticity
                </p>
              </div>
              <div className="flex items-center space-x-6">
                <div>
                  <span className="block text-sm text-gray-500">ABV</span>
                  <span className="text-gray-800 font-medium">7.2%</span>
                </div>
                <div>
                  <span className="block text-sm text-gray-500">Format</span>
                  <span className="text-gray-800 font-medium">500ml Bottles</span>
                </div>
                <div>
                  <span className="block text-sm text-gray-500">Price</span>
                  <span className="text-gray-800 font-medium">$20</span>
                </div>
              </div>
            </div>
          </div>

          {/* Colonial Blend */}
          <div className="mb-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-1 md:order-2 relative h-[300px] md:h-[400px]">
              <OptimizedImage
                src="/images/apple press.jpg"
                alt="Colonial Blend Cider"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="order-2 md:order-1">
              <h3 className="text-3xl font-bold text-gray-900 mb-2">Colonial Blend</h3>
              <div className="w-20 h-1 bg-leaf-green mb-6"></div>
              <p className="text-lg text-gray-600 mb-6">
                Our accessible entry point combining Harrison and Virginia Hewes Crab with complementary heritage varieties. 
                This balanced blend showcases the best of American cider tradition in an approachable format.
              </p>
              <div className="bg-gray-100 p-6 rounded-lg mb-6">
                <h4 className="font-bold text-gray-800 mb-2">Tasting Notes</h4>
                <p className="text-gray-600">
                  Balanced sweetness | Traditional character | Smooth finish | Heritage charm
                </p>
              </div>
              <div className="flex items-center space-x-6">
                <div>
                  <span className="block text-sm text-gray-500">ABV</span>
                  <span className="text-gray-800 font-medium">6.5%</span>
                </div>
                <div>
                  <span className="block text-sm text-gray-500">Format</span>
                  <span className="text-gray-800 font-medium">750ml Bottles</span>
                </div>
                <div>
                  <span className="block text-sm text-gray-500">Price</span>
                  <span className="text-gray-800 font-medium">$18</span>
                </div>
              </div>
            </div>
          </div>

          {/* Harvest Reserve */}
          <div className="mb-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[300px] md:h-[400px]">
              <OptimizedImage
                src="/images/Bourbon_Aging_Barrel_1600x.jpg"
                alt="Harvest Reserve Cider"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">Harvest Reserve</h3>
              <div className="w-20 h-1 bg-leaf-green mb-6"></div>
              <p className="text-lg text-gray-600 mb-6">
                Our limited annual release features the best fruit from our heritage orchard, fermented with wild yeasts and aged in neutral oak. 
                Each vintage captures the unique character of that year's harvest.
              </p>
              <div className="bg-gray-100 p-6 rounded-lg mb-6">
                <h4 className="font-bold text-gray-800 mb-2">Tasting Notes</h4>
                <p className="text-gray-600">
                  Complex fruit | Oak influence | Wild fermentation character | Vintage expression
                </p>
              </div>
              <div className="flex items-center space-x-6">
                <div>
                  <span className="block text-sm text-gray-500">ABV</span>
                  <span className="text-gray-800 font-medium">8.0%</span>
                </div>
                <div>
                  <span className="block text-sm text-gray-500">Format</span>
                  <span className="text-gray-800 font-medium">500ml Bottles | Limited</span>
                </div>
                <div>
                  <span className="block text-sm text-gray-500">Price</span>
                  <span className="text-gray-800 font-medium">$22</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Production Philosophy */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Our Production Philosophy</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-gray-600 mb-6">
                Every bottle of Colonial Cidery cider is organic, naturally fermented with no additives, and carefully crafted 
                to honor both the heritage of American cider making and the unique character of our historic apple varieties.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="h-16 w-16 bg-leaf-green rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Heritage Varieties</h3>
              <p className="text-gray-600">
                We focus exclusively on authentic American heritage apple varieties, particularly Harrison and Virginia Hewes Crab, 
                that have defined exceptional cider for centuries.
              </p>
            </div>
            
            <div className="text-center">
              <div className="h-16 w-16 bg-leaf-green rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Organic & Natural</h3>
              <p className="text-gray-600">
                All our ciders are certified organic and naturally fermented with wild yeasts. 
                We use no additives, sulfites, or artificial ingredients.
              </p>
            </div>
            
            <div className="text-center">
              <div className="h-16 w-16 bg-leaf-green rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Premium Presentation</h3>
              <p className="text-gray-600">
                Our ciders are exclusively available in 500ml and 750ml bottles, priced competitively with fine wines at $15-22 per bottle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Experience Our Heritage Ciders</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Visit our tasting room to experience the authentic flavors of America's cider heritage. 
            Each bottle tells the story of centuries-old apple varieties and traditional cider making.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link href="/contact" className="btn-primary">
              Visit Our Tasting Room
            </Link>
            <Link href="/our-story" className="inline-block px-6 py-3 bg-white border-2 border-leaf-green text-leaf-green font-semibold rounded-lg transition-colors duration-200 hover:bg-gray-50">
              Our Heritage Story
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
} 