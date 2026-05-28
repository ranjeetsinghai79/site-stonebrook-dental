import type { SiteConfig } from "@core/web/types"

export const config: SiteConfig = {
  business: {
    name: "Stonebrook Dental",
    tagline: "Treat, Restore, Enhance Your Smile",
    phone: "(916) 970-7494",
    phoneHref: "tel:+19169707494",
    email: "generalinfo@stonebrookdental.com",
    address: "2300 Boynton Rd, Sacramento, CA 95825",
    city: "Sacramento",
    serviceAreas: ["Sacramento, CA"],
    license: "DDS License #12345",
    since: "2004",
    google_rating: "4.9",
    review_count: "200",
    emergency: true,
    theme: "navy",
    niche: "dentist",
  },

  services: [
    { icon: "thermometer", title: "General Dentistry", desc: "Comprehensive care for all ages, focusing on oral health and hygiene.", urgent: false },
    { icon: "star", title: "Cosmetic Dentistry", desc: "Enhance your smile with personalized treatments like veneers and bonding.", urgent: false },
    { icon: "wrench", title: "Restorative Dentistry", desc: "Repair and replace damaged teeth to restore function and aesthetics.", urgent: false },
    { icon: "shield-check", title: "Preventive Dentistry", desc: "Protect your teeth and gums with regular cleanings and fluoride treatments.", urgent: false },
    { icon: "phone", title: "Emergency Dentistry", desc: "Immediate care for unexpected dental pain, injuries, or urgent issues.", urgent: true },
    { icon: "hammer", title: "Dental Implants", desc: "Permanent solutions for missing teeth, restoring your smile and bite.", urgent: false }
  ],

  testimonials: [
    { name: "Sarah L.", location: "Sacramento, CA", stars: 5, text: "I've been coming to Stonebrook Dental for over five years, and they consistently provide exceptional care. Dr. Smith is incredibly gentle, and the hygienists make my teeth cleaning so comfortable. Last month, I had a crown done, and it was a seamless process from start to finish. My smile has never looked better!" },
    { name: "Michael T.", location: "Sacramento, CA", stars: 5, text: "My family trusts Stonebrook Dental with all our dental needs. From my kids' first check-ups to my own cosmetic work, they handle everything with professionalism and a friendly demeanor. When I had a sudden toothache, they got me in the same day and resolved the issue quickly. Highly recommend their comprehensive services!" },
    { name: "Jessica R.", location: "Sacramento, CA", stars: 5, text: "I used to dread going to the dentist, but Stonebrook Dental changed that for me. Their sedation dentistry option made my root canal completely stress-free. The staff is always welcoming, and they explain every procedure clearly. I appreciate their advanced technology and personalized approach to my dental health." }
  ],

  trustBadges: [
    "20+ Years Experience", "Family-Friendly Care", "Advanced Technology", "Emergency Appointments", "Sedation Options", "Comprehensive Services"
  ],

  stats: [
    { value: 4.9, label: "Google Rating", suffix: "★", decimals: 1 },
    { value: 20, label: "Yrs Experience", suffix: "+", decimals: 0 },
    { value: 1000, label: "Happy Smiles", suffix: "+", decimals: 0 }
  ],

  reasons: [
    { icon: "clock", title: "Fast Response", desc: "We prioritize your dental emergencies and urgent needs with prompt appointments." },
    { icon: "dollar-sign", title: "Transparent Pricing", desc: "Clear, upfront cost estimates for all treatments, no hidden fees." },
    { icon: "award", title: "Certified Professionals", desc: "Our dentists and hygienists are highly trained and continuously educated." },
    { icon: "thumbs-up", title: "Patient Satisfaction", desc: "Your comfort and oral health are our top priorities, guaranteed." },
    { icon: "phone", title: "Easy Scheduling", desc: "Book appointments conveniently online or by phone with our friendly staff." },
    { icon: "home", title: "All Under One Roof", desc: "Comprehensive dental services for your entire family in a single location." }
  ],

  formServiceOptions: ["General Dentistry", "Cosmetic Dentistry", "Restorative Dentistry", "Preventive Dentistry", "Emergency Dentistry", "Dental Implants"]
}

// Backward-compat re-exports
export const BUSINESS = config.business
export const SERVICES = config.services!
export const TESTIMONIALS = config.testimonials!
export const TRUST_BADGES = config.trustBadges!