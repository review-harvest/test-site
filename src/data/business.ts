/**
 * Business data - single source of truth for all pages.
 * Swap this file to re-skin the site for a different business.
 */
export const business = {
  name: "Doodie Crew Poop Scooping",
  tagline:
    "DFW's trusted dog waste removal service. Reliable, affordable, and satisfaction guaranteed, so you can enjoy your yard again.",
  phone: "214-901-0840",
  email: "ryan@doodiecrew.com",
  license: "",
  founded: 2024,
  address: {
    street: "",
    city: "Prosper",
    state: "TX",
    zip: "",
    full: "Prosper, TX",
  },
  hours: [
    { days: "Monday – Friday", time: "7:30 am – 6:00 pm" },
  ],
  nav: [
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Service Area", href: "/service-area" },
    { label: "Reviews", href: "/reviews" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ],
  ctaHref: "https://client.sweepandgo.com/doodie-crew-pgqy8/register",
  stats: [
    { value: "$69.75", label: "Starting per Month" },
    { value: "5★", label: "Customer Rating" },
    { value: "No", label: "Contracts Required" },
    { value: "Mon–Fri", label: "Service Days" },
  ],
  serviceAreas: [
    "Prosper",
    "Frisco",
    "McKinney",
    "Celina",
    "Little Elm",
    "Aubrey",
    "The Colony",
  ],
  services: [
    {
      name: "Weekly Dog Waste Removal",
      slug: "weekly-cleanup",
      description:
        "Our most popular plan. We visit your yard every week so waste never gets a chance to build up. Your yard stays clean and usable all week long.",
      features: [
        "Once-per-week visits",
        "Front & back yard covered",
        "All dog runs included",
        "Service in any weather",
        "Online portal management",
        "No long-term contract",
      ],
    },
    {
      name: "Bi-Weekly Dog Waste Removal",
      slug: "biweekly-cleanup",
      description:
        "Every-other-week service, a great fit for smaller dogs or budget-conscious households who still want a reliably clean yard.",
      features: [
        "Every-other-week visits",
        "Full yard coverage",
        "Flexible scheduling",
        "Service in any weather",
        "Online portal management",
        "No long-term contract",
      ],
    },
    {
      name: "One-Time Yard Cleanup",
      slug: "one-time-cleanup",
      description:
        "Moving in, hosting a party, or just need to start fresh? One thorough clean of your entire yard, no subscription required.",
      features: [
        "No recurring commitment",
        "Full yard deep clean",
        "Same-week availability",
        "Perfect before parties or move-ins",
        "Great for neglected yards",
        "Easy online booking",
      ],
    },
    {
      name: "Monthly Yard Deodorizing",
      slug: "monthly-deodorizing",
      description:
        "A monthly odor treatment applied to dog areas and grass to neutralize the smell at the source, not just mask it.",
      features: [
        "Pet-safe deodorizing formula",
        "Targets odor at the source",
        "Applied to high-traffic dog areas",
        "Can be added to any cleanup plan",
        "Noticeable results within 24 hours",
        "Ideal for warm Texas months",
      ],
    },
  ],
  team: [
    {
      name: "Ryan White",
      role: "Owner & Founder",
      bio: "Ryan spent 14 years in law enforcement, including time as a K-9 handler and private dog trainer. That experience gave him a deep understanding of dogs, their behavior, and what it takes to care for them. It's the foundation everything at Doodie Crew is built on.",
      initials: "RW",
    },
  ],
  values: [
    {
      title: "Dog Handler Background",
      description:
        "Ryan's 14 years in law enforcement, including as a K-9 handler and dog trainer, means we approach every property with real dog knowledge and a safety-first mindset.",
    },
    {
      title: "Reliability You Can Count On",
      description:
        "We show up when we say we will, every time. No excuses, no last-minute cancellations. Your schedule is our schedule.",
    },
    {
      title: "No Contracts",
      description:
        "Cancel anytime, no questions asked. We earn your business with every single visit.",
    },
    {
      title: "Pet-Safe Practices",
      description:
        "We use organic kennel-grade disinfectant on all tools between yards and always close gates securely. Your dogs are safe with us.",
    },
    {
      title: "All-Weather Service",
      description:
        "Rain, heat, or Texas cold snaps, we show up on your scheduled day. Consistent service is a promise, not a preference.",
    },
    {
      title: "Locally Owned",
      description:
        "Doodie Crew is based in Prosper, TX. Ryan lives and works in the same communities he serves, and that matters.",
    },
  ],
  credentials: [
    { label: "Owner Background", value: "14 Years Law Enforcement · K-9 Handler" },
    { label: "Dog Training", value: "Certified Private Dog Trainer" },
    { label: "Founded", value: "Prosper, TX · 2024" },
    { label: "Guarantee", value: "100% Satisfaction or We Return" },
    { label: "Contracts", value: "None. Cancel Anytime." },
    { label: "Booking", value: "Instant Online Quote Available" },
  ],
  faqs: [
    {
      category: "General",
      questions: [
        {
          question: "What exactly does Doodie Crew do?",
          answer:
            "We're a professional dog waste removal service, also called a pooper scooper service. We come to your property on a regular schedule (weekly or bi-weekly) and remove all dog waste from your yard, dog run, or outdoor area.",
        },
        {
          question: "What areas do you serve?",
          answer:
            "We currently serve Prosper, Frisco, McKinney, Celina, and surrounding communities in Denton and Collin County. We're actively expanding, so contact us if you're nearby and unsure whether we cover your area.",
        },
        {
          question: "Do you work in all weather?",
          answer:
            "Yes. Rain, cold, heat, our crew shows up on your scheduled day regardless of weather conditions. Consistent service is part of our commitment to you.",
        },
        {
          question: "How long have you been in business?",
          answer:
            "Doodie Crew was founded in late 2024 by Ryan White in Prosper, TX. We're a new business with deep roots in the community and a commitment to building long-term relationships with our customers.",
        },
      ],
    },
    {
      category: "Scheduling",
      questions: [
        {
          question: "How do I sign up?",
          answer:
            "You can get an instant quote and sign up online through our client portal at client.sweepandgo.com. It only takes a few minutes to get started.",
        },
        {
          question: "Do I need to be home during the service?",
          answer:
            "No, most customers are not home when we visit. As long as we have access to your yard (gate code or unlocked gate), we'll take care of everything and you'll receive a notification when we're done.",
        },
        {
          question: "Can I change my service frequency?",
          answer:
            "Yes, anytime. Log in to your client portal to adjust your schedule, skip a visit, or change your service plan. No phone call needed.",
        },
        {
          question: "What are your service hours?",
          answer:
            "We work Monday through Friday from 7:30am to 6:00pm. Our office is available during those same hours for any questions. We are closed on weekends.",
        },
      ],
    },
    {
      category: "Pricing",
      questions: [
        {
          question: "How much does it cost?",
          answer:
            "Service starts at $69.75 per month. The exact price depends on your service frequency and yard size. Use our instant online quote tool to get a specific price for your property.",
        },
        {
          question: "Are there any contracts or commitments?",
          answer:
            "None whatsoever. You can cancel your service at any time through your client portal, no fees, no questions asked. We earn your business with every visit.",
        },
        {
          question: "Do you offer discounts for more frequent service?",
          answer:
            "Our weekly plan offers the best per-visit value. Get an instant quote online to compare plan pricing side by side.",
        },
        {
          question: "Do you offer commercial pricing?",
          answer:
            'Yes. For apartment complexes, HOAs, and community parks, we offer volume pricing. Contact us directly at <a href="mailto:ryan@doodiecrew.com" class="text-brand underline hover:opacity-80">ryan@doodiecrew.com</a> to discuss your property\'s needs.',
        },
      ],
    },
    {
      category: "Service Details",
      questions: [
        {
          question: "What do you do with the waste?",
          answer:
            "We double bag all waste and place it in your trash can. We never leave bags on the ground, and your yard is completely clean after every visit.",
        },
        {
          question: "Do you sanitize your equipment between yards?",
          answer:
            "Yes. We use an organic, kennel-grade disinfectant on all tools between every single yard visit. This prevents cross-contamination and keeps your pets safe.",
        },
        {
          question: "What if my dog is in the yard during the visit?",
          answer:
            "Our crew is comfortable working around dogs. Just let us know about your pet in your account profile and we'll handle the rest. Safety is always our top priority.",
        },
        {
          question: "What is your satisfaction guarantee?",
          answer:
            "If you're not satisfied with a cleanup, contact us and we'll return to re-clean your yard at no additional charge. Your satisfaction is non-negotiable to us.",
        },
      ],
    },
  ],
  social: {
    facebook: "https://www.facebook.com/profile.php?id=61567311065165",
    instagram: "https://www.instagram.com/doodiecrew/",
  },
  testimonials: [
    {
      quote:
        "Ryan was responsive to my initial inquiry and was out for my first service the next day! His communication prior to arrival and upon completion of the job was efficient, and he did an amazing job! Highly recommend!",
      name: "Ginger G.",
      location: "North DFW",
      rating: 5,
      service: "Weekly Cleanup",
      date: "February 2025",
    },
    {
      quote:
        "Doodie Crew is doing a great job for me so far. Thanks for your help y'all. Appreciate the communication and timeliness — and my dog loved the welcome treats.",
      name: "Paul E.",
      location: "North DFW",
      rating: 5,
      service: "Weekly Cleanup",
      date: "January 2025",
    },
    {
      quote:
        "Great service! Always on time for scheduling and easy to get ahold of someone if needed!",
      name: "Heather P.",
      location: "North DFW",
      rating: 5,
      service: "Weekly Cleanup",
      date: "February 2025",
    },
  ],
};
