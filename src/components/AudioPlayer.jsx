import React, { useState, useEffect, useRef } from 'react';
import { Music, Volume2, VolumeX, Sparkles } from 'lucide-react';
import { birthdayData } from '../config/birthdayData';

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioLoaded, setAudioLoaded] = useState(false);
  const audioRef = useRef(null);
  const synthContextRef = useRef(null);
  const synthIntervalRef = useRef(null);

  useEffect(() => {
    // Attempt loading standard audio file
    const audio = new Audio(birthdayData.music.src);
    audio.loop = true;
    
    audio.addEventListener('canplaythrough', () => {
      setAudioLoaded(true);
    });

    audio.addEventListener('error', () => {
      // Audio file not found - fallback to Web Audio API ambient sound generator
      setAudioLoaded(true); 
    });

    audioRef.current = audio;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      stopSynthAudio();
    };
  }, []);

  // Web Audio API ambient fallback synth
  const playSynthAudio = () => {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!synthContextRef.current) {
        synthContextRef.current = new AudioCtx();
      }
      const ctx = synthContextRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      // Warm pentatonic chord sequence (C4, E4, G4, B4, D5)
      const notes = [261.63, 329.63, 392.00, 493.88, 587.33, 659.25];
      let step = 0;

      const playChord = () => {
        if (!synthContextRef.current) return;
        const now = ctx.currentTime;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        // Warm sine/triangle wave blend
        osc.type = 'triangle';
        const freq = notes[step % notes.length];
        osc.frequency.setValueAtTime(freq, now);

        gain.gain.setValueAtTime(0.001, now);
        gain.gain.exponentialRampToValueAtTime(0.08, now + 0.8);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 3.5);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now);
        osc.stop(now + 3.8);

        step++;
      };

      playChord();
      synthIntervalRef.current = setInterval(playChord, 2200);
    } catch (err) {
      console.warn("Web Audio API error:", err);
    }
  };

  const stopSynthAudio = () => {
    if (synthIntervalRef.current) {
      clearInterval(synthIntervalRef.current);
      synthIntervalRef.current = null;
    }
    if (synthContextRef.current) {
      synthContextRef.current.suspend();
    }
  };

  const togglePlay = () => {
    if (isPlaying) {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      stopSynthAudio();
      setIsPlaying(false);
    } else {
      if (audioRef.current) {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch((err) => {
          console.warn("Audio play fallback:", err);
          playSynthAudio();
          setIsPlaying(true);
        });
      } else {
        playSynthAudio();
        setIsPlaying(true);
      }
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <button
        onClick={togglePlay}
        aria-label={isPlaying ? "Mute ambient music" : "Play ambient music"}
        className={`group flex items-center gap-2.5 px-4 py-2.5 rounded-full glass-card border border-[#EACBD7]/80 text-[#5A3243] font-medium text-xs sm:text-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95 ${
          isPlaying ? 'bg-[#FBE8F0]/90 ring-2 ring-[#E0A3BE]/50' : 'bg-white/80 hover:bg-[#FAF0F4]'
        }`}
      >
        <div className="relative flex items-center justify-center">
          {isPlaying ? (
            <div className="flex items-end space-x-0.5 h-3.5 w-3.5">
              <span className="w-0.5 bg-[#9E4768] rounded-full animate-[bounce_1s_infinite_100ms] h-full" />
              <span className="w-0.5 bg-[#9E4768] rounded-full animate-[bounce_1s_infinite_300ms] h-2/3" />
              <span className="w-0.5 bg-[#9E4768] rounded-full animate-[bounce_1s_infinite_200ms] h-4/5" />
            </div>
          ) : (
            <Music className="w-4 h-4 text-[#9E4768] group-hover:rotate-12 transition-transform duration-300" />
          )}
        </div>

        <span className="hidden sm:inline font-sans font-medium tracking-wide">
          {isPlaying ? birthdayData.music.title : "Play Music 🎵"}
        </span>

        <span className="inline sm:hidden font-sans font-medium">
          {isPlaying ? "Music ON" : "Music"}
        </span>

        {isPlaying ? (
          <Volume2 className="w-3.5 h-3.5 text-[#9E4768]" />
        ) : (
          <VolumeX className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#9E4768]" />
        )}
      </button>
    </div>
  );
}
