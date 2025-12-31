import React from "react";

export default function UploadModal({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl w-[360px] p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-xl"
        >
          ✕
        </button>

        <h2 className="text-lg font-semibold mb-4 text-center">
          Verify Aadhaar
        </h2>

        <div className="space-y-4">
          <input type="file" className="w-full border p-2 rounded" />
          <input type="file" className="w-full border p-2 rounded" />

          <button className="w-full bg-yellow-400 py-2 rounded font-semibold">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
