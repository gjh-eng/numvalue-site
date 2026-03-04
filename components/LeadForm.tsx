import React from 'react';
import { Send } from 'lucide-react';

export default function LeadForm() {
  return (
    <section className="py-20 px-4" id="contact">
      <div className="max-w-4xl mx-auto">
        {/* 겟폼으로 직접 전송, 완료 후 다시 현재 페이지로 돌아옴 */}
        <form
          action="https://getform.io/f/nmvo3"
          method="POST"
          className="space-y-6"
        >
          <input type="hidden" name="_redirect" value="https://numvalue-site.vercel.app/?sent=1#contact" />
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

          {/* 스팸 방지용 (선택사항) */}
          <input type="hidden" name="_gotcha" style={{ display: 'none' }} />

          <button type="submit" className="w-full bg-white text-black font-bold text-lg py-5 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
            회사소개서 받기 <Send size={18} />
          </button>
        </form>
      </div>
    </section>
  );
}
