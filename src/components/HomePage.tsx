import { useState } from "react";
import { MapPin, Plus, ChevronDown, Clock, User, Calendar, X, Car, Plane, Shield, Star, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

interface HomePageProps {
  onServiceClick?: (serviceId: string) => void;
}

export const HomePage = ({ onServiceClick }: HomePageProps) => {
  const [pickupOption, setPickupOption] = useState("Pickup now");
  const [forMeOption, setForMeOption] = useState("For me");
  const [pickupLocation, setPickupLocation] = useState("");
  const [destination, setDestination] = useState("");
  const [intermediateDestinations, setIntermediateDestinations] = useState<string[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const addIntermediateDestination = () => {
    setIntermediateDestinations([...intermediateDestinations, ""]);
  };

  const removeIntermediateDestination = (index: number) => {
    setIntermediateDestinations(intermediateDestinations.filter((_, i) => i !== index));
  };

  const updateIntermediateDestination = (index: number, value: string) => {
    const updated = [...intermediateDestinations];
    updated[index] = value;
    setIntermediateDestinations(updated);
  };

  const services = [
    { 
      id: "intercity",
      name: "Intercity", 
      color: "bg-blue-100", 
      description: "Comfortable long distance travel",
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=300&h=200&fit=crop",
      icon: Car,
      rating: 4.8,
      price: "From $25"
    },
    { 
      id: "reserve",
      name: "Reserve", 
      color: "bg-green-100", 
      description: "Book your ride in advance",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=300&h=200&fit=crop",
      icon: Clock,
      rating: 4.9,
      price: "From $15"
    },
    { 
      id: "rental",
      name: "Rental", 
      color: "bg-purple-100", 
      description: "Hourly car rentals for your convenience",
      image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=300&h=200&fit=crop",
      icon: Car,
      rating: 4.7,
      price: "From $8/hr"
    },
    { 
      id: "premium",
      name: "Premium", 
      color: "bg-orange-100", 
      description: "Luxury rides with premium comfort",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop",
      icon: Star,
      rating: 4.9,
      price: "From $35"
    },
    { 
      id: "share",
      name: "Share", 
      color: "bg-pink-100", 
      description: "Affordable shared rides",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=300&h=200&fit=crop",
      icon: User,
      rating: 4.6,
      price: "From $8"
    },
    { 
      id: "auto",
      name: "Auto", 
      color: "bg-yellow-100", 
      description: "Quick and budget-friendly rides",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop",
      icon: Car,
      rating: 4.5,
      price: "From $5"
    },
  ];

  const rideOptions = [
    {
      id: "intercity-book",
      title: "Book Intercity →",
      description: "Effortless outstation trips with comfort",
      gradient: "bg-gradient-to-r from-cyan-400 to-cyan-500",
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&h=200&fit=crop",
      features: ["AC Vehicles", "Professional Drivers", "24/7 Support"]
    },
    {
      id: "premium-book",
      title: "Book Premium →",
      description: "Luxury ride experience with style",
      gradient: "bg-gradient-to-r from-red-400 to-red-500",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=200&fit=crop",
      features: ["Luxury Cars", "Premium Service", "VIP Treatment"]
    },
    {
      id: "rental-book",
      title: "Book Rental →",
      description: "Hourly car rentals for flexibility",
      gradient: "bg-gradient-to-r from-green-400 to-green-500",
      image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=400&h=200&fit=crop",
      features: ["Flexible Hours", "Self Drive", "Multiple Locations"]
    },
    {
      id: "auto-book",
      title: "Book Auto →",
      description: "Quick and affordable city rides",
      gradient: "bg-gradient-to-r from-yellow-400 to-yellow-500",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h-200&fit=crop",
      features: ["Quick Booking", "Budget Friendly", "City Coverage"]
    }
  ];

  const handleServiceClick = (serviceId: string) => {
    setSelectedService(serviceId);
    if (onServiceClick) {
      onServiceClick(serviceId);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 p-4 space-y-6">
      {/* Hero Section with Background Image */}
      <div className="relative text-center pt-8 pb-6 rounded-2xl overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=400&fit=crop')"
          }}
        ></div>
        <div className="relative z-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">XYZ Rides</h1>
          <p className="text-lg text-gray-600">Your journey, our priority</p>
        </div>
      </div>

      {/* Pickup Options */}
      <div className="flex space-x-3">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex items-center space-x-2 bg-gray-800 text-white border-gray-800 hover:bg-gray-700">
              <Clock className="w-4 h-4" />
              <span>{pickupOption}</span>
              <ChevronDown className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-white shadow-lg border rounded-lg z-50">
            <DropdownMenuItem onClick={() => setPickupOption("Pickup now")}>
              Pickup now
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setPickupOption("Pickup later")}>
              Pickup later
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex items-center space-x-2 bg-gray-200 text-gray-800 border-gray-300 hover:bg-gray-300">
              <User className="w-4 h-4" />
              <span>{forMeOption}</span>
              <ChevronDown className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-white shadow-lg border rounded-lg z-50">
            <DropdownMenuItem onClick={() => setForMeOption("For me")}>
              For me
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setForMeOption("For someone else")}>
              For someone else
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Date and Time Selection for Pick Later */}
      {pickupOption === "Pickup later" && (
        <div className="flex space-x-3">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "flex-1 justify-start text-left font-normal bg-white",
                  !selectedDate && "text-muted-foreground"
                )}
              >
                <Calendar className="mr-2 h-4 w-4" />
                {selectedDate ? format(selectedDate, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 bg-white shadow-lg border rounded-lg z-50" align="start">
              <CalendarComponent
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                initialFocus
                className="p-3 pointer-events-auto"
              />
            </PopoverContent>
          </Popover>

          <Input
            type="time"
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
            className="flex-1 bg-white"
          />
        </div>
      )}

      {/* Mobile Number for Someone Else */}
      {forMeOption === "For someone else" && (
        <div className="relative flex items-center">
          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500 z-10" />
          <input
            type="tel"
            placeholder="Enter mobile number"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      )}

      {/* Services Section */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-900">Our Services</h2>
        <div className="grid grid-cols-2 gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              onClick={() => handleServiceClick(service.id)}
              className="bg-white rounded-xl p-4 cursor-pointer hover:scale-105 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              <div className="relative mb-3">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-20 object-cover rounded-lg"
                />
                <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm rounded-full p-1">
                  <service.icon className="w-4 h-4 text-gray-600" />
                </div>
              </div>
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-gray-900">{service.name}</h3>
                  <div className="flex items-center space-x-1">
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs text-gray-600">{service.rating}</span>
                  </div>
                </div>
                <p className="text-sm text-gray-500">{service.description}</p>
                <p className="text-sm font-medium text-green-600">{service.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Location Inputs - Show only when service is selected */}
      {selectedService && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">
              Enter Locations for {services.find(s => s.id === selectedService)?.name}
            </h3>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setSelectedService(null)}
              className="text-gray-600 hover:text-gray-800"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>

          <div className="space-y-3">
            {/* Pickup Location */}
            <div className="relative flex items-center">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-green-600 z-10" />
              <input
                type="text"
                placeholder="Enter pickup location"
                value={pickupLocation}
                onChange={(e) => setPickupLocation(e.target.value)}
                className="w-full pl-10 pr-12 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
              />
              <Button 
                variant="outline" 
                size="icon" 
                onClick={addIntermediateDestination}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 hover:bg-blue-600 text-white border-blue-500 w-8 h-8"
              >
                <Plus className="w-4 h-4" />
              </Button>
            </div>

            {/* Intermediate Destinations */}
            {intermediateDestinations.map((destination, index) => (
              <div key={index} className="relative flex items-center">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-orange-500 z-10" />
                <input
                  type="text"
                  placeholder="Enter intermediate destination"
                  value={destination}
                  onChange={(e) => updateIntermediateDestination(index, e.target.value)}
                  className="w-full pl-10 pr-12 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
                />
                <Button 
                  variant="outline" 
                  size="icon" 
                  onClick={() => removeIntermediateDestination(index)}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-red-500 hover:bg-red-600 text-white border-red-500 w-8 h-8"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            ))}

            {/* Destination */}
            <div className="relative flex items-center">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-red-600 z-10" />
              <input
                type="text"
                placeholder="Enter destination"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-full pl-10 pr-12 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
              />
              <Button 
                variant="outline" 
                size="icon" 
                onClick={addIntermediateDestination}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 hover:bg-blue-600 text-white border-blue-500 w-8 h-8"
              >
                <Plus className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Search Button */}
          <Button className="w-full py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-200">
            Search {services.find(s => s.id === selectedService)?.name} Rides
          </Button>
        </div>
      )}

    </div>
  );
};
