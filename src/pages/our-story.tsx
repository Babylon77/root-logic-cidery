import OptimizedImage from '../components/OptimizedImage'
import Layout from '../components/Layout'

export default function OurStory() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh]">
        <OptimizedImage
          src="/images/Franklin Apple.jpeg"
          alt="Our historic farmhouse"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Story</h1>
            <p className="text-xl md:text-2xl">Beginning Our Journey in Sustainable Farming</p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Our Vision</h2>
              <p className="text-lg text-gray-600 mb-6">
                The story of Root Logic begins in 2025, when Jason and Laney will purchase this established 12+-acre orchard in Wantage, New Jersey. We're thrilled to become the new stewards of this special property that already boasts over 1000 apple trees, with 200+ heritage varieties perfectly suited to craft cider production.
              </p>
              <p className="text-lg text-gray-600">
                For our family, this farm represents a new chapter—a place where our children Caius, Macklin, and Elliana can connect with the land while we build on the solid foundation established by the previous owners. Together, we'll continue the legacy of sustainable farming while bringing our own unique vision to this thriving orchard.
              </p>
            </div>
            <div className="relative h-[400px]">
              <OptimizedImage
                src="/images/Trees.webp"
                alt="Our apple orchard"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative h-[400px]">
              <OptimizedImage
                src="/images/Apple cider donuts.jpg"
                alt="Our cider production"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="section-title">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                At Root Logic, our mission will be to honor the land's heritage while bringing fresh ideas to sustainable agriculture. We believe in working with nature rather than against it, which is why we're committed to maintaining the organic growing methods and biodiversity throughout the property.
              </p>
              <p className="text-lg text-gray-600">
                We'll take pride in producing exceptional artisanal ciders that reflect the unique terroir of our orchard, while sharing the joys of farm life with visitors through educational tours, tastings, and farm stays. Our goal is not just to make great products, but to create meaningful connections between people, food, and the land.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-green-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Sustainability</h3>
              <p className="text-gray-600">
                We're committed to environmental stewardship, preserving the existing organic farming methods while introducing new water conservation techniques and renewable energy to minimize our ecological footprint. Our packaging will be recyclable and we'll continuously seek ways to reduce waste.
              </p>
            </div>
            <div className="bg-green-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Quality</h3>
              <p className="text-gray-600">
                We will never compromise on quality. Learning from the established techniques while bringing our own knowledge to the apple varieties we cultivate and our fermentation process, every step will be carefully controlled to ensure that our ciders and other products meet the highest standards.
              </p>
            </div>
            <div className="bg-green-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Community</h3>
              <p className="text-gray-600">
                We believe that farms should be community hubs. That's why we'll host seasonal events, workshops, and tours that bring people together to learn, celebrate, and connect with the natural rhythms of the orchard throughout the year.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center">Meet Our Family</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="relative h-64 w-64 mx-auto rounded-full overflow-hidden mb-6">
                <OptimizedImage
                  src="/images/apple press.jpg"
                  alt="Jason - Future Owner & Orchard Manager"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Jason</h3>
              <p className="text-gray-600 mb-4">Future Owner & Orchard Manager</p>
              <p className="text-gray-600">
                With a passion for sustainable agriculture and cider making, Jason will oversee the orchard operations and looks forward to experimenting with new heritage apple varieties while respecting the existing cultivation techniques.
              </p>
            </div>
            <div className="text-center">
              <div className="relative h-64 w-64 mx-auto rounded-full overflow-hidden mb-6">
                <OptimizedImage
                  src="/images/Honey.webp"
                  alt="Laney - Future Cider Maker"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Laney</h3>
              <p className="text-gray-600 mb-4">Future Cider Maker & Co-owner</p>
              <p className="text-gray-600">
                Laney will bring her creative flair and scientific background to our cider production. She's excited to learn the established recipes while developing her own innovative blends to continue the orchard's tradition of quality.
              </p>
            </div>
            <div className="text-center">
              <div className="relative h-64 w-64 mx-auto rounded-full overflow-hidden mb-6">
                <OptimizedImage
                  src="/images/orchard 3.webp"
                  alt="The Children - Caius, Macklin, and Elliana"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Caius, Macklin & Elliana</h3>
              <p className="text-gray-600 mb-4">The Next Generation</p>
              <p className="text-gray-600">
                Our children will grow up connected to the land, learning the value of sustainable agriculture and hard work. They'll bring their unique perspectives and energy while becoming an integral part of this new family adventure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-16">Our Future Journey</h2>
          <div className="space-y-16">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              <div className="md:col-span-3">
                <div className="bg-green-800 text-white p-4 rounded-lg text-center">
                  <h3 className="text-2xl font-bold">2025</h3>
                </div>
              </div>
              <div className="md:col-span-9">
                <h4 className="text-xl font-bold text-gray-900 mb-2">The New Beginning</h4>
                <p className="text-gray-600">
                  Jason and Laney will purchase the established 25-acre orchard in Wantage, NJ, complete with 500+ apple trees and existing cider production facilities. We'll begin the transition while learning from the previous owners.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              <div className="md:col-span-3">
                <div className="bg-green-800 text-white p-4 rounded-lg text-center">
                  <h3 className="text-2xl font-bold">2026</h3>
                </div>
              </div>
              <div className="md:col-span-9">
                <h4 className="text-xl font-bold text-gray-900 mb-2">Brand Refinement</h4>
                <p className="text-gray-600">
                  We plan to refine the brand identity while respecting its heritage, update labeling, and begin expanding distribution networks while learning the rhythm of our first full growing season.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              <div className="md:col-span-3">
                <div className="bg-green-800 text-white p-4 rounded-lg text-center">
                  <h3 className="text-2xl font-bold">2027</h3>
                </div>
              </div>
              <div className="md:col-span-9">
                <h4 className="text-xl font-bold text-gray-900 mb-2">Educational Programs</h4>
                <p className="text-gray-600">
                  We'll launch expanded educational programs including orchard tours, cider-making workshops, and sustainability demonstrations, aiming to make the farm a community resource for learning.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              <div className="md:col-span-3">
                <div className="bg-green-800 text-white p-4 rounded-lg text-center">
                  <h3 className="text-2xl font-bold">2028</h3>
                </div>
              </div>
              <div className="md:col-span-9">
                <h4 className="text-xl font-bold text-gray-900 mb-2">Farmhouse Accommodations</h4>
                <p className="text-gray-600">
                  We plan to renovate additional spaces to expand our farm stay accommodations, creating more opportunities for visitors to experience the day-to-day rhythm of orchard life.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              <div className="md:col-span-3">
                <div className="bg-green-800 text-white p-4 rounded-lg text-center">
                  <h3 className="text-2xl font-bold">2029</h3>
                </div>
              </div>
              <div className="md:col-span-9">
                <h4 className="text-xl font-bold text-gray-900 mb-2">Renewable Energy</h4>
                <p className="text-gray-600">
                  We'll implement solar power and other renewable energy solutions to make our operation more sustainable, aiming to become a carbon-neutral farm over time.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              <div className="md:col-span-3">
                <div className="bg-green-800 text-white p-4 rounded-lg text-center">
                  <h3 className="text-2xl font-bold">2030</h3>
                </div>
              </div>
              <div className="md:col-span-9">
                <h4 className="text-xl font-bold text-gray-900 mb-2">Looking Forward</h4>
                <p className="text-gray-600">
                  Our vision is to have established Root Logic as a beloved destination that honors its heritage while bringing innovative approaches to sustainable agriculture, artisanal cider production, and community engagement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
} 