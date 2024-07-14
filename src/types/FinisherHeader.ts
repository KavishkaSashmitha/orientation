// types/finisher-header.d.ts
declare class BackgroundAnimation {
  constructor(config: {
    count: number;
    size: { min: number; max: number; pulse: number };
    speed: { x: { min: number; max: number }; y: { min: number; max: number } };
    colors: { background: string; particles: string[] };
    blending: string;
    opacity: { center: number; edge: number };
    skew: number;
    shapes: string[];
  });
}

declare class FinisherHeader {
  constructor(config: {
    count: number;
    size: { min: number; max: number; pulse: number };
    speed: { x: { min: number; max: number }; y: { min: number; max: number } };
    colors: { background: string; particles: string[] };
    blending: string;
    opacity: { center: number; edge: number };
    skew: number;
    shapes: string[];
  });
}
