export const LeadForm: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // 기본 제출 막기
    setFormState('submitting');

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch("https://getform.io/f/jm5ln", { // 👈 엔드포인트 주소 수정됨
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
        alert("전송에 실패했습니다. 잠시 후 다시 시도해주세요.");
        setFormState('idle');
      }
    } catch (error) {
      console.error("Error!", error);
      setFormState('idle');
    }
  };

  return (
    <section className="py-32 bg-white text-black relative">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-16">
        {/* ... (왼쪽 설명 영역은 동일) ... */}

        <div className="w-full md:w-1/2 bg-black text-white p-10 md:p-14 rounded-3xl shadow-2xl relative overflow-hidden">
          <h3 className="text-2xl font-bold mb-2">회사소개서 신청하기</h3>
          <p className="text-gray-400 mb-8 text-sm">정보를 입력해주시면 이메일로 즉시 발송됩니다.</p>

          {/* 💡 iframe은 이제 필요 없으므로 삭제해도 됩니다. */}

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
            <form
              ref={formRef}
              onSubmit={handleSubmit} // 👈 fetch 함수로 변경
              className="space-y-6 relative z-10"
            >
              {/* ✅ Honeypot: 봇 방지 */}
              <input type="hidden" name="_gotcha" /> 

              {/* ... (나머지 input 필드들은 기존과 동일하게 유지) ... */}
              <div>
                <label htmlFor="company" className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Company</label>
                <input type="text" id="company" name="company" required className="w-full bg-white/10 border border-white/20 rounded-lg p-4 text-white" />
              </div>
              {/* ... (name, email, phone 필드 동일) ... */}

              <button
                type="submit"
                disabled={formState === 'submitting'}
                className="w-full bg-white text-black font-bold text-lg py-5 rounded-lg hover:bg-gray-200 transition-colors disabled:opacity-60"
              >
                {formState === 'submitting' ? '전송 중...' : '회사소개서 받기'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
