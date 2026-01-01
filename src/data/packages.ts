import pkgHoneymoon from '../assets/images/pkg-honeymoon.png';
import pkgFamily from '../assets/images/pkg-family.png';
import pkgLadakh from '../assets/images/pkg-ladakh.png';
import pkgVaishnoDevi from '../assets/images/pkg-vaishnodevi.png';
import pkgSkiing from '../assets/images/pkg-skiing.png';
import pkgBackpacker from '../assets/images/pkg-backpacker.png';
import pkgLuxury from '../assets/images/pkg-luxury.png';

export interface ItineraryDay {
    day: number;
    title: string;
    description: string;
}

export interface Package {
    id: number;
    title: string;
    category: string;
    duration: string;
    rating: number;
    price: number;
    originalPrice: number;
    route: string[];
    image: string;
    highlights: string[];
    description: string;
    difficulty: "Easy" | "Moderate" | "Hard";
    groupSize: string;
    itinerary: ItineraryDay[];
}

export const packages: Package[] = [
    {
        id: 1,
        title: "Romantic Kashmir Honeymoon",
        category: "Honeymoon",
        duration: "6D/5N",
        rating: 4.8,
        price: 35999,
        originalPrice: 45999,
        route: ["Srinagar", "Gulmarg", "Pahalgam"],
        image: pkgHoneymoon,
        highlights: ["Luxury Houseboat Stay", "Private Shikara Ride", "Candlelight Dinner", "Flower Decoration"],
        description: "Experience the magic of love in the valley of saints. A perfectly curated honeymoon package.",
        difficulty: "Easy",
        groupSize: "2 People (Private)",
        itinerary: [
            { day: 1, title: "Arrival in Srinagar", description: "Pick up from airport, check-in to luxury houseboat. Evening Shikara ride on Dal Lake." },
            { day: 2, title: "Srinagar to Gulmarg", description: "Drive to Gulmarg. Gondola ride to Phase 1 & 2. Skiing and snow activities." },
            { day: 3, title: "Gulmarg to Pahalgam", description: "Scenic drive to Pahalgam via Saffron fields. Visit Avantipura ruins." },
            { day: 4, title: "Pahalgam Sightseeing", description: "Visit Betaab Valley, Aru Valley, and Chandanwari. Pony ride to Baisaran." },
            { day: 5, title: "Pahalgam to Srinagar", description: "Return to Srinagar. Visit Mughal Gardens (Nishat, Shalimar). Shopping at Lal Chowk." },
            { day: 6, title: "Departure", description: "Transfer to Srinagar airport with sweet memories." }
        ]
    },
    {
        id: 2,
        title: "Kashmir Family Adventure",
        category: "Family",
        duration: "7D/6N",
        rating: 4.8,
        price: 28999,
        originalPrice: 36999,
        route: ["Srinagar", "Sonmarg", "Gulmarg", "Pahalgam"],
        image: pkgFamily,
        highlights: ["Gondola Ride", "Pony Ride", "River Rafting", "Apple Orchard Visit"],
        description: "Fun-filled family vacation covering all major attractions with comfortable stays.",
        difficulty: "Easy",
        groupSize: "4-6 People",
        itinerary: [
            { day: 1, title: "Arrival & Local Sightseeing", description: "Arrival in Srinagar. Visit Shankracharya Temple and local markets." },
            { day: 2, title: "Excursion to Sonmarg", description: "Day trip to Sonmarg (Meadow of Gold). Horse riding to Thajiwas Glacier." },
            { day: 3, title: "Srinagar to Gulmarg", description: "Transfer to Gulmarg. Enjoy highest golf course and Gondola ride." },
            { day: 4, title: "Gulmarg to Pahalgam", description: "Drive to Pahalgam. Enroute visit cricket bat factory and apple orchards." },
            { day: 5, title: "Pahalgam Leisure", description: "Full day at leisure in Pahalgam. River rafting in Lidder river." },
            { day: 6, title: "Return to Srinagar", description: "Back to Srinagar. Houseboat stay and evening Shikara ride." },
            { day: 7, title: "Airport Drop", description: "Drop at Srinagar Airport." }
        ]
    },
    {
        id: 3,
        title: "Ladakh Adventure Expedition",
        category: "Adventure",
        duration: "10D/9N",
        rating: 5.0,
        price: 54999,
        originalPrice: 69999,
        route: ["Leh", "Nubra", "Pangong", "Tso Moriri"],
        image: pkgLadakh,
        highlights: ["Double Hump Camel Ride", "High Altitude Camping", "Monastery Tour", "Bike Rental Option"],
        description: "The ultimate road trip experience to the land of high passes.",
        difficulty: "Hard",
        groupSize: "Group Tour",
        itinerary: [
            { day: 1, title: "Arrival in Leh", description: "Arrival at Leh Kushok Bakula Rimpochee Airport. Rest for acclimatization." },
            { day: 2, title: "Leh Local Sightseeing", description: "Visit Hall of Fame, Magnetic Hill, Gurudwara Pathar Sahib, and Sangam." },
            { day: 3, title: "Leh to Nubra Valley", description: "Drive via Khardung La (Highest Motorable Road). Camel safari at Hunder sand dunes." },
            { day: 4, title: "Nubra to Pangong", description: "Drive to Pangong Lake via Shyok river route. Overnight camp at Pangong." },
            { day: 5, title: "Pangong to Leh", description: "Sunrise at Pangong. Drive back to Leh via Chang La pass." },
            { day: 6, title: "Leh to Tso Moriri", description: "Drive to Tso Moriri Lake via Chumathang hot springs." },
            { day: 7, title: "Tso Moriri to Leh", description: "Drive back to Leh via Tsokar Lake and Tanglang La." },
            { day: 8, title: "Rafting & Departure Prep", description: "Optional river rafting in Zanskar/Indus. Shopping in Leh market." },
            { day: 9, title: "Day at Leisure", description: "Explore local cafes and Leh Palace." },
            { day: 10, title: "Departure", description: "Early morning transfer to airport." }
        ]
    },
    {
        id: 4,
        title: "Vaishno Devi & Shiv Khori Spiritual Journey",
        category: "Spiritual",
        duration: "4D/3N",
        rating: 4.9,
        price: 12999,
        originalPrice: 16999,
        route: ["Katra", "Vaishno Devi", "Shiv Khori"],
        image: pkgVaishnoDevi,
        highlights: ["Helicopter Service Optional", "VIP Darshan Assistance", "Shiv Khori Cave", "Katra Market"],
        description: "A divine journey to the holy shrine of Mata Vaishno Devi. Seek blessings and experience spiritual peace.",
        difficulty: "Moderate",
        groupSize: "Any",
        itinerary: [
            { day: 1, title: "Arrival in Katra", description: "Pick up from Jammu Airport/Station. Transfer to Katra. Yatra registration processing." },
            { day: 2, title: "Vaishno Devi Darshan", description: "Trek to Bhawan (13km) or take Helicopter/Pony. Darshan of Mata Vaishno Devi. Return to Katra." },
            { day: 3, title: "Shiv Khori Excursion", description: "Day trip to Shiv Khori (Cave of Lord Shiva). Visit en-route temples." },
            { day: 4, title: "Departure", description: "Transfer to Jammu for departure." }
        ]
    },
    {
        id: 5,
        title: "Winter Wonderland Skiing",
        category: "Winter Special",
        duration: "5D/4N",
        rating: 5.0,
        price: 42999,
        originalPrice: 55999,
        route: ["Srinagar", "Gulmarg"],
        image: pkgSkiing,
        highlights: ["Skiing Course", "Snowboarding", "ATV Ride", "Igloo Cafe Visit"],
        description: "Adrenaline pumping winter sports in Gulmarg - one of the world's best ski resorts.",
        difficulty: "Hard",
        groupSize: "Small Group",
        itinerary: [
            { day: 1, title: "Arrival & Transfer", description: "Arrival in Srinagar. Direct transfer to Gulmarg. Equipment rental fitting." },
            { day: 2, title: "Skiing Basics", description: "Beginner skiing lessons with certified instructor on gentle slopes." },
            { day: 3, title: "Advanced Skiing", description: "Intermediate slopes or Gondola Phase 2 for advanced skiers. Snowboarding session." },
            { day: 4, title: "Snow Adventures", description: "Snowmobile/ATV rides. Visit the famous Igloo Cafe. Evening bonfire." },
            { day: 5, title: "Departure", description: "Transfer to Srinagar airport." }
        ]
    },
    {
        id: 6,
        title: "Solo Backpacker's Kashmir",
        category: "Adventure",
        duration: "8D/7N",
        rating: 4.7,
        price: 18999,
        originalPrice: 24999,
        route: ["Srinagar", "Doodhpathri", "Yusmarg", "Aharbal"],
        image: pkgBackpacker,
        highlights: ["Offbeat Locations", "Hostel Stays", "Local Bus Experience", "Village Walks"],
        description: "Explore the raw and untouched beauty of Kashmir on a budget. Perfect for solo travelers.",
        difficulty: "Moderate",
        groupSize: "Solo",
        itinerary: [
            { day: 1, title: "Arrival in Srinagar", description: "Stay in a backpacker hostel. Meet fellow travelers. Walk around Dal Lake." },
            { day: 2, title: "Srinagar Exploration", description: "Heritage walk in Old City (Downtown). Visit Jamia Masjid and local bakeries." },
            { day: 3, title: "Day Trip to Doodhpathri", description: "Visit the 'Valley of Milk'. Hiking in the meadows." },
            { day: 4, title: "Yusmarg Expedition", description: "Travel to Yusmarg. Trek to Nilnag Lake." },
            { day: 5, title: "Aharbal Waterfall", description: "Visit the 'Niagara of Kashmir'. Relax by the waterfall." },
            { day: 6, title: "Gurez Valley (Optional)", description: "Long drive to the remote Gurez valley (subject to permit/roads)." },
            { day: 7, title: "Srinagar Chill", description: "Free day for cafe hopping and souvenir shopping." },
            { day: 8, title: "Departure", description: "Airport drop via public transport or shared cab." }
        ]
    },
    {
        id: 7,
        title: "Royal Luxury Retreat",
        category: "Honeymoon",
        duration: "5D/4N",
        rating: 5.0,
        price: 89999,
        originalPrice: 120000,
        route: ["Srinagar", "Pahalgam"],
        image: pkgLuxury,
        highlights: ["5-Star Hotels", "Private Butler", "Limousine Transfer", "Helicopter Ride"],
        description: "Experience Kashmir like royalty. Top-tier luxury, exclusive experiences, and unmatched comfort.",
        difficulty: "Easy",
        groupSize: "Couple (Private)",
        itinerary: [
            { day: 1, title: "Royal Welcome", description: "Luxury car pickup. Check-in to Taj Vivanta/Lalit Grand Palace. Shikara with high tea." },
            { day: 2, title: "Pahalgam Luxury", description: "Transfer to WelcomHotel Pine N Peak. Private riverside dinner setup." },
            { day: 3, title: "Helicopter Joyride", description: "Aerial view of the valley (subject to weather). Spa session in the evening." },
            { day: 4, title: "Golf & Gourmet", description: "Golfing session. 7-course Wazwan dinner experience." },
            { day: 5, title: "VIP Departure", description: "Private transfer to airport." }
        ]
    }
];
