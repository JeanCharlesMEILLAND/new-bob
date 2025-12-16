import Image from 'next/image'
import Link from 'next/link'
import Container from '@/components/ui/Container'

export default function MarketplaceEN() {
  return (
    <Container className="mt-16 relative">
      <div className="relative px-4 py-10 sm:px-6 md:px-10 sm:py-12 md:py-14 rounded-2xl sm:rounded-3xl bg-white shadow-lg">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Column */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Discover the<br />
              <span className="text-blue-500">BOB Marketplace</span>
            </h2>

            <p className="text-base md:text-lg text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
              The BOB Marketplace brings together item listings from the
              community: tools, books, games, equipment, and much more. Browse
              listings and easily find what's available around you.
            </p>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="https://apps.apple.com/app/bob-marketplace"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Image
                  src="/app-store.svg"
                  alt="Download on the App Store"
                  width={140}
                  height={48}
                  className="h-12 w-auto"
                />
              </Link>

              <Link
                href="https://play.google.com/store/apps/details?id=com.bob.marketplace"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Image
                  src="/play-store.svg"
                  alt="Get it on Google Play"
                  width={140}
                  height={48}
                  className="h-12 w-auto"
                />
              </Link>
            </div>
          </div>

          {/* Image Column */}
          <div className="relative">
            <div className="relative z-10">
              <Image
                src="/Frame 1000001359.png"
                alt="BOB Marketplace App Screenshots"
                width={600}
                height={500}
                className="w-full h-auto"
                priority
              />
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 -z-10 w-72 h-72 bg-blue-100 rounded-full filter blur-3xl opacity-50"></div>
            <div className="absolute bottom-0 left-0 -z-10 w-72 h-72 bg-purple-100 rounded-full filter blur-3xl opacity-50"></div>
          </div>
        </div>
      </div>
    </Container>
  )
}