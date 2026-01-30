import React, { useRef, useState } from 'react';
import { Send, Check, Download } from 'lucide-react';

export const LeadForm: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('submitting');

    const formData = new FormData(e.currentTarget);

    try {
      // ✅ 반드시 getform.io 주소를 사용해야 데이터가 전송됩니다.
      const response = await fetch("https://getform.io/f/jm5ln", {
        method: "POST",
        body: formData,
        headers: {
          "Accept": "application/json",
        },
      });

      if (response.ok) {
        setFormState('success');
        formRef.current?.reset();
      } else {
        alert("전송에 실패했습니다. Getform 설정을 확인해주세요.");
        setFormState('idle');
      }
    } catch (error) {
      console.error("Error!", error);
      alert("네트워크 오류가 발생했습니다.");
      setFormState('idle');
    }
  };

  return (
    <section className="py-32 bg-white text-black relative">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-16">
        {/* 왼쪽 섹션 */}
        <div className="w-full md:w-1/2">
          <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter">
            NEXT PROJECT<br />
            IS YOUR BRAND.
          </h2>
          <p className="text-xl font-medium mb-12 text-gray-600">
            NUMVALUE의 기획, 실행, 운영 전반에 걸친 책임 있는 협업.<br />
            지속 가능한 성과를 원하신다면 회사소개서를 확인해보세요.
          </p>

          <div className="bg-gray-100 p-8 rounded-2xl border border-gray-200">
            <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
              <Download size={20} />
              포함된 내용
            </h4>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center gap-2"><Check size={16} className="text-green-500" /> 상세 포트폴리오 및 성과 데이터</li>
              <li className="flex items-center gap-2"><Check size={16} className="text-green-500" /> 표준 견적 가이드라인</li>
              <li className="flex items-center gap-2"><Check size={16} className="text-green-500" /> 협업 프로세스 및 TF 구성안</li>
            </ul>
          </div>
        </div>

        {/* 오른쪽 폼 섹션 */}
        <div className="w-full md:w-1/2 bg-black text-white p-10 md:p-14 rounded-3xl shadow-2xl relative overflow-hidden">
          <h3 className="text-2xl font-bold mb-2">회사소개서 신청하기</h3>
          <p className="text-gray-400 mb-8 text-sm">정보를 입력해주시면 이메일로 즉시 발송됩니다.</p>

          {formState === 'success' ? (
            <div className="h-64 flex flex-col items-center justify-center text-center animate-fade-in-up">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-4 text-black">
                <Check size={32} />
              </div>
              <h4 className="text-2xl font-bold mb-2">신청 완료</h4>
              <p className="text-gray-400">입력하신 이메일로 소개서를 발송했습니다.</p>
              <button onClick={() => setFormState('idle')} className="mt-8 text-sm text-gray-500 underline hover:text-white">
                다시 신청하기
              </button>
            </div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 relative z-10">
              {/* 스팸 방지용 숨김 필드 */}
              <input type="hidden" name="_gotcha" />

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Company / Brand</label>
                <input type="text" name="company" required placeholder="회사명을 입력하세요" className="w-full bg-white/10 border border-white/20 rounded-lg p-4 text-white focus:outline-none focus:border-white transition-all" />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Contact Person</label>
                <input type="text" name="name" required placeholder="성함/직급" className="w-full bg-white/10 border border-white/20 rounded-lg p-4 text-white focus:outline-none focus:border-white transition-all" />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Email Address</label>
                <input type="email" name="email" required placeholder="example@company.com" className="w-full bg-white/10 border border-white/20 rounded-lg p-4 text-white focus:outline-none focus:border-white transition-all" />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Phone Number</label>
                <input type="text" name="phone" required placeholder="010-0000-0000" className="w-full bg-white/10 border border-white/20 rounded-lg p-4 text-white focus:outline-none focus:border-white transition-all" />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Message (Optional)</label>
                <textarea name="message" rows={3} placeholder="문의 내용을 적어주세요" className="w-full bg-white/10 border border-white/20 rounded-lg p-4 text-white focus:outline-none focus:border-white transition-all"></textarea>
              </div>

              <button
                type="submit"
                disabled={formState === 'submitting'}
                className="w-full bg-white text-black font-bold text-lg py-5 rounded-lg hover:bg-gray-200 transition-colors disabled:opacity-60 flex items-center justify-center gap-2"
              >
                {formState === 'submitting' ? '전송 중...' : <>회사소개서 받기 <Send size={18} /></>}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
