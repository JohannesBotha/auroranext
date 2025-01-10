import React from "react";

import Team from "@/components/Team";
import Contact from "@/components/Contact";
import { SectionTitle } from "@/components/SectionTitle";
import { Faq } from "@/components/Faq";
import { Hero } from "@/components/Hero";
export default function About() {
  return (
    <div>
      <Hero />
      <SectionTitle preTitle="About Us" title="Since 1994" />
      <div className="ml-40 mr-20 text-md flex-col w-2/3 flex items-center  max-w-1/2 text-pretty space-y-5 py-10 text-lg">
        <div>
          Aurora Financial Services is a professional close corporation
          dedicated to meeting the tax and accounting needs of clients and
          businesses we have been doing taxes for more than 30 years.
        </div>
        <div>
          Specializing in all aspects of business management and tax consulting
          across Gauteng, Aurora Financial Services ensures your company is
          financial records and documentation are always in order. Their tax
          consulting expertise is invaluable, helping you navigate complex
          business, personal, and employee tax matters. With their assistance,
          you can avoid costly errors and legal complications.
        </div>
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
