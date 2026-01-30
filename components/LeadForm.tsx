import React, { useRef, useState } from 'react';
import { Send, Check, Download } from 'lucide-react';

export const LeadForm: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleSubmit = () => {
    // action 방식 제출은 브라우저가 처리 (target=iframe)
    setFormState('submitting');

    // UX용: 바로 success로 바꾸거나(빠름), 약간 딜레이 줄 수 있음
    window.setTimeout(() => {
      setFormState('success');
      formRef.current?.reset();
    }, 600);
  };

  return (
    <section className="py-32 bg-white text-black relative">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-16">
        <div className="w-full md:w-1/2">
          <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter">
            NEXT PROJECT<br />
            IS YOUR BRAND.
          </h2>
          <p className="text-xl font-medium mb-12 text-gray-600">
            NUMVALUE의 기획, 실행, 운영 전반에 걸친 책임 있는 협업.<br />
            단기적인 제작이 아닌, 지속 가능한 성과를 원하신다면<br />
            회사소개서를 확인해보세요.
          </p>

          <div className="bg-gray-100 p-8 rounded-2xl border border-gray-200">
            <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
              <Download size={20} />
              포함된 내용
            </h4>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center gap-2">
                <Check size={16} className="text-green-500" /> 상세 포트폴리오 및 성과 데이터
              </li>
              <li className="flex items-center gap-2">
                <Check size={16} className="text-green-500" /> 표준 견적 가이드라인
              </li>
              <li className="flex items-center gap-2">
                <Check size={16} className="text-green-500" /> 협업 프로세스 및 TF 구성안
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full md:w-1/2 bg-black text-white p-10 md:p-14 rounded-3xl shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gray-800 rounded-full blur-[100px] opacity-50 pointer-events-none"></div>

          <h3 className="text-2xl font-bold mb-2">회사소개서 신청하기</h3>
          <p className="text-gray-400 mb-8 text-sm">정보를 입력해주시면 이메일로 즉시 발송됩니다.</p>

          {/* ✅ 페이지 이동 방지용 hidden iframe */}
          <iframe
            name="hidden_iframe"
            title="hidden_iframe"
            style={{ display: 'none' }}
          />

          {formState === 'success' ? (
            <div className="h-64 flex flex-col items-center justify-center text-center animate-fade-in-up">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-4 text-black">
                <Check size={32} />
              </div>
              <h4 className="text-2xl font-bold mb-2">신청 완료</h4>
              <p className="text-gray-400">
                입력하신 이메일로 소개서를 발송했습니다.<br />
                곧 담당자가 확인 후 연락드리겠습니다.
              </p>
              <button
                onClick={() => setFormState('idle')}
                className="mt-8 text-sm text-gray-500 underline hover:text-white"
              >
                다른 이메일로 다시 신청하기
              </button>
            </div>
          ) : (
            <form
              ref={formRef}
              action="https://numvalue.getform.com/y50jr"
              method="POST"
              target="hidden_iframe"
              onSubmit={handleSubmit}
              className="space-y-6 relative z-10"
            >
              {/* ✅ Honeypot */}
              <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

              <div>
                <label htmlFor="company" className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                  Company / Brand
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  placeholder="브랜드 또는 회사명을 입력하세요"
                  className="w-full bg-white/10 border border-white/20 rounded-lg p-4 text-white placeholder-gray-500 focus:outline-none focus:border-white focus:bg-white/20 transition-all"
                />
              </div>

              <div>
                <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                  Contact Person
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="담당자 성함/직급"
                  className="w-full bg-white/10 border border-white/20 rounded-lg p-4 text-white placeholder-gray-500 focus:outline-none focus:border-white focus:bg-white/20 transition-all"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="example@company.com"
                  className="w-full bg-white/10 border border-white/20 rounded-lg p-4 text-white placeholder-gray-500 focus:outline-none focus:border-white focus:bg-white/20 transition-all"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  placeholder="010-0000-0000"
                  className="w-full bg-white/10 border border-white/20 rounded-lg p-4 text-white placeholder-gray-500 focus:outline-none focus:border-white focus:bg-white/20 transition-all"
                />
              </div>

              <button
                type="submit"
                disabled={formState === 'submitting'}
                className="w-full bg-white text-black font-bold text-lg py-5 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 mt-4 disabled:opacity-60"
              >
                {formState === 'submitting' ? (
                  'Processing...'
                ) : (
                  <>
                    회사소개서 받기 <Send size={18} />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
