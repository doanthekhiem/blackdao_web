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
        <div className="flex flex-col min-h-screen relative bg-black/50 h-screen">
          {/* Header */}
          <header className=" py-4 px-8 z-10">
            <nav className="relative flex items-center h-16 container mx-auto">
              <div className="absolute left-0 text-white text-2xl font-bold hover:animate-glitch">
                BLACKDAO
              </div>
              <div className="flex gap-8 justify-center text-xl w-full ">
                <a href="#" className="text-white hover:animate-glitch">
                  HOME
                </a>
                <a href="#" className="text-white hover:animate-glitch">
                  BUY
                </a>
                <a href="#" className="text-white hover:animate-glitch">
                  TWITTER
                </a>
                <a href="#" className="text-white hover:animate-glitch">
                  TELEGRAM
                </a>
              </div>
            </nav>
          </header>

          {/* Main content */}
          <main className="flex-1 container max-w-7xl mx-auto px-4 z-10">
            {children}
          </main>

          {/* Footer */}
          <footer className=" w-fit py-4 text-center container z-10 mx-auto">
            <div className="text-lg bg-black/70 py-2 px-10 text-white rounded-lg">
              5vo59evDjxF589WuEub5l4h7FWQmZC5PbyD5ucbuRqM
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
