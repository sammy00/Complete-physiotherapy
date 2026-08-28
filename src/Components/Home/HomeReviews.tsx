import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useState } from 'react'
import { FcGoogle } from 'react-icons/fc'

import Container from '../Ui/Container'
import SectionHeading from '../Ui/SectionHeading'

const patientReviewsUrl =
  'https://www.justdial.com/Vadodara/Complete-Physiotherapy-Near-Bright-Day-School-Opposite-Om-Petroleum-Oppsite-to-Esser-Petrol-Pump-Bhaili/0265PX265-X265-181123182323-U8S1_BZDET/reviews'

interface Testimonial {
  name: string
  review: string
  rating: number
}

const testimonials: Testimonial[] = [
  {
    name: 'Ranganathan',
    review:
      'She spent ample time to understand my case history and past treatment. What I observed is that she takes personalized care of her patients.',
    rating: 5,
  },
  {
    name: 'Niki Adalja',
    review:
      'After regular treatment, I felt much better in my pain and recovery. Dr. Vanita is hardworking and polite, and she takes personal attention.',
    rating: 5,
  },
  {
    name: 'Pravin Baria',
    review:
      'I am really satisfied with the doctor and the treatment. The improvement after physiotherapy was really good.',
    rating: 5,
  },
  {
    name: 'Saurabh',
    review:
      'Wonderful human being and doctor. You will get lots of positivity and a proper plan of treatment here. Highly recommended.',
    rating: 5,
  },
  {
    name: 'T D Joshi',
    review:
      'Very good physio. Knowledgeable, cooperative and smart. Best wishes.',
    rating: 5,
  },
  {
    name: 'Urvashi',
    review:
      'Good session, great effort from mam, thank you for the fast recovery.',
    rating: 5,
  },
  {
    name: 'Jashwant Gandhi',
    review: 'Very good monitoring and personal care.',
    rating: 5,
  },
  {
    name: 'Manish',
    review: 'She is a very good physiotherapist having thorough knowledge.',
    rating: 5,
  },
  {
    name: 'Shubham',
    review: '100% satisfied with the treatment. Best physiotherapy.',
    rating: 5,
  },
]

const reviewsPerPage = 3

function getInitials(name: string) {
  return name
    .split(' ')
    .map((word) => word[0])
    .join('')
    .slice(0, 2)
}

function ReviewCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article className="flex min-h-45 flex-col rounded-[var(--radius-card)] border border-[var(--color-border)] bg-white p-5 shadow-sm transition-colors duration-200 hover:border-[var(--color-primary-blue)]/40 hover:shadow-[var(--shadow-card)]">
      <div className="flex items-center gap-2">
        <FcGoogle aria-hidden="true" />

        <div className="flex text-amber-500" aria-label="5 out of 5 stars">
          {Array.from({ length: testimonial.rating }).map((_, index) => (
            <span key={index} className="text-sm leading-none" aria-hidden>
              ★
            </span>
          ))}
        </div>
      </div>

      <blockquote className="mt-4 text-[13px] leading-[22px] font-medium text-[var(--color-heading)]">
        “{testimonial.review}”
      </blockquote>

      <div className="mt-auto flex items-center gap-3 pt-5">
        <div className="font-heading flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--color-background-light-blue)] text-xs font-bold text-[var(--color-primary-blue)]">
          {getInitials(testimonial.name)}
        </div>

        <div>
          <p className="text-xs font-bold text-[var(--color-heading)]">
            {testimonial.name}
          </p>
          <p className="mt-0.5 text-xs text-[var(--color-body)]">Vadodara</p>
        </div>
      </div>
    </article>
  )
}

