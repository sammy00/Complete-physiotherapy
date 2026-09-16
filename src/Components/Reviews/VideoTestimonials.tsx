import { Play } from 'lucide-react'
import { useRef, useState } from 'react'

import Container from '../Ui/Container'
import SectionHeading from '../Ui/SectionHeading'

const videos = [
  {
    title: 'I can move without pain again',
    label: 'Patient Recovery Story',
    duration: '1:59',
    src: '/videos/reviews/patient-testimonial-1.mp4',
  },
  {
    title: "I'm back to doing what I love",
    label: 'Patient Recovery Story',
    duration: '2:20',
    src: '/videos/reviews/patient-testimonial-2.mp4',
  },
]

function VideoCard({ video }: { video: (typeof videos)[number] }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [hasVideoError, setHasVideoError] = useState(false)

  const playVideo = () => {
    const currentVideo = videoRef.current

    if (!currentVideo || hasVideoError) {
      return
    }

    currentVideo.controls = true
    currentVideo
      .play()
      .then(() => {
        setIsPlaying(true)
      })
      .catch(() => {
        setHasVideoError(true)
      })
  }

  return (
    <article className="min-w-0">
      <div className="group relative overflow-hidden rounded-[var(--radius-card)] bg-black shadow-[0_12px_28px_rgba(15,47,99,0.12)]">
        <video
          ref={videoRef}
          className="aspect-video w-full object-cover"
          preload="metadata"
          playsInline
          aria-label={video.title}
          onLoadedMetadata={(event) => {
            event.currentTarget.currentTime = 0.1
          }}
          onError={() => {
            setHasVideoError(true)
            setIsPlaying(false)
          }}
        >
          <source src={video.src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {hasVideoError && (
          <div
            className="absolute inset-0 flex items-center justify-center bg-[var(--color-background-light-blue)] px-5 text-center"
            role="status"
          >
            <p className="text-sm font-semibold text-[var(--color-heading)]">
              This testimonial video is unavailable right now.
            </p>
          </div>
        )}

        {!isPlaying && !hasVideoError && (
          <button
            type="button"
            onClick={playVideo}
            className="absolute inset-0 flex items-center justify-center bg-black/5 transition-colors duration-200 group-hover:bg-black/10 focus-visible:ring-2 focus-visible:ring-[var(--color-primary-blue)] focus-visible:ring-offset-2 focus-visible:outline-none"
            aria-label={`Play ${video.title}`}
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-full border-4 border-white bg-[var(--color-primary-blue)] text-white shadow-[0_8px_22px_rgba(15,92,184,0.3)]">
              <Play
                size={24}
                fill="currentColor"
                strokeWidth={2}
                className="ml-1"
                aria-hidden="true"
              />
            </span>
          </button>
        )}

        {!isPlaying && !hasVideoError && (
          <span className="absolute right-2 bottom-2 rounded-[var(--radius-small)] bg-black/70 px-2 py-1 text-xs font-bold text-white">
            {video.duration}
          </span>
        )}
      </div>

      <p className="mt-3 text-center text-[15px] font-semibold text-[var(--color-dark-navy)]">
        {video.label}
      </p>
    </article>
  )
}

function VideoTestimonials() {
  return (
    <section
      className="bg-[var(--color-background-light-blue)] pt-8 pb-10 md:pt-10 md:pb-11 lg:pt-11 lg:pb-12"
      aria-labelledby="video-testimonials-heading"
    >
      <Container>
        <SectionHeading
          eyebrow="VIDEO TESTIMONIALS"
          title="Hear From Our Patients"
          description="Watch real stories from our patients and learn how physiotherapy helped them move better, recover with confidence, and return to daily life."
          align="center"
          className="mx-auto [&>h2]:text-[28px] [&>h2]:leading-[34px] [&>h2]:font-bold [&>h2]:text-[var(--color-heading)] md:[&>h2]:text-[30px] md:[&>h2]:leading-[38px] [&>p:first-child]:mb-1.5 [&>p:first-child]:text-[13px] [&>p:first-child]:font-bold [&>p:first-child]:tracking-[0.18em] [&>p:first-child]:text-[var(--color-emerald)] [&>p:last-child]:mx-auto [&>p:last-child]:mt-2 [&>p:last-child]:max-w-[620px] [&>p:last-child]:text-sm md:[&>p:last-child]:text-[15px]"
          id="video-testimonials-heading"
        />

        <div className="mx-auto mt-7 grid max-w-[890px] gap-6 md:grid-cols-2 lg:mt-8">
          {videos.map((video) => (
            <div key={video.src} className="mx-auto w-full max-w-[430px]">
              <VideoCard video={video} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default VideoTestimonials
