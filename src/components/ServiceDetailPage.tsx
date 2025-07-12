
import { ArrowLeft, Star, Shield, Clock, Car, MapPin, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ServiceDetailPageProps {
  serviceId: string;
  onBack: () => void;
}

const serviceDetails = {
  intercity: {
    title: "Intercity Travel",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&h=400&fit=crop",
    rating: 4.8,
    price: "From $25",
    description: "Experience comfortable long-distance travel with our premium intercity service. Perfect for business trips, vacations, or visiting family.",
    features: [
      "Professional drivers with 5+ years experience",
      "GPS tracking for real-time location",
      "24/7 customer support",
      "Clean and sanitized vehicles",
      "Multiple payment options",
      "Free cancellation up to 1 hour before trip"
    ],
    benefits: [
      "Save time with direct routes",
      "Comfortable seating for long journeys",
      "Affordable pricing compared to flights",
      "Door-to-door service"
    ],
    safety: [
      "All drivers are background verified",
      "Regular vehicle maintenance checks",
      "Emergency contact available",
      "Insurance coverage included"
    ]
  },
  reserve: {
    title: "Reserve Ride",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=400&fit=crop",
    rating: 4.9,
    price: "From $15",
    description: "Plan ahead with our reservation service. Book your ride in advance and ensure availability when you need it most.",
    features: [
      "Book up to 30 days in advance",
      "Guaranteed ride availability",
      "Fixed pricing - no surge charges",
      "SMS and email confirmations",
      "Easy modification and cancellation",
      "Priority customer support"
    ],
    benefits: [
      "Peace of mind with confirmed bookings",
      "Better planning for important events",
      "Avoid peak hour availability issues",
      "Lock in current prices"
    ],
    safety: [
      "Pre-screened professional drivers",
      "Vehicle inspection before each trip",
      "Real-time trip monitoring",
      "Emergency assistance button"
    ]
  },
  rental: {
    title: "Car Rental",
    image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&h=400&fit=crop",
    rating: 4.7,
    price: "From $8/hr",
    description: "Flexible hourly car rentals for your convenience. Perfect for shopping trips, multiple stops, or when you need a car for several hours.",
    features: [
      "Hourly, half-day, and full-day options",
      "Wide range of vehicle types",
      "Fuel included in rental price",
      "Multiple pickup locations",
      "Extension options available",
      "No hidden charges"
    ],
    benefits: [
      "Cost-effective for multiple stops",
      "Flexibility to change plans",
      "No need to own a car",
      "Various vehicle options"
    ],
    safety: [
      "Regular vehicle maintenance",
      "Comprehensive insurance coverage",
      "24/7 roadside assistance",
      "GPS tracking for security"
    ]
  },
  premium: {
    title: "Premium Service",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=400&fit=crop",
    rating: 4.9,
    price: "From $35",
    description: "Luxury travel experience with premium vehicles and exceptional service. Perfect for special occasions, business meetings, or when you want to travel in style.",
    features: [
      "Luxury vehicles (BMW, Mercedes, Audi)",
      "Professional chauffeur service",
      "Complimentary water and refreshments",
      "Executive-level comfort",
      "Priority booking and support",
      "Red carpet service"
    ],
    benefits: [
      "Make a great impression",
      "Ultimate comfort and luxury",
      "Professional appearance",
      "Stress-free travel experience"
    ],
    safety: [
      "Highly experienced chauffeurs",
      "Premium vehicle maintenance",
      "Enhanced security features",
      "Executive protection available"
    ]
  },
  share: {
    title: "Share Ride",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=400&fit=crop",
    rating: 4.6,
    price: "From $8",
    description: "Affordable shared rides with other passengers going in the same direction. An eco-friendly and cost-effective way to travel.",
    features: [
      "Shared with up to 3 other passengers",
      "AI-optimized route matching",
      "Significant cost savings",
      "Eco-friendly travel option",
      "Safe passenger verification",
      "Real-time ride updates"
    ],
    benefits: [
      "Save up to 50% on ride costs",
      "Meet new people",
      "Reduce carbon footprint",
      "Available during peak hours"
    ],
    safety: [
      "All passengers are verified",
      "Driver background checks",
      "In-app emergency features",
      "Ride monitoring system"
    ]
  },
  auto: {
    title: "Auto Ride",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=400&fit=crop",
    rating: 4.5,
    price: "From $5",
    description: "Quick and budget-friendly rides for short distances within the city. Perfect for daily commutes and quick trips around town.",
    features: [
      "Instant booking availability",
      "Quick pickup times",
      "Budget-friendly pricing",
      "Perfect for short distances",
      "Multiple vehicle options",
      "Easy payment methods"
    ],
    benefits: [
      "Most affordable option",
      "Fast and convenient",
      "Great for daily use",
      "No minimum fare"
    ],
    safety: [
      "Licensed and insured drivers",
      "Regular safety training",
      "GPS tracking enabled",
      "24/7 support available"
    ]
  }
};

export const ServiceDetailPage = ({ serviceId, onBack }: ServiceDetailPageProps) => {
  const service = serviceDetails[serviceId as keyof typeof serviceDetails];

  if (!service) {
    return (
      <div className="p-4">
        <Button onClick={onBack} variant="outline" className="mb-4">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>
        <p>Service not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="relative">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
        <Button
          onClick={onBack}
          variant="outline"
          className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>
        <div className="absolute bottom-4 left-4 text-white">
          <h1 className="text-3xl font-bold">{service.title}</h1>
          <div className="flex items-center space-x-4 mt-2">
            <div className="flex items-center space-x-1">
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <span className="text-lg font-medium">{service.rating}</span>
            </div>
            <div className="text-lg font-medium">{service.price}</div>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* Description */}
        <div className="bg-white rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-3">About This Service</h2>
          <p className="text-gray-600 leading-relaxed">{service.description}</p>
        </div>

        {/* Features */}
        <div className="bg-white rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Car className="w-5 h-5 mr-2 text-blue-600" />
            Features Included
          </h2>
          <div className="grid gap-3">
            {service.features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-white rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Star className="w-5 h-5 mr-2 text-yellow-500" />
            Why Choose This Service
          </h2>
          <div className="grid gap-3">
            {service.benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Safety */}
        <div className="bg-white rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Shield className="w-5 h-5 mr-2 text-green-600" />
            Safety & Security
          </h2>
          <div className="grid gap-3">
            {service.safety.map((safety, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">{safety}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <Button className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg">
            Book Now - {service.price}
          </Button>
          <div className="grid grid-cols-2 gap-3">
            <Button variant="outline" className="py-3">
              <Phone className="w-4 h-4 mr-2" />
              Call Support
            </Button>
            <Button variant="outline" className="py-3">
              <MessageCircle className="w-4 h-4 mr-2" />
              Chat Help
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
