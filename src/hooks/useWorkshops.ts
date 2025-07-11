import { useEffect, useState } from 'react';

interface Workshop {
  id: number;
  title: { rendered: string };
  content: { rendered: string };
  acf: {
    image: string;
    price: number;
    duration: string;
    category: string;
    featured: boolean;
  };
}

export function useWorkshops(): Workshop[] {
  const [workshops, setWorkshops] = useState<Workshop[]>([]);

  useEffect(() => {
    fetch('http://bookingproject123.local/wp-json/wp/v2/workshop?acf_format=standard')
      .then(res => res.json())
      .then((data) => {
        console.log("Workshops från WP:", data);
        setWorkshops(data.slice(0, 3));
      });
  }, []);

  return workshops;
}
