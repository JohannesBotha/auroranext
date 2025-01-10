import React from "react";

import Team from "@/components/Team";
import Contact from "@/components/Contact";
import { SectionTitle } from "@/components/SectionTitle";
import { Faq } from "@/components/Faq";
export default function About() {
  return (
    <div>
      <SectionTitle preTitle="About Us" title="Since 1994" />
      <div className="flex-col max-w-1/2 flex justify-items-center  max-w-1/2 text-pretty space-y-5 py-10 text-lg">
        <div>
          Aurora Financial Services is a professional close corporation
          dedicated to meeting the tax and accounting needs of clients and
          businesses.
        </div>
        <div>
          Specializing in all aspects of business management and tax consulting
          across Gauteng, Aurora Financial Services ensures your company is
          financial records and documentation are always in order. Their tax
          consulting expertise is invaluable, helping you navigate complex
          business, personal, and employee tax matters. With their assistance,
          you can avoid costly errors and legal complications.
        </div>{" "}
        <div>
          With Aurora Financial Services, there is no need to maintain a large
          in-house staff. They handle all your financial and bookkeeping
          requirements under one roof.
        </div>{" "}
        <div>
          No matter what your business tax or accounting needs, trust Aurora
          Financial Services to manage the complexities while you focus on
          growing your business and serving your clients.
        </div>
      </div>

      <Team />
      <SectionTitle title="Frequently Asked Questions"></SectionTitle>
      <Faq />
    </div>
  );
}
