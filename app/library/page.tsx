const articles = [
  {
    id: 1,
    title: "Understanding AI Text Generation",
    author: "Dr. Emily Johnson",
    description: "An in-depth look at how AI models generate human-like text...",
    category: "AI Technology",
  },
  {
    id: 2,
    title: "The Ethics of AI in Writing",
    author: "Prof. Michael Lee",
    description: "Exploring the ethical implications of using AI-generated content...",
    category: "Ethics",
  },
  {
    id: 3,
    title: "AI Detection Techniques: A Comprehensive Guide",
    author: "Sarah Thompson, PhD",
    description: "A detailed exploration of various methods used to detect AI-generated text...",
    category: "AI Detection",
  },
  {
    id: 4,
    title: "The Future of Content Creation in the Age of AI",
    author: "Alex Rodriguez",
    description: "Predicting how AI will shape the landscape of content creation in the coming years...",
    category: "Future Trends",
  },
]

export default function LibraryPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-900">AI Text Checker Library</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map(article => (
          <div key={article.id} className="bg-white shadow rounded-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2 text-gray-900">{article.title}</h2>
              <p className="text-sm text-gray-500 mb-2">By {article.author}</p>
              <p className="text-sm text-gray-600 mb-4">{article.description}</p>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                {article.category}
              </span>
            </div>
            <div className="px-6 py-4 bg-gray-50">
              <button className="w-full px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                Read Article
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
