import React, { useState, useEffect } from 'react';
import { Send } from 'lucide-react';

export default function LeadForm() {
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    // URL에 ?sent=1이 포함되어 돌아오면 성공 화면을 보여줍니다.
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      if (params.get('sent') === '1') {
        setIsSuccess(true);
      }
    }
  }, []);

  const handleReset = () => {
    if (typeof window !== 'undefined') {
      window.location.href = window.location.pathname + '#contact';
    }
  };

  if (isSuccess) {
    return (
      <section className="py-20 px-4" id="contact">
        <div className="max-w-3xl mx-auto text-center bg-white/5 border border-white/10 rounded-2xl p-12">
          <h3 className="text-3xl font-bold mb-4 text-white">접수완료</h3>
          <p className="text-gray-400 mb-8">정보가 정상적으로 접수되었습니다. 곧 연락드리겠습니다.</p>
          <button 
            onClick={handleReset}
            className="bg-white text-black font-bold px-8 py-4 rounded-lg hover:bg-gray-200 transition-colors"
          >
            다시 작성하기
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-4" id="contact">
      <div className="max-w-4xl mx-auto">
        {/* 겟폼의 보안 충돌을 피하기 위해 가장 표준적인 전송 방식을 사용합니다. */}
        <form
          action="https://getform.io/f/l7w78"
          method="POST"
          className="space-y-6"
        >
          {/* 겟폼 전송 후 다시 돌아올 주소 (중요) */}
          <input 
            type="hidden" 
            name="_redirect" 
            value="https://numvalue-site.vercel.app/?sent=1#contact" 
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold text-gray-500 mb-2 uppercase">Company / Brand</label>
              <input type="text" name="company" required placeholder="회사명" className="w-full bg-white/10 border border-white/20 rounded-lg p-4 text-white focus:outline-none focus:border-white/40" />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-500 mb-2 uppercase">Contact Person</label>
              <input type="text" name="Name" required placeholder="성함/직급" className="w-full bg-white/10 border border-white/20 rounded-lg p-4 text-white focus:outline-none focus:border-white/40" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold text-gray-500 mb-2 uppercase">Email Address</label>
              <input type="email" name="Email" required placeholder="example@company.com" className="w-full bg-white/10 border border-white/20 rounded-lg p-4 text-white focus:outline-none focus:border-white/40" />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-500 mb-2 uppercase">Phone Number</label>
              <input type="text" name="Phone number" required placeholder="010-0000-0000" className="w-full bg-white/10 border border-white/20 rounded-lg p-4 text-white focus:outline-none focus:border-white/40" />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-500 mb-2 uppercase">Message</label>
            <textarea name="Message" rows={3} placeholder="문의 내용을 적어주세요" className="w-full bg-white/10 border border-white/20 rounded-lg p-4 text-white focus:outline-none focus:border-white/40"></textarea>
          </div>

          <button type="submit" className="w-full bg-white text-black font-bold text-lg py-5 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
            회사소개서 받기 <Send size={18} />
          </button>
        </form>
      </div>
    </section>
  );
}
