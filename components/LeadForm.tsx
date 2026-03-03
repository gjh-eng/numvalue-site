import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Send } from 'lucide-react';

// 확인된 정확한 엔드포인트
const GETFORM_ENDPOINT = 'https://getform.io/f/nmvo3';

export default function LeadForm() {
  const [formState, setFormState] = useState<'idle' | 'submitting'>('idle');
  const [isSuccess, setIsSuccess] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      if (params.get('sent') === '1') setIsSuccess(true);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    // ⚠️ 주의: 여기서 e.preventDefault()를 하면 안 됩니다. 
    // iframe target을 통해 브라우저가 직접 POST를 쏴야 합니다.
    setFormState('submitting');
    
    // 전송 완료 처리 (iframe 전송이므로 1초 정도 뒤에 UI 전환)
    setTimeout(() => {
      const url = new URL(window.location.href);
      url.searchParams.set('sent', '1');
      url.hash = '#contact';
      window.history.replaceState({}, '', url.toString());
      
      setIsSuccess(true);
      setFormState('idle');
    }, 1000);
  };

  const handleReset = () => {
    const url = new URL(window.location.href);
    url.searchParams.delete('sent');
    window.history.replaceState({}, '', url.toString());
    setIsSuccess(false);
    setFormState('idle');
  };

  if (isSuccess) {
    return (
      <section className="py-20 px-4" id="contact">
        <div className="max-w-3xl mx-auto text-center bg-white/5 border border-white/10 rounded-2xl p-12">
          <h3 className="text-3xl font-bold mb-4 text-white">접수완료</h3>
          <p className="text-gray-400 mb-8">정보가 정상적으로 접수되었습니다.</p>
          <button onClick={handleReset} className="bg-white text-black font-bold px-8 py-4 rounded-lg hover:bg-gray-200 transition-colors">
            다시 작성하기
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-4" id="contact">
      <div className="max-w-4xl mx-auto">
        {/* 페이지 이동 없이 전송하기 위한 숨김 iframe */}
        <iframe name="hidden_iframe" style={{ display: 'none' }}></iframe>

        <form
          ref={formRef}
          action={GETFORM_ENDPOINT}
          method="POST"
          target="hidden_iframe"
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold text-gray-500 mb-2">Company / Brand</label>
              <input type="text" name="company" required placeholder="회사명" className="w-full bg-white/10 border border-white/20 rounded-lg p-4 text-white" />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-500 mb-2">Contact Person</label>
              <input type="text" name="Name" required placeholder="성함/직급" className="w-full bg-white/10 border border-white/20 rounded-lg p-4 text-white" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold text-gray-500 mb-2">Email Address</label>
              <input type="email" name="Email" required placeholder="example@company.com" className="w-full bg-white/10 border border-white/20 rounded-lg p-4 text-white" />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-500 mb-2">Phone Number</label>
              <input type="text" name="Phone number" required placeholder="010-0000-0000" className="w-full bg-white/10 border border-white/20 rounded-lg p-4 text-white" />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-500 mb-2">Message</label>
            <textarea name="Message" rows={3} placeholder="문의 내용" className="w-full bg-white/10 border border-white/20 rounded-lg p-4 text-white" />
          </div>

          <button type="submit" disabled={formState === 'submitting'} className="w-full bg-white text-black font-bold py-5 rounded-lg flex items-center justify-center gap-2">
            {formState === 'submitting' ? '전송 중...' : <><Send size={18} /> 회사소개서 받기</>}
          </button>
        </form>
      </div>
    </section>
  );
}
