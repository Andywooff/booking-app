import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image: string;
  tags: string[];
  featured: boolean;
}

interface BlogContextType {
  posts: BlogPost[];
  addPost: (post: Omit<BlogPost, 'id'>) => void;
  updatePost: (id: string, post: Partial<BlogPost>) => void;
  deletePost: (id: string) => void;
}

const BlogContext = createContext<BlogContextType | undefined>(undefined);

const initialPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of Web Development: Trends to Watch in 2024',
    excerpt: 'Discover the latest trends shaping the future of web development, from AI integration to serverless architecture.',
    content: `The web development landscape is constantly evolving, and 2024 promises to bring exciting new trends that will shape how we build and interact with websites. As we look ahead, several key trends are emerging that every developer and business owner should be aware of.

Artificial Intelligence Integration
AI is no longer just a buzzword – it's becoming an integral part of web development. From chatbots that provide instant customer support to personalized content recommendations, AI is enhancing user experiences in unprecedented ways. Machine learning algorithms are also helping developers optimize performance and identify potential issues before they impact users.

Serverless Architecture
Serverless computing is revolutionizing how we deploy and scale applications. By eliminating the need to manage servers, developers can focus on writing code while cloud providers handle the infrastructure. This approach not only reduces costs but also improves scalability and reliability.

Progressive Web Apps (PWAs)
PWAs continue to gain traction as they offer the best of both web and mobile applications. They provide offline functionality, push notifications, and app-like experiences while being accessible through web browsers. This technology is particularly valuable for businesses looking to reach users across all devices without developing separate native applications.

The Rise of WebAssembly
WebAssembly is opening new possibilities for web applications by allowing developers to run code written in languages like C++, Rust, and Go directly in the browser. This technology is enabling web applications to achieve near-native performance for computationally intensive tasks.

As we move forward, these trends will continue to shape the digital landscape, creating new opportunities for businesses to connect with their audiences in meaningful ways.`,
    author: 'Sarah Johnson',
    date: '2024-01-15',
    category: 'Technology',
    image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Web Development', 'AI', 'Serverless', 'PWA'],
    featured: true,
  },
  {
    id: '2',
    title: 'Building Better User Experiences: A Designer\'s Guide',
    excerpt: 'Learn the essential principles of UX design and how to create interfaces that users love.',
    content: `User experience design is at the heart of successful digital products. Creating interfaces that are not only beautiful but also intuitive and functional requires a deep understanding of user behavior and design principles.

Understanding Your Users
The foundation of great UX design is understanding your users. This involves conducting user research, creating personas, and mapping user journeys. By understanding what your users need, want, and expect, you can design experiences that truly resonate with them.

The Importance of Usability
Usability is about making your product easy to use. This means designing clear navigation, providing helpful feedback, and ensuring that users can accomplish their goals with minimal effort. Good usability reduces frustration and increases user satisfaction.

Visual Hierarchy and Information Architecture
Creating a clear visual hierarchy helps users understand what's important on each page. This involves using typography, color, and spacing effectively to guide users' attention. Information architecture ensures that content is organized in a logical, intuitive way.

Responsive Design
With users accessing websites from various devices, responsive design is no longer optional. Your design must work seamlessly across desktop, tablet, and mobile devices, providing an optimal experience regardless of screen size.

Testing and Iteration
Great UX design is an iterative process. Regular testing with real users helps identify pain points and opportunities for improvement. This feedback loop is essential for creating products that truly meet user needs.`,
    author: 'Michael Chen',
    date: '2024-01-12',
    category: 'Design',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['UX Design', 'User Research', 'Usability'],
    featured: false,
  },
  {
    id: '3',
    title: 'Digital Marketing Strategies That Actually Work',
    excerpt: 'Proven digital marketing strategies to grow your business and reach your target audience effectively.',
    content: `In today's digital landscape, effective marketing requires a strategic approach that combines multiple channels and tactics. Here are the strategies that are delivering real results for businesses of all sizes.

Content Marketing That Converts
Content marketing remains one of the most effective ways to attract and engage your target audience. The key is creating valuable, relevant content that addresses your audience's pain points and interests. This includes blog posts, videos, infographics, and social media content that establishes your brand as an authority in your industry.

Search Engine Optimization (SEO)
SEO is crucial for organic visibility. This involves optimizing your website's content, structure, and technical elements to rank higher in search engine results. Focus on keyword research, quality content creation, and building authoritative backlinks to improve your search rankings.

Social Media Marketing
Social media platforms offer powerful opportunities to connect with your audience and build brand awareness. The key is choosing the right platforms for your target audience and creating engaging content that encourages interaction and sharing.

Email Marketing
Email marketing continues to deliver impressive ROI when done correctly. This involves building a quality email list, segmenting your audience, and sending targeted, personalized messages that provide value to your subscribers.

Pay-Per-Click (PPC) Advertising
PPC advertising can provide immediate visibility and traffic to your website. Platforms like Google Ads and Facebook Ads allow you to target specific demographics and interests, making your marketing budget more efficient.

Analytics and Optimization
The most successful digital marketing strategies are data-driven. Use analytics tools to track your performance, identify what's working, and optimize your campaigns for better results.`,
    author: 'Emily Rodriguez',
    date: '2024-01-10',
    category: 'Marketing',
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Digital Marketing', 'SEO', 'Content Marketing', 'Social Media'],
    featured: true,
  },
  {
    id: '4',
    title: 'The Complete Guide to E-commerce Success',
    excerpt: 'Everything you need to know about building and growing a successful e-commerce business.',
    content: `E-commerce has transformed the retail landscape, offering businesses unprecedented opportunities to reach customers globally. However, success in e-commerce requires more than just setting up an online store.

Choosing the Right Platform
The foundation of your e-commerce success starts with choosing the right platform. Consider factors like scalability, customization options, payment processing, and integration capabilities. Popular platforms include Shopify, WooCommerce, and Magento, each with their own strengths.

User Experience and Design
Your e-commerce site must provide an exceptional user experience. This includes fast loading times, intuitive navigation, high-quality product images, and a streamlined checkout process. Mobile optimization is crucial, as more customers shop on their mobile devices.

Product Management
Effective product management involves organizing your inventory, writing compelling product descriptions, and maintaining accurate stock levels. Use high-quality images and detailed specifications to help customers make informed decisions.

Payment and Security
Customers need to trust your site with their payment information. Implement secure payment processing, SSL certificates, and clear privacy policies. Offer multiple payment options to accommodate different customer preferences.

Marketing and Customer Acquisition
Driving traffic to your e-commerce site requires a multi-channel marketing approach. This includes SEO, social media marketing, email campaigns, and paid advertising. Focus on building relationships with customers through excellent service and follow-up communication.

Analytics and Optimization
Use analytics tools to track your site's performance, including conversion rates, average order value, and customer behavior. This data helps you identify opportunities for improvement and optimization.`,
    author: 'David Park',
    date: '2024-01-08',
    category: 'E-commerce',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['E-commerce', 'Online Business', 'Digital Sales'],
    featured: false,
  },
];

export const BlogProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [posts, setPosts] = useState<BlogPost[]>(initialPosts);

  const addPost = (post: Omit<BlogPost, 'id'>) => {
    const newPost: BlogPost = {
      ...post,
      id: Date.now().toString(),
    };
    setPosts(prev => [...prev, newPost]);
  };

  const updatePost = (id: string, updatedPost: Partial<BlogPost>) => {
    setPosts(prev => prev.map(post => 
      post.id === id ? { ...post, ...updatedPost } : post
    ));
  };

  const deletePost = (id: string) => {
    setPosts(prev => prev.filter(post => post.id !== id));
  };

  return (
    <BlogContext.Provider value={{
      posts,
      addPost,
      updatePost,
      deletePost,
    }}>
      {children}
    </BlogContext.Provider>
  );
};

export const useBlog = () => {
  const context = useContext(BlogContext);
  if (context === undefined) {
    throw new Error('useBlog must be used within a BlogProvider');
  }
  return context;
};