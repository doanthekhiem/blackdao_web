"use client";
import { useEffect, useRef, useState } from "react";

export default function AudioTest() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [autoPlay, setAutoPlay] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [isIOSReady, setIsIOSReady] = useState(false);

  const playAudio = async () => {
    if (audioRef.current) {
      try {
        audioRef.current.currentTime = 0;
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (error) {
        console.error("Lỗi phát audio:", error);
      }
    }
  };

  const handlePlayPause = async () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
        setAutoPlay(false);
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      } else {
        await playAudio();
        setIsIOSReady(true);
      }
    }
  };

  const toggleAutoPlay = async () => {
    if (!isIOSReady) {
      alert("Vui lòng nhấn Play một lần để kích hoạt audio trên iOS");
      return;
    }

    setAutoPlay(!autoPlay);
  };

  useEffect(() => {
    if (autoPlay && isIOSReady) {
      intervalRef.current = setInterval(playAudio, 2000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, [autoPlay, isIOSReady]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black/80">
      <h1 className="text-4xl text-white mb-8 hover:animate-glitch">
        Audio Test Page
      </h1>

      <div className="bg-black/40 p-8 rounded-lg hover:animate-glitch flex flex-col gap-4">
        <audio
          playsInline={true}
          ref={audioRef}
          autoPlay={true}
          src="/audios/new_effect_pop_updated.mp3"
          className="mb-4"
        />

        <button
          onClick={handlePlayPause}
          className="bg-purple-500 text-white px-6 py-3 rounded-lg hover:bg-purple-600 transition-colors"
        >
          {isPlaying ? "Pause" : "Play"}
        </button>

        <button
          onClick={toggleAutoPlay}
          className={`px-6 py-3 rounded-lg transition-colors ${
            autoPlay
              ? "bg-red-500 hover:bg-red-600"
              : "bg-green-500 hover:bg-green-600"
          } text-white`}
        >
          {autoPlay ? "Tắt Auto Play" : "Bật Auto Play (2s)"}
        </button>
      </div>
    </div>
  );
}
