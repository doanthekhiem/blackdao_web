import type { Metadata } from "next";
import "./globals.css";
import { Audiowide } from "next/font/google";

const audiowide = Audiowide({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BlackDAO",
  description: "BlackDAO AI Agent Interface",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased min-h-screen relative noise-bg ${audiowide.className}`}
        suppressHydrationWarning={true}
      >
        <div className="flex flex-col min-h-screen relative bg-black/50 md:h-screen">
          {/* Header */}
          <header className="py-2 md:py-4 px-4 md:px-8 z-10">
            <nav className="relative flex flex-col md:flex-row items-center h-auto md:h-16 container mx-auto">
              <div className="text-white text-xl md:text-2xl font-bold hover:animate-glitch mb-4 md:mb-0">
                BLACKDAO
              </div>
              <div className="flex flex-wrap gap-4 md:gap-8 justify-center text-base md:text-xl w-full">
                <a href="#" className="text-white hover:animate-glitch">
                  HOME
                </a>
                <a href="#" className="text-white hover:animate-glitch">
                  BUY
                </a>
                <a
                  href="https://x.com/BLACKDAOAI"
                  className="text-white hover:animate-glitch"
                >
                  TWITTER
                </a>
                <a
                  href="https://t.me/BLACK_DAO"
                  className="text-white hover:animate-glitch"
                >
                  TELEGRAM
                </a>
              </div>
            </nav>
          </header>

          {/* Main content */}
          <main className="flex-1 container max-w-7xl mx-auto px-2 md:px-4 z-10">
            {children}
          </main>

          {/* Footer */}
          <footer className="w-fit py-2 md:py-4 md:pb-20 text-center container z-10 mx-auto">
            <div className="text-base md:text-lg bg-black/70 py-1 md:py-2 px-4 md:px-10 text-white rounded-lg break-all">
              BlackDAO AI Agent Contract
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
