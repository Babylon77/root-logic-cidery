import OptimizedImage from '../components/OptimizedImage'
import Layout from '../components/Layout'

export default function Explore() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh]">
        <OptimizedImage
          src="/images/Apple Drone.jpg"
          alt="Our beautiful garden"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Explore the Farm</h1>
            <p className="text-xl md:text-2xl">Discover the beauty of our sustainable orchard</p>
          </div>
        </div>
      </section>

      {/* Garden Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Our Garden</h2>
              <p className="text-lg text-gray-600 mb-6">
                At the heart of our property is our meticulously maintained organic garden. We use sustainable farming practices to cultivate a diverse range of plants that support our ecosystem and provide ingredients for our specialty ciders.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                From aromatic herbs to vibrant flowers and pollinator-friendly plants, our garden is designed to work in harmony with our orchard and apiary.
              </p>
              <ul className="list-disc pl-6 mb-6 text-lg text-gray-600">
                <li className="mb-2">Over 25 varieties of herbs and edible flowers</li>
                <li className="mb-2">Berry patches featuring raspberries, blackberries, and elderberries</li>
                <li className="mb-2">Seasonal vegetable garden for farm-to-table experiences</li>
                <li>Dedicated pollinator sections to support our bee population</li>
              </ul>
            </div>
            <div className="relative h-[400px]">
              <OptimizedImage
                src="/images/Honey-bee.jpg"
                alt="Our organic garden"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Barn Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative h-[400px]">
              <OptimizedImage
                src="/images/fermentation.jpg"
                alt="Our historic barn"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="section-title">The Barn</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our lovingly restored 19th-century barn serves as the heart of our cider production. With its original beams and stonework, it represents the perfect blend of historic charm and modern functionality.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                The ground floor houses our cider production facility, while the upper level has been transformed into a cozy loft apartment available for farm stays.
              </p>
              <ul className="list-disc pl-6 mb-6 text-lg text-gray-600">
                <li className="mb-2">State-of-the-art cider production facility</li>
                <li className="mb-2">Tasting room for guided cider samplings</li>
                <li className="mb-2">Historic preservation with modern amenities</li>
                <li>Versatile space for seasonal events and workshops</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Walking Trails */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-12">Walking Trails</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Orchard Path</h3>
              <p className="text-lg text-gray-600 mb-4">
                A scenic 1-mile loop through our apple orchard, offering beautiful views of the surrounding landscape and a chance to see our heritage apple varieties up close.
              </p>
              <div className="flex items-center mt-6">
                <div className="mr-4">
                  <span className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium">1 mile</span>
                </div>
                <div>
                  <span className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium">Easy</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Garden Walk</h3>
              <p className="text-lg text-gray-600 mb-4">
                A leisurely stroll through our garden areas, featuring educational plaques about our sustainable farming practices and the various plants that support our cider production.
              </p>
              <div className="flex items-center mt-6">
                <div className="mr-4">
                  <span className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium">0.5 mile</span>
                </div>
                <div>
                  <span className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium">Very Easy</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-12">Farm Map</h2>
          <div className="relative h-[400px] md:h-[500px] w-full">
            <OptimizedImage
              src="/images/ariel 3.webp"
              alt="Aerial view of our farm"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </section>
    </Layout>
  )
} 