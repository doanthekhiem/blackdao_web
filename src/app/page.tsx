import Image from "next/image";

export default function Home() {
  const text =
    `[INNOVATIVE SOLUTIONS] [AI AGENT] [INNOVATIVE SOLUTIONS] [AI AGENT]`.repeat(
      10
    );
  return (
    <div
      className="aspect-[1303/690] flex justify-between flex-col px-5"
      style={{
        backgroundImage: `url('/CITY.webp')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Header*/}
      <div className="overflow-hidden w-full whitespace-nowrap bg-black/40  mt-6">
        <div className="animate-marquee text-lg hover:animate-glitch relative">
          {text}
        </div>
      </div>

      {/* Main content */}
      <div className=" flex gap-8 mt-8 pl-20 pr-[72px]">
        {/* Chat section */}
        <div className="flex-1">
          <div className="text-white text-4xl mb-6 bg-black/80 p-4 w-fit hover:animate-glitch">
            LUCY
          </div>

          {/* Chat messages */}
          <div className="space-y-4">
            <div className="bg-black/40 p-4 rounded text-green-400 hover:animate-glitch">
              Welcome, I&apos;m Lucy!
            </div>
            <div className="bg-black/40 p-4 rounded text-green-400 hover:animate-glitch">
              I&apos;ve been wondering when someone new would arrive. Tell me
              about yourself...
            </div>
            <div className="bg-black/40 p-4 rounded text-purple-400 hover:animate-glitch">
              Hi!
            </div>
          </div>

          {/* Input box */}
          <div className="mt-4 relative hover:animate-glitch">
            <input
              type="text"
              placeholder="Type your message here..."
              className="w-full bg-black/40 text-white p-3 rounded border border-purple-500"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 text-purple-500">
              →
            </button>
          </div>
        </div>

        {/* Avatar section */}
        <div className="w-80 group">
          <Image
            width={360}
            height={360}
            src="/character.png"
            alt="AI Avatar"
            className="rounded-lg group-hover:animate-image-glitch"
          />
        </div>
      </div>
      <div className="overflow-hidden whitespace-nowrap bg-black/40 w-full mb-6">
        <div className="animate-marquee text-lg hover:animate-glitch relative">
          {text}
        </div>
      </div>
    </div>
  );
}
