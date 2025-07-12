
import { useState } from "react";
import { MapPin, Clock, User, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const BookingForm = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [selectedTime, setSelectedTime] = useState("now");
  const [passengers, setPassengers] = useState(1);

  const rideTypes = [
    { id: "economy", name: "UberX", price: "$12-15", time: "3 min", icon: "🚗" },
    { id: "comfort", name: "Comfort", price: "$18-22", time: "5 min", icon: "🚙" },
    { id: "premium", name: "Premium", price: "$25-30", time: "8 min", icon: "🚕" },
  ];

  return (
    <div className="space-y-6">
      {/* Location Inputs */}
      <div className="bg-white rounded-2xl p-6 space-y-4">
        <div className="space-y-2">
          <Label htmlFor="pickup" className="text-sm font-medium text-gray-700">
            Pickup Location
          </Label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-green-600" />
            <Input
              id="pickup"
              placeholder="Enter pickup location"
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              className="pl-10 h-12 border-2 border-gray-200 focus:border-green-500"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="destination" className="text-sm font-medium text-gray-700">
            Destination
          </Label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-red-500" />
            <Input
              id="destination"
              placeholder="Where to?"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="pl-10 h-12 border-2 border-gray-200 focus:border-green-500"
            />
          </div>
        </div>
      </div>

      {/* Time Selection */}
      <div className="bg-white rounded-2xl p-6">
        <Label className="text-sm font-medium text-gray-700 mb-3 block">
          When do you want to go?
        </Label>
        <div className="flex space-x-3">
          <button
            onClick={() => setSelectedTime("now")}
            className={`flex-1 p-3 rounded-xl border-2 transition-colors ${
              selectedTime === "now"
                ? "border-green-500 bg-green-50 text-green-700"
                : "border-gray-200 text-gray-700"
            }`}
          >
            <Clock className="w-4 h-4 mx-auto mb-1" />
            <span className="text-sm font-medium">Now</span>
          </button>
          <button
            onClick={() => setSelectedTime("later")}
            className={`flex-1 p-3 rounded-xl border-2 transition-colors ${
              selectedTime === "later"
                ? "border-green-500 bg-green-50 text-green-700"
                : "border-gray-200 text-gray-700"
            }`}
          >
            <Clock className="w-4 h-4 mx-auto mb-1" />
            <span className="text-sm font-medium">Schedule</span>
          </button>
        </div>
      </div>

      {/* Passengers */}
      <div className="bg-white rounded-2xl p-6">
        <Label className="text-sm font-medium text-gray-700 mb-3 block">
          Number of Passengers
        </Label>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <User className="w-4 h-4 text-gray-600" />
            <span className="text-gray-700">{passengers} passenger{passengers > 1 ? 's' : ''}</span>
          </div>
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setPassengers(Math.max(1, passengers - 1))}
              className="w-8 h-8 rounded-full border-2 border-gray-300 flex items-center justify-center text-gray-600 hover:border-green-500 hover:text-green-600 transition-colors"
            >
              -
            </button>
            <button
              onClick={() => setPassengers(Math.min(6, passengers + 1))}
              className="w-8 h-8 rounded-full border-2 border-gray-300 flex items-center justify-center text-gray-600 hover:border-green-500 hover:text-green-600 transition-colors"
            >
              +
            </button>
          </div>
        </div>
      </div>

      {/* Ride Types */}
      <div className="bg-white rounded-2xl p-6">
        <Label className="text-sm font-medium text-gray-700 mb-4 block">
          Choose your ride
        </Label>
        <div className="space-y-3">
          {rideTypes.map((ride) => (
            <div
              key={ride.id}
              className="flex items-center justify-between p-4 rounded-xl border-2 border-gray-200 hover:border-green-500 cursor-pointer transition-colors group"
            >
              <div className="flex items-center space-x-3">
                <span className="text-2xl">{ride.icon}</span>
                <div>
                  <h4 className="font-semibold text-gray-900">{ride.name}</h4>
                  <p className="text-sm text-gray-500">{ride.time} away</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold text-gray-900">{ride.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Book Button */}
      <Button
        className="w-full h-14 bg-green-600 hover:bg-green-700 text-white font-semibold text-lg rounded-xl"
        disabled={!pickup || !destination}
      >
        <CreditCard className="w-5 h-5 mr-2" />
        Book Ride
      </Button>
    </div>
  );
};
