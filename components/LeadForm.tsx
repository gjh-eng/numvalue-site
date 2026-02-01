import React, { useState } from 'react';
import { Send } from 'lucide-react';

const LeadForm = () => {
  // 전송 상태 관리 (idle: 대기, submitting: 전송중, success: 완료)
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('submitting');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://damobabo.getform.com/nmvo3", {
        method: "POST",
        body: formData,
        headers: {
          "Accept": "application/json",
        },
      });

      if (response.ok) {
        setFormState('success');
        form.reset();
        alert("문의가 성공적으로 전달되었습니다.");
      } else {
        throw new Error("전송 실패");
      }
    } catch (error) {
      console.error(error);
      alert("오류가 발생했습니다. 다시 시도해주세요.");
    } finally {
      setFormState('idle');
    }
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <form 
          id="mail-collector"
          onSubmit={handleSubmit} 
          action="https://getform.io/f/nmvo3" 
          method="POST"
          className="space-y-6 relative z-10"
        >
          {/* 스팸 방지용 숨김 필드 */}
          <input type="hidden" name="_gotcha" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Company / Brand</label>
              <input type="text" name="company" required placeholder="회사명을 입력하세요" className="w-full bg-white/10 border border-white/20 rounded-lg p-4 text-white focus:outline-none focus:border-white/40 transition-colors" />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Contact Person</label>
              <input type="text" name="name" required placeholder="성함/직급" className="w-full bg-white/10 border border-white/20 rounded-lg p-4 text-white focus:outline-none focus:border-white/40 transition-colors" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Email Address</label>
              <input type="email" name="email" required placeholder="example@company.com" className="w-full bg-white/10 border border-white/20 rounded-lg p-4 text-white focus:outline-none focus:border-white/40 transition-colors" />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Phone Number</label>
              <input type="text" name="phone" required placeholder="010-0000-0000" className="w-full bg-white/10 border border-white/20 rounded-lg p-4 text-white focus:outline-none focus:border-white/40 transition-colors" />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Message (Optional)</label>
            <textarea name="message" rows={3} placeholder="문의 내용을 적어주세요" className="w-full bg-white/10 border border-white/20 rounded-lg p-4 text-white focus:outline-none focus:border-white/40 transition-colors" />
          </div>

          <button
            type="submit"
            disabled={formState === 'submitting'}
            className="w-full bg-white text-black font-bold text-lg py-5 rounded-lg hover:bg-gray-200 transition-colors disabled:opacity-60 flex items-center justify-center gap-2"
          >
            {formState === 'submitting' ? '전송 중...' : <>회사소개서 받기 <Send size={18} /></>}
          </button>
        </form>
      </div>
    </section>
  );
};

export default LeadForm;
