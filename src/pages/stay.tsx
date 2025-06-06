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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Long-Term Farm Living</h1>
            <p className="text-xl md:text-2xl">Make Colonial Cidery your home</p>
          </div>
        </div>
      </section>

      {/* Accommodations Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-16">Long-Term Rental Opportunities</h2>

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
              <h3 className="text-3xl font-bold text-gray-900 mb-6">The Heritage Farmhouse</h3>
              <p className="text-lg text-gray-600 mb-6">
                Live in our beautifully restored 19th-century farmhouse, offering modern amenities while preserving its historic charm. With 3 bedrooms and 2 bathrooms, it's perfect for individuals, couples, or families seeking a peaceful rural lifestyle surrounded by heritage apple orchards.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                This long-term rental includes a fully equipped kitchen, spacious living areas, and a private porch with peaceful rural views. Tenants enjoy full access to our 18-acre heritage orchard for walks, picnics, and experiencing farm life—the perfect home base for those who value sustainable living and rural tranquility.
              </p>
              <ul className="list-disc pl-6 mb-6 text-lg text-gray-600">
                <li className="mb-2">3 bedrooms, 2 full bathrooms</li>
                <li className="mb-2">Fully equipped modern kitchen</li>
                <li className="mb-2">Wood-burning fireplace</li>
                <li className="mb-2">Private porch with rural views</li>
                <li className="mb-2">Laundry facilities included</li>
                <li>Minimum 6-month lease terms</li>
              </ul>
              <div className="mt-8">
                <Link href="/contact" className="btn-primary">
                  Inquire About Availability
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Tenant Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-12">Life at Colonial Cidery</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Farm Access</h3>
              <p className="text-gray-600">
                Enjoy full access to our 50-acre property with walking paths through the heritage orchard, wildflower meadows, and peaceful woodland areas. Experience the changing seasons in a beautiful rural setting.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Farm-Fresh Living</h3>
              <p className="text-gray-600">
                Long-term tenants receive seasonal access to fresh produce from our gardens, eggs from our free-range chickens, honey from our apiaries, and discounts on our heritage ciders and farm products.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Rural Community</h3>
              <p className="text-gray-600">
                Become part of our sustainable farming community. Participate in seasonal activities, learn about heritage apple cultivation, and enjoy the peace and tranquility of rural New Jersey living.
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
                  <span className="font-medium">Mountain Creek</span> - Just a 25-minute drive for year-round mountain activities, including skiing, snowboarding, and mountain biking.
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
                  <span className="font-medium">Warwick Valley Winery & Distillery</span> - Award-winning wines and spirits just 20 minutes away.
                </li>
                <li className="mb-2">
                  <span className="font-medium">Farmers Markets</span> - Several local farmers markets offering fresh produce, artisanal foods, and crafts.
                </li>
                <li className="mb-2">
                  <span className="font-medium">Port Jervis & Delaware River</span> - Historic downtown Port Jervis and scenic Delaware River access, perfect for boating, fishing, and riverside recreation, just 20 minutes away.
                </li>
                <li>
                  <span className="font-medium">Craft Beverage Trail</span> - Colonial Cidery is part of the growing Hudson Valley craft beverage scene with several breweries, wineries, and distilleries nearby.
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 bg-gray-50 rounded-lg p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Your New Home Base</h3>
            <p className="text-lg text-gray-600 mb-6">
              Our heritage farmhouse offers the perfect home base for those seeking a rural lifestyle while remaining within reach of modern conveniences. Sussex County provides an ideal balance of natural beauty, outdoor recreation, and community amenities.
            </p>
            <p className="text-lg text-gray-600">
              Contact us to discuss lease terms, availability, and what makes Colonial Cidery the perfect place to call home. We're looking for tenants who appreciate sustainable living, rural tranquility, and being part of our farming community.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
} 