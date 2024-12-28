import { Mail, Phone, MapPin } from 'lucide-react'

export default function ContactInfo() {
  return (
    <div className="bg-gray-100 p-6 rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
      <p className="mb-6">Feel free to reach out to us using the contact information below:</p>
      <div className="space-y-4">
        <div className="flex items-center">
          <Mail className="w-6 h-6 mr-2 text-blue-600" />
          <span>contact@example.com</span>
        </div>
        <div className="flex items-center">
          <Phone className="w-6 h-6 mr-2 text-blue-600" />
          <span>+1 (555) 123-4567</span>
        </div>
        <div className="flex items-center">
          <MapPin className="w-6 h-6 mr-2 text-blue-600" />
          <span>123 Business St, City, State 12345</span>
        </div>
      </div>
    </div>
  )
}

