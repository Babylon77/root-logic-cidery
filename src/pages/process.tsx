import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/Layout'

export default function Process() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh]">
        <Image
          src="/images/Cider Making Process.webp"
          alt="Our cider production facility"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Process</h1>
            <p className="text-xl md:text-2xl">From Orchard to Bottle</p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-16">The Cider-Making Process</h2>

          {/* Step 1: Harvesting */}
          <div className="mb-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[300px] md:h-[400px]">
              <Image
                src="/images/Cider Orchard.jpg"
                alt="Apple harvesting"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">1. Harvesting</h3>
              <p className="text-lg text-gray-600 mb-6">
                We carefully select and harvest our apples when they reach peak ripeness. Using a combination of traditional hand-picking methods and our state-of-the-art apple harvester, we gather each variety at its optimal time.
              </p>
              <p className="text-lg text-gray-600">
                Our heritage orchard includes several apple varieties specifically chosen for their complex flavor profiles, providing the perfect foundation for our artisanal ciders.
              </p>
              <div className="mt-6">
                <Link href="https://www.youtube.com/watch?v=MlSviB-g8v4" className="btn-primary" target="_blank" rel="noopener noreferrer">
                  Watch Our Harvesting Process
                </Link>
              </div>
            </div>
          </div>

          {/* Step 2: Pressing */}
          <div className="mb-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-1 md:order-2 relative h-[300px] md:h-[400px]">
              <Image
                src="/images/apple press.jpg"
                alt="Our apple press"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="order-2 md:order-1">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">2. Pressing</h3>
              <p className="text-lg text-gray-600 mb-6">
                After washing and sorting, our apples are pressed using our modern belt press. This efficient yet gentle method extracts the juice while preserving the essential flavors and aromas that make our cider exceptional.
              </p>
              <p className="text-lg text-gray-600">
                Our press can process up to two tons of apples per hour, delivering fresh juice directly to our fermentation tanks with minimal oxidation.
              </p>
              <div className="mt-6">
                <Link href="/explore" className="btn-primary">
                  Learn About Our Equipment
                </Link>
              </div>
            </div>
          </div>

          {/* Step 3: Fermentation */}
          <div className="mb-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[300px] md:h-[400px]">
              <Image
                src="/images/fermentation.jpg"
                alt="Fermentation tanks"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">3. Fermentation</h3>
              <p className="text-lg text-gray-600 mb-6">
                The magic happens in our temperature-controlled fermentation tanks, where we combine our fresh-pressed apple juice with specially selected yeasts and honey from our apiary. This blend creates a unique flavor profile that sets our cider apart.
              </p>
              <p className="text-lg text-gray-600">
                We monitor each batch carefully throughout the fermentation process, which typically takes 2-4 weeks depending on the style of cider we're creating.
              </p>
            </div>
          </div>

          {/* Step 4: Aging & Blending */}
          <div className="mb-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-1 md:order-2 relative h-[300px] md:h-[400px]">
              <Image
                src="/images/Bourbon_Aging_Barrel_1600x.jpg"
                alt="Aging and blending"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="order-2 md:order-1">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">4. Aging & Blending</h3>
              <p className="text-lg text-gray-600 mb-6">
                After fermentation, our ciders are aged in a variety of vessels, including stainless steel tanks and oak barrels. This aging process allows the flavors to develop and mature, creating depth and complexity.
              </p>
              <p className="text-lg text-gray-600">
                Our master cider maker then creates carefully crafted blends from different batches, sometimes incorporating our specialty fruits like pears and berries for limited seasonal releases.
              </p>
            </div>
          </div>

          {/* Step 5: Canning */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[300px] md:h-[400px]">
              <Image
                src="/images/canning.jpg"
                alt="Canning line"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">5. Canning</h3>
              <p className="text-lg text-gray-600 mb-6">
                Our cider is packaged in our modern canning line, which preserves freshness and flavor while being more sustainable than traditional glass bottles. Each can is dated and labeled with information about the apple varieties and production process.
              </p>
              <p className="text-lg text-gray-600">
                We take pride in our environmentally conscious approach to packaging, using recycled materials and minimizing waste throughout the production process.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
} 