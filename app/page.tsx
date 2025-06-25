import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4">
        <div className="text-gray-400 text-sm">Home Page</div>
        <div className="flex items-center gap-6">
          <Link href="/" className="text-orange-500 font-medium">
            Home
          </Link>
          <Link href="/rating" className="text-gray-600 hover:text-orange-500">
            Rating
          </Link>
          <Link href="/translation" className="text-gray-600 hover:text-orange-500">
            Translation
          </Link>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full">Get Started</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-6xl font-bold text-orange-600 leading-tight">
                ALPHA
                <br />
                TALKS
              </h1>
              <p className="text-xl text-orange-500 font-medium">An innovative way to connect generations!</p>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed max-w-md">
              AlphaTalks analyzes your marketing content to show how much of it aligns with Gen Alpha's preferences, and
              even helps you adapt it for better impact.
            </p>

            <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-full text-lg">
              Learn More
            </Button>
          </div>

          {/* Right Illustration */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-lg">
              <svg viewBox="0 0 400 300" className="w-full h-auto">
                {/* Background elements */}
                <rect x="280" y="40" width="100" height="80" rx="12" fill="#E5F3FF" stroke="#3B82F6" strokeWidth="2" />
                <circle cx="300" cy="60" r="15" fill="#F59E0B" />
                <circle cx="320" cy="60" r="15" fill="#8B5CF6" />
                <circle cx="340" cy="60" r="15" fill="#3B82F6" />
                <rect x="285" y="85" width="30" height="4" rx="2" fill="#3B82F6" />
                <rect x="285" y="95" width="50" height="4" rx="2" fill="#3B82F6" />
                <rect x="285" y="105" width="40" height="4" rx="2" fill="#3B82F6" />

                {/* Chart bars */}
                <rect x="200" y="180" width="15" height="40" fill="#3B82F6" />
                <rect x="220" y="160" width="15" height="60" fill="#F59E0B" />
                <rect x="240" y="140" width="15" height="80" fill="#EF4444" />
                <rect x="260" y="200" width="15" height="20" fill="#10B981" />

                {/* People illustrations */}
                {/* Person 1 - Blue hair */}
                <circle cx="120" cy="80" r="25" fill="#FDE68A" />
                <path
                  d="M95 70 Q95 50 120 50 Q145 50 145 70 Q145 60 135 60 Q125 50 115 50 Q105 50 105 60 Q95 60 95 70"
                  fill="#3B82F6"
                />
                <circle cx="115" cy="75" r="2" fill="#000" />
                <circle cx="125" cy="75" r="2" fill="#000" />
                <path d="M115 85 Q120 90 125 85" stroke="#000" strokeWidth="1" fill="none" />
                <rect x="100" y="105" width="40" height="60" rx="20" fill="#EF4444" />
                <rect x="110" y="120" width="20" height="30" fill="#FDE68A" />

                {/* Person 2 - Red hair */}
                <circle cx="320" cy="180" r="25" fill="#FDE68A" />
                <path
                  d="M295 170 Q295 150 320 150 Q345 150 345 170 Q345 160 335 160 Q325 150 315 150 Q305 150 305 160 Q295 160 295 170"
                  fill="#EF4444"
                />
                <circle cx="315" cy="175" r="2" fill="#000" />
                <circle cx="325" cy="175" r="2" fill="#000" />
                <path d="M315 185 Q320 190 325 185" stroke="#000" strokeWidth="1" fill="none" />
                <rect x="300" y="205" width="40" height="60" rx="20" fill="#F59E0B" />
                <rect x="310" y="220" width="20" height="30" fill="#FDE68A" />

                {/* Person 3 - Dark skin */}
                <circle cx="200" cy="220" r="25" fill="#D97706" />
                <path
                  d="M175 210 Q175 190 200 190 Q225 190 225 210 Q225 200 215 200 Q205 190 195 190 Q185 190 185 200 Q175 200 175 210"
                  fill="#1F2937"
                />
                <circle cx="195" cy="215" r="2" fill="#000" />
                <circle cx="205" cy="215" r="2" fill="#000" />
                <path d="M195 225 Q200 230 205 225" stroke="#000" strokeWidth="1" fill="none" />
                <rect x="180" y="245" width="40" height="40" rx="20" fill="#3B82F6" />
                <rect x="190" y="255" width="20" height="20" fill="#D97706" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
