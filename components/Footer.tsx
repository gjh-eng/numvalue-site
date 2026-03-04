import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-20 px-6 border-t border-white/10 text-gray-500 text-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
        <div className="md:w-1/3">
           <h2 className="text-2xl text-white font-black mb-6">NUMVALUE</h2>
           <p className="mb-4">
             Brand × Content × Space × Community<br/>
             One Team Structure.
           </p>
           <p>
             다음 프로젝트는 당신의 브랜드입니다.
           </p>
        </div>

        <div className="md:w-1/3">
           <h3 className="text-white font-bold mb-4 uppercase tracking-wider">Contact</h3>
           <ul className="space-y-2">
             <li>Email: info@numvalue.com </li>
             <li>Instagram: @numvalue </li>
             
           </ul>
        </div>

        <div className="md:w-1/3">
          
           <p className="mt-8 text-xs opacity-50">© 2026 NUMVALUE. All rights reserved. build by @damnoldshit </p>
        </div>
      </div>
    </footer>
  );
};
