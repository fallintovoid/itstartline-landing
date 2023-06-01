"use client";

import React, { useRef, useEffect } from "react";
import * as blobs2Animate from "blobs/v2/animate";

type Props = {
  size: number;
  color: string;
  duration: number;
  opacity: number;
};

export default function Blob({ size, color, duration, opacity }: Props) {
  const canvas = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (canvas.current) {
      const ctx = canvas.current.getContext("2d");
      if (ctx) {
        ctx.fillStyle = color;

        const animation = blobs2Animate.canvasPath();
        const renderAnimation = () => {
          ctx.clearRect(0, 0, size, size);
          ctx.fill(animation.renderFrame());
          requestAnimationFrame(renderAnimation);
        };
        requestAnimationFrame(renderAnimation);
        const loopAnimation = () => {
          animation.transition({
            duration,
            timingFunction: "ease",
            callback: loopAnimation,
            blobOptions: {
              seed: Math.random(),
              extraPoints: 4,
              randomness: 6,
              size,
            },
          });
        };

        animation.transition({
          duration: 0, // Render immediately.
          callback: loopAnimation,
          blobOptions: {
            seed: Math.random(),
            extraPoints: 3,
            randomness: 6,
            size,
          },
        });
      }
    }
  }, [size, color, duration, opacity]);

  return (
    <canvas
      style={{ opacity, maxWidth: "100%" }}
      ref={canvas}
      width={size}
      height={size}
    />
  );
}
