import { Button } from "@/components/ui/button";
import {
  Printer,
  Wifi,
  AlertTriangle,
  Wrench,
  User,
  Linkedin,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import MobileNav from "@/components/mobile-nav";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 gap-4 sm:gap-16 py-2 flex items-center justify-between">
          <Image
            src="/images/hp-logo.svg"
            alt="HP Logo"
            width={48}
            height={48}
          />
          <nav className="hidden md:flex items-center gap-8 font-medium">
            <Link
              href="#"
              className="text-gray-700 hover:text-[#0096D6] transition-colors"
            >
              OfficeJet
            </Link>
            <Link
              href="#"
              className="text-gray-700 hover:text-[#0096D6] transition-colors"
            >
              DeskJet
            </Link>
            <Link
              href="#"
              className="text-gray-700 hover:text-[#0096D6] transition-colors"
            >
              ENVY
            </Link>
            <Link
              href="#"
              className="text-gray-700 hover:text-[#0096D6] transition-colors"
            >
              LaserJet
            </Link>
          </nav>
          <MobileNav />
        </div>
      </header>
      {/* Hero Section */}
      <section className="relative bg-[#0096D6] py-8 px-4 sm:px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 lg:gap-32 justify-between items-center">
            <div className="text-center md:text-left">
              <h1 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
                Need Help Setting Up Your Printer?
              </h1>
              <p className="text-white text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
                Whether you're installing a new printer or reconnecting one you
                already have, we're here to help. Get fast, reliable, and
                hassle-free support to have your printer up and running in no
                time.
              </p>
              <Link href="/123printersetup" className="inline-block">
                <Button
                  size="lg"
                  className="bg-[#1e293b] text-white hover:bg-[#334155] border-2 border-white/20 px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-base rounded-md"
                >
                  Click Here to Setup
                </Button>
              </Link>
            </div>
            <Image
              src="/hp1.webp"
              alt="Printer"
              width={500}
              height={400}
              className="w-full aspect-square max-w-xs sm:max-w-md object-contain"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-12 lg:px-24 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 sm:gap-12">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 flex items-center justify-center">
                  <Printer className="w-16 h-16 text-[#0ea5e9] stroke-[1.5]" />
                  <div className="absolute w-8 h-6 -translate-y-4 -translate-x-2">
                    <Wifi className="w-6 h-6 text-[#0ea5e9] stroke-[2]" />
                  </div>
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                Wireless Printer Setup
              </h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Connect your printer to Wi-Fi and enjoy effortless wireless
                printing from any device — no cables, no hassle.
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 flex items-center justify-center">
                  <div className="relative">
                    <AlertTriangle className="w-16 h-16 text-[#0ea5e9] stroke-[1.5]" />
                    <Wrench className="w-8 h-8 text-[#0ea5e9] stroke-[2] absolute bottom-0 right-0 translate-x-2 translate-y-1" />
                  </div>
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                Troubleshooting Errors
              </h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Quickly resolve connectivity issues and error codes. Our team is
                here to help get your printer back on track.
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 flex items-center justify-center">
                  <div className="relative">
                    <Printer className="w-16 h-16 text-[#0ea5e9] stroke-[1.5]" />
                    <Wrench className="w-8 h-8 text-[#0ea5e9] stroke-[2] absolute top-0 right-0 translate-x-2 -translate-y-1" />
                  </div>
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                Printer Maintenance
              </h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Keep your printer in top shape — improve its performance and
                extend its lifespan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Need Help Section */}
      <section className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-24">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/blurred-printer-and-office-desk-background.jpg')",
            filter: "brightness(0.4)",
          }}
        />
        <div className="relative max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
              Need Help?
            </h2>
            <p className="text-white text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
              We're here for you! Whether you need a little guidance or want us
              to take care of everything, we'll help you set up your printer
              smoothly — no stress, no hassle.
            </p>
            <Link href="#">
              <Button
                size="lg"
                className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-6 text-base rounded-md"
              >
                Click Here to Setup
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How We Can Help Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 sm:gap-12 md:gap-20 lg:gap-32 justify-between items-center">
            <Image
              src="/hp2.webp"
              alt="Printer with sample print"
              width={400}
              height={400}
              className="w-full aspect-square max-w-xs sm:max-w-md object-contain"
            />
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">
                How We Can Help:
              </h2>
              <ul className="space-y-3 sm:space-y-4">
                <li className="flex gap-2 sm:gap-3 text-sm sm:text-base">
                  <span className="text-gray-900 font-bold">•</span>
                  <div>
                    <span className="font-bold text-gray-900">
                      Install Printer Software & Drivers:
                    </span>
                    <span className="text-gray-700">
                      {" "}
                      Latest and customized for your printer model.
                    </span>
                  </div>
                </li>
                <li className="flex gap-2 sm:gap-3 text-sm sm:text-base">
                  <span className="text-gray-900 font-bold">•</span>
                  <div>
                    <span className="font-bold text-gray-900">
                      Connect to Wi-Fi:
                    </span>
                    <span className="text-gray-700">
                      {" "}
                      Quickly connect to your wireless network with expert
                      guidance.
                    </span>
                  </div>
                </li>
                <li className="flex gap-2 sm:gap-3 text-sm sm:text-base">
                  <span className="text-gray-900 font-bold">•</span>
                  <div>
                    <span className="font-bold text-gray-900">
                      Load Paper & Install Cartridges:
                    </span>
                    <span className="text-gray-700">
                      {" "}
                      Get printing right away with simple setup steps.
                    </span>
                  </div>
                </li>
                <li className="flex gap-2 sm:gap-3 text-sm sm:text-base">
                  <span className="text-gray-900 font-bold">•</span>
                  <div>
                    <span className="font-bold text-gray-900">
                      Fix Setup Issues:
                    </span>
                    <span className="text-gray-700">
                      {" "}
                      Resolve setup errors and connectivity glitches.
                    </span>
                  </div>
                </li>
                <li className="flex gap-2 sm:gap-3 text-sm sm:text-base">
                  <span className="text-gray-900 font-bold">•</span>
                  <div>
                    <span className="font-bold text-gray-900">
                      Support for Major Brands:
                    </span>
                    <span className="text-gray-700">
                      {" "}
                      HP, Canon, Epson, Brother, and more.
                    </span>
                  </div>
                </li>
              </ul>
              <div className="mt-6 sm:mt-8">
                <Link href="#" className="inline-block">
                  <Button
                    size="lg"
                    className="bg-[#0ea5e9] text-white hover:bg-[#0891b2] px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-base rounded-md"
                  >
                    Click Here to Setup
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Driver Installation Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-24 bg-gradient-to-r from-[#0891b2] to-[#0ea5e9]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
              Installing the Latest Printer Driver
            </h2>
            <p className="text-white text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
              To keep your printer running smoothly, it's essential to have the
              most up-to-date driver installed. Printer drivers enable smooth
              communication between your printer and computer.
            </p>
            <Link href="#">
              <Button
                size="lg"
                className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-6 text-base rounded-md"
              >
                Click Here to Setup
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-12 lg:px-24 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-gray-500 font-extralight text-sm sm:text-base md:text-lg leading-relaxed mb-8 sm:mb-12">
            Install HP Smart software and drivers on each mobile device or
            computer you want to print from. Add the printer on the new device.
          </p>
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-gray-500 font-extralight text-sm sm:text-base">
            <User className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>Need additional help with setup? Visit </span>
            <Link href="#" className="text-[#0096D6] underline">
              HP Support
            </Link>
          </div>
          <div className="mt-12 sm:mt-20">
            <div className="flex items-center gap-2 text-sm sm:text-base text-gray-700">
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
      <footer className="bg-black text-white font-thin py-8 sm:py-12 px-4 sm:px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {/* About Us Column */}
            <div>
              <h3 className="mb-3 sm:mb-4 text-sm sm:text-base font-medium">About Us</h3>
              <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
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
              <h3 className="mb-3 sm:mb-4 text-sm sm:text-base font-medium">Ways to buy</h3>
              <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
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
              <h3 className="mb-3 sm:mb-4 text-sm sm:text-base font-medium">Support</h3>
              <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
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
              <h3 className="mb-3 sm:mb-4 text-sm sm:text-base font-medium">HP Partners</h3>
              <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
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
              <h3 className="mb-3 sm:mb-4 text-sm sm:text-base font-medium">Stay connected</h3>
              <div className="flex gap-3 sm:gap-4">
                <Link href="#">
                  <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
                </Link>
                <Link href="#">
                  <Facebook className="w-5 h-5 sm:w-6 sm:h-6" />
                </Link>
                <Link href="#">
                  <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
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
                  <Youtube className="w-5 h-5 sm:w-6 sm:h-6" />
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
          <div className="border-t border-gray-800 pt-6 sm:pt-8">
            <div className="flex flex-wrap gap-1.5 sm:gap-2 text-xs sm:text-sm mb-4 sm:mb-6">
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
            <p className="text-xs sm:text-sm">
              ©2025 HP Development Company, L.P. The information contained
              herein is subject to change without notice.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
