export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-900">About AI Text Checker</h1>
      <div className="max-w-3xl mx-auto space-y-8">
        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Our Mission</h2>
          <p className="text-gray-600">
            AI Text Checker aims to provide a reliable and user-friendly tool for detecting AI-generated content,
            helping users maintain authenticity in their writing and communications.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">Use Cases</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Content Verification</h3>
              <p className="text-gray-600">
                Verify the authenticity of articles, essays, and other written content to ensure originality.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Academic Integrity</h3>
              <p className="text-gray-600">
                Help educators identify potentially AI-generated submissions to maintain academic honesty.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Social Media Analysis</h3>
              <p className="text-gray-600">
                Analyze social media posts and comments to detect bot-generated content.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Content Moderation</h3>
              <p className="text-gray-600">
                Assist moderators in identifying and filtering out AI-generated spam or misleading information.
              </p>
            </div>
          </div>
        </section>
        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Our Team</h2>
          <div className="flex justify-center space-x-8">
            <div>
              <h3 className="text-xl font-medium text-gray-800">Rishabh Mishra</h3>
              <p className="text-gray-600">Developer</p>
            </div>
            <div>
              <h3 className="text-xl font-medium text-gray-800">Mayank Dwivedi</h3>
              <p className="text-gray-600">Data Scientist</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
