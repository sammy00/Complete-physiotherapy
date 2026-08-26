import { useState } from 'react'
import type { FormEvent } from 'react'
import {
  CalendarDays,
  ChevronDown,
  Clock3,
  Mail,
  HeartPulse,
  MessageSquare,
  Phone,
  User,
} from 'lucide-react'
import { DayPicker } from 'react-day-picker'
import 'react-day-picker/style.css'
import Button from '../Ui/Button'

const GOOGLE_APPS_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbwwmrGa4z65zhRaW58ZONN50sW0OZ5n1lMWzAlb5Dr2zHElHsoR_oquvIkkxOZdHJwS/exec'

interface FormErrors {
  firstName?: string
  lastName?: string
  phone?: string
  email?: string
  condition?: string
  preferredDate?: string
  preferredTime?: string
  privacy?: string
}

const inputClassName =
  'min-h-10 w-full rounded-(--radius-small) border border-(--color-border) bg-white py-2 pr-4 pl-10 text-sm text-(--color-heading) transition-colors outline-none placeholder:text-(--color-muted) focus:border-(--color-primary-blue) focus:ring-2 focus:ring-(--color-primary-blue)/10'

const requiredMark = <span className="text-(--color-error)"> *</span>

function ContactForm() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>()
  const [isCalendarOpen, setIsCalendarOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitError, setSubmitError] = useState('')

  const formattedDate = selectedDate
    ? selectedDate.toLocaleDateString('en-IN', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
      })
    : ''

  const validateForm = (form: HTMLFormElement): FormErrors => {
    const formData = new FormData(form)

    const firstName = String(formData.get('firstName') || '').trim()
    const lastName = String(formData.get('lastName') || '').trim()
    const phone = String(formData.get('phone') || '').trim()
    const email = String(formData.get('email') || '').trim()
    const condition = String(formData.get('condition') || '').trim()
    const preferredDate = String(formData.get('preferredDate') || '').trim()
    const preferredTime = String(formData.get('preferredTime') || '').trim()
    const privacy = formData.get('privacy')

    const newErrors: FormErrors = {}

    if (!firstName) {
      newErrors.firstName = 'Please enter your first name.'
    }

    if (!lastName) {
      newErrors.lastName = 'Please enter your last name.'
    }

    if (!phone) {
      newErrors.phone = 'Please enter your phone number.'
    } else if (!/^[6-9]\d{9}$/.test(phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number.'
    }

    if (!email) {
      newErrors.email = 'Please enter your email address.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please enter a valid email address.'
    }

    if (!condition) {
      newErrors.condition = 'Please select a condition.'
    }

    if (!preferredDate) {
      newErrors.preferredDate = 'Please select your preferred date.'
    }

    if (!preferredTime) {
      newErrors.preferredTime = 'Please select your preferred time.'
    }

    if (!privacy) {
      newErrors.privacy = 'Please agree to the privacy policy.'
    }

    return newErrors
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (isSubmitting) return

    const form = event.currentTarget
    const validationErrors = validateForm(form)

    setErrors(validationErrors)

    if (Object.keys(validationErrors).length > 0) {
      return
    }

    setIsSubmitting(true)
    setSubmitError('')
    setIsSubmitted(false)

    try {
      const formData = new FormData(form)

      const appointmentData = {
        firstName: String(formData.get('firstName') || '').trim(),
        lastName: String(formData.get('lastName') || '').trim(),
        phone: String(formData.get('phone') || '').trim(),
        email: String(formData.get('email') || '').trim(),
        condition: String(formData.get('condition') || '').trim(),
        preferredDate: String(formData.get('preferredDate') || '').trim(),
        preferredTime: String(formData.get('preferredTime') || '').trim(),
        message: String(formData.get('message') || '').trim(),
        privacyAccepted: Boolean(formData.get('privacy')),
      }

      const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(appointmentData),
      })

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`)
      }

      const result = await response.json()

      if (!result.success) {
        throw new Error(result.message || 'Appointment could not be saved.')
      }

      setIsSubmitted(true)
      setErrors({})

      form.reset()
      setSelectedDate(undefined)
      setIsCalendarOpen(false)

      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    } catch {
      setSubmitError(
        'We could not submit your appointment right now. Please try again or contact us directly.',
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="h-full min-w-0">
      {/* Section Heading */}
      <div className="mb-5">
        <p className="mb-2 text-xs font-bold tracking-[0.14em] text-(--color-emerald) uppercase">
          Contact Us
        </p>

        <h2
          id="contact-form-heading"
          className="text-3xl leading-tight text-(--color-heading) md:text-4xl"
        >
          Book Your Consultation
        </h2>

        <div className="my-3 h-0.75 w-10 rounded-full bg-(--color-emerald)" />

        <p className="text-sm text-(--color-body)">
          Fill in the form and we'll confirm your appointment shortly.
        </p>
      </div>

      {/* Success Message */}
      {isSubmitted && (
        <div
          className="mb-6 rounded-(--radius-card) border border-(--color-emerald)/30 bg-(--color-emerald)/10 px-5 py-4 text-center"
          role="status"
        >
          <p className="font-semibold text-(--color-heading)">
            Appointment request received!
          </p>

          <p className="mt-1 text-sm text-(--color-body)">
            Thank you. We'll contact you shortly to confirm your appointment.
          </p>
        </div>
      )}

      {/* Error Message */}
      {submitError && (
        <div
          className="mb-6 rounded-(--radius-card) border border-red-200 bg-red-50 px-5 py-4 text-center"
          role="alert"
        >
          <p className="font-semibold text-red-700">
            Appointment could not be submitted
          </p>

          <p className="mt-1 text-sm text-red-600">{submitError}</p>
        </div>
      )}

      {/* Appointment Form */}
      <form onSubmit={handleSubmit} noValidate className="min-w-0">
        <div className="grid gap-x-6 gap-y-3.5 md:grid-cols-2">
          {/* First Name */}
          <div>
            <label
              htmlFor="firstName"
              className="mb-2 block text-sm font-semibold text-(--color-heading)"
            >
              First Name{requiredMark}
            </label>

            <div className="relative">
              <User
                size={18}
                strokeWidth={1.8}
                aria-hidden="true"
                className="absolute top-1/2 left-3.5 -translate-y-1/2 text-(--color-muted)"
              />

              <input
                id="firstName"
                name="firstName"
                type="text"
                autoComplete="given-name"
                placeholder="First Name"
                required
                aria-invalid={Boolean(errors.firstName)}
                aria-describedby={
                  errors.firstName ? 'firstName-error' : undefined
                }
                className={inputClassName}
              />
            </div>

            {errors.firstName && (
              <p id="firstName-error" className="mt-1 text-sm text-red-600">
                {errors.firstName}
              </p>
            )}
          </div>

          {/* Last Name */}
          <div>
            <label
              htmlFor="lastName"
              className="mb-2 block text-sm font-semibold text-(--color-heading)"
            >
              Last Name{requiredMark}
            </label>

            <div className="relative">
              <User
                size={18}
                strokeWidth={1.8}
                aria-hidden="true"
                className="absolute top-1/2 left-3.5 -translate-y-1/2 text-(--color-muted)"
              />

              <input
                id="lastName"
                name="lastName"
                type="text"
                autoComplete="family-name"
                placeholder="Last Name"
                required
                aria-invalid={Boolean(errors.lastName)}
                aria-describedby={
                  errors.lastName ? 'lastName-error' : undefined
                }
                className={inputClassName}
              />
            </div>

            {errors.lastName && (
              <p id="lastName-error" className="mt-1 text-sm text-red-600">
                {errors.lastName}
              </p>
            )}
          </div>

          {/* Phone Number */}
          <div>
            <label
              htmlFor="phone"
              className="mb-2 block text-sm font-semibold text-(--color-heading)"
            >
              Phone Number{requiredMark}
            </label>

            <div className="flex min-h-10 overflow-hidden rounded-(--radius-small) border border-(--color-border) bg-white transition-colors focus-within:border-(--color-primary-blue) focus-within:ring-2 focus-within:ring-(--color-primary-blue)/10">
              <div className="flex shrink-0 items-center gap-2 border-r border-(--color-border) px-3 text-sm text-(--color-heading)">
                <Phone
                  size={17}
                  strokeWidth={1.8}
                  aria-hidden="true"
                  className="text-(--color-muted)"
                />
                <span>IN</span>
                <ChevronDown
                  size={14}
                  strokeWidth={2}
                  aria-hidden="true"
                  className="text-(--color-muted)"
                />
              </div>

              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                inputMode="numeric"
                placeholder="+91 99254 18176"
                required
                aria-invalid={Boolean(errors.phone)}
                aria-describedby={errors.phone ? 'phone-error' : undefined}
                className="min-w-0 flex-1 border-0 bg-white px-3 py-2 text-sm text-(--color-heading) outline-none placeholder:text-(--color-muted)"
              />
            </div>

            {errors.phone && (
              <p id="phone-error" className="mt-1 text-sm text-red-600">
                {errors.phone}
              </p>
            )}
          </div>

          {/* Email Address */}
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-semibold text-(--color-heading)"
            >
              Email Address{requiredMark}
            </label>

            <div className="relative">
              <Mail
                size={18}
                strokeWidth={1.8}
                aria-hidden="true"
                className="absolute top-1/2 left-3.5 -translate-y-1/2 text-(--color-muted)"
              />

              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="youremail@gmail.com"
                required
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? 'email-error' : undefined}
                className={inputClassName}
              />
            </div>

            {errors.email && (
              <p id="email-error" className="mt-1 text-sm text-red-600">
                {errors.email}
              </p>
            )}
          </div>

          {/* Condition / Problem */}
          <div className="md:col-span-2">
            <label
              htmlFor="condition"
              className="mb-2 block text-sm font-semibold text-(--color-heading)"
            >
              Condition / Problem{requiredMark}
            </label>

            <div className="relative">
              <HeartPulse
                size={18}
                strokeWidth={1.8}
                aria-hidden="true"
                className="pointer-events-none absolute top-1/2 left-3.5 z-10 -translate-y-1/2 text-(--color-muted)"
              />
              <ChevronDown
                size={18}
                strokeWidth={1.8}
                aria-hidden="true"
                className="pointer-events-none absolute top-1/2 right-4 z-10 -translate-y-1/2 text-(--color-muted)"
              />

              <select
                id="condition"
                name="condition"
                defaultValue=""
                required
                aria-invalid={Boolean(errors.condition)}
                aria-describedby={
                  errors.condition ? 'condition-error' : undefined
                }
                className={`${inputClassName} appearance-none pr-11`}
              >
                <option value="" disabled>
                  Select your condition
                </option>
                <option value="back-pain">Back Pain</option>
                <option value="neck-pain">Neck Pain</option>
                <option value="shoulder-pain">Shoulder Pain</option>
                <option value="knee-pain">Knee Pain</option>
                <option value="joint-pain">Joint Pain</option>
                <option value="sports-injury">Sports Injury</option>
                <option value="post-surgery-rehabilitation">
                  Post-Surgery Rehabilitation
                </option>
                <option value="stroke-rehabilitation">
                  Stroke Rehabilitation
                </option>
                <option value="other">Other</option>
              </select>
            </div>

            {errors.condition && (
              <p id="condition-error" className="mt-1 text-sm text-red-600">
                {errors.condition}
              </p>
            )}
          </div>

          {/* Preferred Date */}
          <div className="relative">
            <label
              htmlFor="preferredDate"
              className="mb-2 block text-sm font-semibold text-(--color-heading)"
            >
              Preferred Date{requiredMark}
            </label>

            <div className="relative">
              <CalendarDays
                size={18}
                strokeWidth={1.8}
                aria-hidden="true"
                className="pointer-events-none absolute top-1/2 left-3.5 z-10 -translate-y-1/2 text-(--color-muted)"
              />

              <button
                type="button"
                id="preferredDate"
                aria-haspopup="dialog"
                aria-expanded={isCalendarOpen}
                onClick={() => setIsCalendarOpen((open) => !open)}
                className={`${inputClassName} text-left`}
              >
                <span
                  className={
                    selectedDate
                      ? 'text-(--color-heading)'
                      : 'text-(--color-muted)'
                  }
                >
                  {formattedDate || 'Select date'}
                </span>
              </button>
            </div>

            {isCalendarOpen && (
              <div
                className="contact-calendar absolute top-full left-1/2 z-30 mt-2 w-[min(calc(100vw-2.5rem),22rem)] -translate-x-1/2 rounded-(--radius-card) border border-(--color-border) bg-white p-3 shadow-(--shadow-card) sm:left-0 sm:w-auto sm:translate-x-0 sm:p-4"
                role="dialog"
                aria-label="Choose date"
              >
                <DayPicker
                  mode="single"
                  selected={selectedDate}
                  onSelect={(date) => {
                    setSelectedDate(date)
                    setIsCalendarOpen(false)

                    setErrors((currentErrors) => ({
                      ...currentErrors,
                      preferredDate: undefined,
                    }))
                  }}
                  disabled={{ before: new Date() }}
                  showOutsideDays
                />
              </div>
            )}

            <input
              type="hidden"
              name="preferredDate"
              value={
                selectedDate ? selectedDate.toISOString().split('T')[0] : ''
              }
              required
            />

            {errors.preferredDate && (
              <p id="preferredDate-error" className="mt-1 text-sm text-red-600">
                {errors.preferredDate}
              </p>
            )}
          </div>

          {/* Preferred Time */}
          <div>
            <label
              htmlFor="preferredTime"
              className="mb-2 block text-sm font-semibold text-(--color-heading)"
            >
              Preferred Time{requiredMark}
            </label>

            <div className="relative">
              <Clock3
                size={18}
                strokeWidth={1.8}
                aria-hidden="true"
                className="pointer-events-none absolute top-1/2 left-3.5 z-10 -translate-y-1/2 text-(--color-muted)"
              />
              <ChevronDown
                size={18}
                strokeWidth={1.8}
                aria-hidden="true"
                className="pointer-events-none absolute top-1/2 right-4 z-10 -translate-y-1/2 text-(--color-muted)"
              />

              <select
                id="preferredTime"
                name="preferredTime"
                defaultValue=""
                required
                aria-invalid={Boolean(errors.preferredTime)}
                aria-describedby={
                  errors.preferredTime ? 'preferredTime-error' : undefined
                }
                className={`${inputClassName} appearance-none pr-11`}
              >
                <option value="" disabled>
                  Select time
                </option>
                <option value="morning">Morning</option>
                <option value="afternoon">Afternoon</option>
                <option value="evening">Evening</option>
              </select>
            </div>

            {errors.preferredTime && (
              <p id="preferredTime-error" className="mt-1 text-sm text-red-600">
                {errors.preferredTime}
              </p>
            )}
          </div>

          {/* Message */}
          <div className="md:col-span-2">
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-semibold text-(--color-heading)"
            >
              Message{' '}
              <span className="font-medium text-(--color-body)">
                (Optional)
              </span>
            </label>

            <div className="relative">
              <MessageSquare
                size={18}
                strokeWidth={1.8}
                aria-hidden="true"
                className="pointer-events-none absolute top-3.5 left-3.5 text-(--color-muted)"
              />

              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Tell us more about your problem or any specific requirements..."
                className={`${inputClassName} min-h-20 resize-y`}
              />
            </div>
          </div>
        </div>

        <div className="mt-3">
          <label className="flex items-start gap-3 text-xs font-medium text-(--color-heading)">
            <input
              type="checkbox"
              name="privacy"
              className="mt-0.5 h-4 w-4 shrink-0 rounded border-(--color-border) accent-(--color-primary-blue)"
              aria-invalid={Boolean(errors.privacy)}
              aria-describedby={errors.privacy ? 'privacy-error' : undefined}
            />
            <span>
              I agree to the{' '}
              <a
                href="#privacy"
                className="text-(--color-primary-blue) underline underline-offset-2"
              >
                Privacy policy.
              </a>
            </span>
          </label>

          {errors.privacy && (
            <p id="privacy-error" className="mt-1 text-sm text-red-600">
              {errors.privacy}
            </p>
          )}
        </div>

        {/* Submit */}
        <div className="mt-3">
          <Button
            type="submit"
            variant="primary"
            disabled={isSubmitting}
            className="w-full py-3"
          >
            {isSubmitting ? 'Submitting...' : 'Book Appointment'}
          </Button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm
