"use client";
import { useEffect, useRef, useState } from "react";

export default function AudioTest() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isIOSReady, setIsIOSReady] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [showOverlay, setShowOverlay] = useState(true);

  // Hàm phát audio trong loop
  const playAudioLoop = async () => {
    if (!audioRef.current) {
      console.log("Audio ref not ready");
      return;
    }
    
    try {
      console.log("Starting playback...");
      audioRef.current.currentTime = 0;
      audioRef.current.volume = 1;
      const finalPlayPromise = audioRef.current.play();
      if (finalPlayPromise !== undefined) {
        await finalPlayPromise;
        console.log("Audio playing successfully");
      }
    } catch (error) {
      console.error("Audio loop error:", error);
    }
  };

  // Hàm khởi tạo và phát audio
  const initAndPlayAudio = async () => {
    if (!audioRef.current) {
      console.log("Audio ref not ready");
      return;
    }
    
    try {
      console.log("Starting initialization...");
      // Khởi tạo audio
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        await playPromise;
        await new Promise(resolve => setTimeout(resolve, 100));
        audioRef.current.pause();
        console.log("Initialization successful");
        
        // Đánh dấu đã sẵn sàng và ẩn overlay
        setIsIOSReady(true);
        setShowOverlay(false);
        
        // Phát audio lần đầu
        await playAudioLoop();
        
        // Thiết lập interval
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
        intervalRef.current = setInterval(playAudioLoop, 2000);
      }
    } catch (error) {
      console.error("Init error:", error);
    }
  };

  // Cleanup khi component unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  // Kiểm tra audio loaded
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener('loadeddata', () => {
        console.log("Audio file loaded successfully");
      });
      audioRef.current.addEventListener('error', (e) => {
        console.error("Audio loading error:", e);
      });
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black/80">
      {/* Overlay div để bắt sự kiện click */}
      {showOverlay && (
        <div 
          className="fixed inset-0 w-full h-full z-50 cursor-pointer"
          style={{ opacity: 0 }}
          onClick={async (e) => {
            e.stopPropagation();
            console.log("Overlay clicked");
            await initAndPlayAudio();
          }}
        />
      )}

      <h1 className="text-4xl text-white mb-8 hover:animate-glitch">
        Audio Test Page
      </h1>

      <div className="bg-black/40 p-8 rounded-lg hover:animate-glitch">
        <audio
          playsInline={true}
          preload="auto"
          ref={audioRef}
          src="/audios/Recording.m4a"
          onCanPlay={() => console.log("Audio can play now")}
        />
      </div>
    </div>
  );
}
