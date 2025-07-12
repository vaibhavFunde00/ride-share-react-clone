
import { useState } from "react";
import { MapPin, Plus, ChevronDown, Clock, User, Calendar, X } from "lucide-react";
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

export const HomePage = () => {
  const [pickupOption, setPickupOption] = useState("Pickup now");
  const [forMeOption, setForMeOption] = useState("For me");
  const [pickupLocation, setPickupLocation] = useState("");
  const [destination, setDestination] = useState("");
  const [intermediateDestinations, setIntermediateDestinations] = useState<string[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState("");

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
    { name: "Intercity", color: "bg-blue-100", description: "Long distance travel" },
    { name: "Reserve", color: "bg-green-100", description: "Book in advance" },
    { name: "Rental", color: "bg-purple-100", description: "Hourly rentals" },
    { name: "Premium", color: "bg-orange-100", description: "Luxury rides" },
    { name: "Share", color: "bg-pink-100", description: "Shared rides" },
    { name: "Auto", color: "bg-yellow-100", description: "Quick rides" },
  ];

  const rideOptions = [
    {
      title: "Book Intercity →",
      description: "Effortless outstation trips",
      gradient: "bg-gradient-to-r from-cyan-400 to-cyan-500"
    },
    {
      title: "Book Premium →",
      description: "Luxury ride experience",
      gradient: "bg-gradient-to-r from-red-400 to-red-500"
    },
    {
      title: "Book Rental →",
      description: "Hourly car rentals",
      gradient: "bg-gradient-to-r from-green-400 to-green-500"
    },
    {
      title: "Book Auto →",
      description: "Quick and affordable",
      gradient: "bg-gradient-to-r from-yellow-400 to-yellow-500"
    }
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

      {/* Location Inputs */}
      <div className="space-y-3">
        <div className="relative flex items-center">
          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500 z-10" />
          <input
            type="text"
            placeholder="Enter pickup location"
            value={pickupLocation}
            onChange={(e) => setPickupLocation(e.target.value)}
            className="w-full pl-10 pr-12 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <Button 
            variant="outline" 
            size="icon" 
            onClick={addIntermediateDestination}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white border-2 border-dashed border-gray-300 hover:border-blue-500 hover:bg-blue-50 w-8 h-8"
          >
            <Plus className="w-4 h-4 text-gray-600" />
          </Button>
        </div>

        {/* Intermediate Destinations */}
        {intermediateDestinations.map((destination, index) => (
          <div key={index} className="relative flex items-center">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500 z-10" />
            <input
              type="text"
              placeholder="Enter intermediate destination"
              value={destination}
              onChange={(e) => updateIntermediateDestination(index, e.target.value)}
              className="w-full pl-10 pr-12 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <Button 
              variant="outline" 
              size="icon" 
              onClick={() => removeIntermediateDestination(index)}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white border-2 border-red-300 hover:border-red-500 hover:bg-red-50 w-8 h-8"
            >
              <X className="w-4 h-4 text-red-600" />
            </Button>
          </div>
        ))}

        <div className="relative flex items-center">
          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500 z-10" />
          <input
            type="text"
            placeholder="Enter destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="w-full pl-10 pr-12 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <Button 
            variant="outline" 
            size="icon" 
            onClick={addIntermediateDestination}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white border-2 border-dashed border-gray-300 hover:border-blue-500 hover:bg-blue-50 w-8 h-8"
          >
            <Plus className="w-4 h-4 text-gray-600" />
          </Button>
        </div>
      </div>

      {/* Date and Time Selection */}
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

      {/* Search Button */}
      <Button className="w-full py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg">
        Search Rides
      </Button>

      {/* Services Section */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-900">Services</h2>
        <div className="grid grid-cols-3 gap-3">
          {services.map((service, index) => (
            <div
              key={index}
              className={`${service.color} rounded-lg p-3 cursor-pointer hover:scale-105 transition-transform`}
            >
              <div className="text-center">
                <span className="text-sm font-medium text-gray-700">{service.name}</span>
                <p className="text-xs text-gray-600 mt-1">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Choose Your Own Ride Section */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-900">Choose your own ride</h2>
        <div className="grid grid-cols-2 gap-4">
          {rideOptions.map((option, index) => (
            <div
              key={index}
              className={`${option.gradient} rounded-lg p-4 text-white cursor-pointer hover:scale-105 transition-transform`}
            >
              <h3 className="font-semibold">{option.title}</h3>
              <p className="text-sm opacity-90">{option.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
