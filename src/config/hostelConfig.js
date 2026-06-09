export const hostelConfig = {
  hostelName: "AMR Anandha Nilayam Boys Hostel",
  contactNumber: "7093140490",
  whatsappNumber: "917093140490",
  whatsappMessage: "Hello, I would like to enquire about accommodation at AMR Anandha Nilayam Boys Hostel.",
  
  address: {
    line1: "1-3-141, Vidyanagar",
    city: "Bhuvanagiri",
    state: "Telangana",
    pincode: "508116",
    fullAddress: "1-3-141, Vidyanagar, Bhuvanagiri, Telangana 508116"
  },
  
  // Google Map Embed URL
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.3400588691515!2d78.8967916!3d17.5151253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb06f7bb432f83%3A0xe54d9c73d9d3000b!2s1-3-141%2C%20Vidyanagar%2C%20Bhuvanagiri%2C%20Telangana%20508116!5e0!3m2!1sen!2sin!4v1717900000000!5m2!1sen!2sin",
  
  about: {
    title: "About AMR Anandha Nilayam",
    description1: "AMR Anandha Nilayam Boys Hostel, located in the prime area of Vidyanagar, Bhuvanagiri, offers premium accommodation designed specifically for students, job seekers, and working professionals. We strive to provide a 'home away from home' experience by combining comfort, security, and affordability.",
    description2: "Our hostel stands out for its hygienic environment, nutritious daily mess facility, high-speed WiFi connectivity, and a friendly, support-oriented management. Whether you are prepping for exams, looking for jobs, or commuting to work, we ensure a peaceful atmosphere to support your aspirations.",
    
    whyChooseUs: [
      { id: 1, title: "Safe Environment", description: "CCTV surveillance and secure gates for round-the-clock safety.", icon: "Shield" },
      { id: 2, title: "Affordable Pricing", description: "Premium facilities packaged at pocket-friendly student budgets.", icon: "IndianRupee" },
      { id: 3, title: "Quality Mess Facility", description: "Hygienic, home-style daily meals prepared fresh for residents.", icon: "Coffee" },
      { id: 4, title: "High-Speed Internet", description: "High-speed Wi-Fi access covering the entire premises.", icon: "Wifi" },
      { id: 5, title: "Clean Rooms", description: "Regular cleaning and housekeeping of rooms and corridors.", icon: "Sparkles" },
      { id: 6, title: "Friendly Management", description: "Approachable and responsive management to attend to needs immediately.", icon: "HeartHandshake" },
      { id: 7, title: "Prime Location", description: "Conveniently situated in Vidyanagar, Bhuvanagiri close to transport hubs.", icon: "MapPin" },
      { id: 8, title: "24/7 Security", description: "Continuous security monitoring for absolute peace of mind.", icon: "Lock" }
    ]
  },

  rooms: {
    title: "Triple Sharing Room",
    subtitle: "Cozy & Spacious Living",
    description: "Our triple sharing rooms are designed to optimize space while maintaining privacy and comfort. Each resident is provided with an individual bed, personal storage space, and dedicated study areas, promoting both collaborative learning and personal space.",
    image: "/images/room.png",
    
    features: [
      "Three Comfortable Single Beds",
      "Individual Storage Space / Wardrobes",
      "High-Speed Wi-Fi Access",
      "Adequate Fan and Lighting",
      "Daily Cleaned Environment",
      "Comfortable & Well-Ventilated Living Space"
    ],
    
    amenities: [
      { name: "WiFi", icon: "Wifi", label: "High-Speed WiFi" },
      { name: "RO Water", icon: "Droplet", label: "RO Drinking Water" },
      { name: "Laundry", icon: "Waves", label: "Laundry Service" },
      { name: "Mess", icon: "Utensils", label: "Daily Mess Facility" },
      { name: "CCTV Security", icon: "Eye", label: "CCTV Surveillance" }
    ],

    pricing: {
      type: "Triple Sharing Room",
      monthlyRent: "Rs. 6,500", // Easily editable
      inclusions: [
        "Three Times Daily Meals (Breakfast, Lunch, Dinner)",
        "24/7 RO Drinking Water Access",
        "Unlimited High-Speed Wi-Fi",
        "CCTV Security & Surveillance",
        "Daily Housekeeping & Common Area Cleaning",
        "Laundry Facility Access"
      ]
    }
  },

  facilities: [
    {
      title: "High-Speed WiFi",
      description: "Stay connected with high-speed internet available throughout the premises for studies, work, and entertainment.",
      icon: "Wifi"
    },
    {
      title: "Daily Mess Facility",
      description: "Nutritious, delicious, and hygienic meals prepared daily. We serve breakfast, lunch, and dinner.",
      icon: "Utensils"
    },
    {
      title: "Laundry Service",
      description: "No-hassle laundry facilities to help you keep your clothes clean and fresh without taking up your study time.",
      icon: "Waves"
    },
    {
      title: "CCTV Surveillance",
      description: "Your safety is our top priority. We have round-the-clock CCTV cameras monitoring key areas.",
      icon: "Eye"
    },
    {
      title: "RO Drinking Water",
      description: "Clean, purified, and safe drinking water available 24/7 at multiple spots in the hostel.",
      icon: "Droplet"
    },
    {
      title: "Housekeeping",
      description: "Regular room cleaning and housekeeping services to ensure a clean, comfortable, and hygienic stay.",
      icon: "Sparkles"
    },
    {
      title: "Clean Common Areas",
      description: "Well-maintained lobbies, corridors, and washrooms ensuring top-notch hygiene standards.",
      icon: "Brush"
    },
    {
      title: "Student-Friendly Env.",
      description: "A peaceful and disciplined atmosphere ideal for studying, preparing for exams, and career growth.",
      icon: "BookOpen"
    }
  ],

  gallery: [
    { id: 1, title: "Hostel Exterior", category: "Exterior", image: "/images/exterior.png" },
    { id: 2, title: "Triple Sharing Room", category: "Rooms", image: "/images/room.png" },
    { id: 3, title: "Hygienic Dining Hall", category: "Dining Area", image: "/images/dining.png" },
    { id: 4, title: "Cozy Study & Common Area", category: "Common Areas", image: "/images/common.png" }
  ],

  testimonials: [
    {
      id: 1,
      rating: 5,
      comment: "Comfortable rooms, good food, and reliable WiFi. Perfect for students.",
      author: "Siddharth Reddy",
      role: "Engineering Student"
    },
    {
      id: 2,
      rating: 5,
      comment: "Affordable hostel with excellent facilities and a friendly atmosphere. The management is very cooperative.",
      author: "Vikas Goud",
      role: "Software Developer"
    },
    {
      id: 3,
      rating: 5,
      comment: "Clean rooms, secure environment, and standard quality meals. Highly recommended for job seekers.",
      author: "Manish Kumar",
      role: "Govt. Job Aspirant"
    }
  ],

  faqs: [
    {
      question: "Is WiFi available?",
      answer: "Yes, high-speed internet is available for all residents. The entire hostel premises is covered by our Wi-Fi network."
    },
    {
      question: "Is food provided?",
      answer: "Yes, our daily mess facility is available. We provide hygienic, home-style meals three times a day (breakfast, lunch, and dinner)."
    },
    {
      question: "Are rooms secure?",
      answer: "Yes, security is our primary focus. The hostel is equipped with 24/7 CCTV surveillance monitoring the entry, corridors, and common areas."
    },
    {
      question: "What room type is available?",
      answer: "Currently, we specialize in comfortable Triple Sharing Rooms, which provide a balanced blend of community living, affordability, and personal space."
    },
    {
      question: "How can I book?",
      answer: "Bookings can be made quickly and directly by clicking any of our WhatsApp buttons or contacting us directly at 7093140490."
    }
  ]
};
