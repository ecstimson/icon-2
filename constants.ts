import { Service, Location, Testimonial, FleetVehicle, UserProfile, Trip, PaymentMethod } from './types';

export const COMPANY_NAME = "Icon Transportation Wilmington";
export const COMPANY_EMAIL = "Jwagner@icontransportationwilmington.com";
export const COMPANY_PHONE = "(910) 294-0051";
export const COMPANY_ADDRESS = "1608 Queen St, Wilmington, NC 28401";

export const SERVICES: Service[] = [
  {
    id: '1',
    slug: 'airport-transportation',
    name: 'Airport Transportation',
    description: 'Professional airport transfers with flight monitoring.',
    longDescription: 'Experience stress-free travel with our premier airport transportation service. We monitor your flight status in real-time to ensure your chauffeur is there when you arrive. Whether you are traveling for business or pleasure, our punctual and professional service sets the standard for ground transportation in Wilmington.',
    imageUrl: 'https://picsum.photos/id/1/800/600',
    features: ['Flight Monitoring', 'Meet & Greet', 'Luggage Assistance', 'Bottled Water'],
    keyPoints: [
      'Wilmington International Airport (ILM)',
      'Raleigh-Durham International Airport (RDU)',
      'Charlotte Douglas International Airport (CLT)',
      'Myrtle Beach International Airport (MYR)',
      'Private Aviation Fields (FBOs)'
    ],
    children: [
      {
        id: 'ilm',
        slug: 'ilm-car-service',
        title: 'ILM Airport Car Service',
        heroImage: 'https://picsum.photos/id/1011/800/600',
        excerpt: 'Direct, reliable transfers to and from Wilmington International Airport.',
        description: 'Our ILM Airport Car Service is designed for the discerning traveler who values punctuality and comfort. We provide curb-side pickup and drop-off, ensuring you never have to worry about parking or navigating traffic.',
        secondaryContent: 'We track all inbound flights to ILM. If your flight is delayed or arrives early, our dispatch team adjusts your pickup time accordingly. Your chauffeur will be waiting in the cell phone lot and will pull up to the curb the moment you are ready.',
        features: ['Curbside Pickup', 'Flight Tracking', '24/7 Availability']
      },
      {
        id: 'rdu',
        slug: 'rdu-airport-car-service',
        title: 'RDU Airport Car Service',
        heroImage: 'https://picsum.photos/id/1012/800/600',
        excerpt: 'Comfortable long-distance travel to Raleigh-Durham International.',
        description: 'Skip the stress of the two-hour drive to RDU. Our chauffeurs allow you to relax or work in a quiet, climate-controlled environment while we handle the road.',
        secondaryContent: 'Perfect for connecting to international flights or major carriers not serving ILM. We offer flat-rate pricing for transfers between Wilmington and RDU.',
        features: ['Flat Rates', 'Luxury Sedans & SUVs', 'WiFi Available']
      },
      {
        id: 'myr',
        slug: 'myr-airport-service',
        title: 'Myrtle Beach Airport Service',
        heroImage: 'https://picsum.photos/id/1013/800/600',
        excerpt: 'Seamless connections to Myrtle Beach International Airport.',
        description: 'Serving travelers heading to or from the Grand Strand. Our service covers the distance with efficiency and style.',
        secondaryContent: 'Avoid the rental car lines and high parking fees. We provide door-to-door service from your Wilmington home or office directly to the MYR terminal.',
        features: ['Door-to-Door', 'Group Options', 'Luggage Assistance']
      },
      {
        id: 'clt',
        slug: 'clt-airport-service',
        title: 'CLT Airport Car Service',
        heroImage: 'https://picsum.photos/id/1014/800/600',
        excerpt: 'Executive transport to Charlotte Douglas International.',
        description: 'The ultimate in long-distance executive travel. We provide a mobile office environment for the trip to Charlotte.',
        secondaryContent: 'Ideal for business executives needing to connect to major hubs. Enjoy a smooth ride with privacy partitions and premium amenities.',
        features: ['Executive Vans', 'Privacy', 'Refreshments']
      },
      {
        id: 'early-morning',
        slug: 'early-morning-airport',
        title: 'Early Morning Airport Service',
        heroImage: 'https://picsum.photos/id/1015/800/600',
        excerpt: 'Guaranteed reliability for those 5 AM flights.',
        description: 'Never worry about oversleeping or a no-show rideshare again. Our pre-scheduled early morning service guarantees your chauffeur is on location 15 minutes prior to pickup.',
        secondaryContent: 'We specialize in early morning logistics. Wake up calls available upon request.',
        features: ['Guaranteed Pickup', 'Wake Up Call', 'Coffee Stop Option']
      },
       {
        id: 'private-transfer',
        slug: 'private-airport-transfer',
        title: 'Private Airport Transfer',
        heroImage: 'https://picsum.photos/id/1016/800/600',
        excerpt: 'Exclusive use vehicles for total privacy.',
        description: 'Your vehicle, your schedule. No sharing, no stops. Just you and the open road to your destination.',
        secondaryContent: 'Available for individuals, couples, or families who prefer a private, controlled environment.',
        features: ['Sanitized Vehicles', 'No Sharing', 'Direct Route']
      }
    ]
  },
  {
    id: '2',
    slug: 'corporate-travel',
    name: 'Corporate Travel',
    description: 'Reliable executive transport for business professionals.',
    longDescription: 'Punctuality and professionalism are the hallmarks of our corporate travel service. Whether for daily commutes, client meetings, or road shows, we provide a mobile office environment.',
    imageUrl: 'https://picsum.photos/id/2/800/600',
    features: ['Priority Booking', 'Detailed Billing', 'Wi-Fi Available', 'Privacy Partition'],
    children: [],
    keyPoints: ['Daily Commutes', 'Client Meetings', 'Road Shows', 'Conferences', 'Corporate Retreats']
  },
  {
    id: '3',
    slug: 'sports-concerts',
    name: 'Sports & Concerts',
    description: 'Arrive in style to your favorite entertainment venues.',
    longDescription: 'Skip the parking hassle and enjoy the event from door to door. Perfect for groups attending concerts, sporting events, or festivals in the Carolinas.',
    imageUrl: 'https://picsum.photos/id/3/800/600',
    features: ['Group Coordination', 'Tailgating Options', 'Late Night Pickup', 'Premium Sound'],
    children: [],
    keyPoints: ['PNC Arena', 'Bank of America Stadium', 'Live Oak Bank Pavilion', 'Greenfield Lake Amphitheater', 'Wilson Center']
  },
  {
    id: '4',
    slug: 'special-events',
    name: 'Special Events',
    description: 'Weddings, proms, and milestone celebrations.',
    longDescription: 'Make your special day unforgettable with our white-glove service. From weddings to anniversaries, we add a touch of elegance to every occasion.',
    imageUrl: 'https://picsum.photos/id/4/800/600',
    features: ['Red Carpet Service', 'Champagne Package', 'Decorated Vehicles', 'Uniformed Chauffeur'],
    children: [],
    keyPoints: ['Weddings', 'Proms & Formals', 'Anniversaries', 'Date Nights', 'Graduations']
  },
  {
    id: '5',
    slug: 'party-bus',
    name: 'Party Bus',
    description: 'Luxury group transportation for nights out.',
    longDescription: 'The ultimate way to celebrate with friends. Our party buses feature premium sound systems, lighting, and comfortable seating for large groups.',
    imageUrl: 'https://picsum.photos/id/5/800/600',
    features: ['Premium Audio', 'LED Lighting', 'Bar Area', 'Perimeter Seating'],
    children: [],
    keyPoints: ['Bachelor/Bachelorette Parties', 'Brewery Tours', 'Birthday Bashes', 'Casino Trips', 'Night on the Town']
  },
  {
    id: '6',
    slug: 'private-vip',
    name: 'Private & VIP',
    description: 'Discrete and secure transport for high-profile clients.',
    longDescription: 'For those requiring the highest level of privacy and security. Our VIP service offers discreet vehicles and security-trained chauffeurs.',
    imageUrl: 'https://picsum.photos/id/6/800/600',
    features: ['NDA Available', 'Tinted Windows', 'Security Liaison', 'Custom Routes'],
    children: [],
    keyPoints: ['High Profile Individuals', 'Secure Transport', 'Discreet Arrivals', 'Security Detail Integration', 'Confidential Routes']
  }
];

