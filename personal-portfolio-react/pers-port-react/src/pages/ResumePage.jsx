import { Worker, Viewer } from '@react-pdf-viewer/core';

export default function ResumePage() {
  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-orange-400 h-screen flex flex-col items-center justify-center">
      <h1 className="text-white text-3xl mb-6">My Resume</h1>
      <div className="w-4/5 h-4/5 border-2 border-white rounded-lg overflow-hidden">
        <Worker
          workerUrl={`https://unpkg.com/pdfjs-dist@3.5.141/build/pdf.worker.min.js`}
        >
          <Viewer fileUrl="/pers-port-react/public/Ehli-Resume.pdf" />
        </Worker>
      </div>
    </div>
  );
}
