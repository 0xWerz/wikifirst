import React, { useEffect, useState } from 'react';
import pkg from '../../../package.json';
export default function Popup(): JSX.Element {
  const [checked, setChecked] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    chrome.storage.local.get({ isActive: false }, (result) => {
      setChecked(result.isActive);
    });
  }, []);

  function handleToggle() {
    chrome.storage.local.set({ isActive: !checked }, () => {
      setChecked(!checked);
    });
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
      <div onClick={handleToggle} className="flex items-center justify-center cursor-pointer" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      >
        <img src="/wikifirst.png" className={`h-36 select-none pointer-events-none ${checked ? 'opacity-100' : 'opacity-20'}`} alt="logo" />
      </div>
      <div className='pt-2 text-center'>
        <p className='text-sm select-none pointer-events-none text-gray-200 opacity-50 hidden' >Click to {checked ? 'disable' : 'enable'}</p>
        <p className="text-2xl font-bold text-gray-300">Wikifirst</p>
        <span className="text-sm text-right text-gray-500 opacity-70">v{pkg.version}</span>
      </div>
    </div >
  );
}
