import React from 'react';

const Footnote: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/video/delivery.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay content */}
      <div className="p-12 font-bold z-10 text-white drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] text-center">
        <h1 className="mb-6 text-4xl xl:text-5xl">Saduak App</h1>
        <h2 className="mb-2 text-2xl xl:text-3xl tracking-tight">
          Local Tasty, Fast Delivery, Guaranteed Reliable
        </h2>
      </div>
    </div>
  );
};

export default Footnote;
