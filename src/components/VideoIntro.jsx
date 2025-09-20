import React from "react";

export default function VideoIntro() {
  return (
    <section id="video" className="py-20 px-6 bg-gray-900 text-center">
      <h2 className="text-4xl font-bold mb-6">Intro Video</h2>
      <div className="flex justify-center">
        {/* TODO: Replace intro.mp4 with your actual intro video */}
        <video 
          className="w-full max-w-2xl h-72 md:h-96 rounded-xl shadow-lg"
          src="/intro.mp4"
          controls
        />
      </div>
    </section>
  );
}
