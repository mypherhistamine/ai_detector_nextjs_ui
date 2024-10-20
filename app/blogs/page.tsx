'use client'
import { useState } from 'react'
import { ThumbsUp, ThumbsDown, Share2 } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "The Rise of AI in Content Creation",
    content: "As AI technology advances, its role in content creation is becoming increasingly prominent...",
    author: "Jane Doe",

    date: "2024-10-15",
  },
  {
    id: 2,
    title: "Detecting AI-Generated Text: Challenges and Solutions",
    content: "With the proliferation of AI writing tools, the ability to detect AI-generated content has become crucial...",
    author: "John Smith",
    date: "2024-10-18",
  },
]

export default function BlogsPage() {
  const [comments, setComments] = useState<{ [key: number]: string[] }>({})
  const [newComment, setNewComment] = useState<string>("")
  const [likes, setLikes] = useState<{ [key: number]: number }>({})
  const [dislikes, setDislikes] = useState<{ [key: number]: number }>({})

  const handleComment = (postId: number) => {
    if (newComment.trim()) {
      setComments(prev => ({ ...prev, [postId]: [...(prev[postId] || []), newComment] }))
      setNewComment("")
    }
  }

  const handleLike = (postId: number) => {
    setLikes(prev => ({ ...prev, [postId]: (prev[postId] || 0) + 1 }))
  }

  const handleDislike = (postId: number) => {
    setDislikes(prev => ({ ...prev, [postId]: (prev[postId] || 0) + 1 }))
  }

  const handleShare = (postId: number) => {
    // Implement share functionality here
    console.log(`Sharing post ${postId}`)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-900">AI Text Checker Blog</h1>
      <div className="space-y-8">
        {blogPosts.map(post => (
          <div key={post.id} className="bg-white shadow rounded-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2 text-gray-900">{post.title}</h2>
              <p className="text-sm text-gray-500 mb-4">By {post.author} on {post.date}</p>
              <p className="text-gray-600 mb-4">{post.content}</p>
              <div className="flex space-x-4 mb-4">
                <button
                  className="flex items-center space-x-1 text-gray-600 hover:text-blue-500"
                  onClick={() => handleLike(post.id)}
                >
                  <ThumbsUp className="w-5 h-5" />
                  <span>{likes[post.id] || 0}</span>
                </button>
                <button
                  className="flex items-center space-x-1 text-gray-600 hover:text-red-500"
                  onClick={() => handleDislike(post.id)}
                >
                  <ThumbsDown className="w-5 h-5" />
                  <span>{dislikes[post.id] || 0}</span>
                </button>
                <button
                  className="flex items-center space-x-1 text-gray-600 hover:text-green-500"
                  onClick={() => handleShare(post.id)}
                >
                  <Share2 className="w-5 h-5" />
                  <span>Share</span>
                </button>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-gray-900">Comments</h3>
                {comments[post.id]?.map((comment, index) => (
                  <p key={index} className="text-sm text-gray-600 bg-gray-100 p-2 rounded">{comment}</p>
                ))}
                <div className="flex space-x-2">
                  <input
                    type="text"
                    placeholder="Add a comment..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    className="flex-grow px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <button
                    onClick={() => handleComment(post.id)}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    Post
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