export const LOCATIONS: Location[] = [
  {
    id: '1',
    slug: 'wilmington-area',
    name: 'Wilmington Area',
    description: 'Downtown, Midtown, and surrounding neighborhoods.',
    longDescription: 'Our core service area covers the entirety of Wilmington, from the historic Riverwalk downtown to the shopping districts of Mayfaire and the Pointe. We know every street and shortcut.',
    imageUrl: 'https://picsum.photos/id/10/800/600',
    keyPoints: ['Historic Downtown', 'Riverwalk District', 'Mayfaire Town Center', 'UNCW Campus', 'New Hanover Medical Center'],
    children: [
        {
            id: 'downtown',
            slug: 'downtown-wilmington',
            title: 'Downtown Wilmington',
            heroImage: 'https://picsum.photos/id/1018/800/600',
            excerpt: 'Historic district transportation.',
            description: 'Navigate the historic streets of downtown with ease. Perfect for dinner reservations, riverfront events, or business at the convention center.',
            secondaryContent: 'We handle drop-offs right at the venue entrance, so you never have to worry about parking decks or walking distances.',
            features: ['Riverwalk Access', 'Convention Center', 'Nightlife']
        },
        {
            id: 'mayfaire',
            slug: 'mayfaire-area',
            title: 'Mayfaire & Landfall',
            heroImage: 'https://picsum.photos/id/1019/800/600',
            excerpt: 'Shopping and residential service.',
            description: 'Serving the premier shopping and residential districts of Wilmington.',
            secondaryContent: 'Regular service to and from Landfall community and Mayfaire Town Center.',
            features: ['Shopping', 'Dining', 'Residential']
        }
    ]
  },
  {
    id: '2',
    slug: 'brunswick-county',
    name: 'Brunswick County',
    description: 'Leland, Southport, and coastal communities.',
    longDescription: 'Extending our luxury service across the Cape Fear Memorial Bridge to Leland, Southport, Oak Island, and beyond.',
    imageUrl: 'https://picsum.photos/id/11/800/600',
    keyPoints: ['Leland', 'Southport', 'Oak Island', 'Bald Head Island Ferry', 'St. James Plantation'],
    children: []
  },
  {
    id: '3',
    slug: 'beach-communities',
    name: 'Beach Communities',
    description: 'Wrightsville Beach, Carolina Beach, and Kure Beach.',
    longDescription: 'Reliable transport to and from the coast. Whether for a vacation rental or a seaside dinner, we get you there in comfort.',
    imageUrl: 'https://picsum.photos/id/12/800/600',
    keyPoints: ['Wrightsville Beach', 'Carolina Beach', 'Kure Beach', 'Figure Eight Island', 'Fort Fisher'],
    children: []
  },
  {
    id: '4',
    slug: 'pender-county',
    name: 'Pender County',
    description: 'Hampstead, Surf City, and Topsail Island.',
    longDescription: 'Serving the northern corridor including Hampstead and the Topsail Island beaches.',
    imageUrl: 'https://picsum.photos/id/13/800/600',
    keyPoints: ['Hampstead', 'Surf City', 'Topsail Beach', 'North Topsail', 'Scotts Hill'],
    children: []
  },
  {
    id: '5',
    slug: 'regional-routes',
    name: 'Regional Routes',
    description: 'Raleigh, Charlotte, Myrtle Beach connections.',
    longDescription: 'Long-distance luxury travel to major cities in North and South Carolina.',
    imageUrl: 'https://picsum.photos/id/14/800/600',
    keyPoints: ['Raleigh / Durham', 'Charlotte', 'Myrtle Beach', 'Charleston', 'Jacksonville'],
    children: []
  },
  {
    id: '6',
    slug: 'private-communities',
    name: 'Private Communities',
    description: 'Landfall, Porters Neck, and gated estates.',
    longDescription: 'Discreet service for residents of gated communities and private estates.',
    imageUrl: 'https://picsum.photos/id/15/800/600',
    keyPoints: ['Landfall', 'Porters Neck', 'Figure Eight Island', 'Compass Pointe', 'Brunswick Forest'],
    children: []
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    text: "Icon Transportation provided impeccable service for our corporate retreat. The drivers were punctual, professional, and the vehicles were pristine. Highly recommended for executive travel.",
    author: "James E. Sterling",
    date: "October 2023",
    rating: 5
  },
  {
    id: 2,
    text: "We used Icon for our wedding party transport. They went above and beyond to make our day special. The white-glove service truly made us feel like royalty.",
    author: "Sarah & Michael Chen",
    date: "September 2023",
    rating: 5
  },
  {
    id: 3,
    text: "Reliable, clean, and courteous. I've used many car services in Wilmington over the years, but Icon stands out for their attention to detail and consistency.",
    author: "Eleanor Vance",
    date: "November 2023",
    rating: 5
  }
];

