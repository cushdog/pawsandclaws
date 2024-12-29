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
          <span><a href='tel:8158481201'>+1 (815) 848-1201</a></span>
        </div>
        <div className="flex items-center">
          <MapPin className="w-6 h-6 mr-2 text-blue-600" />
          <span><a href='https://www.google.com/maps?q=512+N+Locust+St,+Pontiac,+IL+61764'>512 N Locust St, Pontiac, IL 61764</a></span>
        </div>
      </div>
    </div>
  )
}

