import React, { useState } from 'react';
import { Send } from 'lucide-react';

const GETFORM_ENDPOINT = 'https://damobabo.getform.com/nmvo3';
// 원하면 성공 페이지 만들고 이 URL로 보내기 (없으면 빈 문자열로 두면 됨)
const REDIRECT_URL = ''; // 예: 'https://numvalue.kr/thanks'

const LeadForm = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // 브라우저 기본 submit은 그대로 진행하고,
    // 버튼/텍스트만 "전송중"으로 바꿔주기 위해 state만 변경
    setFormState('submitting');
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <form
          id="mail-collector"
          onSubmit={handleSubmit}
          action={GETFORM_ENDPOINT}
          method="POST"
          className="space-y-6 relative z-10"
        >
          {/* 스팸 방지용(봇은 이 필드 채우는 경우 많음) */}
          <input
            type="text"
            name="_gotcha"
            style={{ display: 'none' }}
            tabIndex={-1}
            autoComplete="off"
          />

          {/* 성공 후 리다이렉트(원할 때만 사용) */}
          {REDIRECT_URL ? <input type="hidden" name="_redirect" value={REDIRECT_URL} /> : null}

          {/* 선택: 이메일 제목/라벨을 정리하고 싶으면 사용 */}
          {/* <input type="hidden" name="_subject" value="[NUMVALUE] 회사소개서 요청" /> */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                Company / Brand
              </label>
              <input
                type="text"
                name="company"
                required
                placeholder="회사명을 입력하세요"
                className="w-full bg-white/10 border border-white/20 rounded-lg p-4 text-white focus:outline-none focus:border-white/40 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                Contact Person
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="성함/직급"
                className="w-full bg-white/10 border border-white/20 rounded-lg p-4 text-white focus:outline-none focus:border-white/40 transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="example@company.com"
                className="w-full bg-white/10 border border-white/20 rounded-lg p-4 text-white focus:outline-none focus:border-white/40 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                Phone Number
              </label>
              <input
                type="text"
                name="phone"
                required
                placeholder="010-0000-0000"
                className="w-full bg-white/10 border border-white/20 rounded-lg p-4 text-white focus:outline-none focus:border-white/40 transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
              Message (Optional)
            </label>
            <textarea
              name="message"
              rows={3}
              placeholder="문의 내용을 적어주세요"
              className="w-full bg-white/10 border border-white/20 rounded-lg p-4 text-white focus:outline-none focus:border-white/40 transition-colors"
            />
          </div>

          <button
            type="submit"
            disabled={formState === 'submitting'}
            className="w-full bg-white text-black font-bold text-lg py-5 rounded-lg hover:bg-gray-200 transition-colors disabled:opacity-60 flex items-center justify-center gap-2"
          >
            {formState === 'submitting' ? (
              '전송 중...'
            ) : (
              <>
                회사소개서 받기 <Send size={18} />
              </>
            )}
          </button>

          {/* 선택: 전송중 안내문 (원하면) */}
          {formState === 'submitting' ? (
            <p className="text-xs text-gray-400 text-center">
              전송 중입니다… 잠시만 기다려주세요.
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
};

export default LeadForm;
