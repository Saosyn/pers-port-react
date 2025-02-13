import { useState } from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';

export default function ResumePage() {
  const [showResume, setShowResume] = useState(false);

  const handleButtonClick = () => {
    setShowResume(true);
  };

  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-orange-400 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-white text-3xl mb-6">My Resume</h1>
      {!showResume ? (
        <button
          onClick={handleButtonClick}
          className="bg-white text-indigo-500 font-bold py-2 px-4 rounded shadow justify-self-auto transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
        >
          Request My Resume
        </button>
      ) : (
        <div className="w-4/5 h-4/5 border-2 border-white rounded-lg overflow-auto">
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.5.141/build/pdf.worker.min.js">
            <Viewer fileUrl="/Ehli-Resume.pdf" />
          </Worker>
        </div>
      )}
    </div>
  );
}
