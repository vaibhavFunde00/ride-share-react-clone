
import { useState } from "react";
import { MapPin, Plus, ChevronDown, Clock, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const HomePage = () => {
  const [pickupOption, setPickupOption] = useState("Pickup now");
  const [forMeOption, setForMeOption] = useState("For me");
  const [pickupLocation, setPickupLocation] = useState("");
  const [destination, setDestination] = useState("");

  const services = [
    { name: "Intercity", color: "bg-blue-100" },
    { name: "Reserve", color: "bg-green-100" },
    { name: "Rental", color: "bg-purple-100" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 p-4 space-y-6">
      {/* Brand Name */}
      <div className="text-center pt-8">
        <h1 className="text-4xl font-bold text-gray-900">XYZ</h1>
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
          <DropdownMenuContent className="bg-white shadow-lg border rounded-lg">
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
          <DropdownMenuContent className="bg-white shadow-lg border rounded-lg">
            <DropdownMenuItem onClick={() => setForMeOption("For me")}>
              For me
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setForMeOption("For someone else")}>
              For someone else
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Location Inputs */}
      <div className="space-y-3">
        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
          <input
            type="text"
            placeholder="Enter pickup location"
            value={pickupLocation}
            onChange={(e) => setPickupLocation(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
          <input
            type="text"
            placeholder="Enter destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <Button 
          variant="outline" 
          size="icon" 
          className="self-end bg-white border-2 border-dashed border-gray-300 hover:border-blue-500 hover:bg-blue-50"
        >
          <Plus className="w-5 h-5 text-gray-600" />
        </Button>
      </div>

      {/* Search Button */}
      <Button className="w-full py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg">
        Search Rides
      </Button>

      {/* Services Section */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-900">Services</h2>
        <div className="flex space-x-4 overflow-x-auto pb-2">
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex-shrink-0 w-24 h-20 ${service.color} rounded-lg flex items-center justify-center cursor-pointer hover:scale-105 transition-transform`}
            >
              <span className="text-sm font-medium text-gray-700">{service.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Choose Your Own Ride Section */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-900">Choose your own ride</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gradient-to-r from-cyan-400 to-cyan-500 rounded-lg p-4 text-white cursor-pointer hover:scale-105 transition-transform">
            <h3 className="font-semibold">Book Intercity →</h3>
            <p className="text-sm opacity-90">Effortless outstation trips</p>
          </div>
          <div className="bg-gradient-to-r from-red-400 to-red-500 rounded-lg p-4 text-white cursor-pointer hover:scale-105 transition-transform">
            <h3 className="font-semibold">Book Premium →</h3>
            <p className="text-sm opacity-90">Effortless outstation trips</p>
          </div>
        </div>
      </div>
    </div>
  );
};
