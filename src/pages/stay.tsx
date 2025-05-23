import OptimizedImage from '../components/OptimizedImage'
import Link from 'next/link'
import Layout from '../components/Layout'

export default function Stay() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh]">
        <OptimizedImage
          src="/images/farm ariel 5.webp"
          alt="Our historic farmhouse"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Stay With Us</h1>
            <p className="text-xl md:text-2xl">Experience farm life firsthand</p>
          </div>
        </div>
      </section>

      {/* Accommodations Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-16">Our Accommodations</h2>

          {/* Farmhouse */}
          <div className="mb-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px]">
              <OptimizedImage
                src="/images/farmhouse.webp"
                alt="Our historic farmhouse"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">The Farmhouse</h3>
              <p className="text-lg text-gray-600 mb-6">
                Stay in our beautifully restored 19th-century farmhouse, offering modern amenities while preserving its historic charm. With 3 bedrooms and 2 bathrooms, it's perfect for families or small groups wanting to experience farm life.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                The farmhouse features a fully equipped kitchen, spacious living area, and a private porch overlooking the orchard—perfect for enjoying your morning coffee or evening cider.
              </p>
              <ul className="list-disc pl-6 mb-6 text-lg text-gray-600">
                <li className="mb-2">3 bedrooms (sleeps up to 6 guests)</li>
                <li className="mb-2">2 full bathrooms</li>
                <li className="mb-2">Fully equipped kitchen</li>
                <li className="mb-2">Wood-burning fireplace</li>
                <li>Private orchard views</li>
              </ul>
              <div className="mt-8">
                <Link href="https://www.airbnb.com" className="btn-primary" target="_blank" rel="noopener noreferrer">
                  Book on Airbnb
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Complimentary Offerings */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-12">Guest Amenities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Walking Paths</h3>
              <p className="text-gray-600">
                Explore our property on self-guided walking paths that wind through the orchard, along scenic viewpoints, and through peaceful woodland areas. Perfect for morning strolls or evening walks.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Farm Fresh Offerings</h3>
              <p className="text-gray-600">
                Guests enjoy complimentary tastings of our artisanal cider, homemade jams, and seasonal fruits when available. Experience the true farm-to-table difference with products made right here on our property.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Cider Tastings</h3>
              <p className="text-gray-600">
                Sample our range of artisanal ciders while learning about the production process from orchard to glass. Each stay includes a complimentary tasting flight of our signature ciders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Local Attractions */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-12">Nearby Attractions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            <div>
              <div className="relative h-[250px] mb-6">
                <OptimizedImage
                  src="/images/orchard 2.webp"
                  alt="Mountain Creek Ski Resort"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Outdoor Recreation</h3>
              <ul className="list-disc pl-6 mb-6 text-lg text-gray-600">
                <li className="mb-2">
                  <span className="font-medium">Mountain Creek</span> - Just a short 15-minute drive for year-round mountain activities, including skiing, snowboarding, and mountain biking.
                </li>
                <li className="mb-2">
                  <span className="font-medium">High Point State Park</span> - Offering spectacular views, hiking trails, and swimming in season, only 10 minutes away.
                </li>
                <li className="mb-2">
                  <span className="font-medium">Multiple Golf Courses</span> - Several beautiful golf courses within 20 minutes, including Crystal Springs and Great Gorge.
                </li>
                <li>
                  <span className="font-medium">Mountain Biking Trails</span> - Access to some of New Jersey's best mountain biking at nearby Wawayanda State Park.
                </li>
              </ul>
            </div>
            <div>
              <div className="relative h-[250px] mb-6">
                <OptimizedImage
                  src="/images/barn.webp"
                  alt="Local attractions"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Local Experiences</h3>
              <ul className="list-disc pl-6 mb-6 text-lg text-gray-600">
                <li className="mb-2">
                  <span className="font-medium">Cherry Ridge Shooting Range</span> - Located directly across the street, perfect for sport shooting enthusiasts.
                </li>
                <li className="mb-2">
                  <span className="font-medium">Warwick Valley Winery & Distillery</span> - Award-winning wines and spirits just 15 minutes away.
                </li>
                <li className="mb-2">
                  <span className="font-medium">Farmers Markets</span> - Several local farmers markets offering fresh produce, artisanal foods, and crafts.
                </li>
                <li>
                  <span className="font-medium">Craft Beverage Trail</span> - Root Logic is part of the growing Hudson Valley craft beverage scene with several breweries, wineries, and distilleries nearby.
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 bg-gray-50 rounded-lg p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Plan Your Perfect Trip</h3>
            <p className="text-lg text-gray-600 mb-6">
              Our farmhouse offers the perfect base for exploring all that Sussex County and the surrounding area has to offer. Whether you're looking for outdoor adventure, culinary experiences, or just a peaceful retreat, you'll find it all within easy reach of Root Logic.
            </p>
            <p className="text-lg text-gray-600">
              Ask us for personalized recommendations based on your interests when you book your stay. We're happy to help you create an unforgettable farm experience.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
} 