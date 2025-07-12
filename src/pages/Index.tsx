import { useState } from "react";
import { Header } from "@/components/Header";
import { ServiceCard } from "@/components/ServiceCard";
import { BookingForm } from "@/components/BookingForm";
import { BottomNavigation } from "@/components/BottomNavigation";
import { HomePage } from "@/components/HomePage";
import { ServiceDetailPage } from "@/components/ServiceDetailPage";
import { Car, MapPin, Clock, Users, Calendar, CreditCard } from "lucide-react";

const Index = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const services = [
    {
      id: "trip",
      title: "Trip",
      description: "Book your ride now",
      icon: Car,
      isPromo: true,
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=300&h=200&fit=crop"
    },
    {
      id: "intercity",
      title: "Intercity",
      description: "Travel between cities",
      icon: MapPin,
      isPromo: true,
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=300&h=200&fit=crop"
    },
    {
      id: "reserve",
      title: "Reserve",
      description: "Schedule your ride",
      icon: Clock,
      isPromo: false,
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=300&h=200&fit=crop"
    },
    {
      id: "rentals",
      title: "Rentals",
      description: "Rent for hours",
      icon: Calendar,
      isPromo: false,
      image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=300&h=200&fit=crop"
    },
    {
      id: "teens",
      title: "Teens",
      description: "Safe rides for teens",
      icon: Users,
      isPromo: false,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop"
    },
    {
      id: "delivery",
      title: "Delivery",
      description: "Send packages",
      icon: CreditCard,
      isPromo: false,
      image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=300&h=200&fit=crop"
    }
  ];

  const suggestions = services.slice(0, 4);

  const handleServiceClick = (serviceId: string) => {
    setSelectedService(serviceId);
  };

  const handleBackToHome = () => {
    setSelectedService(null);
  };

  if (selectedService) {
    return (
      <ServiceDetailPage 
        serviceId={selectedService} 
        onBack={handleBackToHome}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pb-20 px-4 pt-6">
        {activeTab === "home" && (
          <HomePage onServiceClick={handleServiceClick} />
        )}

        {activeTab === "services" && (
          <div className="space-y-8">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-6 text-white relative overflow-hidden">
              <div className="relative z-10">
                <h1 className="text-3xl font-bold mb-2">Services</h1>
                <p className="text-lg mb-4">Go anywhere, get anything</p>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                  <h3 className="font-semibold mb-2">Enjoy stress-free travel with Uber...</h3>
                  <p className="text-sm opacity-90">Book in advance</p>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-8 translate-x-8"></div>
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-white/5 rounded-full translate-y-4 translate-x-4"></div>
            </div>

            {/* Suggestions Section */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-gray-900">Suggestions</h2>
                <button className="text-green-600 font-medium">See all</button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {suggestions.map((service) => (
                  <ServiceCard
                    key={service.id}
                    service={service}
                    onClick={() => handleServiceClick(service.id)}
                  />
                ))}
              </div>
            </div>

            {/* All Services Grid */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">All Services</h2>
              <div className="grid grid-cols-2 gap-4">
                {services.map((service) => (
                  <ServiceCard
                    key={service.id}
                    service={service}
                    onClick={() => handleServiceClick(service.id)}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "book" && (
          <div className="space-y-6">
            <h1 className="text-2xl font-bold text-gray-900">Book a Ride</h1>
            <BookingForm />
          </div>
        )}

        {activeTab === "activity" && (
          <div className="space-y-6">
            <h1 className="text-2xl font-bold text-gray-900">Your Activity</h1>
            <div className="bg-white rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Car className="w-8 h-8 text-gray-400" />
              </div>
              <p className="text-gray-500">No recent trips</p>
            </div>
          </div>
        )}

        {activeTab === "account" && (
          <div className="space-y-6">
            <h1 className="text-2xl font-bold text-gray-900">Account</h1>
            <div className="bg-white rounded-xl p-6">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <Users className="w-8 h-8 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Welcome User</h3>
                  <p className="text-gray-500">Manage your account</p>
                </div>
              </div>
              <div className="space-y-4">
                <button className="w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  Profile Settings
                </button>
                <button className="w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  Payment Methods
                </button>
                <button className="w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  Trip History
                </button>
                <button className="w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  Support
                </button>
              </div>
            </div>
          </div>
        )}
      </main>

      <BottomNavigation activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default Index;
