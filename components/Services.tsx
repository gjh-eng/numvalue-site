import React from 'react';
import { Video, Box, Users, MessageCircle } from 'lucide-react';

const services = [
  {
    id: 'content',
    icon: <Video size={48} />,
    title: 'CONTENT',
    subtitle: '운영 목적에 맞춘 콘텐츠 구조 설계',
    items: ['숏폼 / 브랜드 필름 / 인터뷰 영상', '3D 비주얼 / 모션 그래픽', '플랫폼별 확산 구조 기획', '채널 운영 및 커뮤니티 관리']
  },
  {
    id: 'space',
    icon: <Box size={48} />,
    title: 'SPACE',
    subtitle: '현장 동선 및 운영 인력 기준 설계',
    items: ['팝업스토어 / 전시 / 체험형 이벤트', '공간 콘셉트 기획 및 동선 설계', '체류 경험 디자인', '공간 자체를 콘텐츠로 전환']
  },
  {
    id: 'operation',
    icon: <Users size={48} />,
    title: 'OPERATION',
    subtitle: '운영 안정성 기준 프로세스 설계',
    items: ['현장 매뉴얼 제작 및 스태프 교육', '스태프 구성 및 역할 배치', '일정/안전/위기 관리', '매출 구조 및 효율성 관리']
  },
  {
    id: 'community',
    icon: <MessageCircle size={48} />,
    title: 'COMMUNITY',
    subtitle: '지속 운영 가능한 참여 구조 설계',
    items: ['미디어 채널 운영 및 성장 전략', '팬덤 형성 구조 설계', 'UGC 및 체험단 운영', '커뮤니티 반응 분석 및 피드백']
  }
];

export const Services: React.FC = () => {
  return (
    <section className="py-32 bg-brand-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-24 flex flex-col md:flex-row items-end justify-between border-b border-white/20 pb-8">
          <div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4">OUR AREAS</h2>
            <p className="text-gray-400 max-w-md">
              책임은 이 4가지 영역으로 완벽하게 관리됩니다.<br/>
              NUMVALUE는 모든 영역을 인하우스 수준으로 실행합니다.
            </p>
          </div>
          <div className="hidden md:block text-right">
             <span className="text-sm text-gray-500">SCROLL DOWN</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          {services.map((service, index) => (
            <div key={service.id} className="group">
              <div className="mb-6 text-gray-500 group-hover:text-white transition-colors duration-500">
                {service.icon}
              </div>
              <h3 className="text-3xl font-black mb-2 uppercase tracking-wide">{service.title}</h3>
              <p className="text-lg text-white/80 font-medium mb-8 pb-4 border-b border-white/10">
                {service.subtitle}
              </p>
              
              <ul className="space-y-4">
                {service.items.map((item, idx) => (
                  <li key={idx} className="flex items-start text-gray-400 group-hover:text-gray-300 transition-colors">
                    <span className="w-1.5 h-1.5 bg-white rounded-full mt-2 mr-3 opacity-50 group-hover:opacity-100"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};