export const FLEET: FleetVehicle[] = [
  {
    id: 'escalade',
    name: 'Cadillac Escalade ESV',
    description: 'The definitive luxury SUV. Perfect for airport transfers, executive travel, and VIP service. Features heated leather seating, spacious cargo area, and a whisper-quiet ride.',
    capacity: 6,
    luggage: 6,
    category: 'SUV',
    imageUrl: 'https://picsum.photos/id/1071/800/600',
    features: ['Leather Interior', 'Privacy Tint', 'Bottled Water', 'USB Charging Ports']
  },
  {
    id: 'party-bus-1',
    name: 'Mercedes-Benz Sprinter Limo',
    description: 'A 14-passenger luxury executive sprinter designed for group entertainment. Stand-up headroom, wraparound seating, and premium sound make this perfect for nights out.',
    capacity: 14,
    luggage: 0,
    category: 'Bus',
    imageUrl: 'https://picsum.photos/id/1072/800/600',
    features: ['Wraparound Seating', 'Premium Sound System', 'LED Lighting', 'Bar Console']
  },
  {
    id: 'party-bus-2',
    name: 'Luxury Limo Coach',
    description: 'Our second 14-passenger option offers a spacious and festive environment for wedding parties and special events. Arrive at your destination in ultimate style.',
    capacity: 14,
    luggage: 2,
    category: 'Bus',
    imageUrl: 'https://picsum.photos/id/1073/800/600',
    features: ['Bluetooth Audio', 'Mood Lighting', 'Privacy Partition', 'Plush Seating']
  }
];

