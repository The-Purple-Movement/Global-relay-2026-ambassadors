import React, { useState, useEffect } from 'react';

interface CountdownProps {
  targetDate?: string;
  theme?: 'dark' | 'light';
}

export const Countdown: React.FC<CountdownProps> = ({
  targetDate = "2026-10-02T00:00:00Z",
  theme = 'dark',
}) => {
  const [timeLeft, setTimeLeft] = useState({
    days: "02",
    hours: "14",
    minutes: "32",
    seconds: "08",
  });

  useEffect(() => {
    const calculateTime = () => {
      const target = new Date(targetDate).getTime();
      const now = new Date().getTime();
      const difference = target - now;

      if (difference > 0) {
        const d = Math.floor(difference / (1000 * 60 * 60 * 24));
        const h = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const m = Math.floor((difference / 1000 / 60) % 60);
        const s = Math.floor((difference / 1000) % 60);

        setTimeLeft({
          days: String(d).padStart(2, '0'),
          hours: String(h).padStart(2, '0'),
          minutes: String(m).padStart(2, '0'),
          seconds: String(s).padStart(2, '0'),
        });
      } else {
        // Event in progress or showcase fallback
        setTimeLeft({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        });
      }
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  const textColor = theme === 'dark' ? 'text-white-brand' : 'text-dark-brand';
  const labelColor = theme === 'dark' ? 'text-powder-brand/75' : 'text-bluegrey-brand';
  const dividerColor = theme === 'dark' ? 'text-powder-brand/30' : 'text-bluegrey-brand/30';

  return (
    <div className="flex flex-col items-center justify-center my-6 sm:my-8" aria-label="Countdown to AI + Compassion Global Forum 2026">
      <div className="flex items-center justify-center gap-3 sm:gap-6 md:gap-8">
        {/* Days */}
        <div className="flex flex-col items-center">
          <span className={`text-3xl sm:text-5xl md:text-6xl font-light tracking-tight ${textColor} tabular-nums transition-all duration-300`}>
            {timeLeft.days}
          </span>
          <span className={`text-[9px] sm:text-[11px] font-medium uppercase tracking-[0.25em] ${labelColor} mt-1.5`}>
            DAYS
          </span>
        </div>

        <span className={`text-2xl sm:text-4xl font-extralight ${dividerColor} pb-4 select-none`}>
          :
        </span>

        {/* Hours */}
        <div className="flex flex-col items-center">
          <span className={`text-3xl sm:text-5xl md:text-6xl font-light tracking-tight ${textColor} tabular-nums transition-all duration-300`}>
            {timeLeft.hours}
          </span>
          <span className={`text-[9px] sm:text-[11px] font-medium uppercase tracking-[0.25em] ${labelColor} mt-1.5`}>
            HOURS
          </span>
        </div>

        <span className={`text-2xl sm:text-4xl font-extralight ${dividerColor} pb-4 select-none`}>
          :
        </span>

        {/* Minutes */}
        <div className="flex flex-col items-center">
          <span className={`text-3xl sm:text-5xl md:text-6xl font-light tracking-tight ${textColor} tabular-nums transition-all duration-300`}>
            {timeLeft.minutes}
          </span>
          <span className={`text-[9px] sm:text-[11px] font-medium uppercase tracking-[0.25em] ${labelColor} mt-1.5`}>
            MINUTES
          </span>
        </div>

        <span className={`text-2xl sm:text-4xl font-extralight ${dividerColor} pb-4 select-none`}>
          :
        </span>

        {/* Seconds */}
        <div className="flex flex-col items-center">
          <span className={`text-3xl sm:text-5xl md:text-6xl font-light tracking-tight ${textColor} tabular-nums transition-all duration-300`}>
            {timeLeft.seconds}
          </span>
          <span className={`text-[9px] sm:text-[11px] font-medium uppercase tracking-[0.25em] ${labelColor} mt-1.5`}>
            SECONDS
          </span>
        </div>
      </div>
    </div>
  );
};
