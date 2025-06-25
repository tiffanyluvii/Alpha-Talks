import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { FileText } from "lucide-react"

export default function TranslationPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4">
        <div className="text-gray-400 text-sm">Translation Page</div>
        <div className="flex items-center gap-6">
          <Link href="/" className="text-gray-600 hover:text-orange-500">
            Home
          </Link>
          <Link href="/rating" className="text-gray-600 hover:text-orange-500">
            Rating
          </Link>
          <Link href="/translation" className="text-white bg-orange-500 px-4 py-2 rounded-full font-medium">
            Translation
          </Link>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full">Get Started</Button>
        </div>
      </nav>

      {/* Content */}
      <div className="container mx-auto px-6 py-8">
        <div className="space-y-8">
          {/* Header */}
          <div className="text-center">
            <p className="text-orange-500 text-lg">
              Translate your marketing content to align with the language and tone of a specific generation.
            </p>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4">
            <Select>
              <SelectTrigger className="w-48 bg-gray-200 border-0 rounded-full">
                <SelectValue placeholder="Generation Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="gen-alpha">Gen Alpha</SelectItem>
                <SelectItem value="gen-z">Gen Z</SelectItem>
                <SelectItem value="millennial">Millennial</SelectItem>
                <SelectItem value="gen-x">Gen X</SelectItem>
              </SelectContent>
            </Select>
            <FileText className="w-6 h-6 text-cyan-400" />
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full text-lg">
              Translate
            </Button>
          </div>

          {/* Text Areas */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-200 rounded-lg p-6 h-80">
              <Textarea
                placeholder="..."
                className="w-full h-full border-0 bg-transparent resize-none text-gray-600 text-lg"
              />
            </div>
            <div className="bg-gray-200 rounded-lg p-6 h-80">
              <Textarea
                placeholder="..."
                className="w-full h-full border-0 bg-transparent resize-none text-gray-600 text-lg"
                readOnly
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