// Mock Data for Dashboard

export const MOCK_USER: UserProfile = {
  id: 'u1',
  name: 'Alexander Hamilton',
  email: 'a.hamilton@example.com',
  phone: '(910) 555-0192',
  avatarUrl: 'https://picsum.photos/id/64/200/200'
};

export const MOCK_PAYMENT_METHODS: PaymentMethod[] = [
  { id: 'pm1', last4: '4242', brand: 'Visa', expiry: '12/25', isDefault: true },
  { id: 'pm2', last4: '8812', brand: 'Amex', expiry: '09/24', isDefault: false }
];

export const MOCK_TRIPS: Trip[] = [
  {
    id: 't1',
    date: new Date(Date.now() + 3600000).toISOString(), // 1 hour from now
    time: '4:00 PM',
    pickupLocation: '123 Ocean Blvd, Wrightsville Beach, NC',
    dropoffLocation: 'Wilmington International Airport (ILM)',
    vehicleId: 'escalade',
    serviceId: '1', // Airport Transport
    status: 'En Route',
    price: 125.00,
    driverName: 'Robert Vance',
    driverRating: 4.9,
    driverPhoto: 'https://picsum.photos/id/1005/100/100',
    driverPhone: '(910) 555-0101',
    notes: 'Please help with heavy luggage.',
    guests: [{ email: 'eliza@example.com', status: 'Accepted' }],
    flightNumber: 'AA 4821'
  },
  {
    id: 't2',
    date: '2024-05-20T19:00:00.000Z',
    time: '7:00 PM',
    pickupLocation: 'ILM Airport',
    dropoffLocation: 'Hotel Ballast, Downtown Wilmington',
    vehicleId: 'escalade',
    serviceId: '2',
    status: 'Scheduled',
    price: 110.00,
    notes: '',
    guests: []
  },
  {
    id: 't3',
    date: '2023-11-15T09:00:00.000Z',
    time: '9:00 AM',
    pickupLocation: 'Landfall Country Club',
    dropoffLocation: 'Raleigh-Durham Airport (RDU)',
    stops: ['Starbucks, Mayfaire'],
    vehicleId: 'escalade',
    serviceId: '2',
    status: 'Completed',
    price: 350.00,
    driverName: 'James West',
    driverRating: 5.0,
    notes: 'Stopped for coffee.',
    guests: []
  }
];