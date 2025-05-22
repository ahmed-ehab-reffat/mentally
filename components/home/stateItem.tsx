"use client";

import { useState, useEffect, useRef } from "react";

type Props = {
  number: number;
  afterNumber: string;
  label: string;
};

export default function StatItem({ number, afterNumber, label }: Props) {
  const [count, setCount] = useState<number>(0);
  const statRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            if (number <= 0) {
              setCount(number);
              hasAnimated.current = true;
              return;
            }

            const duration = 1500;
            const startTime = performance.now();

            const animate = (currentTime: number) => {
              const elapsedTime = currentTime - startTime;
              const progress = Math.min(elapsedTime / duration, 1);
              setCount(Math.floor(progress * number));

              if (progress < 1) {
                requestAnimationFrame(animate);
              } else {
                hasAnimated.current = true;
              }
            };
            requestAnimationFrame(animate);
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the element is visible
      }
    );

    const currentRef = statRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      observer.disconnect();
    };
  }, [number]);

  return (
    <div
      ref={statRef}
      className="text-center"
      aria-label={`Statistic: ${label}`}
    >
      <div className="text-4xl text-primary font-bold mb-2">
        {count}
        {afterNumber}
      </div>
      <div className="text-sm text-primary uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
}
