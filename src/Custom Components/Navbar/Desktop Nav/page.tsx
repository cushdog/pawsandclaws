"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Dog,
  Clock,
  Phone,
  MapPin,
  ChevronDown,
  Home,
  Scissors,
  User,
  MessageCircle,
  Calendar,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

interface BusinessHour {
  day: string;
  hours: string;
  isToday: boolean;
}

const Navbar = () => {
  const [currentDay, setCurrentDay] = useState("");
  const [isCurrentlyOpen, setIsCurrentlyOpen] = useState(false);

  const businessHours: BusinessHour[] = [
    { day: "Sunday", hours: "Closed", isToday: false },
    { day: "Monday", hours: "10:00 AM - 6:00 PM", isToday: false },
    { day: "Tuesday", hours: "Closed", isToday: false },
    { day: "Wednesday", hours: "10:00 AM - 6:00 PM", isToday: false },
    { day: "Thursday", hours: "10:00 AM - 6:00 PM", isToday: false },
    { day: "Friday", hours: "10:00 AM - 6:00 PM", isToday: false },
    { day: "Saturday", hours: "Closed", isToday: false },
  ];

  const checkIfOpen = (hours: string): boolean => {
    if (hours === "Closed") return false;
    const now = new Date();
    const [start, end] = hours.split(" - ");
    const startTime = new Date(now.toDateString() + " " + start);
    const endTime = new Date(now.toDateString() + " " + end);
    return now >= startTime && now <= endTime;
  };

  useEffect(() => {
    const updateCurrentDay = () => {
      const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      const today = days[new Date().getDay()];
      setCurrentDay(today);

      const todayHours =
        businessHours.find((h) => h.day === today)?.hours || "Closed";
      setIsCurrentlyOpen(checkIfOpen(todayHours));
    };

    updateCurrentDay();
    const interval = setInterval(updateCurrentDay, 60000);
    return () => clearInterval(interval);
  }, []);

  const todayHours =
    businessHours.find((h) => h.day === currentDay)?.hours || "Closed";

  return (
    <div className="w-full">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-sm">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2 whitespace-nowrap">
              <Phone className="w-4 h-4" />
              <span>
                <a href="tel:8158481201">(815) 848-1201</a>
              </span>
            </div>
            <div className="flex items-center gap-2 whitespace-nowrap">
              <MapPin className="w-4 h-4" />
              <span>
                <a href="https://www.google.com/maps?q=512+N+Locust+St,+Pontiac,+IL+61764">
                  512 N Locust St, Pontiac, IL 61764
                </a>
              </span>
            </div>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center space-x-2 hover:text-pink-200 transition-colors whitespace-nowrap">
                <Clock className="w-4 h-4" />
                <span>Today:</span>
                <span
                  className={
                    isCurrentlyOpen ? "text-green-300" : "text-red-300"
                  }
                >
                  {todayHours}
                </span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-64 bg-white">
              <DropdownMenuLabel>Business Hours</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {businessHours.map((timeSlot) => (
                <DropdownMenuItem
                  key={timeSlot.day}
                  className={`flex justify-between items-center ${
                    timeSlot.day === currentDay ? "bg-purple-50" : ""
                  }`}
                >
                  <span>{timeSlot.day}</span>
                  <span
                    className={
                      timeSlot.hours === "Closed" ? "text-red-500" : ""
                    }
                  >
                    {timeSlot.hours}
                  </span>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center space-x-2 text-purple-600 hover:text-pink-500 transition-colors"
          >
            <Dog className="w-8 h-8" />
            <span className="text-2xl font-bold">Paws & Claws</span>
          </Link>

          <NavigationMenu>
            <NavigationMenuList className="flex gap-4">
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={`${navigationMenuTriggerStyle()} text-purple-600 hover:text-pink-500 hover:bg-purple-50`}
                >
                  <Link href="/" className="flex items-center gap-2 px-4 py-2">
                    <Home className="w-4 h-4 text-purple-500" />
                    <span>Home</span>
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={`${navigationMenuTriggerStyle()} text-purple-600 hover:text-pink-500 hover:bg-purple-50`}
                >
                  <Link
                    href="/services"
                    className="flex items-center gap-2 px-4 py-2"
                  >
                    <Scissors className="w-4 h-4 text-purple-500" />
                    <span>Services</span>
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={`${navigationMenuTriggerStyle()} text-purple-600 hover:text-pink-500 hover:bg-purple-50`}
                >
                  <Link
                    href="/about"
                    className="flex items-center gap-2 px-4 py-2"
                  >
                    <User className="w-4 h-4 text-purple-500" />
                    <span>About</span>
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={`${navigationMenuTriggerStyle()} text-purple-600 hover:text-pink-500 hover:bg-purple-50`}
                >
                  <Link
                    href="/contact"
                    className="flex items-center gap-2 px-4 py-2"
                  >
                    <MessageCircle className="w-4 h-4 text-purple-500" />
                    <span>Contact</span>
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>



              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={`${navigationMenuTriggerStyle()} text-purple-600 hover:text-pink-500 hover:bg-purple-50`}
                >
                  <Link
                    href="https://calendly.com/pawsnclawspontiac"
                    className="flex items-center gap-2 px-4 py-2"
                  >
                    <Calendar className="w-4 h-4 text-purple-500" />
                    <span>Booking</span>
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>



            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
