import React, { useState, useEffect } from 'react';
import { Send } from 'lucide-react';

const GETFORM_ENDPOINT = 'https://damobabo.getform.com/nmvo3';
const REDIRECT_URL = 'https://numvalue-site.vercel.app/#contact?sent=1';

const LeadForm = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting'>('idle');
  const [isSuccess, setIsSuccess] = useState(false);

  // URL에 ?sent=1 이 있으면 접수완료 표시
  useEffect(() => {
    if (window.location.href.includes('sent=1')) {
      setIsSuccess(true);
    }
  }, []);

  const handleSubmit = () => {
    setFormState('submitting');
  };

  // ✅ 접수완료 화면
  if (isSuccess) {
    return (
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center bg-white/5 border border-white/10 rounded-2xl p-12">
          <h3 className="text-3xl font-bold mb-4">접수완료</h3>
          <p className="text-gray-400 mb-8">
            회사소개서 요청이 정상적으로 접수되었습니다.<br />
            빠른 시일 내에 이메일로 전달드리겠습니다.
          </p>

          <button
            onClick={() => {
              window.history.replaceState({}, document.title, '/#contact');
              window.location.reload();
            }}
            className="bg-white text-black font-bold px-8 py-4 rounded-lg hover:bg-gray-200 transition-colors"
          >
            다시 작성하기
          </button>
        </div>
      </section>
    );
  }

  // ✅ 기본 폼 화면
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <form
          action={GETFORM_ENDPOINT}
          method="POST"
          onSubmit={handleSubmit}
          className="space-y-6 relative z-10"
        >
          {/* 스팸 방지 */}
          <input
            type="text"
            name="_gotcha"
            style={{ display: 'none' }}
            tabIndex={-1}
            autoComplete="off"
          />

          {/* 제출 후 다시 사이트로 */}
          <input type="hidden" name="_redirect" value={REDIRECT_URL} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="company"
              required
              placeholder="회사명을 입력하세요"
              className="w-full bg-white/10 border border-white/20 rounded-lg p-4 text-white"
            />

            <input
              type="text"
              name="name"
              required
              placeholder="성함/직급"
              className="w-full bg-white/10 border border-white/20 rounded-lg p-4 text-white"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="email"
              name="email"
              required
              placeholder="example@company.com"
              className="w-full bg-white/10 border border-white/20 rounded-lg p-4 text-white"
            />

            <input
              type="text"
              name="phone"
              required
              placeholder="010-0000-0000"
              className="w-full bg-white/10 border border-white/20 rounded-lg p-4 text-white"
            />
          </div>

          <textarea
            name="message"
            rows={3}
            placeholder="문의 내용을 적어주세요"
            className="w-full bg-white/10 border border-white/20 rounded-lg p-4 text-white"
          />

          <button
            type="submit"
            disabled={formState === 'submitting'}
            className="w-full bg-white text-black font-bold text-lg py-5 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
          >
            {formState === 'submitting' ? '전송 중...' : <>회사소개서 받기 <Send size={18} /></>}
          </button>
        </form>
      </div>
    </section>
  );
};

export default LeadForm;
