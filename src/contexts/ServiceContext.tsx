import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: string;
  category: string;
  image: string;
  featured: boolean;
}

export interface Booking {
  id: string;
  serviceId: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  date: string;
  time: string;
  notes: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
}

interface ServiceContextType {
  services: Service[];
  bookings: Booking[];
  addService: (service: Omit<Service, 'id'>) => void;
  updateService: (id: string, service: Partial<Service>) => void;
  deleteService: (id: string) => void;
  addBooking: (booking: Omit<Booking, 'id'>) => void;
  updateBooking: (id: string, booking: Partial<Booking>) => void;
}

const ServiceContext = createContext<ServiceContextType | undefined>(undefined);

const initialServices: Service[] = [
  {
    id: '1',
    name: 'Premium Web Development',
    description: 'Full-stack web development with modern technologies including React, Node.js, and database integration.',
    price: 2500,
    duration: '4-6 weeks',
    category: 'Web Development',
    image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: true,
  },
  {
    id: '2',
    name: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android with beautiful user interfaces.',
    price: 3500,
    duration: '6-8 weeks',
    category: 'Mobile Development',
    image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: true,
  },
  {
    id: '3',
    name: 'Digital Marketing Strategy',
    description: 'Comprehensive digital marketing campaigns including SEO, social media, and content marketing.',
    price: 1200,
    duration: '2-3 weeks',
    category: 'Marketing',
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: false,
  },
  {
    id: '4',
    name: 'UI/UX Design',
    description: 'Modern, user-centered design for web and mobile applications with prototyping and testing.',
    price: 1800,
    duration: '3-4 weeks',
    category: 'Design',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: true,
  },
  {
    id: '5',
    name: 'E-commerce Solutions',
    description: 'Complete e-commerce platforms with payment integration, inventory management, and admin panels.',
    price: 4200,
    duration: '8-10 weeks',
    category: 'E-commerce',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: false,
  },
  {
    id: '6',
    name: 'Cloud Infrastructure',
    description: 'Scalable cloud infrastructure setup with deployment automation and monitoring solutions.',
    price: 2800,
    duration: '4-5 weeks',
    category: 'DevOps',
    image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: false,
  },
];

export const ServiceProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [services, setServices] = useState<Service[]>(initialServices);
  const [bookings, setBookings] = useState<Booking[]>([]);

  const addService = (service: Omit<Service, 'id'>) => {
    const newService: Service = {
      ...service,
      id: Date.now().toString(),
    };
    setServices(prev => [...prev, newService]);
  };

  const updateService = (id: string, updatedService: Partial<Service>) => {
    setServices(prev => prev.map(service => 
      service.id === id ? { ...service, ...updatedService } : service
    ));
  };

  const deleteService = (id: string) => {
    setServices(prev => prev.filter(service => service.id !== id));
  };

  const addBooking = (booking: Omit<Booking, 'id'>) => {
    const newBooking: Booking = {
      ...booking,
      id: Date.now().toString(),
    };
    setBookings(prev => [...prev, newBooking]);
  };

  const updateBooking = (id: string, updatedBooking: Partial<Booking>) => {
    setBookings(prev => prev.map(booking => 
      booking.id === id ? { ...booking, ...updatedBooking } : booking
    ));
  };

  return (
    <ServiceContext.Provider value={{
      services,
      bookings,
      addService,
      updateService,
      deleteService,
      addBooking,
      updateBooking,
    }}>
      {children}
    </ServiceContext.Provider>
  );
};

export const useService = () => {
  const context = useContext(ServiceContext);
  if (context === undefined) {
    throw new Error('useService must be used within a ServiceProvider');
  }
  return context;
};