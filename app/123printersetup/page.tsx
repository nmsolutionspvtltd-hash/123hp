"use client";

import {
  Search,
  User,
  Linkedin,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation";
import { useState } from "react";
import MobileNav from "@/components/mobile-nav";

export default function PrinterSetupPage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleNext = () => {
    if (!searchQuery.trim()) return;
    
    setIsLoading(true);
    setTimeout(() => {
      router.push("/loading");
    }, 2000);
  };
  return (
    <div className="flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 gap-4 sm:gap-16 py-2 flex items-center justify-between">
          <Image src="/images/hp-logo.svg" alt="HP Logo" width={48} height={48} />
          <nav className="hidden md:flex items-center gap-8 font-medium">
            <Link href="#" className="text-gray-700 hover:text-[#0096D6] transition-colors">
              OfficeJet
            </Link>
            <Link href="#" className="text-gray-700 hover:text-[#0096D6] transition-colors">
              DeskJet
            </Link>
            <Link href="#" className="text-gray-700 hover:text-[#0096D6] transition-colors">
              ENVY
            </Link>
            <Link href="#" className="text-gray-700 hover:text-[#0096D6] transition-colors">
              LaserJet
            </Link>
          </nav>
          <MobileNav />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 relative overflow-hidden" style={{backgroundImage:"url(/bg.png)"}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-12 relative z-10">
            <div className="space-y-6 sm:space-y-8">
              <h1 className="text-2xl sm:text-3xl md:text-4xl tracking-wide font-light text-white">
                Set up your HP printer
              </h1>

              <p className="text-base sm:text-lg md:text-2xl font-extralight tracking-tight text-white/90">
                Enter your HP product name and model number to get the right HP Smart software and drivers for you
              </p>

              {/* Search form */}
              <div className="space-y-4 flex flex-col md:flex-row md:items-center md:space-y-0 md:space-x-4 w-full md:w-3/4 lg:w-2/3 xl:w-1/2">
                <div className="relative flex-1">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder='Enter your product name here. Example: "OfficeJet 9010"'
                    className="w-full p-2.5 sm:p-3 pr-10 sm:pr-12 rounded-lg text-sm sm:text-base text-gray-800 font-extralight tracking-tight bg-white focus:outline-none"
                    disabled={isLoading}
                  />
                  <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                </div>

                <button 
                  onClick={handleNext}
                  disabled={isLoading || !searchQuery.trim()}
                  className="px-6 py-2.5 sm:py-3 bg-gray-600/50 text-gray-300 text-sm sm:text-base font-medium rounded-2xl disabled:cursor-not-allowed"
                >
                  {isLoading ? "Loading..." : "Next"}
                </button>
              </div>

              <div className="space-y-4 sm:space-y-6 font-extralight text-sm sm:text-base">
                <Link href="#" className="text-white underline hover:no-underline block">
                  Where's the product name?
                </Link>
                <Link href="#" className="text-white underline hover:no-underline block">
                  My device is not listed
                </Link>
              </div>
            </div>
        </div>
      </main>

       {/* Additional Info Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-12 lg:px-24 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-gray-500 font-extralight text-lg leading-relaxed mb-12">
            Install HP Smart software and drivers on each mobile device or
            computer you want to print from. Add the printer on the new device.
          </p>
          <div className="flex items-center gap-3 text-gray-500 font-extralight">
            <User className="w-5 h-5" />
            <span>Need additional help with setup? Visit </span>
            <Link href="#" className="text-[#0096D6] underline">
              HP Support
            </Link>
          </div>
          <div className="mt-20">
            <div className="flex items-center gap-2 text-gray-700">
              <Image
                src="/us-flag.png"
                alt="US Flag"
                width={20}
                height={20}
                className="w-5 h-4"
              />
              <Link href="#" className="text-[#0096D6] underline font-medium">
                United States
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white font-thin py-12 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
            {/* About Us Column */}
            <div>
              <h3 className="mb-4">About Us</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#">Contact HP</Link>
                </li>
                <li>
                  <Link href="#">Careers</Link>
                </li>
                <li>
                  <Link href="#">Investor relations</Link>
                </li>
                <li>
                  <Link href="#">Sustainable impact</Link>
                </li>
                <li>
                  <Link href="#">Inclusion at HP</Link>
                </li>
                <li>
                  <Link href="#">Newsroom</Link>
                </li>
                <li>
                  <Link href="#">Tech Takes</Link>
                </li>
                <li>
                  <Link href="#">HP Store Newsletter</Link>
                </li>
                <li>
                  <Link href="#">HP Printables Newsletter</Link>
                </li>
              </ul>
            </div>

            {/* Ways to buy Column */}
            <div>
              <h3 className="mb-4">Ways to buy</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#">Shop online</Link>
                </li>
                <li>
                  <Link href="#">Call an HP rep</Link>
                </li>
                <li>
                  <Link href="#">Find a reseller</Link>
                </li>
                <li>
                  <Link href="#">Enterprise store</Link>
                </li>
                <li>
                  <Link href="#">Public sector purchasing</Link>
                </li>
              </ul>
            </div>

            {/* Support Column */}
            <div>
              <h3 className="mb-4">Support</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#">Download drivers</Link>
                </li>
                <li>
                  <Link href="#">Support & troubleshooting</Link>
                </li>
                <li>
                  <Link href="#">Community</Link>
                </li>
                <li>
                  <Link href="#">Authorized service providers</Link>
                </li>
                <li>
                  <Link href="#">Check repair status</Link>
                </li>
                <li>
                  <Link href="#">Fraud alert</Link>
                </li>
                <li>
                  <Link href="#">Security Center</Link>
                </li>
              </ul>
            </div>

            {/* HP Partners Column */}
            <div>
              <h3 className="mb-4">HP Partners</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#">HP Amplify Partner Program</Link>
                </li>
                <li>
                  <Link href="#">HP Partner Portal</Link>
                </li>
                <li>
                  <Link href="#">Developers</Link>
                </li>
              </ul>
            </div>

            {/* Stay connected Column */}
            <div>
              <h3 className="mb-4">Stay connected</h3>
              <div className="flex gap-4">
                <Link href="#">
                  <Linkedin className="w-6 h-6" />
                </Link>
                <Link href="#">
                  <Facebook className="w-6 h-6" />
                </Link>
                <Link href="#">
                  <Instagram className="w-6 h-6" />
                </Link>
                <Link href="#">
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </Link>
                <Link href="#">
                  <Youtube className="w-6 h-6" />
                </Link>
                <Link href="#">
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Footer Bottom Links */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-wrap gap-2 text-sm mb-6">
              <Link href="#">Recalls</Link>
              <span>|</span>
              <Link href="#">Product recycling</Link>
              <span>|</span>
              <Link href="#">Accessibility</Link>
              <span>|</span>
              <Link href="#">CA Supply Chains Act</Link>
              <span>|</span>
              <Link href="#">Privacy</Link>
              <span>|</span>
              <Link href="#">Use of cookies</Link>
              <span>|</span>
              <Link href="#">Your privacy choices</Link>
              <span>|</span>
              <Link href="#">Terms of use</Link>
              <span>|</span>
              <Link href="#">Limited warranty statement</Link>
              <span>|</span>
              <Link href="#">Terms & conditions of sales & service</Link>
              <span>|</span>
              <Link href="#">IP Notices</Link>
            </div>
            <p className="text-sm">
              ©2025 HP Development Company, L.P. The information contained
              herein is subject to change without notice.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
