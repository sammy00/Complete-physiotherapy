import { useState } from 'react'

import { CalendarCheck, ChevronDown } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import { whatsappUrl } from '../../Constants/contact'
import { services, type ServiceTone } from '../../Data/services'
import Container from '../Ui/Container'

const toneStyles: Record<
  ServiceTone,
  {
    iconBackground: string
    iconBorder: string
    iconColor: string
  }
> = {
  blue: {
    iconBackground: 'bg-[#f4f9ff]',
    iconBorder: 'border-[#e4edf8]',
    iconColor: 'bg-[#1e63e9]',
  },
  green: {
    iconBackground: 'bg-[#f5fbf6]',
    iconBorder: 'border-[#e3f1e5]',
    iconColor: 'bg-[#43b642]',
  },
}

function ServicesGrid() {
  const [expandedServiceId, setExpandedServiceId] = useState<string | null>(null)

  return (
    <section
      id="all-services"
      className="scroll-mt-24 bg-white pt-5 pb-4 md:pt-7 md:pb-5 lg:pt-8 lg:pb-5"
      aria-labelledby="services-grid-heading"
    >
      <Container>
        <div className="mx-auto max-w-[760px] text-center">
          <p className="mb-2 [font-family:var(--font-heading)] [font-size:var(--font-size-overline)] [line-height:var(--line-height-overline)] font-bold tracking-[0.12em] text-[var(--color-emerald)] uppercase">
            Our Physiotherapy Services
          </p>

          <h2
            id="services-grid-heading"
            className="[font-family:var(--font-heading)] !text-[28px] !leading-[36px] font-bold text-[var(--color-heading)] md:!text-[34px] md:!leading-[42px]"
          >
            Personalized Care. Better Recovery.
          </h2>

          <span
            aria-hidden="true"
            className="mx-auto mt-2.5 block h-[3px] w-10 rounded-full bg-[var(--color-emerald)]"
          />
        </div>

        <div className="mt-8 grid items-start gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service) => {
            const tone = toneStyles[service.tone]
            const iconSize = service.iconSize ?? 48

            return (
              <article
                key={service.id}
                id={service.id}
                className="group flex min-h-[238px] min-w-0 scroll-mt-24 flex-col items-center rounded-[var(--radius-card)] border border-[#e5edf6] bg-white px-5 py-5 text-center shadow-[0_6px_22px_rgba(18,59,116,0.045)] transition-all duration-200 hover:-translate-y-1 hover:border-[#dbe7f4] hover:shadow-[0_12px_30px_rgba(18,59,116,0.08)]"
              >
                <div
                  className={`flex h-[78px] w-[78px] shrink-0 items-center justify-center rounded-full border ${tone.iconBackground} ${tone.iconBorder}`}
                >
                  <span
                    className={tone.iconColor}
                    style={{
                      width: iconSize,
                      height: iconSize,
                      maskImage: `url("${service.icon}")`,
                      WebkitMaskImage: `url("${service.icon}")`,
                      maskPosition: 'center',
                      WebkitMaskPosition: 'center',
                      maskRepeat: 'no-repeat',
                      WebkitMaskRepeat: 'no-repeat',
                      maskSize: 'contain',
                      WebkitMaskSize: 'contain',
                    }}
                    aria-hidden="true"
                  />
                </div>

                <h3 className="mt-4 flex min-h-12 items-center justify-center [font-family:var(--font-heading)] !text-[18px] !leading-[23px] font-bold text-[var(--color-heading)]">
                  {service.title}
                </h3>

                <p className="mt-2 [font-family:var(--font-body)] text-[13px] leading-6 text-[var(--color-body)]">
                  {service.description}
                </p>

                <button
                  type="button"
                  className="services-grid__learn-more mt-3.5 inline-flex items-center gap-2 text-sm font-bold transition-colors duration-200"
                  aria-expanded={expandedServiceId === service.id}
                  aria-controls={`${service.id}-details`}
                  onClick={() =>
                    setExpandedServiceId((currentId) =>
                      currentId === service.id ? null : service.id,
                    )
                  }
                >
                  {expandedServiceId === service.id ? 'Show Less' : 'Learn More'}
                  <ChevronDown
                    size={15}
                    strokeWidth={2}
                    className={`transition-transform duration-200 ${
                      expandedServiceId === service.id ? 'rotate-180' : ''
                    }`}
                    aria-hidden="true"
                  />
                </button>

                {expandedServiceId === service.id && (
                  <div
                    id={`${service.id}-details`}
                    className="mt-4 w-full border-t border-[#e7eff8] pt-4 text-left"
                  >
                    <p className="text-[13px] leading-6 text-[var(--color-body)]">
                      {service.detailIntro}
                    </p>

                    <ul className="mt-3 grid gap-2">
                      {service.benefits.map((benefit) => (
                        <li
                          key={benefit}
                          className="flex items-start gap-2 text-[13px] leading-5 font-medium text-[var(--color-heading)]"
                        >
                          <span
                            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-emerald)]"
                            aria-hidden="true"
                          />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-4 grid gap-2 sm:grid-cols-2">
                      <Link
                        to="/contact#appointment"
                        className="inline-flex min-h-10 items-center justify-center gap-2 rounded-[var(--radius-small)] bg-[var(--color-emerald)] px-3 text-[13px] font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#3d973f]"
                      >
                        <CalendarCheck size={15} strokeWidth={2} aria-hidden="true" />
                        Book
                      </Link>

                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-10 items-center justify-center gap-2 rounded-[var(--radius-small)] border border-[#d8e5f2] bg-white px-3 text-[13px] font-bold text-[#278C3A] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#278C3A] hover:shadow-sm"
                      >
                        <FaWhatsapp
                          className="h-[15px] w-[15px] !text-[#278C3A]"
                          aria-hidden="true"
                        />
                        WhatsApp
                      </a>
                    </div>
                  </div>
                )}
              </article>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

export default ServicesGrid
