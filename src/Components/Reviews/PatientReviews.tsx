import { ArrowRight } from 'lucide-react'
import { FcGoogle } from 'react-icons/fc'

import Container from '../Ui/Container'
import SectionHeading from '../Ui/SectionHeading'

const patientReviewsUrl =
  'https://www.google.com/search?q=Dr.Vanita%27s+complete+physiotherapy+Vadodara+Google+reviews#lrd=0x395fc79a24fcf62f:0xc4d8061bd3e1b0f6,1,,,,'

interface Review {
  name: string
  review: string
  rating: number
}

const reviews: Review[] = [
  {
    name: 'Jayesh Desai',
    review:
      'My wife was struggling with weak hand muscles affecting her daily tasks.',
    rating: 5,
  },
  {
    name: 'Suresh Goyal',
    review:
      "The therapists are highly skilled, professional, and genuinely care about their patients' recovery.",
    rating: 5,
  },
  {
    name: 'S C',
    review:
      'Dr Vanita is very kind & caring to her patients.',
    rating: 5,
  },
  {
    name: 'Rudraraj K.',
    review:
      "I cannot thank Dr. Vanita ma'am and Sneha ma'am enough for what they have done for me.",
    rating: 5,
  },
  {
    name: 'Jwalant Vaishnav',
    review: 'In July, our world stopped when my mother suffered a stroke.',
    rating: 5,
  },
  {
    name: 'Chirag Parmar',
    review:
      'Excellent physiotherapy service! The staff is professional, caring, and attentive.',
    rating: 5,
  },
]

function getInitials(name: string) {
  return name
    .split(' ')
    .map((word) => word[0])
    .join('')
    .slice(0, 2)
}

function PatientReviewCard({ review }: { review: Review }) {
  return (
    <article className="flex min-h-[170px] flex-col rounded-[var(--radius-card)] border border-[var(--color-border)] bg-white p-4 shadow-sm transition-colors duration-200 hover:border-[var(--color-primary-blue)]/40 hover:shadow-[var(--shadow-card)] md:min-h-[188px] md:p-5 xl:min-h-[170px]">
      <div className="flex items-center gap-2">
        <FcGoogle aria-hidden="true" />

        <div className="flex text-amber-500" aria-label="5 out of 5 stars">
          {Array.from({ length: review.rating }).map((_, index) => (
            <span key={index} className="text-sm leading-none" aria-hidden>
              ★
            </span>
          ))}
        </div>
      </div>

      <blockquote className="mt-3 text-[13px] leading-[22px] font-medium text-[var(--color-heading)]">
        “{review.review}”
      </blockquote>

      <div className="mt-auto flex items-center gap-3 pt-4">
        <div className="font-heading flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--color-background-light-blue)] text-xs font-bold text-[var(--color-primary-blue)]">
          {getInitials(review.name)}
        </div>

        <div>
          <p className="text-xs font-bold text-[var(--color-heading)]">
            {review.name}
          </p>
          <p className="mt-0.5 text-xs text-[var(--color-body)]">Vadodara</p>
        </div>
      </div>
    </article>
  )
}

function PatientReviews() {
  return (
    <section
      className="bg-white pt-10 pb-4 md:pt-12 md:pb-5 lg:pt-16 lg:pb-5"
      aria-labelledby="patient-reviews-heading"
    >
      <Container>
        <SectionHeading
          eyebrow="WHAT OUR PATIENTS SAY"
          title="Real Experiences. Real Results."
          description="Read genuine experiences shared by our patients on Google."
          align="center"
          className="mx-auto [&>h2]:text-[28px] [&>h2]:leading-[34px] [&>h2]:font-bold [&>h2]:text-[var(--color-heading)] md:[&>h2]:text-[30px] md:[&>h2]:leading-[38px] [&>p:first-child]:mb-1.5 [&>p:first-child]:text-[13px] [&>p:first-child]:font-bold [&>p:first-child]:tracking-[0.18em] [&>p:first-child]:text-[var(--color-emerald)] [&>p:last-child]:mt-2 [&>p:last-child]:text-sm md:[&>p:last-child]:text-[15px]"
          id="patient-reviews-heading"
        />

        <div className="mt-7 grid gap-5 md:mt-8 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <PatientReviewCard key={review.name} review={review} />
          ))}
        </div>

        <div className="mt-4 flex justify-center md:mt-5">
          <a
            href={patientReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group/reviews inline-flex min-h-10 items-center justify-center gap-2 rounded-[var(--radius-small)] border border-[var(--color-primary-blue)] bg-white px-5 text-sm font-semibold transition-colors duration-200 hover:bg-[var(--color-primary-blue)]"
          >
            <span className="text-[var(--color-primary-blue)] transition-colors duration-200 group-hover/reviews:text-white">
              View All Patient Reviews
            </span>
            <ArrowRight
              size={15}
              strokeWidth={2}
              className="text-[var(--color-primary-blue)] transition-colors duration-200 group-hover/reviews:text-white"
              aria-hidden="true"
            />
          </a>
        </div>
      </Container>
    </section>
  )
}

export default PatientReviews
