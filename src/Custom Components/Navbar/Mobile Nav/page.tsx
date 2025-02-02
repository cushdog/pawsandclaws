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
  MessageCircle,
  Menu,
  User,
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
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

interface BusinessHour {
  day: string;
  hours: string;
  isToday: boolean;
}

const MobileNavbar = () => {
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

  const menuItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/services", label: "Services", icon: Scissors },
    { href: "/about", label: "About", icon: User },
    { href: "/contact", label: "Contact", icon: MessageCircle },
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
        <div className="flex items-center justify-between text-sm">
          {/* Phone number only for mobile */}
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span><a href='tel:8158481201'>(815) 848-1201</a></span>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center space-x-2 hover:text-pink-200 transition-colors">
                <Clock className="w-4 h-4" />
                <span className={isCurrentlyOpen ? "text-green-300" : "text-red-300"}>
                  {todayHours}
                </span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-64">
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
                  <span className={timeSlot.hours === "Closed" ? "text-red-500" : ""}>
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
        <div className="px-4 py-3 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center space-x-2 text-purple-600 hover:text-pink-500 transition-colors"
          >
            <Dog className="w-8 h-8" />
            <span className="text-xl font-bold">Paws & Claws</span>
          </Link>

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-purple-600 hover:text-pink-500 hover:bg-purple-50"
              >
                <Menu className="w-6 h-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-sm">
              <SheetHeader className="pb-4 border-b">
                <SheetTitle className="flex items-center space-x-2 text-purple-600">
                  <Dog className="w-6 h-6" />
                  <span>Paws & Claws</span>
                </SheetTitle>
              </SheetHeader>

              <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10">
                <div className="flex flex-col space-y-2 pr-6">
                  {/* Location info in sheet */}
                  <div className="flex items-center gap-2 px-4 py-3 text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span><a href='https://www.google.com/maps?q=512+N+Locust+St,+Pontiac,+IL+61764'>512 N Locust St, Pontiac, IL 61764</a></span>
                  </div>
                  
                  <div className="h-px bg-gray-100 my-2" />
                  
                  {/* Navigation Links */}
                  {menuItems.map((item) => (
                    <SheetClose asChild key={item.href}>
                      <Link
                        href={item.href}
                        className="flex items-center space-x-2 px-4 py-3 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors"
                      >
                        <item.icon className="w-5 h-5" />
                        <span className="font-medium">{item.label}</span>
                      </Link>
                    </SheetClose>
                  ))}
                  
                  <div className="h-px bg-gray-100 my-2" />
                  
                  {/* Business Hours in sheet */}
                  <div className="px-4 py-2">
                    <h3 className="font-semibold text-gray-900 mb-2">Business Hours</h3>
                    {businessHours.map((timeSlot) => (
                      <div
                        key={timeSlot.day}
                        className={`flex justify-between py-1 ${
                          timeSlot.day === currentDay ? "text-purple-600 font-medium" : "text-gray-600"
                        }`}
                      >
                        <span>{timeSlot.day}</span>
                        <span className={timeSlot.hours === "Closed" ? "text-red-500" : ""}>
                          {timeSlot.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollArea>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;