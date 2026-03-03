import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Send } from 'lucide-react';

const GETFORM_ENDPOINT = 'https://damobabo.getform.com/nmvo3';

type FormState = 'idle' | 'submitting';

export default function LeadForm() {
  const [formState, setFormState] = useState<FormState>('idle');
  const [isSuccess, setIsSuccess] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);

  // 현재 페이지 기준으로 redirect URL 생성 (환경 바뀌어도 안전)
  const redirectUrl = useMemo(() => {
    if (typeof window === 'undefined') return 'https://numvalue-site.vercel.app/?sent=1#contact';
    const url = new URL(window.location.href);
    url.searchParams.set('sent', '1');
    url.hash = '#contact';
    return url.toString();
  }, []);

  // URL에 sent=1 있으면 성공화면
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const url = new URL(window.location.href);
    if (url.searchParams.get('sent') === '1') setIsSuccess(true);
  }, []);

  // ✅ 핵심: preventDefault 금지. (진짜 submit이 겟폼으로 POST 되게)
  // 대신 "iframe target" 으로 페이지 이동 없이 전송.
  const handleSubmit = () => {
    setFormState('submitting');

    // 겟폼에 전송되는 동안 약간 텀 주고 성공처리 (겟폼 응답을 JS로 못 읽어도 됨)
    window.setTimeout(() => {
      // URL도 ?sent=1#contact로 바꿔서 새로고침해도 성공 유지
      const url = new URL(window.location.href);
      url.searchParams.set('sent', '1');
      url.hash = '#contact';
      window.history.replaceState({}, document.title, url.toString());

      setIsSuccess(true);
      setFormState('idle');

      // 입력값 초기화
      formRef.current?.reset();
    }, 700);
  };

  const handleReset = () => {
    if (typeof window === 'undefined') return;

    const url = new URL(window.location.href);
    url.searchParams.delete('sent');
    url.hash = '#contact';
    window.history.replaceState({}, document.title, url.toString());

    setIsSuccess(false);
    setFormState('idle');
    formRef.current?.reset();
  };

  if (isSuccess) {
    return (
      <section className="py-20 px-4" id="contact">
        <div className="max-w-3xl mx-auto text-center bg-white/5 border border-white/10 rounded-2xl p-12">
          <h3 className="text-3xl font-bold mb-4 text-white">접수완료</h3>
          <p className="text-gray-400 mb-8">
            회사소개서 요청이 정상적으로 접수되었습니다.<br />
            빠른 시일 내에 이메일로 전달드리겠습니다.
          </p>

          <button
            type="button"
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
        {/* ✅ 페이지 이동 방지용 숨김 iframe (target 이름이 중요) */}
        <iframe
          name="getform_hidden_iframe"
          title="getform_hidden_iframe"
          style={{ display: 'none' }}
        />

        <form
          ref={formRef}
          id="mail-collector"
          action={GETFORM_ENDPOINT}
          method="POST"
          target="getform_hidden_iframe"
          onSubmit={handleSubmit}
          className="space-y-6 relative z-10"
        >
          {/* 스팸 방지 (겟폼이 이런 honeypot 필드 지원하는 경우가 많음) */}
          <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

          {/* 겟폼 쪽 redirect 설정 (iframe이라 메인 페이지는 안 움직이지만, 겟폼 내부 처리용으로 넣어둠) */}
          <input type="hidden" name="_redirect" value={redirectUrl} />

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

          {formState === 'submitting' ? (
            <p className="text-xs text-gray-400 text-center">전송 중입니다… 잠시만 기다려주세요.</p>
          ) : null}
        </form>
      </div>
    </section>
  );
}
