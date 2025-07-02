'use client'
import { useState } from 'react'

interface QuickMessage {
  id: string
  text: string
  message: string
}

const quickMessages: QuickMessage[] = [
  {
    id: 'consultation',
    text: 'Legal Consultation',
    message: 'Hello Amrita! I need legal consultation regarding my case. Could we schedule a meeting?'
  },
  {
    id: 'collaboration',
    text: 'Academic Collaboration',
    message: 'Hi Amrita! I\'m interested in academic collaboration opportunities. Let\'s discuss potential projects.'
  },
  {
    id: 'services',
    text: 'Legal Services',
    message: 'Hello! I found your portfolio and I\'m interested in your legal services. Can you help me with my legal matter?'
  },
  {
    id: 'general',
    text: 'General Inquiry',
    message: 'Hi Amrita! I have some questions about your work and would like to connect with you.'
  }
]

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)

  const handleQuickMessage = (message: string) => {
    const phoneNumber = '9779849623548'
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
    window.open(whatsappUrl, '_blank')
    setIsOpen(false)
  }

  const handleCustomMessage = () => {
    const phoneNumber = '9779849623548'
    const whatsappUrl = `https://wa.me/${phoneNumber}`
    window.open(whatsappUrl, '_blank')
    setIsOpen(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Widget */}
      {isOpen && (
        <div className="absolute bottom-0 right-0 w-80 bg-white rounded-lg shadow-2xl border border-gray-200 overflow-hidden relative">
          {/* Close button - More visible */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-3 right-3 bg-red-500 hover:bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-200 z-30"
            title="Close chat"
          >
            ×
          </button>

          {/* Header */}
          <div className="bg-green-600 text-white p-4 pr-12">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-sm font-semibold">AG</span>
              </div>
              <div>
                <h3 className="font-semibold">Amrita Gautam</h3>
                <p className="text-xs opacity-90">Legal Professional</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="p-4 max-h-64 overflow-y-auto">
            <div className="bg-gray-100 rounded-lg p-3 mb-4">
              <p className="text-sm text-gray-700">
                👋 Hello! I'm Amrita Gautam. How can I help you today?
              </p>
            </div>

            <div className="space-y-2">
              <p className="text-xs text-gray-500 mb-2">Quick messages:</p>
              {quickMessages.map((msg) => (
                <button
                  key={msg.id}
                  onClick={() => handleQuickMessage(msg.message)}
                  className="w-full text-left p-3 bg-gray-50 hover:bg-green-50 rounded-lg transition-colors text-sm border border-gray-200 hover:border-green-200"
                >
                  {msg.text}
                </button>
              ))}
              
              <button
                onClick={handleCustomMessage}
                className="w-full text-left p-3 bg-green-50 hover:bg-green-100 rounded-lg transition-colors text-sm border border-green-200 text-green-700 font-medium"
              >
                💬 Write custom message
              </button>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-gray-50 p-3 text-center">
            <p className="text-xs text-gray-500">
              Powered by WhatsApp
            </p>
          </div>
        </div>
      )}

      {/* WhatsApp Button - Only show when widget is closed */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 group relative"
          title="Chat on WhatsApp"
        >
          <svg 
            className="w-8 h-8" 
            fill="currentColor" 
            viewBox="0 0 24 24"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
          </svg>
          
          {/* Notification badge */}
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
            <span className="text-xs text-white">1</span>
          </div>
          
          {/* Pulse animation */}
          <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-20"></div>
        </button>
      )}
    </div>
  )
}