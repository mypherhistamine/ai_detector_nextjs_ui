'use client'

export default function ContactPage() {
  const handleSubmit = (event: React.FormEvent) => {
    // event.preventDefault()
    // Implement form submission logic here
    console.log("Form submitted")
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-900">Contact Us</h1>
      <div className="max-w-md mx-auto bg-white shadow rounded-lg overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Get in Touch</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1 text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1 text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Your email"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1 text-gray-700">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
