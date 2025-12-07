import { useEffect, useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

function App() {
  const audioRef = useRef(null);

  // Auto-play logic with fallback
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // 1️⃣ Try play muted first
    audio.muted = true;
    audio.play().catch(() => {});

    // 2️⃣ Small delay then unmute
    setTimeout(() => {
      audio.muted = false;
    }, 150);

    // 3️⃣ Fallback: first user interaction
    const unlockAudio = () => {
      audio.play().catch(() => {});
      audio.muted = false;

      window.removeEventListener("click", unlockAudio);
      window.removeEventListener("touchstart", unlockAudio);
      window.removeEventListener("keydown", unlockAudio);
    };

    window.addEventListener("click", unlockAudio, { once: true });
    window.addEventListener("touchstart", unlockAudio, { once: true });
    window.addEventListener("keydown", unlockAudio, { once: true });
  }, []);

  // Handler for “Play Music” button
  const handlePlayMusic = () => {
    if (audioRef.current) {
      audioRef.current.play().catch(() => {});
    }
  };

  return (
    <>
      {/* Hidden looping audio */}
      <audio ref={audioRef} src="/Hbd.mp3" loop />

      {/* BrowserRouter + Routes */}
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Index />

                {/* 🎵 Play Button on landing page */}
                <div style={{ textAlign: "center", marginTop: "2rem" }}>
                  <button
                    onClick={handlePlayMusic}
                    style={{
                      padding: "1rem 2rem",
                      fontSize: "1.2rem",
                      borderRadius: "12px",
                      background: "#111184",
                      color: "white",
                      cursor: "pointer",
                      boxShadow: "0 4px 6px rgba(0,0,0,0.2)",
                    }}
                  >
                    ▶️ PRESS ME 
                  </button>
                </div>
              </>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
