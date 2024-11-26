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
        className={`antialiased min-h-screen relative ${audiowide.className}`}
      >
        <div className="flex flex-col min-h-screen relative noise-bg">
          {/* Header */}
          <header className=" py-4 px-8 z-10">
            <nav className="flex justify-between items-center max-w-7xl mx-auto">
              <div className="text-white text-2xl font-bold">BLACKDAO</div>
              <div className="flex gap-8">
                <a href="#" className="text-white">
                  HOME
                </a>
                <a href="#" className="text-white">
                  BUY
                </a>
                <a href="#" className="text-white">
                  TWITTER
                </a>
                <a href="#" className="text-white">
                  TELEGRAM
                </a>
              </div>
            </nav>
          </header>

          {/* Main content */}
          <main className="flex-1 container mx-auto px-4 z-10">{children}</main>

          {/* Footer */}
          <footer className=" py-4 text-center text-white/60 z-10">
            <div className="font-mono text-sm">
              5vo59evDjxF589WuEub5l4h7FWQmZC5PbyD5ucbuRqM
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
