import React from "react";

const Loader: React.FC = () => (
  <div
    className="fixed inset-0 flex items-center justify-center z-50"
    style={{
      background: "rgba(19,9,27,1)",
        backdropFilter: "blur(20px)",
      WebkitBackdropFilter: "blur(2px)",
    }}
  >
    <div className="w-16 h-16 border-4 border-[#c770f0] border-b-transparent rounded-full animate-spin"></div>
  </div>
);

export default Loader;