import React from 'react';
import { Users, Target, Award, TrendingUp, CheckCircle } from 'lucide-react';

const AboutPage: React.FC = () => {
  const team = [
    {
      name: 'Ridwan Ali',
      role: 'CEO & Founder',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      bio: 'With over 15 years of experience in digital transformation, Sarah leads our team with vision and innovation.',
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      image: 'https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      bio: 'Michael brings deep technical expertise and ensures our solutions are built with cutting-edge technology.',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Creative Director',
      image: 'https://images.pexels.com/photos/3184613/pexels-photo-3184613.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      bio: 'Emily leads our design team, creating beautiful and user-friendly experiences that users love.',
    },
    {
      name: 'David Park',
      role: 'Head of Marketing',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      bio: 'David develops strategic marketing campaigns that drive growth and build lasting customer relationships.',
    },
  ];

  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, delivering quality that exceeds expectations.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and close collaboration with our clients.',
    },
    {
      icon: TrendingUp,
      title: 'Innovation',
      description: 'We embrace new technologies and innovative approaches to solve complex challenges.',
    },
    {
      icon: Award,
      title: 'Integrity',
      description: 'We conduct business with honesty, transparency, and ethical practices.',
    },
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '100+', label: 'Happy Clients' },
    { number: '15+', label: 'Years Experience' },
    { number: '50+', label: 'Team Members' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-teal-600 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Om ToyStem</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Vi på Toytech är dedikerade till att inspirera nästa generation av problemlösare och innovatörer genom lek och skapande med STEM. Våra interaktiva workshops gör teknik och naturvetenskap både tillgängliga och engagerande för barn och unga.

För att ytterligare berika lärandet utvecklar vi en serie STEM-boxar – hela universumets vetenskap i en box, ett projekt i taget. Dessa praktiska och lärorika kit testas för närvarande i våra workshops för att finjusteras och lanseras i början av 2025. Vi ser fram emot att ge barn och unga nya möjligheter att lära genom hands-on erfarenhet och kreativt utforskande.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2010, ServicePro began as a small team of developers and designers with a big vision: 
                to help businesses leverage technology to achieve their goals. What started as a passion project 
                has grown into a full-service digital agency serving clients worldwide.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Over the years, we've helped hundreds of businesses transform their digital presence, streamline 
                their operations, and connect with their customers in meaningful ways. Our success is measured 
                not just by the projects we complete, but by the lasting relationships we build.
              </p>
              <div className="space-y-3">
                {[
                  'Customer-first approach',
                  'Cutting-edge technology',
                  'Proven methodologies',
                  'Continuous innovation',
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Team collaboration"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-teal-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do and shape how we work with our clients and each other.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <value.icon className="w-12 h-12 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our diverse team of experts brings together years of experience and a shared passion for excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-teal-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl max-w-4xl mx-auto">
            To empower businesses with innovative digital solutions that drive growth, enhance customer experiences, 
            and create lasting value. We believe that technology should serve people, and we're committed to making 
            that vision a reality for every client we work with.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;