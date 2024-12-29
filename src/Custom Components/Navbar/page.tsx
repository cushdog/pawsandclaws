"use client";

import React from 'react';
import { useMediaQuery } from "@/hooks/use-media-query";
import DesktopNavbar from '@/Custom Components/Navbar/Desktop Nav/page';
import MobileNavbar from '@/Custom Components/Navbar/Mobile Nav/page';

const NavbarController = () => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  
  return isDesktop ? <DesktopNavbar /> : <MobileNavbar />;
};

export default NavbarController;
