"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function LoadingPage() {
  const router = useRouter();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 0;
        }
        return prev + 1;
      });
    }, 5);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push("/error");
    }, 5000);

    return () => clearTimeout(timeout);
  }, [router]);

  return (
    <div className="bg-white flex items-center justify-center px-4">
      <div className="max-w-7xl w-full flex flex-col md:flex-row gap-12 items-start">
        {/* Left Section */}
        <div className="space-y-8 flex pt-10 flex-col md:flex-row items-start gap-10">
          <div className="w-40 aspect-square relative">
            <Image src="/images/hp-logo.svg" alt="HP Logo" fill />
          </div>

          <div>
            {/* Text Content */}
            <div className="space-y-4">
              <h1 className="text-4xl text-nowrap font-semibold leading-relaxed text-black">
                Downloading Product <br /> Driver
              </h1>
              <p className="text-lg text-gray-700">
                Download and install your printer software
              </p>
            </div>
            {/* Progress Bar */}
            <div className="space-y-3 my-10">
              <div className="w-4/12 max-w-md h-4 bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#0096D6] transition-all duration-100 ease-linear rounded-full"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <p className="text-sm text-gray-800 font-medium">
                Please Wait...
              </p>
            </div>
            <p className="text-cyan-500 text-lg font-medium">
              Connecting to Server
            </p>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="relative w-full h-[400px] lg:h-[500px]">
          <Image
            src="/images/loading-image.png"
            alt="HP Printer with multiple devices showing software interface"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
}
