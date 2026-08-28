import { MapPin, Star } from 'lucide-react'

function ContactMap() {
  return (
    <div className="relative min-h-96 overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-background-light-blue)] shadow-sm md:min-h-120 lg:min-h-full">
      <iframe
        src="https://maps.google.com/maps?ll=22.2895901,73.1303209&z=16&t=m&output=embed"
        title="Dr. Vanita's Complete Physiotherapy location"
        className="absolute -top-20 -left-24 h-[calc(100%+5rem)] w-[calc(100%+6rem)] border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />

      <div
        className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(135deg,rgba(238,246,255,0.4),rgba(255,255,255,0.1))]"
        aria-hidden="true"
      />

      <div className="pointer-events-none absolute top-4 left-4 z-20 max-w-70 rounded-[var(--radius-medium)] border border-[var(--color-divider)] bg-white p-4 shadow-[var(--shadow-card)]">
        <div className="flex items-start gap-3">
          <img
            src="/Logo.svg"
            alt=""
            className="h-10 w-10 shrink-0 rounded-full object-contain"
          />

          <div className="min-w-0">
            <p className="font-heading text-sm leading-5 font-bold text-[var(--color-heading)]">
              Dr. Vanita's Complete Physiotherapy
            </p>

            <div className="mt-2 flex flex-wrap items-center gap-1 text-xs text-[var(--color-body)]">
              <span className="font-semibold text-[var(--color-heading)]">
                4.9
              </span>
              <span className="flex text-amber-500" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    size={13}
                    fill="currentColor"
                    strokeWidth={0}
                  />
                ))}
              </span>
              <span>(120)</span>
            </div>

            <p className="mt-2 text-xs font-medium text-[var(--color-body)]">
              Vadodara, Gujarat
            </p>
          </div>
        </div>
      </div>

      <div
        className="pointer-events-none absolute top-1/2 left-1/2 z-20 flex -translate-x-1/2 -translate-y-full flex-col items-center"
        aria-hidden="true"
      >
        <div className="relative drop-shadow-xl">
          <MapPin
            size={43}
            strokeWidth={1.8}
            fill="var(--color-primary-blue)"
            color="var(--color-primary-blue)"
          />
          <span className="absolute top-2.5 left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-white" />
        </div>
        <span className="-mt-2 h-2 w-6 rounded-full bg-[var(--color-primary-blue)]/20 blur-sm" />
      </div>
    </div>
  )
}

export default ContactMap
