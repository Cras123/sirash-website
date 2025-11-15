"use client";
import React, { useState, useEffect } from "react";
import {
  Gift,
  Lock,
  Unlock,
  Calendar,
  Clock,
  Sparkles,
  Heart,
  Star,
  Cake,
} from "lucide-react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function BirthdayPage() {
  const BIRTHDAY_PASSWORD = "iloveyou";
  const birthdayDate = new Date("2025-11-17T00:00:00");
  const DEMO_MODE = false;

  // 📸 ADD HER PHOTO URL HERE 📸
  // Put her photo in your /public folder (e.g., /public/birthday-photo.jpg)
  // Then just use the filename:
  const BACKGROUND_PHOTO = "/priyanka/bgphoto.jpg";

  // Or if it's in a subfolder like /public/images/her-photo.jpg, use:
  const BACKGROUND_PHOTO2 = "/priyanka/bgphoto2.JPG";

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
  const [isBirthday, setIsBirthday] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const [isUnlocked, setIsUnlocked] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [showConfetti, setShowConfetti] = useState<boolean>(false);
  const [message, setMessage] = useState<string>(""); // currently displayed message

  const emojis = [
    {
      symbol: "🎈",
      msg: "🎈 तिमी बोल्दा लाग्छ, मसँगै हावा पनि मुस्कुराइदिन्छ।!",
    },
    {
      symbol: "🎁",
      msg: "🎁 Bade bade deshon mein aisi chhoti chhoti baatein hoti rehti hain, Senorita.",
    },
    {
      symbol: "🎊",
      msg: "🎊 Itni shiddat se maine tumhe paane ki koshish ki hai, ki har zarre ne mujhe tumse milane ki koshish ki hai. Kehte hain agar kisi cheez ko dil se chaaho, toh poori kainat tumhein usse milane ki koshish mein lag jaati hai.",
    },
    {
      symbol: "🎉",
      msg: "🎉 तिमी नहुँदा मनै खाली जस्तो हुन्छ, तर आज तिमी जन्मिएको दिन… म त पूर्ण हुन्छु।",
    },
    { symbol: "🍰", msg: "🍰 Teri aankhon ki namkeen mastiyaan" },
    {
      symbol: "🎂",
      msg: "🎂 Tum ho mast, tum ho best,Tumhare bina lage life waste!",
    },
    { symbol: "✨", msg: "✨ May your dreams shine bright!" },
    {
      symbol: "💝",
      msg: "💝 तिमी जन्मिएरमात्र म यो संसारलाई केही बढी प्रेम गर्छु",
    },
  ];

  useEffect(() => {
    if (DEMO_MODE) {
      setIsBirthday(true);
      setShowConfetti(true);
      setIsLoading(false);
      return;
    }

    const timer = setInterval(() => {
      const now = new Date();
      const difference = birthdayDate.getTime() - now.getTime();

      if (difference <= 0) {
        setIsBirthday(true);
        setShowConfetti(true);
        setIsLoading(false);
        clearInterval(timer);
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        setTimeLeft({ days, hours, minutes, seconds });
        setIsLoading(false);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handlePasswordSubmit = (): void => {
    if (password === BIRTHDAY_PASSWORD) {
      setIsUnlocked(true);
      setError("");
    } else {
      setError("Incorrect password. Try again!");
      setPassword("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") {
      handlePasswordSubmit();
    }
  };

  // New Animation: Fireworks Confetti
  const FireworksConfetti = () => (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {[...Array(60)].map((_, i) => {
        const colors = [
          "#FF1744",
          "#F50057",
          "#D500F9",
          "#651FFF",
          "#2979FF",
          "#00B0FF",
          "#00E5FF",
          "#1DE9B6",
          "#76FF03",
          "#FFEA00",
          "#FFC400",
          "#FF6F00",
        ];
        return (
          <div
            key={i}
            className="absolute"
            style={{
              left: `${50}%`,
              top: `${50}%`,
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              backgroundColor:
                colors[Math.floor(Math.random() * colors.length)],
              animation: `fireworkExplosion ${1.5 + Math.random()}s ease-out ${
                Math.random() * 2
              }s infinite`,
              transform: `rotate(${i * (360 / 60)}deg)`,
              boxShadow: `0 0 10px ${
                colors[Math.floor(Math.random() * colors.length)]
              }`,
            }}
          />
        );
      })}
      <style>{`
        @keyframes fireworkExplosion {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 1;
          }
          100% {
            transform: translate(calc(50vw * cos(var(--angle))), calc(50vh * sin(var(--angle)))) scale(0);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );

  // New Animation: Beautiful Butterflies
  const FloatingButterflies = () => (
    <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
      {[...Array(12)].map((_, i) => {
        const duration = 8 + Math.random() * 6;
        const delay = Math.random() * 5;
        const size = 24 + Math.random() * 16;
        const colors = [
          "text-blue-400",
          "text-cyan-400",
          "text-sky-400",
          "text-indigo-400",
          "text-teal-400",
          "text-violet-400",
        ];
        return (
          <div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `butterflyFloat ${duration}s ease-in-out infinite`,
              animationDelay: `${delay}s`,
            }}
          >
            <div
              className={`${
                colors[i % colors.length]
              } transition-all duration-500`}
              style={{
                fontSize: `${size}px`,
                filter: "drop-shadow(0 2px 8px rgba(0, 0, 0, 0.2))",
                transform: "rotate(0deg)",
              }}
            >
              🦋
            </div>
          </div>
        );
      })}
      <style>{`
        @keyframes butterflyFloat {
          0%, 100% { 
            transform: translate(0, 0) rotate(0deg);
            opacity: 0.6;
          }
          25% { 
            transform: translate(40px, -30px) rotate(15deg);
            opacity: 0.9;
          }
          50% { 
            transform: translate(-20px, -60px) rotate(-10deg);
            opacity: 0.7;
          }
          75% { 
            transform: translate(30px, -40px) rotate(20deg);
            opacity: 0.85;
          }
        }
      `}</style>
    </div>
  );

  // New Animation: Floating Hearts
  const FloatingHearts = () => (
    <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            bottom: "-50px",
            animation: `heartRise ${4 + Math.random() * 3}s ease-in infinite`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        >
          <Heart
            className="text-pink-400"
            fill="currentColor"
            style={{
              width: `${20 + Math.random() * 20}px`,
              height: `${20 + Math.random() * 20}px`,
              filter: "drop-shadow(0 0 8px rgba(244, 114, 182, 0.6))",
              opacity: 0.6,
            }}
          />
        </div>
      ))}
      <style>{`
        @keyframes heartRise {
          0% {
            transform: translateY(0) translateX(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.6;
          }
          90% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(-100vh) translateX(${
              Math.random() * 100 - 50
            }px) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );

  // New Animation: Sparkle Rain
  const SparkleRain = () => (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {[...Array(40)].map((_, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `-${Math.random() * 50}px`,
            animation: `sparkleRain ${3 + Math.random() * 4}s linear infinite`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        >
          <Sparkles
            className="text-yellow-300"
            style={{
              width: `${12 + Math.random() * 12}px`,
              height: `${12 + Math.random() * 12}px`,
              filter: "drop-shadow(0 0 6px rgba(253, 224, 71, 0.8))",
            }}
          />
        </div>
      ))}
      <style>{`
        @keyframes sparkleRain {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 flex items-center justify-center">
        <div
          className="text-white text-xl md:text-2xl font-semibold"
          style={{ animation: "fadeIn 0.8s ease-in" }}
        >
          Loading your special page...
        </div>
      </div>
    );
  }

  if (!isBirthday && timeLeft) {
    return (
      <div className="min-h-screen relative flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-hidden">
        {/* Background with HER PHOTO */}
        {/* Background with HER PHOTO on sides */}
        <div className="absolute inset-0 z-0 flex">
          {/* Left side panel */}
          <div
            className="w-1/4 h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${BACKGROUND_PHOTO2})`,
              filter: "brightness(0.8) blur(1px)",
            }}
          />
          {/* Center empty/transparent for content */}
          <div className="flex-1 h-full bg-black/10" />
          {/* Right side panel */}
          <div
            className="w-1/4 h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${BACKGROUND_PHOTO2})`,
              filter: "brightness(0.8) blur(1px)",
            }}
          />
        </div>

        <FloatingButterflies />

        <div
          className="relative z-10 bg-white/90 backdrop-blur-xl rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-6 md:p-10 lg:p-12 max-w-4xl w-full"
          style={{ animation: "zoomIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)" }}
        >
          <div className="text-center mb-6 sm:mb-8">
            {/* Photo behind countdown text */}
            <div className="relative mb-6 sm:mb-8">
              <div
                className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto rounded-full bg-cover bg-center shadow-2xl border-4 sm:border-6 border-white"
                style={{
                  backgroundImage: `url(${BACKGROUND_PHOTO})`,
                  animation: "pulse 3s ease-in-out infinite",
                }}
              />
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 sm:px-6 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg">
                Birthday Girl 👑
              </div>
            </div>
            <div
              className="relative inline-block"
              style={{ animation: "bounce 2s ease-in-out infinite" }}
            >
              <Calendar className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 mx-auto mb-3 sm:mb-4 text-blue-600" />
              <div
                className="absolute -top-1 -right-1 w-6 h-6 sm:w-8 sm:h-8 bg-cyan-400 rounded-full flex items-center justify-center"
                style={{
                  animation: "ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite",
                }}
              >
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
              </div>
            </div>
            <h4
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-2 sm:mb-3 bg-gradient-to-r from-blue-600 via-cyan-600 to-indigo-600 bg-clip-text text-transparent"
              style={{ animation: "slideInDown 0.8s ease-out" }}
            >
              Counting down the days to celebrate you—another year of
              adventures, smiles, and dreams!
            </h4>
            <p
              className="text-lg sm:text-xl md:text-2xl text-gray-600 font-semibold"
              style={{ animation: "fadeIn 1s ease-out 0.3s both" }}
            >
              November 17, 2025
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8">
            {[
              {
                label: "Days",
                value: timeLeft.days,
                color: "from-blue-500 to-blue-700",
                icon: Calendar,
              },
              {
                label: "Hours",
                value: timeLeft.hours,
                color: "from-cyan-500 to-cyan-700",
                icon: Clock,
              },
              {
                label: "Minutes",
                value: timeLeft.minutes,
                color: "from-indigo-500 to-indigo-700",
                icon: Heart,
              },
              {
                label: "Seconds",
                value: timeLeft.seconds,
                color: "from-sky-500 to-sky-700",
                icon: Star,
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className={`bg-gradient-to-br ${item.color} rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 text-white shadow-lg relative overflow-hidden group cursor-pointer`}
                  style={{ animation: `flipIn 0.6s ease-out ${i * 0.1}s both` }}
                >
                  <div className="absolute top-2 right-2 opacity-20 group-hover:opacity-40 transition-opacity">
                    <Icon className="w-8 h-8 sm:w-12 sm:h-12" />
                  </div>
                  <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-1 sm:mb-2 relative z-10">
                    {item.value}
                  </div>
                  <div className="text-xs sm:text-sm md:text-base uppercase tracking-wider font-semibold relative z-10">
                    {item.label}
                  </div>
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
                </div>
              );
            })}
          </div>

          <div
            className="text-center bg-gradient-to-r from-blue-100 via-cyan-100 to-indigo-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 relative overflow-hidden"
            style={{ animation: "fadeIn 1s ease-out 0.8s both" }}
          >
            <div className="absolute inset-0 opacity-10">
              <Cake
                className="absolute top-2 left-2 w-12 h-12 text-blue-400"
                style={{ animation: "wiggle 2s ease-in-out infinite" }}
              />
              <Cake
                className="absolute top-2 right-2 w-12 h-12 text-cyan-400"
                style={{ animation: "wiggle 2s ease-in-out infinite 0.5s" }}
              />
            </div>
            <Clock
              className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 mx-auto mb-2 sm:mb-3 text-blue-600"
              style={{ animation: "spin 4s linear infinite" }}
            />
            <p className="text-base sm:text-lg md:text-xl text-gray-700 font-semibold relative z-10">
              Something magical is waiting for you... ✨
            </p>
          </div>
        </div>

        <style>{`
          @keyframes zoomIn {
            from { opacity: 0; transform: scale(0.8); }
            to { opacity: 1; transform: scale(1); }
          }
          @keyframes slideInDown {
            from { opacity: 0; transform: translateY(-30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes flipIn {
            from { opacity: 0; transform: rotateY(90deg); }
            to { opacity: 1; transform: rotateY(0); }
          }
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-15px); }
          }
          @keyframes ping {
            75%, 100% { transform: scale(2); opacity: 0; }
          }
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes wiggle {
            0%, 100% { transform: rotate(-5deg); }
            50% { transform: rotate(5deg); }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-hidden">
      {/* Background with HER PHOTO */}
      <div className="absolute inset-0 z-0 grid grid-cols-[25%_1fr_25%]">
        <div
          className="h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${BACKGROUND_PHOTO2})`,
            filter: "brightness(0.8) blur(1px)",
          }}
        />
        <div className="h-full bg-black/10" />
        <div
          className="h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${BACKGROUND_PHOTO2})`,
            filter: "brightness(0.8) blur(1px)",
          }}
        />
      </div>

      {showConfetti && <SparkleRain />}
      <FloatingHearts />
      <FloatingButterflies />

      <div
        className="relative z-10 bg-white/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-6 md:p-10 lg:p-12 max-w-4xl w-full"
        style={{ animation: "zoomIn 1s cubic-bezier(0.34, 1.56, 0.64, 1)" }}
      >
        <div className="text-center mb-6 sm:mb-8">
          <div
            className="relative inline-block"
            style={{ animation: "bounce 1.5s ease-in-out infinite" }}
          >
            <Gift
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto mb-3 sm:mb-4 text-blue-500"
              style={{ animation: "rotate 3s ease-in-out infinite" }}
            />
            <div
              className="absolute -top-2 -right-2 w-8 h-8 sm:w-10 sm:h-10 bg-cyan-400 rounded-full flex items-center justify-center"
              style={{ animation: "pulse 1.5s ease-in-out infinite" }}
            >
              <Star className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
          </div>

          <h1
            className="text-2xl sm:text-3xl md:text-3xl lg:text-6xl xl:text-5xl font-bold mb-3 sm:mb-4 leading-tight"
            style={{ animation: "slideInDown 0.8s ease-out" }}
          >
            <span className="inline-block bg-gradient-to-r from-blue-500 via-cyan-500 to-indigo-500 bg-clip-text text-transparent">
              🎉 Happy Birthday love! 🎂
            </span>
          </h1>

          <p
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-700 font-bold mb-3 sm:mb-4"
            style={{ animation: "fadeIn 1s ease-out 0.3s both" }}
          >
            November 17, 2025
          </p>
          <p className="text-sm text-gray-500">
            click the emoji to see the message
          </p>
          <div className="text-center">
            <div className="flex justify-center gap-2 sm:gap-3 flex-wrap mb-4">
              {emojis.map((emoji, i) => (
                <span
                  key={i}
                  className="text-3xl sm:text-4xl md:text-5xl inline-block cursor-pointer hover:scale-125 transition-transform"
                  style={{
                    animation: `bounce 1.5s ease-in-out infinite`,
                    animationDelay: `${i * 0.15}s`,
                  }}
                  onClick={() => setMessage(emoji.msg)}
                >
                  {emoji.symbol}
                </span>
              ))}
            </div>

            {message && (
              <div className="mt-4 text-lg sm:text-xl md:text-2xl font-semibold text-gray-700 bg-yellow-100 p-3 rounded-lg inline-block animate-fadeIn">
                {message}
              </div>
            )}

            <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
          </div>
        </div>

        <div
          className="bg-gradient-to-r from-blue-100 via-cyan-100 to-indigo-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 mb-6 sm:mb-8 shadow-lg border-4 border-blue-300 relative overflow-hidden"
          style={{ animation: "fadeIn 1s ease-out 0.5s both" }}
        >
          <div className="absolute top-0 left-0 w-full h-full opacity-5">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute text-6xl"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animation: `wiggle ${
                    2 + Math.random()
                  }s ease-in-out infinite ${Math.random() * 2}s`,
                }}
              >
                {["🦋", "💙", "🎂", "✨"][i % 4]}
              </div>
            ))}
          </div>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-800 text-center leading-relaxed font-semibold relative z-10">
            🌟 To the most amazing girl in the world, Happy Birthday, my love!
            Here’s to your happiness today and always. ✨💖
          </p>
        </div>

        {!isUnlocked ? (
          <div
            className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 text-center shadow-lg border-2 border-blue-200"
            style={{ animation: "fadeIn 1s ease-out 0.7s both" }}
          >
            <div className="relative inline-block mb-3 sm:mb-4">
              <Lock
                className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 mx-auto text-blue-600"
                style={{ animation: "pulse 2s ease-in-out infinite" }}
              />
              <Sparkles
                className="w-6 h-6 sm:w-8 sm:h-8 absolute -top-1 -right-1 text-cyan-500"
                style={{ animation: "spin 3s linear infinite" }}
              />
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-2 sm:mb-3 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              🎬 Special Birthday Video 🎬
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4 sm:mb-6 font-medium">
              Enter the secret password to unlock your birthday surprise! 🔐✨
            </p>

            <div className="max-w-md mx-auto">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="🔑 Enter password"
                className="w-full px-4 py-3 sm:py-4 rounded-lg sm:rounded-xl border-3 border-blue-400 focus:border-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-200 mb-3 sm:mb-4 text-center text-base sm:text-lg md:text-xl font-semibold transition-all duration-300"
              />
              {error && (
                <div
                  className="bg-red-100 border-2 border-red-400 rounded-lg p-2 sm:p-3 mb-3 sm:mb-4"
                  style={{ animation: "shake 0.5s ease-in-out" }}
                >
                  <p className="text-red-600 font-bold text-sm sm:text-base">
                    {error}
                  </p>
                </div>
              )}
              <button
                onClick={handlePasswordSubmit}
                className="w-full bg-gradient-to-r from-blue-500 via-cyan-500 to-indigo-500 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg sm:rounded-xl hover:shadow-2xl active:scale-95 shadow-lg text-base sm:text-lg md:text-xl transition-all duration-300 hover:scale-105"
              >
                🎁 Unlock Video 🎁
              </button>
            </div>
          </div>
        ) : (
          <div
            className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg border-2 border-green-200"
            style={{
              animation: "zoomIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)",
            }}
          >
            <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <Unlock
                className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-green-600"
                style={{ animation: "bounce 1.5s ease-in-out infinite" }}
              />
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">
                🎉 Birthday Video! 🎉
              </h2>
            </div>
            <div
              className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border-4 border-blue-300"
              style={{ paddingBottom: "56.25%" }}
            >
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="/priyanka/birthday.mp4"
                title="Birthday Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <p className="text-center text-gray-700 mt-3 sm:mt-4 text-base sm:text-lg md:text-xl font-semibold">
              Hope you enjoy this special message! 💝🎊✨
            </p>
          </div>
        )}
      </div>

      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-8px); }
          20%, 40%, 60%, 80% { transform: translateX(8px); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.05); }
        }
        @keyframes rotate {
          0% { transform: rotate(0deg); }
          25% { transform: rotate(-10deg); }
          75% { transform: rotate(10deg); }
          100% { transform: rotate(0deg); }
        }
      `}</style>
    </div>
  );
}
