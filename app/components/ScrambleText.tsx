"use client";
import { useEffect, useState, useRef } from "react";

interface ScrambleTextProps {
  text: string;
  className?: string;
}

export default function ScrambleText({
  text,
  className = "",
}: ScrambleTextProps) {
  const [displayText, setDisplayText] = useState(text.split("").map(() => ""));
  const [isAnimating, setIsAnimating] = useState(true);
  const letterRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const hasAnimated = useRef(false);

  useEffect(() => {
    // Prevent re-running animation
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    const chars = text.split("");
    const scrambleChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%&*";

    // Wait a bit to ensure refs are set
    setTimeout(() => {
      chars.forEach((targetChar, index) => {
        const letterEl = letterRefs.current[index];
        if (!letterEl) return;

        // Random start position (far away)
        const startAngle =
          ((index * 137.5 + Math.random() * 360) * Math.PI) / 180;
        const startRadius = 400 + Math.random() * 300;
        const startX = Math.cos(startAngle) * startRadius;
        const startY = Math.sin(startAngle) * startRadius;
        const startRotation = (Math.random() - 0.5) * 1080;

        // Set initial hidden state
        letterEl.style.transform = `translate(${startX}px, ${startY}px) rotate(${startRotation}deg) scale(0)`;
        letterEl.style.opacity = "0";

        const scrambleDuration = 1500;
        const settleDelay = 300 + index * 60;
        let scrambleInterval: NodeJS.Timeout;

        setTimeout(() => {
          // Start scrambling
          scrambleInterval = setInterval(() => {
            const randomChar =
              scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
            setDisplayText((prev) => {
              const newText = [...prev];
              newText[index] = randomChar;
              return newText;
            });
          }, 40);

          // Fly in to final position
          letterEl.style.transition =
            "all 1.8s cubic-bezier(0.34, 1.56, 0.64, 1)";
          letterEl.style.transform = "translate(0, 0) rotate(0deg) scale(1)";
          letterEl.style.opacity = "1";

          // Settle to final character
          setTimeout(() => {
            clearInterval(scrambleInterval);
            setDisplayText((prev) => {
              const newText = [...prev];
              newText[index] = targetChar;
              return newText;
            });

            if (index === chars.length - 1) {
              setTimeout(() => setIsAnimating(false), 500);
            }
          }, scrambleDuration);
        }, settleDelay);
      });
    }, 100);
  }, [text]);

  return (
    <div className={`relative ${className}`}>
      <div className="flex flex-wrap justify-center md:justify-start gap-1 md:gap-2">
        {text.split("").map((char, index) => (
          <span
            key={index}
            ref={(el) => {
              letterRefs.current[index] = el;
            }}
            className={`
              inline-block font-extrabold text-5xl md:text-7xl
              ${char === " " ? "w-4 md:w-8" : ""}
              ${
                isAnimating
                  ? ""
                  : "hover:scale-110 hover:-translate-y-2 hover:rotate-3"
              }
              ${
                !isAnimating
                  ? "drop-shadow-[0_0_10px_rgba(168,85,247,0.6)]"
                  : ""
              }
            `}
            style={{
              backgroundImage: isAnimating
                ? "linear-gradient(135deg, #06b6d4, #a855f7)"
                : "linear-gradient(135deg, #a855f7, #06b6d4)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            {displayText[index] || ""}
          </span>
        ))}
      </div>
    </div>
  );
}
