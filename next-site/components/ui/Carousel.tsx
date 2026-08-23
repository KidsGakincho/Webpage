"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Carousel.module.css";

type ProductCarouselProps = {
  children: React.ReactNode;
};

export function ProductCarousel({
  children,
}: ProductCarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  /* get the number of product */
  useEffect(() => {
    if (!carouselRef.current) return;

    const items = carouselRef.current.children;

    setTotalItems(items.length);
  }, [children]);

  /* check a position of carousel */
  useEffect(() => {
    const carousel = carouselRef.current;

    if (!carousel) return;

    const handleScroll = () => {
      const firstItem = carousel.children[0] as HTMLElement;

      if (!firstItem) return;

      const itemWidth = firstItem.offsetWidth;

      const gap = 32;

      const index = Math.round(
        carousel.scrollLeft / (itemWidth + gap)
      );

      setCurrentIndex(index);
    };

    carousel.addEventListener(
      "scroll",
      handleScroll,
      { passive: true }
    );

    return () => {
      carousel.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  /* move designation point */
  const scrollTo = (index: number) => {
    const carousel = carouselRef.current;

    if (!carousel) return;

    const item = carousel.children[index] as HTMLElement;

    if (!item) return;

    carousel.scrollTo({
      left: item.offsetLeft,
      behavior: "smooth",
    });
  };

  /* arrow button */
  const scroll = (
    direction: "left" | "right"
  ) => {
    const nextIndex =
      direction === "right"
        ? Math.min(
            currentIndex + 1,
            totalItems - 1
          )
        : Math.max(
            currentIndex - 1,
            0
          );

    scrollTo(nextIndex);
  };

return (
  <div className={styles.wrapper}>

      {/* left arrow */}
      <button
        type="button"
        className={`${styles.arrow} ${styles.arrowLeft}`}
        onClick={() => scroll("left")}
        disabled={currentIndex === 0}
        aria-label="前の制作実績"
      >
        ←
      </button>

      {/* carousel */}
      <div
        ref={carouselRef}
        className={styles.carousel}
      >
        {children}
      </div>

      {/* right arrow */}
      <button
        type="button"
        className={`${styles.arrow} ${styles.arrowRight}`}
        onClick={() => scroll("right")}
        disabled={
          currentIndex === totalItems - 1
        }
        aria-label="次の制作実績"
      >
        →
      </button>

      {/* pointer */}
      <div
        className={styles.indicators}
        aria-label="制作実績の現在位置"
      >
        {Array.from({
          length: totalItems,
        }).map((_, index) => (
          <button
            key={index}
            type="button"
            className={
              index === currentIndex
                ? `${styles.dot} ${styles.active}`
                : styles.dot
            }
            onClick={() => scrollTo(index)}
            aria-label={`${index + 1}番目の制作実績へ移動`}
            aria-current={
              index === currentIndex
                ? "true"
                : undefined
            }
          />
        ))}
      </div>

    </div>
  );
}