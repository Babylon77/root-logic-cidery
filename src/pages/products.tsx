import Layout from '../components/Layout'
import OptimizedImage from '../components/OptimizedImage'

export default function Products() {
  return (
    <Layout
      title="Our Cider Products - Root Logic Cidery"
      description="Explore our lineup of craft hard ciders made from heritage apple varieties."
    >
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh]">
        <OptimizedImage
          src="/images/fermentation.jpg"
          alt="Our cider production"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
            <p className="text-xl md:text-2xl">Artisanal Ciders Crafted with Precision</p>
          </div>
        </div>
      </section>

      {/* Logo and Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="relative h-[180px] w-[300px] mx-auto mb-8">
              <OptimizedImage
                src="/images/Root Logic 1.png"
                alt="Root Logic Logo"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Root Logic Cidery brings together craft, nature, and engineering principles to create unique, thoughtful ciders. 
              Each product in our lineup reflects our passion for precision, sustainability, and the rich heritage of our orchard.
            </p>
          </div>
        </div>
      </section>

      {/* Product Lineup */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-16">Our Cider Lineup</h2>

          {/* Axon Dry */}
          <div className="mb-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[300px] md:h-[400px]">
              <OptimizedImage
                src="/images/cider.jpg"
                alt="Axon Dry Cider"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">Axon Dry</h3>
              <div className="w-20 h-1 bg-leaf-green mb-6"></div>
              <p className="text-lg text-gray-600 mb-6">
                A bone-dry cider with sharp acidity and minerality, engineered for a clean finish. Our most precise offering, 
                Axon Dry represents the purest expression of our heritage apple varieties.
              </p>
              <div className="bg-gray-100 p-6 rounded-lg mb-6">
                <h4 className="font-bold text-gray-800 mb-2">Tasting Notes</h4>
                <p className="text-gray-600">
                  Crisp green apple | Lemon zest | Mineral | Clean finish
                </p>
              </div>
              <div className="flex items-center space-x-6">
                <div>
                  <span className="block text-sm text-gray-500">ABV</span>
                  <span className="text-gray-800 font-medium">7.2%</span>
                </div>
                <div>
                  <span className="block text-sm text-gray-500">Format</span>
                  <span className="text-gray-800 font-medium">500ml | Draft</span>
                </div>
              </div>
            </div>
          </div>

          {/* Branch Circuit */}
          <div className="mb-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-1 md:order-2 relative h-[300px] md:h-[400px]">
              <OptimizedImage
                src="/images/cider room 2.webp"
                alt="Branch Circuit Cider"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="order-2 md:order-1">
              <h3 className="text-3xl font-bold text-gray-900 mb-2">Branch Circuit</h3>
              <div className="w-20 h-1 bg-leaf-green mb-6"></div>
              <p className="text-lg text-gray-600 mb-6">
                Semi-dry with bright acidity, citrus and floral notes. Branch Circuit is our most approachable cider, 
                designed to be both accessible and precise, bridging the gap between tradition and innovation.
              </p>
              <div className="bg-gray-100 p-6 rounded-lg mb-6">
                <h4 className="font-bold text-gray-800 mb-2">Tasting Notes</h4>
                <p className="text-gray-600">
                  Honeysuckle | Citrus blossom | Ripe pear | Gentle sweetness
                </p>
              </div>
              <div className="flex items-center space-x-6">
                <div>
                  <span className="block text-sm text-gray-500">ABV</span>
                  <span className="text-gray-800 font-medium">6.5%</span>
                </div>
                <div>
                  <span className="block text-sm text-gray-500">Format</span>
                  <span className="text-gray-800 font-medium">500ml | Draft</span>
                </div>
              </div>
            </div>
          </div>

          {/* Ghost Root */}
          <div className="mb-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[300px] md:h-[400px]">
              <OptimizedImage
                src="/images/Bourbon_Aging_Barrel_1600x.jpg"
                alt="Ghost Root Cider"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">Ghost Root</h3>
              <div className="w-20 h-1 bg-leaf-green mb-6"></div>
              <p className="text-lg text-gray-600 mb-6">
                Our barrel-aged offering with tannic complexity, subtle funk, and oak depth. Ghost Root spends months in bourbon 
                barrels, developing complexity and character that honors both cider traditions and modern craft sensibilities.
              </p>
              <div className="bg-gray-100 p-6 rounded-lg mb-6">
                <h4 className="font-bold text-gray-800 mb-2">Tasting Notes</h4>
                <p className="text-gray-600">
                  Vanilla | Caramel | Oak | Dried apple | Light bourbon
                </p>
              </div>
              <div className="flex items-center space-x-6">
                <div>
                  <span className="block text-sm text-gray-500">ABV</span>
                  <span className="text-gray-800 font-medium">8.4%</span>
                </div>
                <div>
                  <span className="block text-sm text-gray-500">Format</span>
                  <span className="text-gray-800 font-medium">500ml | Limited</span>
                </div>
              </div>
            </div>
          </div>

          {/* Code Press */}
          <div className="mb-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-1 md:order-2 relative h-[300px] md:h-[400px]">
              <OptimizedImage
                src="/images/apple press.jpg"
                alt="Code Press Cider"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="order-2 md:order-1">
              <h3 className="text-3xl font-bold text-gray-900 mb-2">Code Press</h3>
              <div className="w-20 h-1 bg-leaf-green mb-6"></div>
              <p className="text-lg text-gray-600 mb-6">
                A dry-hopped cider with botanical elements and slight haze. Code Press represents our most experimental approach, 
                blending cider traditions with modern craft beer techniques for a truly unique drinking experience.
              </p>
              <div className="bg-gray-100 p-6 rounded-lg mb-6">
                <h4 className="font-bold text-gray-800 mb-2">Tasting Notes</h4>
                <p className="text-gray-600">
                  Tropical fruit | Pine | Citrus hop | Subtle bitterness
                </p>
              </div>
              <div className="flex items-center space-x-6">
                <div>
                  <span className="block text-sm text-gray-500">ABV</span>
                  <span className="text-gray-800 font-medium">6.8%</span>
                </div>
                <div>
                  <span className="block text-sm text-gray-500">Format</span>
                  <span className="text-gray-800 font-medium">500ml | Draft</span>
                </div>
              </div>
            </div>
          </div>

          {/* Logic Loop */}
          <div className="mb-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[300px] md:h-[400px]">
              <OptimizedImage
                src="/images/Heritage Apples.jpg"
                alt="Logic Loop Cider"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">Logic Loop</h3>
              <div className="w-20 h-1 bg-leaf-green mb-6"></div>
              <p className="text-lg text-gray-600 mb-6">
                Our single-varietal cider changes annually, highlighting a specific heritage apple variety like Ashmead's Kernel 
                or Northern Spy. Each release allows us to showcase the unique characteristics of these remarkable apples.
              </p>
              <div className="bg-gray-100 p-6 rounded-lg mb-6">
                <h4 className="font-bold text-gray-800 mb-2">Tasting Notes</h4>
                <p className="text-gray-600">
                  Varies by apple variety | Pure expression | Distinctive character
                </p>
              </div>
              <div className="flex items-center space-x-6">
                <div>
                  <span className="block text-sm text-gray-500">ABV</span>
                  <span className="text-gray-800 font-medium">6.5-7.5%</span>
                </div>
                <div>
                  <span className="block text-sm text-gray-500">Format</span>
                  <span className="text-gray-800 font-medium">500ml | Annual Release</span>
                </div>
              </div>
            </div>
          </div>

          {/* System Fault */}
          <div className="mb-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-1 md:order-2 relative h-[300px] md:h-[400px]">
              <OptimizedImage
                src="/images/cider room 3.webp"
                alt="System Fault Cider"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="order-2 md:order-1">
              <h3 className="text-3xl font-bold text-gray-900 mb-2">System Fault</h3>
              <div className="w-20 h-1 bg-leaf-green mb-6"></div>
              <p className="text-lg text-gray-600 mb-6">
                A wild fermentation cider with unpredictable character. System Fault embraces the chaotic nature of wild yeasts and bacteria, 
                creating a complex, ever-evolving cider that defies precise definition. A limited release for the adventurous.
              </p>
              <div className="bg-gray-100 p-6 rounded-lg mb-6">
                <h4 className="font-bold text-gray-800 mb-2">Tasting Notes</h4>
                <p className="text-gray-600">
                  Funky | Earthy | Brett character | Bright acidity | Complex
                </p>
              </div>
              <div className="flex items-center space-x-6">
                <div>
                  <span className="block text-sm text-gray-500">ABV</span>
                  <span className="text-gray-800 font-medium">7.0%</span>
                </div>
                <div>
                  <span className="block text-sm text-gray-500">Format</span>
                  <span className="text-gray-800 font-medium">500ml | Limited</span>
                </div>
              </div>
            </div>
          </div>

          {/* Ground Truth */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[300px] md:h-[400px]">
              <OptimizedImage
                src="/images/Apple cider donuts.jpg"
                alt="Ground Truth Cider"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">Ground Truth</h3>
              <div className="w-20 h-1 bg-leaf-green mb-6"></div>
              <p className="text-lg text-gray-600 mb-6">
                Our flagship blend of heirloom varieties with balanced sweetness and acidity. Ground Truth represents the foundation 
                of our cider program—a balanced, approachable offering that honors the traditions of American cider making.
              </p>
              <div className="bg-gray-100 p-6 rounded-lg mb-6">
                <h4 className="font-bold text-gray-800 mb-2">Tasting Notes</h4>
                <p className="text-gray-600">
                  Ripe apple | Honey | Light tannin | Balanced sweetness
                </p>
              </div>
              <div className="flex items-center space-x-6">
                <div>
                  <span className="block text-sm text-gray-500">ABV</span>
                  <span className="text-gray-800 font-medium">6.0%</span>
                </div>
                <div>
                  <span className="block text-sm text-gray-500">Format</span>
                  <span className="text-gray-800 font-medium">500ml | Draft | Flagship</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-title text-center">Visit Our Cidery</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Join us for tastings, tours, and special releases at our orchard and production facility.
            Experience firsthand how we craft our unique ciders from tree to glass.
          </p>
          <div className="inline-block">
            <a href="/contact" className="btn-primary">
              Plan Your Visit
            </a>
          </div>
        </div>
      </section>
    </Layout>
  )
} 