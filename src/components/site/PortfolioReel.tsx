import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

const slots = Array.from({ length: 10 }, (_, index) => index + 1);

export function PortfolioReel() {
  const track = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const [interacting, setInteracting] = useState(false);

  function advance(direction: number) {
    const rail = track.current;
    const card = rail?.firstElementChild;
    if (!rail || !card) return;
    const max = rail.scrollWidth - rail.clientWidth;
    const step = card.getBoundingClientRect().width + parseFloat(getComputedStyle(rail).columnGap);
    let target = rail.scrollLeft + direction * step;
    if (direction > 0 && rail.scrollLeft >= max - 2) target = 0;
    if (direction < 0 && rail.scrollLeft <= 2) target = max;
    rail.scrollTo({
      left: Math.max(0, Math.min(target, max)),
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "instant"
        : "smooth",
    });
  }

  useEffect(() => {
    if (paused || interacting) return;
    const timer = window.setInterval(() => {
      const bounds = track.current?.getBoundingClientRect();
      if (!bounds || bounds.bottom <= 0 || bounds.top >= window.innerHeight) return;
      if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) advance(1);
    }, 3300);
    return () => window.clearInterval(timer);
  }, [paused, interacting]);

  return (
    <div>
      <div className="reel-controls">
        <button type="button" onClick={() => advance(-1)} aria-label="Previous projects">
          ←
        </button>
        <button type="button" onClick={() => setPaused(!paused)}>
          {paused ? "Play reel" : "Pause reel"}
        </button>
        <button type="button" onClick={() => advance(1)} aria-label="Next projects">
          →
        </button>
      </div>
      <div
        ref={track}
        className="portfolio-reel"
        aria-label="Ten portfolio slots"
        tabIndex={0}
        onMouseEnter={() => setInteracting(true)}
        onMouseLeave={() => setInteracting(false)}
        onFocus={() => setPaused(true)}
        onTouchStart={() => setPaused(true)}
      >
        {slots.map((slot) => (
          <article key={slot} className="reel-card">
            {slot === 1 ? (
              <Link to="/portfolio/$projectId" params={{ projectId: "project-01" }}>
                <div className="book-cover-square">
                  <img
                    src="/numbers-game.webp"
                    alt="The Numbers Game! by Anthony Jones"
                    loading="lazy"
                  />
                </div>
                <h3>The Numbers Game!</h3>
              </Link>
            ) : (
              <>
                <div className="reel-placeholder">
                  <span>Cover coming soon</span>
                </div>
                {slot === 2 ? (
                  <Link to="/portfolio/$projectId" params={{ projectId: "project-02" }}>
                    <h3>From Being Broke to Building Wealth</h3>
                  </Link>
                ) : (
                  <h3>Project {slot}</h3>
                )}
              </>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
