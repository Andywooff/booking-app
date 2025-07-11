import { useEffect, useState } from 'react';

interface WPPost {
  id: number;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  date: string;
  _embedded?: {
    'wp:featuredmedia'?: [{ source_url: string }];
  };
}

export function useBlogPosts(): WPPost[] {
  const [posts, setPosts] = useState<WPPost[]>([]);

  useEffect(() => {
    fetch('http://bookingproject123.local/wp-json/wp/v2/posts?_embed')
      .then(res => res.json())
      .then((data) => setPosts(data.slice(0, 3)));
  }, []);

  return posts;
}
