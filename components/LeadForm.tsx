import React from "react";

export const LeadForm: React.FC = () => {
  return (
    <section className="py-32 bg-white text-black relative">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-16">
        {/* LEFT */}
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
        </div>

        {/* RIGHT – GETFORM */}
        <div className="w-full md:w-1/2 bg-black text-white p-6 md:p-8 rounded-3xl shadow-2xl overflow-hidden">
          <h3 className="text-2xl font-bold mb-2">회사소개서 신청하기</h3>
          <p className="text-gray-400 mb-6 text-sm">
            정보를 입력해주시면 이메일로 즉시 발송됩니다.
          </p>

          <div className="rounded-2xl overflow-hidden bg-white">
            <iframe
              src="https://numvalue.getform.com/jm5ln"
              title="NUMVALUE Getform"
              className="w-full"
              style={{ height: "720px", border: "0" }}
            />
          </div>

          <a
            href="https://numvalue.getform.com/jm5ln"
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-block text-sm text-gray-400 underline hover:text-white"
          >
            폼이 안 보이면 새 창으로 열기
          </a>
        </div>
      </div>
    </section>
  );
};
