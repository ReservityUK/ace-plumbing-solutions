'use client';

import { JSX, useState } from 'react';
import Image from 'next/image';

type ImageGalleryProps = {
  images: string[];
};

export default function ImageGallery({ images }: ImageGalleryProps): JSX.Element {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div>
      {/* Gallery Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 mt-5">
        {images.map((src, idx) => (
          <div key={idx} className="cursor-pointer">
            <img
              src={src}
              alt={`Image ${idx + 1}`}
              width={600}
              height={400}
              className="rounded shadow"
              onClick={() => setSelectedImage(src)}
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center">
          <div className="relative">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 text-white text-3xl font-bold z-50"
              aria-label="Close"
            >
              ×
            </button>
            <img
              src={selectedImage}
              alt="Expanded view"
              width={1000}
              height={700}
              className="rounded max-h-[90vh] object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}
