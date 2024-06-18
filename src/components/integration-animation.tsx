"use client";

import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import React, { forwardRef, useRef } from "react";
import { Icons } from "@/icons";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 relative text-xs justify-center items-center bg-background flex aspect-square size-10 rounded-full border before:absolute before:-inset-2 before:rounded-full before:border dark:border-white/10  dark:before:border-white/5 dark:before:bg-white/5",
        className
      )}
    >
      {children}
    </div>
  );
});

export function AnimatedBeamMultipleInputDemo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const userRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg  bg-background p-10 md:shadow-xl"
      ref={containerRef}
    >
      <div className="flex h-full w-full flex-row items-stretch justify-between gap-10">
        <div className="flex flex-col justify-center gap-6">
          <Circle ref={div1Ref}>
            <Icons.globe />
          </Circle>
          <Circle ref={div2Ref}>
            <Icons.globe />
          </Circle>
          <Circle ref={div3Ref}>
            <Icons.globe />
          </Circle>
        </div>
        <div className="flex flex-col justify-center">
          <Circle ref={logoRef} className="h-16 w-16">
            <Icons.logo />
          </Circle>
        </div>
        <div className="flex flex-col justify-center">
          <Circle ref={userRef}>
            <Icons.user />
          </Circle>
        </div>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={logoRef}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={logoRef}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={logoRef}
      />

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={logoRef}
        toRef={userRef}
      />
    </div>
  );
}
