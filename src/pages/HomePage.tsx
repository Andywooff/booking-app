import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { useWorkshops } from '../hooks/useWorkshops';
import { useBlogPosts } from '../hooks/useBlogPosts';

const HomePage: React.FC = () => {
  const workshops = useWorkshops();
  const posts = useBlogPosts();

  const partners = [
    { name: 'Latch', image: '/public/partners/latch.png' },
    { name: 'Horizon', image: '/public/partners/horizon.png' },
    { name: 'PJK', image: '/public/partners/pjk.png' },
    { name: 'Owerr', image: '/public/partners/owerr.png' },
  ];

  return (
    <div className="flex flex-col">

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-teal-600 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            STEM workshops för barn
            <span className="block text-blue-300">INSPIRE. CREATE. PLAY.</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Vi brinner för att inspirera genom att skapa och leka med STEM
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/services" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 inline-flex items-center justify-center">
              Kolla in våra Workshops!
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link to="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600">
              Ta kontakt med oss här!
            </Link>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Våra Partners</h2>
          <div className="w-20 h-1 bg-black mx-auto mb-12"></div>
          <div className="flex flex-wrap justify-center gap-8">
            {partners.map((partner, idx) => (
              <img key={idx} src={partner.image} alt={partner.name} className="w-32 h-32 object-cover" />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Workshops */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Våra Workshops</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Upptäck våra interaktiva och engagerande workshops som kombinerar lek och lärande inom teknik, naturvetenskap, ingenjörskonst och matematik (STEM).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {workshops.map((service) => (
              <div key={service.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.acf.image || 'https://via.placeholder.com/400x200'}
                    alt={service.title.rendered}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {service.acf.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2" dangerouslySetInnerHTML={{ __html: service.title.rendered }} />
                  <div className="text-gray-600 mb-4" dangerouslySetInnerHTML={{ __html: service.content.rendered }} />
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-blue-600">{service.acf.price} kr</span>
                    <span className="text-sm text-gray-500">{service.acf.duration}</span>
                  </div>
                  <Link to={`/services/${service.id}`} className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 inline-flex items-center justify-center">
                    Läs mer och boka
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 inline-flex items-center">
              Se alla workshops
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Senaste inläggen från vår blogg</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Håll dig uppdaterad med de senaste trenderna, tipsen och insikterna inom teknik och utbildning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts.map((post) => {
              const image = post._embedded?.['wp:featuredmedia']?.[0]?.source_url ?? 'https://via.placeholder.com/400x200';
              return (
                <div key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="relative h-48 overflow-hidden">
                    <img src={image} alt={post.title.rendered} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2" dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                    <div className="text-gray-600 mb-4" dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
                    <Link to={`/blog/${post.id}`} className="text-blue-600 hover:text-blue-800 font-semibold inline-flex items-center">
                      Läs mer
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link to="/blog" className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 inline-flex items-center">
              Kolla in våra andra inlägg
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Redo att inspirera nästa generation?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Kontakta oss idag för att boka en plats eller få mer information.
          </p>
          <Link to="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 inline-flex items-center">
            Du hittar oss här!
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
