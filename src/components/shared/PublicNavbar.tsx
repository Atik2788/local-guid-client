// app/components/PublicNavbarClient.tsx
'use client';

import { useState } from "react";
import { UserInfo } from "@/types/user.interface";
import logo from '../../../public/localGuide.png';
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { ChevronDown, Menu, LayoutDashboard, UserCircle, MapPin, Calendar, Settings } from "lucide-react";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator } from "../ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "../ui/sheet";
import LogoutButton from "./LogoutButton";
import { getDefaultDashboardRoute } from "@/lib/auth-utils";

interface Props {
  accessToken: string | null;
  userInfo: UserInfo | null;
}

const PublicNavbarClient: React.FC<Props> = ({ accessToken, userInfo }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  const navItems = [
    { href: "/explore", label: "Explore Tours" },
    { href: "/all-guides", label: "Explore Guides" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[95%] max-w-6xl bg-white/30 backdrop-blur-md border border-white/20 shadow-lg rounded-xl z-50">
      <div className="flex justify-between items-center px-6 h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group hover:scale-105 transition-all duration-300">
          <Image src={logo} width={50} height={50} alt="LocalGuide Logo" />
          <span className="font-bold text-black text-lg">LocalGuide</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-4">
          {navItems.map(link => (
            <Link
              key={link.label}
              href={link.href}
              className="text-black/90 hover:text-black transition-colors font-medium"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Auth */}
        <div className="hidden md:flex items-center gap-3">
          {accessToken && userInfo ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-2 h-10 px-3 hover:bg-black/10 transition-all duration-200">
                  <Avatar className="h-8 w-8 border-2 border-black/20">
                    <AvatarFallback className="bg-gradient-to-br from-primary to-primary/60 text-white font-semibold text-xs">
                      {getInitials(userInfo.name)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col items-start">
                    <span className="text-sm font-medium text-black">{userInfo.name}</span>
                    <span className="text-xs text-black/70 capitalize">{userInfo.role.toLowerCase()}</span>
                  </div>
                  <ChevronDown className="h-4 w-4 text-black/70" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-64 p-2 bg-white/90 backdrop-blur-md rounded-lg">
                <DropdownMenuLabel className="pb-3">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-12 w-12 border-2 border-black/20">
                      <AvatarFallback className="bg-gradient-to-br from-primary to-primary/60 text-white font-semibold">
                        {getInitials(userInfo.name)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-semibold text-black">{userInfo.name}</p>
                      <p className="text-xs text-black/70">{userInfo.email}</p>
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary capitalize w-fit">
                        {userInfo.role.toLowerCase()}
                      </span>
                    </div>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href={getDefaultDashboardRoute(userInfo.role)} className="flex items-center gap-2 px-3 py-2 rounded-md text-black hover:bg-black/10">
                    <LayoutDashboard className="h-4 w-4" />
                    Dashboard
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/my-profile" className="flex items-center gap-2 px-3 py-2 rounded-md text-black hover:bg-black/10">
                    <UserCircle className="h-4 w-4" />
                    My Profile
                  </Link>
                </DropdownMenuItem>
                {userInfo.role === "GUIDE" && (
                  <>
                    <DropdownMenuItem asChild>
                      <Link href="/guide/dashboard/my-tours" className="flex items-center gap-2 px-3 py-2 rounded-md text-black hover:bg-black/10">
                        <MapPin className="h-4 w-4" />
                        My Tours
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/guide/dashboard/bookings" className="flex items-center gap-2 px-3 py-2 rounded-md text-black hover:bg-black/10">
                        <Calendar className="h-4 w-4" />
                        Bookings
                      </Link>
                    </DropdownMenuItem>
                  </>
                )}
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/settings" className="flex items-center gap-2 px-3 py-2 rounded-md text-black hover:bg-black/10">
                    <Settings className="h-4 w-4" />
                    Settings
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="p-0">
                  <LogoutButton />
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <Link href="/login">
                <Button variant="ghost" size="sm" className="font-medium hover:bg-black/10 text-black">
                  Login
                </Button>
              </Link>
              <Link href="/register">
                <Button  variant="ghost" size="sm" className="font-medium hover:bg-black/10 text-black">
                  Sign Up
                </Button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5 text-black" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] p-0 bg-gray-100">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex flex-col h-full">
                {accessToken && userInfo && (
                  <div className="p-6 bg-gray-200 border-b border-gray-300">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-14 w-14 border-2 border-gray-400">
                        <AvatarFallback className="bg-gradient-to-br from-primary to-primary/60 text-white font-semibold">
                          {getInitials(userInfo.name)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col space-y-1 text-black">
                        <p className="text-base font-semibold">{userInfo.name}</p>
                        <p className="text-xs">{userInfo.email}</p>
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-primary/20 text-primary capitalize w-fit">
                          {userInfo.role.toLowerCase()}
                        </span>
                      </div>
                    </div>
                  </div>
                )}
                <nav className="flex-1 overflow-y-auto p-6 flex flex-col gap-2 text-black">
                  {navItems.map(link => (
                    <Link key={link.label} href={link.href} className="px-3 py-2 text-black rounded-md hover:bg-gray-300 transition-colors">
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <div className="p-6 border-t border-gray-300">
                  {accessToken && userInfo ? (
                    <LogoutButton />
                  ) : (
                    <div className="flex flex-col gap-2">
                      <Link href="/login">
                        <Button variant="outline" className="w-full font-medium text-black">Login</Button>
                      </Link>
                      <Link href="/register">
                        <Button className="w-full font-medium shadow-lg shadow-primary/20 text-black">Sign Up</Button>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default PublicNavbarClient;
