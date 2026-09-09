export type ServiceTone = 'blue' | 'green'

export type ServiceItem = {
  id: string
  title: string
  description: string
  detailIntro: string
  benefits: string[]
  icon: string
  tone: ServiceTone
  iconSize?: number
}

export const services: ServiceItem[] = [
  {
    id: 'back-pain',
    title: 'Back Pain Treatment',
    description:
      'Relieve back pain and improve mobility with targeted therapy and exercises.',
    detailIntro: 'Focused physiotherapy can help reduce stiffness and support safer movement.',
    benefits: ['Improve spinal mobility', 'Build supporting strength', 'Support daily comfort'],
    icon: '/icons/Services/Back-pain.svg',
    tone: 'blue',
  },
  {
    id: 'neck-pain',
    title: 'Neck Pain Treatment',
    description:
      'Effective physiotherapy solutions for neck pain, stiffness and muscle tightness.',
    detailIntro: 'Care is guided by your movement limits, posture habits and pain pattern.',
    benefits: ['Ease muscle tightness', 'Improve neck mobility', 'Support posture control'],
    icon: '/icons/Services/neck pain.svg',
    tone: 'green',
    iconSize: 54,
  },
  {
    id: 'knee-pain',
    title: 'Knee Pain Treatment',
    description:
      'Specialized care for knee pain caused by injury, arthritis or wear and tear.',
    detailIntro: 'Treatment focuses on joint comfort, strength and confident walking.',
    benefits: ['Improve knee stability', 'Support pain-free movement', 'Build leg strength'],
    icon: '/icons/Services/Knee Pain.svg',
    tone: 'blue',
  },
  {
    id: 'shoulder-pain',
    title: 'Shoulder Pain Treatment',
    description:
      'Treatment for frozen shoulder, rotator cuff injury, and other shoulder conditions.',
    detailIntro: 'Gentle rehabilitation helps restore shoulder motion and daily function.',
    benefits: ['Improve range of motion', 'Reduce movement guarding', 'Strengthen shoulder support'],
    icon: '/icons/Services/Shoulder Pain.svg',
    tone: 'green',
    iconSize: 52,
  },
  {
    id: 'slip-disc',
    title: 'Slip Disc Treatment',
    description:
      'Non-surgical treatment for slip disc, sciatica and nerve-related pain.',
    detailIntro: 'Structured care supports safer movement and nerve-related symptom management.',
    benefits: ['Reduce movement fear', 'Improve core support', 'Guide safe activity'],
    icon: '/icons/Services/Slip Disc.svg',
    tone: 'green',
  },
  {
    id: 'sports-injury',
    title: 'Sports Injury Rehabilitation',
    description:
      'Recover faster from sports injuries and improve strength, flexibility and performance.',
    detailIntro: 'Rehabilitation is planned around your sport, injury stage and return goals.',
    benefits: ['Restore strength', 'Improve flexibility', 'Support return to activity'],
    icon: '/icons/Services/Sports Injury.svg',
    tone: 'blue',
  },
  {
    id: 'post-surgery',
    title: 'Post Surgery Rehabilitation',
    description:
      'Personalized rehabilitation programs to help you recover faster after surgery.',
    detailIntro: 'Post-surgery care helps rebuild movement, strength and confidence step by step.',
    benefits: ['Improve safe mobility', 'Rebuild strength gradually', 'Support functional recovery'],
    icon: '/icons/Services/Post Surgery rehabilitation.svg',
    tone: 'green',
  },
  {
    id: 'neurological',
    title: 'Neurological Rehabilitation',
    description:
      "Therapy for stroke, paralysis, Parkinson's, and other neurological conditions.",
    detailIntro: 'Therapy supports balance, coordination and daily movement practice.',
    benefits: ['Support balance training', 'Improve movement control', 'Build daily confidence'],
    icon: '/icons/Services/Brain.svg',
    tone: 'blue',
  },
  {
    id: 'womens-health',
    title: "Women's Health Physiotherapy",
    description:
      "Specialized care for pregnancy, postnatal recovery, pelvic pain and women's wellness.",
    detailIntro: 'Care is adapted to women’s health needs through different life stages.',
    benefits: ['Support postnatal recovery', 'Guide pelvic health care', 'Improve daily comfort'],
    icon: '/icons/Services/woman.svg',
    tone: 'blue',
  },
  {
    id: 'pediatric',
    title: 'Pediatric Physiotherapy',
    description:
      'Gentle and effective therapy for children with developmental delays and conditions.',
    detailIntro: 'Child-friendly sessions focus on movement, confidence and gradual progress.',
    benefits: ['Encourage active movement', 'Support developmental goals', 'Build confidence'],
    icon: '/icons/Services/Pediatric.svg',
    tone: 'green',
    iconSize: 52,
  },
  {
    id: 'geriatric',
    title: 'Geriatric Physiotherapy',
    description:
      'Improve mobility, balance and independence for seniors with personalized care.',
    detailIntro: 'Senior-focused care supports mobility, balance and safer daily activity.',
    benefits: ['Improve balance', 'Support walking confidence', 'Maintain independence'],
    icon: '/icons/Services/Geriatric.svg',
    tone: 'blue',
  },
  {
    id: 'pain-management-wellness',
    title: 'Pain Management & Wellness',
    description:
      'Advanced techniques to manage chronic pain and improve quality of life.',
    detailIntro: 'A guided plan can help manage pain while supporting healthier movement habits.',
    benefits: ['Improve activity tolerance', 'Support movement confidence', 'Promote long-term wellbeing'],
    icon: '/icons/Services/Wellness.svg',
    tone: 'green',
  },
]

export const headerServices = services.slice(0, 8)
