import React from 'react';
import { Layers, Network, Zap, CheckCircle } from 'lucide-react';

export const Philosophy: React.FC = () => {
  return (
    <section className="py-24 bg-brand-dark relative overflow-hidden">
      {/* Decorative blurred blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-20 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            관리할 팀이 많아질수록,<br />
            <span className="text-gray-400">프로젝트는 흔들립니다.</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl">
            콘텐츠, 공간, 운영을 각각 다른 대행사에 맡기는 순간 일정과 책임은 분산됩니다.<br className="hidden md:block"/>
            NUMVALUE는 그 구조를 하나로 묶어 명확한 결과물을 만듭니다.
          </p>
        </div>

        {/* Diagram Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          {/* Before */}
          <div className="p-10 rounded-3xl border border-white/5 bg-white/5 backdrop-blur-sm flex flex-col items-center text-center group hover:border-red-500/30 transition-colors">
            <div className="w-16 h-16 rounded-full bg-red-500/20 flex items-center justify-center mb-6 text-red-400">
              <Network size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Before</h3>
            <p className="text-gray-400 mb-8">
              기획사, 디자인 스튜디오, 운영 대행사...<br/>
              분산된 커뮤니케이션과 책임 소재 불분명
            </p>
            <div className="w-full h-px bg-white/10 my-4"></div>
            <p className="text-sm text-red-400 font-medium">프로젝트의 보이지 않는 균열 발생</p>
          </div>

          {/* Numvalue */}
          <div className="p-10 rounded-3xl border border-white/20 bg-gradient-to-br from-white/10 to-transparent backdrop-blur-md flex flex-col items-center text-center relative shadow-2xl hover:border-white/40 transition-colors">
            <div className="absolute -top-3 px-4 py-1 bg-white text-black text-xs font-bold rounded-full uppercase tracking-widest">
              The Solution
            </div>
            <div className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center mb-6">
              <Layers size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4">NUMVALUE</h3>
            <p className="text-gray-300 mb-8">
              기획부터 제작, 현장 운영, 아카이빙까지.<br/>
              클라이언트는 단 한 명의 책임자와 소통합니다.
            </p>
            <div className="w-full h-px bg-white/10 my-4"></div>
            <p className="text-sm text-white font-bold">하나의 구조로 정리된 압도적 효율</p>
          </div>
        </div>

        {/* 4 Pillars of Process */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '01', title: '구조 진단', desc: '브랜드의 현재 포지션과 감각이 아닌 데이터 기반 분석' },
              { step: '02', title: '전략 설정', desc: '단기 성과용이 아닌 지속 가능한 메시지 구조 설계' },
              { step: '03', title: '직접 실행', desc: '콘텐츠, 공간, 운영을 현장에서 직접 총괄' },
              { step: '04', title: '운영 구조화', desc: '프로젝트 종료 후에도 지속 가능한 매뉴얼 제공' }
            ].map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-brand-gray/50 hover:bg-brand-gray transition-colors border-l-4 border-transparent hover:border-white">
                <span className="text-4xl font-black text-white/10 mb-2 block">{item.step}</span>
                <h4 className="text-lg font-bold mb-2 text-white">{item.title}</h4>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};