function HomeReviews() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [activePage, setActivePage] = useState(0)
  const totalPages = Math.ceil(testimonials.length / reviewsPerPage)
  const visibleDesktopTestimonials = testimonials.slice(
    activePage * reviewsPerPage,
    activePage * reviewsPerPage + reviewsPerPage,
  )
  const activeMobileTestimonial = testimonials[activeIndex]

  const showPreviousReview = () => {
    setActiveIndex((currentIndex) =>
      currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1,
    )
  }

  const showNextReview = () => {
    setActiveIndex((currentIndex) =>
      currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1,
    )
  }

  const showPreviousPage = () => {
    setActivePage((currentPage) =>
      currentPage === 0 ? totalPages - 1 : currentPage - 1,
    )
  }

  const showNextPage = () => {
    setActivePage((currentPage) =>
      currentPage === totalPages - 1 ? 0 : currentPage + 1,
    )
  }

  return (
    <section
      id="reviews"
      className="bg-white pt-8 pb-5 md:pt-10 md:pb-6 lg:pt-12 lg:pb-7"
      aria-labelledby="home-reviews-heading"
    >
      <Container>
        <SectionHeading
          eyebrow="PATIENTS LOVE US"
          title="What Our Patients Say"
          align="center"
          className="mx-auto [&>h2]:text-[28px] [&>h2]:leading-[34px] [&>h2]:font-bold [&>h2]:text-[var(--color-heading)] md:[&>h2]:text-[30px] md:[&>h2]:leading-[38px] [&>p:first-child]:mb-1.5 [&>p:first-child]:text-[13px] [&>p:first-child]:font-bold [&>p:first-child]:tracking-[0.18em] [&>p:first-child]:text-[var(--color-emerald)]"
          id="home-reviews-heading"
        />

        <div className="mt-7 md:mt-8">
          <div className="hidden items-center gap-2 lg:flex">
            <button
              type="button"
              aria-label="Previous review group"
              onClick={showPreviousPage}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[var(--color-border)] bg-white text-[var(--color-primary-blue)] shadow-sm transition-all duration-200 hover:-translate-x-0.5 hover:bg-[var(--color-background-light-blue)] focus-visible:ring-2 focus-visible:ring-[var(--color-primary-blue)] focus-visible:ring-offset-2 focus-visible:outline-none"
            >
              <ArrowLeft size={18} strokeWidth={2} aria-hidden="true" />
            </button>

            <div className="grid min-w-0 flex-1 gap-5 lg:grid-cols-3">
              {visibleDesktopTestimonials.map((testimonial) => (
                <ReviewCard key={testimonial.name} testimonial={testimonial} />
              ))}
            </div>

            <button
              type="button"
              aria-label="Next review group"
              onClick={showNextPage}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[var(--color-border)] bg-white text-[var(--color-primary-blue)] shadow-sm transition-all duration-200 hover:translate-x-0.5 hover:bg-[var(--color-background-light-blue)] focus-visible:ring-2 focus-visible:ring-[var(--color-primary-blue)] focus-visible:ring-offset-2 focus-visible:outline-none"
            >
              <ArrowRight size={18} strokeWidth={2} aria-hidden="true" />
            </button>
          </div>

          <div className="lg:hidden">
            <ReviewCard testimonial={activeMobileTestimonial} />
          </div>
        </div>

        <div
          className="mt-5 flex items-center justify-center gap-4 lg:hidden"
          aria-label="Review controls"
        >
          <button
            type="button"
            aria-label="Previous review"
            onClick={showPreviousReview}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-border)] bg-white text-[var(--color-primary-blue)] shadow-sm transition-colors duration-200 hover:bg-[var(--color-background-light-blue)] focus-visible:ring-2 focus-visible:ring-[var(--color-primary-blue)] focus-visible:ring-offset-2 focus-visible:outline-none"
          >
            <ArrowLeft size={17} strokeWidth={2} aria-hidden="true" />
          </button>

          <div className="flex items-center gap-2" aria-label="Review slides">
            {testimonials.map((testimonial, index) => (
              <button
                type="button"
                key={testimonial.name}
                aria-label={`Show ${testimonial.name} review`}
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[var(--color-primary-blue)] focus-visible:ring-offset-2 focus-visible:outline-none ${
                  index === activeIndex
                    ? 'w-5 bg-[var(--color-emerald)]'
                    : 'w-2 bg-[var(--color-divider)]'
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            aria-label="Next review"
            onClick={showNextReview}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-border)] bg-white text-[var(--color-primary-blue)] shadow-sm transition-colors duration-200 hover:bg-[var(--color-background-light-blue)] focus-visible:ring-2 focus-visible:ring-[var(--color-primary-blue)] focus-visible:ring-offset-2 focus-visible:outline-none"
          >
            <ArrowRight size={17} strokeWidth={2} aria-hidden="true" />
          </button>
        </div>

        <div
          className="mt-5 hidden items-center justify-center gap-2 lg:flex"
          aria-label="Review groups"
        >
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              type="button"
              key={index}
              aria-label={`Show review group ${index + 1}`}
              onClick={() => setActivePage(index)}
              className={`h-2 rounded-full transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[var(--color-primary-blue)] focus-visible:ring-offset-2 focus-visible:outline-none ${
                index === activePage
                  ? 'w-5 bg-[var(--color-emerald)]'
                  : 'w-2 bg-[var(--color-divider)]'
              }`}
            />
          ))}
        </div>

        <div className="mt-6 flex flex-col items-center justify-center gap-4 text-center md:flex-row md:gap-6">
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm font-semibold text-[var(--color-heading)]">
            <FcGoogle aria-hidden="true" />
            <span>4.9</span>
            <span
              className="tracking-[0.08em] text-amber-500"
              aria-label="5 out of 5 stars"
            >
              <span aria-hidden="true">★★★★★</span>
            </span>
            <span className="text-[var(--color-body)]">
              200+ Patient Reviews
            </span>
          </div>

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

export default HomeReviews
