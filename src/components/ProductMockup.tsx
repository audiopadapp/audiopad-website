'use client';
import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';

export default function ProductMockup() {
  return (
    <div className="relative mx-auto mt-12 sm:mt-16 max-w-5xl">
      <div className="absolute -inset-x-8 -bottom-8 -top-4 -z-10 rounded-3xl bg-surface-2/60 blur-2xl" />

      <div className="hairline overflow-hidden rounded-xl bg-surface shadow-[0_30px_80px_-40px_rgba(60,50,30,0.35)]">
        <ReactBeforeSliderComponent
          firstImage={{ imageUrl: "/app-mockup-white.png" }}
          secondImage={{ imageUrl: "/app-mockup-black.png" }}
          delimiterIconStyles={{
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            background: "linear-gradient(180deg, white 50%, black 50%)",
            border: "1px solid #000",
            boxShadow: "0 0 0 2px white",
          }}
        />
      </div>
    </div>
  );
}
