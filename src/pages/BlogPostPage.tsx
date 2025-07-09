import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Tag, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import { useBlog } from '../contexts/BlogContext';

const BlogPostPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { posts } = useBlog();

  const post = posts.find(p => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <Link to="/blog" className="text-orange-500 hover:text-orange-600">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const relatedPosts = posts.filter(p => p.id !== post.id && p.category === post.category).slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link
            to="/blog"
            className="inline-flex items-center text-orange-500 hover:text-orange-600 mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
          
          <div className="mb-6">
            <span className="bg-orange-100 text-orange-800 text-sm font-medium px-3 py-1 rounded-full">
              {post.category}
            </span>
            {post.featured && (
              <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full ml-2">
                Featured
              </span>
            )}
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {post.title}
          </h1>
          
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4 text-gray-500" />
                <span className="text-gray-600">{post.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4 text-gray-500" />
                <span className="text-gray-600">{post.date}</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <Share2 className="w-4 h-4 text-gray-500" />
              <span className="text-gray-500 text-sm">Share:</span>
              <a href="#" className="text-blue-600 hover:text-blue-800">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="text-blue-400 hover:text-blue-600">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="text-blue-700 hover:text-blue-900">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          <div className="relative">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="prose prose-lg max-w-none">
                  {post.content.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="mb-6 text-gray-700 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
                
                {/* Tags */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <div className="flex items-center space-x-2 mb-4">
                    <Tag className="w-5 h-5 text-gray-500" />
                    <span className="text-gray-700 font-medium">Tags:</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, index) => (
                      <span key={index} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg p-6 sticky top-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">About the Author</h3>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold">
                      {post.author.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{post.author}</p>
                    <p className="text-gray-600 text-sm">Content Writer</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Passionate about technology and digital innovation, bringing you the latest insights and trends.
                </p>
                <Link
                  to="/contact"
                  className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors text-center block"
                >
                  Contact Author
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <div key={relatedPost.id} className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{relatedPost.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{relatedPost.excerpt}</p>
                    <Link
                      to={`/blog/${relatedPost.id}`}
                      className="text-orange-500 hover:text-orange-600 font-semibold inline-flex items-center"
                    >
                      Read More
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default BlogPostPage;