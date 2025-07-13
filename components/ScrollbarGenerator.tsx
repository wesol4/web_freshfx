import React, { useState } from 'react';

const ScrollbarGenerator: React.FC = () => {
  const [width, setWidth] = useState(7);
  const [trackColor, setTrackColor] = useState('#2d1950');
  const [thumbColor, setThumbColor] = useState('rgba(178, 121, 216, 0.959)');
  const [hoverColor, setHoverColor] = useState('rgba(222, 130, 235, 0.911)');
  const [radius, setRadius] = useState(12);

  const cssCode = `::-webkit-scrollbar {\n  width: ${width}px;\n}\n\n` +
    `::-webkit-scrollbar-track {\n  background: ${trackColor};\n}\n\n` +
    `::-webkit-scrollbar-thumb {\n  background: ${thumbColor};\n  border-radius: ${radius}px;\n}\n\n` +
    `::-webkit-scrollbar-thumb:hover {\n  background: ${hoverColor};\n  border-radius: ${radius}px;\n}`;

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(cssCode);
      alert('CSS copied to clipboard');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <section className="py-20" id="scrollbars">
      <div className="container mx-auto px-4 max-w-xl">
        <h2 className="text-4xl font-bold mb-8 text-center">
          Scrollbar <strong className="text-[#c770f0]">Generator</strong>
        </h2>
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <label className="w-32" htmlFor="width">Width</label>
            <input id="width" type="number" value={width}
              onChange={e => setWidth(parseInt(e.target.value) || 0)}
              className="flex-1 p-2 rounded bg-gray-800 border border-gray-700" />
          </div>
          <div className="flex items-center space-x-2">
            <label className="w-32" htmlFor="track">Track color</label>
            <input id="track" type="text" value={trackColor}
              onChange={e => setTrackColor(e.target.value)}
              className="flex-1 p-2 rounded bg-gray-800 border border-gray-700" />
          </div>
          <div className="flex items-center space-x-2">
            <label className="w-32" htmlFor="thumb">Thumb color</label>
            <input id="thumb" type="text" value={thumbColor}
              onChange={e => setThumbColor(e.target.value)}
              className="flex-1 p-2 rounded bg-gray-800 border border-gray-700" />
          </div>
          <div className="flex items-center space-x-2">
            <label className="w-32" htmlFor="hover">Hover color</label>
            <input id="hover" type="text" value={hoverColor}
              onChange={e => setHoverColor(e.target.value)}
              className="flex-1 p-2 rounded bg-gray-800 border border-gray-700" />
          </div>
          <div className="flex items-center space-x-2">
            <label className="w-32" htmlFor="radius">Border radius</label>
            <input id="radius" type="number" value={radius}
              onChange={e => setRadius(parseInt(e.target.value) || 0)}
              className="flex-1 p-2 rounded bg-gray-800 border border-gray-700" />
          </div>
        </div>

        <div className="mt-8">
          <pre className="bg-gray-900 p-4 rounded text-sm overflow-x-auto whitespace-pre-wrap">
{cssCode}
          </pre>
          <button onClick={copyToClipboard}
            className="mt-2 px-4 py-2 bg-[#c770f0] text-white rounded hover:bg-opacity-80">
            Copy CSS
          </button>
        </div>
      </div>
    </section>
  );
};

export default ScrollbarGenerator;
