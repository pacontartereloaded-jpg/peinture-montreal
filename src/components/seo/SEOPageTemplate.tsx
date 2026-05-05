import SEOHead from './SEOHead'
import ServiceHero from './ServiceHero'
import ServiceBenefits from './ServiceBenefits'
import ServiceProcess from './ServiceProcess'
import ServiceFAQ from './ServiceFAQ'
import RelatedServices from './RelatedServices'
import LocalAreaSection from './LocalAreaSection'
import FinalCTA from './FinalCTA'
import SEOEstimateForm from './SEOEstimateForm'
import type { SEOPage } from '../../data/seoTypes'

interface Props {
  page: SEOPage
}

export default function SEOPageTemplate({ page }: Props) {
  return (
    <>
      <SEOHead page={page} />
      <ServiceHero
        h1={page.h1}
        tagline={page.heroTagline}
        intro={page.intro}
        lang={page.lang}
      />
      <ServiceBenefits benefits={page.benefits} lang={page.lang} />
      {page.bodySection && (
        <section className="bg-white py-14 lg:py-18 border-b border-[#E8E4DD]">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
            <div className="max-w-3xl">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] tracking-tight mb-5">
                {page.bodySection.heading}
              </h2>
              {page.bodySection.paragraphs.map((p, i) => (
                <p key={i} className="text-[16px] text-[#5F6368] leading-relaxed mb-4 last:mb-0">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </section>
      )}
      <ServiceProcess lang={page.lang} />
      <LocalAreaSection localMention={page.localMention} lang={page.lang} />
      <RelatedServices pages={page.relatedPages} lang={page.lang} />
      <ServiceFAQ faqs={page.faqs} lang={page.lang} />
      <SEOEstimateForm lang={page.lang} />
      <FinalCTA lang={page.lang} />
    </>
  )
}
