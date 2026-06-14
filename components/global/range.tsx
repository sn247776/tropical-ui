"use client";

import { useState, useRef, useEffect } from "react";


interface DualRangeSliderProps {
  min: number;
  max: number;
  step?: number;
  onChange: (range: { min: number; max: number }) => void;
  initialMin?: number;
  initialMax?: number;
}

export default function DualRangeSlider({
  min,
  max,
  step = 1,
  onChange,
  initialMin,
  initialMax,
}: DualRangeSliderProps) {
  const [minVal, setMinVal] = useState(initialMin || min);
  const [maxVal, setMaxVal] = useState(initialMax || max);
  const minValRef = useRef<HTMLInputElement>(null);
  const maxValRef = useRef<HTMLInputElement>(null);
  const range = useRef<HTMLDivElement>(null);

  const getPercent = (value: number) =>
    Math.round(((value - min) / (max - min)) * 100);

  useEffect(() => {
    if (maxValRef.current) {
      const minPercent = getPercent(minVal);
      const maxPercent = getPercent(+maxValRef.current.value);
      if (range.current) {
        range.current.style.left = `${minPercent}%`;
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [minVal]);

  useEffect(() => {
    if (minValRef.current) {
      const minPercent = getPercent(+minValRef.current.value);
      const maxPercent = getPercent(maxVal);
      if (range.current) {
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [maxVal]);

  useEffect(() => {
    onChange({ min: minVal, max: maxVal });
  }, [minVal, maxVal]);

  return (
    <div className="slider-container overflow-hidden">
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={minVal}
        ref={minValRef}
        onChange={(event) => {
          const value = Math.min(+event.target.value, maxVal - step);
          setMinVal(value);
          event.target.value = value.toString();
        }}
        className="thumb thumb--left"
        style={{ zIndex: minVal > max - 100 ? 5 : undefined }}
      />
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={maxVal}
        ref={maxValRef}
        onChange={(event) => {
          const value = Math.max(+event.target.value, minVal + step);
          setMaxVal(value);
          event.target.value = value.toString();
        }}
        className="thumb thumb--right"
      />

      <div className="slider">
        <div className="slider__track over" />
        <div ref={range} className="slider__range" />
      </div>
    </div>
  );
}
