import React from 'react';

const works = [
  {
    id: 1,
    client: 'PERWARE',
    category: 'BRAND STRATEGY & LAUNCH',
    title: '웨어러블 뷰티 브랜드 런칭 및 팝업',
    desc: '브랜드 런칭부터 대규모 팝업스토어 운영, 통합 마케팅 전략까지 전 과정 총괄. 누적 방문객 5만, 팝업 3회 성공.',
    image: 'https://picsum.photos/seed/perware1/800/1000', 
    tags: ['Brand Strategy', 'Pop-up', 'Design']
  },
  {
    id: 2,
    client: 'DEAR DAHLIA x INSTANTFUNK',
    category: 'COLLABORATION EXHIBITION',
    title: 'Romance and Funk: The Fanciful World',
    desc: '뷰티와 패션 브랜드의 협업 전시. 단순 병치가 아닌 두 브랜드의 시너지를 극대화하는 경험 설계.',
    image: 'https://picsum.photos/seed/deardahlia/800/1000',
    tags: ['Space', 'Exhibition', 'Collaboration']
  },
  {
    id: 3,
    client: 'NOITOW',
    category: 'EVENT & SPACE',
    title: 'Swim Rave Party',
    desc: '국내 최초 실내 수영장 이벤트. 안전 리스크 관리와 대규모 현장 운영 역량이 요구된 프로젝트.',
    image: 'https://picsum.photos/seed/noitow/800/1000',
    tags: ['Event', 'Safety', 'Operation']
  },
  {
    id: 4,
    client: 'HERITER',
    category: 'CAMPAIGN FILM',
    title: '프리미엄 리빙 브랜드 캠페인',
    desc: '온라인 퍼포먼스 콘텐츠와 오프라인 공간 경험을 하나의 응집력 있는 브랜드 스토리로 통합.',
    image: 'https://picsum.photos/seed/heriter/800/1000',
    tags: ['Film', 'Marketing', 'Premium']
  }
];

export const Works: React.FC = () => {
  return (
    <section className="py-32 bg-zinc-900 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-8xl font-black mb-20 leading-none text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">
          SELECTED<br />WORKS
        </h2>

        <div className="space-y-32">
          {works.map((work, index) => (
            <div 
              key={work.id} 
              className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 md:gap-24 items-center group`}
            >
              {/* Image Side */}
              <div className="w-full md:w-1/2 relative overflow-hidden rounded-lg aspect-[4/5] md:aspect-square">
                <div className="absolute inset-0 bg-gray-800 animate-pulse-slow"></div>
                <img 
                  src={work.image} 
                  alt={work.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100"
                  loading="lazy"
                />
                <div className="absolute bottom-6 left-6 flex flex-wrap gap-2">
                   {work.tags.map(tag => (
                     <span key={tag} className="px-3 py-1 bg-black/80 backdrop-blur-sm text-xs font-bold uppercase border border-white/20">
                       {tag}
                     </span>
                   ))}
                </div>
              </div>

              {/* Text Side */}
              <div className="w-full md:w-1/2">
                <span className="text-sm font-bold tracking-widest text-gray-500 mb-4 block uppercase">
                  {work.category}
                </span>
                <h3 className="text-4xl md:text-5xl font-bold mb-6 group-hover:text-white transition-colors text-gray-200">
                  {work.client}
                </h3>
                <p className="text-xl md:text-2xl font-light leading-relaxed text-gray-400 mb-8 border-l-2 border-white/20 pl-6">
                  {work.title}
                </p>
                <p className="text-gray-500 leading-relaxed mb-8 max-w-md">
                  {work.desc}
                </p>
                <button className="text-sm font-bold border-b border-white pb-1 hover:opacity-70 transition-opacity">
                   VIEW CASE STUDY
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-32 text-center">
             <p className="text-2xl font-bold mb-8">10년의 아카이브, 검증된 실행 경험</p>
             <div className="flex flex-wrap justify-center gap-4 text-gray-500 text-sm uppercase tracking-wide">
                <span>Vlades</span> <span className="text-gray-700">/</span>
                <span>House of Rebels</span> <span className="text-gray-700">/</span>
                <span>OFS Magazine</span> <span className="text-gray-700">/</span>
                <span>Boiler Room Seoul</span> <span className="text-gray-700">/</span>
                <span>Seoul Fashion Festival</span>
             </div>
        </div>
      </div>
    </section>
  );
};