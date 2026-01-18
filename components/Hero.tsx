import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-brand-black">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0 opacity-80">
        <iframe 
          src='https://my.spline.design/lifeisdice-WrOuid2wzfvNHtA1JMkJO7sY/' 
          frameBorder='0' 
          width='100%' 
          height='100%'
          className="w-full h-full pointer-events-none md:pointer-events-auto"
          title="3D Background"
        ></iframe>
      </div>

      {/* Overlay Gradient for text readability */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-brand-black via-transparent to-black/30 pointer-events-none"></div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 text-center md:text-left w-full mt-20">
        <h2 className="text-sm md:text-base font-medium tracking-[0.3em] text-gray-300 mb-6 uppercase animate-fade-in-up">
          Brand × Content × Space × Community
        </h2>
        
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-black tracking-tighter text-white mb-8 leading-none mix-blend-difference animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          NUMVALUE
        </h1>

        <p className="text-lg md:text-2xl text-gray-200 max-w-2xl mb-10 font-light leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          10년의 문화실행 아카이브가 하나의 스튜디오가 되기까지.<br />
          우리는 흩어진 구조를 하나로 묶습니다.
        </p>

        <div className="flex flex-col md:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <a
            href="#works"
            className="group px-8 py-4 bg-white text-black font-bold text-lg rounded-full flex items-center justify-center gap-2 hover:bg-gray-200 transition-all hover:pr-10"
          >
            포트폴리오 보기
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border border-white/30 text-white backdrop-blur-sm font-medium text-lg rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"
          >
            문의하기
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce text-white/50">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white rounded-full"></div>
        </div>
      </div>
    </div>
  );
};