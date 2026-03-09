/**
 * Business data — single source of truth for all pages.
 * Swap this file to re-skin the site for a different business.
 */
export const business = {
  name: "Apex Plumbing & Drain",
  tagline:
    "Austin's most trusted plumbers since 2009. Licensed, insured, and committed to doing right by every customer.",
  phone: "(512) 555-0142",
  email: "hello@apexplumbing.com",
  license: "TX Plumbing License #M-42891",
  founded: 2009,
  address: {
    street: "4820 Burnet Rd, Suite 200",
    city: "Austin",
    state: "TX",
    zip: "78756",
    full: "4820 Burnet Rd Suite 200, Austin, TX 78756",
  },
  hours: [
    { days: "Monday – Friday", time: "7:00 am – 7:00 pm" },
    { days: "Saturday", time: "8:00 am – 5:00 pm" },
    { days: "Sunday", time: "Emergency calls only" },
  ],
  nav: [
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Service Area", href: "/service-area" },
    { label: "Reviews", href: "/reviews" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ],
  ctaHref: "/contact",
  stats: [
    { value: "15+", label: "Years in Business" },
    { value: "8,400+", label: "Jobs Completed" },
    { value: "4.9★", label: "Google Rating" },
    { value: "24/7", label: "Emergency Service" },
  ],
  serviceAreas: [
    "Austin",
    "Round Rock",
    "Cedar Park",
    "Georgetown",
    "Pflugerville",
    "Leander",
    "Kyle",
    "Buda",
    "Lakeway",
    "Bee Cave",
    "Westlake Hills",
    "Rollingwood",
  ],
  services: [
    {
      name: "Drain Cleaning & Unclogging",
      slug: "drain-cleaning",
      description:
        "Slow drains and clogs cleared fast. We use camera inspection to find the problem and fix it right the first time.",
      features: [
        "Camera inspection included",
        "Kitchen & bathroom drains",
        "Main sewer line clearing",
        "Hydro-jetting available",
        "Tree root removal",
        "Odor elimination",
      ],
    },
    {
      name: "Water Heater Services",
      slug: "water-heater",
      description:
        "Hot water gone? We repair and replace all makes and models of tank and tankless water heaters — usually same day.",
      features: [
        "Tank & tankless units",
        "Same-day service available",
        "All brands serviced",
        "Energy-efficient upgrades",
        "Expansion tank installation",
        "Annual maintenance",
      ],
    },
    {
      name: "Emergency Plumbing",
      slug: "emergency-plumbing",
      description:
        "Burst pipe at 2am? We answer every call. Emergency service 24 hours a day, including weekends and holidays.",
      features: [
        "24/7 response",
        "On-site within 2 hours",
        "No extra emergency fee",
        "Burst pipe repair",
        "Water shutoff assistance",
        "Flood mitigation",
      ],
    },
    {
      name: "Leak Detection & Repair",
      slug: "leak-detection",
      description:
        "Hidden leaks waste water and damage your home. We find them fast with modern detection equipment — no guesswork.",
      features: [
        "Non-invasive detection",
        "Slab leak specialists",
        "Wall & ceiling leaks",
        "Pressure testing",
        "Water meter analysis",
        "Full repair after detection",
      ],
    },
    {
      name: "Pipe Repair & Repiping",
      slug: "pipe-repair",
      description:
        "Old or damaged pipes replaced with durable, code-compliant materials. We work cleanly and minimize disruption to your home.",
      features: [
        "PEX & copper piping",
        "Partial or whole-home repipes",
        "Trenchless options",
        "Minimal disruption",
        "Permit included",
        "Inspection-ready finish",
      ],
    },
    {
      name: "Fixture Installation",
      slug: "fixture-installation",
      description:
        "Toilets, faucets, showers, sinks — we install them all. Supply your own or let us source quality fixtures for you.",
      features: [
        "All fixture types",
        "Supply your own or ours",
        "Bathroom & kitchen",
        "Same-day available",
        "Code-compliant install",
        "Cleanup included",
      ],
    },
  ],
  team: [
    {
      name: "Marcus Rivera",
      role: "Owner & Master Plumber",
      bio: "Marcus founded Apex in 2009 after 10 years working for larger plumbing companies. His hands-on approach and commitment to honest pricing set the tone for everything we do.",
      initials: "MR",
    },
    {
      name: "Sarah Chen",
      role: "Lead Plumber",
      bio: "Sarah joined Apex in 2014 and quickly became our go-to for complex diagnostics. She specializes in leak detection and has a reputation for solving problems other plumbers miss.",
      initials: "SC",
    },
    {
      name: "Tyler Johnson",
      role: "Senior Technician",
      bio: "Tyler has been with Apex since 2017 and handles most of our emergency calls and water heater replacements. Customers love his calm demeanor and clear explanations.",
      initials: "TJ",
    },
    {
      name: "Angela Torres",
      role: "Office Manager",
      bio: "Angela keeps everything running behind the scenes — from scheduling to follow-ups. She's the first voice most customers hear and the reason jobs stay on track.",
      initials: "AT",
    },
  ],
  values: [
    {
      title: "Honest Pricing",
      description:
        "You get a full written quote before we touch anything. What we quote is what you pay — no surprises.",
    },
    {
      title: "Respect Your Space",
      description:
        "We wear shoe covers, lay down drop cloths, and clean up completely when we're done every time.",
    },
    {
      title: "On-Time, Every Time",
      description:
        "We give you a 1-hour arrival window and call 30 minutes before we show up. Your time matters.",
    },
    {
      title: "Quality Materials",
      description:
        "We only use manufacturer-approved parts and code-compliant materials on every job we take.",
    },
    {
      title: "1-Year Warranty",
      description:
        "All labor is backed by our 1-year guarantee. If something's off, we come back at no charge.",
    },
    {
      title: "Background-Checked Team",
      description:
        "Every technician is screened, licensed, and insured before their first day on the job.",
    },
  ],
  credentials: [
    { label: "Texas Plumbing License", value: "#M-42891" },
    { label: "Fully Insured", value: "General Liability & Workers' Comp" },
    { label: "BBB Accredited", value: "A+ Rating" },
    { label: "Google Verified", value: "4.9★ · 847 Reviews" },
    { label: "Angi Certified", value: "Super Service Award 2023–24" },
    { label: "Serving Austin", value: "Since 2009" },
  ],
  faqs: [
    {
      category: "General",
      questions: [
        {
          question: "Are you licensed and insured?",
          answer:
            "Yes. Apex Plumbing & Drain holds Texas Plumbing License #M-42891 and carries full general liability and workers' compensation insurance. We're happy to provide proof of insurance upon request.",
        },
        {
          question: "What areas do you serve?",
          answer:
            "We serve the greater Austin metro area, including Round Rock, Cedar Park, Georgetown, Pflugerville, Leander, Kyle, Buda, Lakeway, Bee Cave, Westlake Hills, and Rollingwood. If you're not sure if we cover your area, give us a call.",
        },
        {
          question: "Do you offer emergency service?",
          answer:
            "Yes. We're available 24 hours a day, 7 days a week — including weekends and holidays. Call our main number and press 1 for emergency dispatch. We aim to be on-site within 2 hours.",
        },
        {
          question: "How long have you been in business?",
          answer:
            "Apex Plumbing & Drain was founded in Austin in 2009. We've completed over 8,400 jobs for homeowners and businesses across the Austin metro area.",
        },
      ],
    },
    {
      category: "Scheduling",
      questions: [
        {
          question: "How quickly can you come out?",
          answer:
            "For most non-emergency jobs, we can come out the same day you call or the following morning. For emergencies, we aim to be on-site within 2 hours of your call.",
        },
        {
          question: "Do I need to be home during the service?",
          answer:
            "For a first-time job, yes — someone over 18 must be present when we arrive. For recurring maintenance customers we can often make other arrangements. Just ask when you schedule.",
        },
        {
          question: "What are your regular service hours?",
          answer:
            "We schedule regular service calls Monday through Friday from 7am to 7pm, and Saturday from 8am to 5pm. Emergency service is available 24/7 including Sundays and holidays.",
        },
        {
          question: "Can I schedule online?",
          answer:
            "You can submit a request through our contact form and we'll call to confirm your appointment. For the fastest scheduling, calling us directly is always the quickest option.",
        },
      ],
    },
    {
      category: "Pricing",
      questions: [
        {
          question: "Do you charge a service call fee?",
          answer:
            "We charge a $79 diagnostic fee to cover travel and initial assessment. This fee is waived when you proceed with the recommended repair — so most customers pay nothing extra.",
        },
        {
          question: "Will I get a written quote before work starts?",
          answer:
            "Always. We diagnose the problem, explain what we found, and provide a written quote for your approval before any work begins. What we quote is what you pay.",
        },
        {
          question: "Do you offer financing for larger jobs?",
          answer:
            "Yes. For jobs over $500, we offer financing through a third-party provider with flexible monthly payment plans. Ask about financing options when you schedule your appointment.",
        },
        {
          question: "How much does drain cleaning cost?",
          answer:
            "Basic drain cleaning typically runs $125–$275 depending on the drain location and the severity of the clog. We'll give you an exact written quote after our initial diagnostic.",
        },
      ],
    },
    {
      category: "After Service",
      questions: [
        {
          question: "What warranty do you offer on your work?",
          answer:
            "All labor performed by Apex Plumbing & Drain is backed by a 1-year warranty. If the same issue returns within a year of the repair, we come back and fix it at no charge.",
        },
        {
          question: "What if I'm not satisfied with the work?",
          answer:
            "Call us and we'll make it right — no arguments, no runaround. Customer satisfaction is the foundation of our business and we take every concern seriously.",
        },
        {
          question: "Do you warranty parts and materials?",
          answer:
            "Parts are covered by the manufacturer's warranty, which varies by product. We'll walk you through the specific warranty on any parts we install so you know exactly what's covered.",
        },
      ],
    },
  ],
  testimonials: [
    {
      quote:
        "They came out same day and replaced our water heater in under three hours. Fair price, clean work, and Marcus explained exactly what he was doing. Best plumber we've ever used.",
      name: "Sarah M.",
      location: "Austin, TX",
      rating: 5,
      service: "Water Heater Services",
      date: "October 2024",
    },
    {
      quote:
        "Called at midnight with a burst pipe and Tyler was at my house by 1:30am. He was calm, professional, and had the leak fixed before it caused any serious damage. Can't thank them enough.",
      name: "James P.",
      location: "Round Rock, TX",
      rating: 5,
      service: "Emergency Plumbing",
      date: "September 2024",
    },
    {
      quote:
        "I've used three other plumbers in Austin and none compare. Honest, fast, and they actually answer the phone. Their quote was exactly what I paid. Won't call anyone else.",
      name: "Linda K.",
      location: "Cedar Park, TX",
      rating: 5,
      service: "Drain Cleaning",
      date: "August 2024",
    },
    {
      quote:
        "Sarah found a slab leak that two other plumbers missed entirely. Minimal excavation, fixed quickly, and the price was completely fair. These folks are the real deal.",
      name: "Robert D.",
      location: "Georgetown, TX",
      rating: 5,
      service: "Leak Detection",
      date: "August 2024",
    },
    {
      quote:
        "Needed a full bathroom fixture install and they did it in one trip. Showed up on time, did beautiful work, and cleaned up better than they found it. Highly recommend.",
      name: "Maria S.",
      location: "Pflugerville, TX",
      rating: 5,
      service: "Fixture Installation",
      date: "July 2024",
    },
    {
      quote:
        "Marcus came out to assess a slow drain and discovered a tree root intrusion we had no idea about. Clear explanation, fair quote, fixed properly. Genuinely impressed.",
      name: "David T.",
      location: "Austin, TX",
      rating: 5,
      service: "Drain Cleaning",
      date: "July 2024",
    },
    {
      quote:
        "Called on a Sunday with no hot water and they had someone out by noon. New water heater installed by 3pm. Angela in the office was incredibly helpful with the warranty info.",
      name: "Jennifer L.",
      location: "Leander, TX",
      rating: 5,
      service: "Water Heater Services",
      date: "June 2024",
    },
    {
      quote:
        "We needed a whole-house repipe after buying an older home. Big job, done professionally, minimal drywall work. They communicated every step of the way.",
      name: "Michael R.",
      location: "Kyle, TX",
      rating: 5,
      service: "Pipe Repair & Repiping",
      date: "May 2024",
    },
    {
      quote:
        "Fixed a toilet that had been running for months. Quick, affordable, and no upsell. The tech was in and out in 30 minutes and the bill matched the quote exactly. Perfect.",
      name: "Patricia W.",
      location: "Buda, TX",
      rating: 5,
      service: "Fixture Installation",
      date: "May 2024",
    },
    {
      quote:
        "Tankless heater wasn't performing right. Tyler diagnosed a scale buildup issue, flushed the system, and it's been perfect ever since. Honest diagnosis, no unnecessary parts.",
      name: "Carlos M.",
      location: "Lakeway, TX",
      rating: 5,
      service: "Water Heater Services",
      date: "April 2024",
    },
    {
      quote:
        "Our kitchen drain backed up on Thanksgiving morning. They picked up immediately and had someone out by noon. Absolute lifesavers. Will be a customer for life.",
      name: "Ashley B.",
      location: "Austin, TX",
      rating: 5,
      service: "Emergency Plumbing",
      date: "November 2023",
    },
    {
      quote:
        "Had a mysterious leak causing high water bills. They pinpointed a pressurized line under the slab without any guesswork. Professional, precise, and worth every penny.",
      name: "Thomas H.",
      location: "Bee Cave, TX",
      rating: 5,
      service: "Leak Detection",
      date: "March 2024",
    },
  ],
};
