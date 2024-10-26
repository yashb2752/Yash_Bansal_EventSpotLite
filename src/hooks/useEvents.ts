import { useState, useEffect } from "react";
import { Event } from "@/types/event";

const mockEvents: Event[] = [
  {
    id: 1,
    name: "Summer Music Festival",
    date: "2024-07-15",
    location: "Central Park",
    description:
      "Join us for a day of live music performances featuring local and international artists.",
    image: "https://picsum.photos/seed/pic5sum/500/241.webp",
    category: "Music",
  },
  {
    id: 2,
    name: "Tech Conference 2024",
    date: "2024-08-20",
    location: "Convention Center",
    description:
      "Explore the latest in technology trends, AI, and digital innovation.",
    image: "https://picsum.photos/seed/pic4sum/500/241.webp",
    category: "Technology",
  },
  {
    id: 3,
    name: "Food & Wine Festival",
    date: "2024-09-05",
    location: "Waterfront Plaza",
    description:
      "Experience culinary delights from top chefs and wine tastings from local vineyards.",
    image: "https://picsum.photos/seed/pic3sum/500/241.webp",
    category: "Food",
  },
  {
    id: 4,
    name: "Art Exhibition",
    date: "2024-07-30",
    location: "Modern Art Gallery",
    description:
      "Featured works from emerging artists showcasing contemporary art pieces.",
    image: "https://picsum.photos/seed/picsum/500/241.webp",
    category: "Art",
  },
  {
    id: 5,
    name: "Startup Networking",
    date: "2024-08-10",
    location: "Innovation Hub",
    description:
      "Connect with entrepreneurs and investors in this dynamic networking event.",
    image: "https://picsum.photos/seed/pic1sum/500/241.webp",
    category: "Business",
  },
  {
    id: 6,
    name: "Fitness Workshop",
    date: "2024-09-15",
    location: "Community Center",
    description:
      "Learn new workout techniques and wellness practices from fitness experts.",
    image: "https://picsum.photos/seed/pic2sum/500/241.webp",
    category: "Health",
  },
  {
    id: 7,
    name: "Book Fair",
    date: "2024-10-01",
    location: "City Library",
    description: "Discover new authors and genres at our annual book fair.",
    image: "https://picsum.photos/seed/pic7sum/500/241.webp",
    category: "Literature",
  },
  {
    id: 8,
    name: "Film Festival",
    date: "2024-10-15",
    location: "Downtown Cinema",
    description: "Showcasing independent films from around the world.",
    image: "https://picsum.photos/seed/pic8sum/500/241.webp",
    category: "Entertainment",
  },
  {
    id: 9,
    name: "Science Expo",
    date: "2024-11-05",
    location: "Science Museum",
    description:
      "Interactive exhibits showcasing the latest scientific discoveries.",
    image: "https://picsum.photos/seed/pic9sum/500/241.webp",
    category: "Science",
  },
  {
    id: 10,
    name: "Fashion Show",
    date: "2024-11-20",
    location: "Grand Hotel",
    description:
      "See the latest trends from top designers in this glamorous event.",
    image: "https://picsum.photos/seed/pic10sum/500/241.webp",
    category: "Fashion",
  },
  {
    id: 11,
    name: "Charity Gala",
    date: "2024-12-01",
    location: "Luxury Ballroom",
    description: "An elegant evening to raise funds for local charities.",
    image: "https://picsum.photos/seed/pic11sum/500/241.webp",
    category: "Charity",
  },
  {
    id: 12,
    name: "Winter Sports Expo",
    date: "2024-12-15",
    location: "Sports Complex",
    description:
      "Get ready for the winter season with the latest gear and techniques.",
    image: "https://picsum.photos/seed/pic12sum/500/241.webp",
    category: "Sports",
  },
  {
    id: 13,
    name: "New Year's Eve Party",
    date: "2024-12-31",
    location: "City Square",
    description: "Ring in the new year with music, fireworks, and festivities.",
    image: "https://picsum.photos/seed/pic13sum/500/241.webp",
    category: "Holiday",
  },
  {
    id: 14,
    name: "Job Fair",
    date: "2025-01-15",
    location: "Convention Center",
    description: "Connect with employers and explore new career opportunities.",
    image: "https://picsum.photos/seed/pic14sum/500/241.webp",
    category: "Career",
  },
  {
    id: 15,
    name: "Home & Garden Show",
    date: "2025-02-01",
    location: "Expo Center",
    description: "Discover the latest trends in home decor and landscaping.",
    image: "https://picsum.photos/seed/pic15sum/500/241.webp",
    category: "Lifestyle",
  },
  {
    id: 16,
    name: "Valentine's Day Concert",
    date: "2025-02-14",
    location: "Concert Hall",
    description: "A romantic evening of classical music for couples.",
    image: "https://picsum.photos/seed/pic16sum/500/241.webp",
    category: "Music",
  },
  {
    id: 17,
    name: "Environmental Summit",
    date: "2025-03-01",
    location: "Green Conference Center",
    description:
      "Discussing sustainable practices and environmental conservation.",
    image: "https://picsum.photos/seed/pic17sum/500/241.webp",
    category: "Environment",
  },
  {
    id: 18,
    name: "Comedy Night",
    date: "2025-03-15",
    location: "Laugh Factory",
    description:
      "An evening of stand-up comedy featuring both local and national acts.",
    image: "https://picsum.photos/seed/pic18sum/500/241.webp",
    category: "Entertainment",
  },
  {
    id: 19,
    name: "Spring Garden Festival",
    date: "2025-04-01",
    location: "Botanical Gardens",
    description:
      "Celebrate the arrival of spring with flower displays and gardening workshops.",
    image: "https://picsum.photos/seed/pic19sum/500/241.webp",
    category: "Nature",
  },
  {
    id: 20,
    name: "International Food Fair",
    date: "2025-04-15",
    location: "City Park",
    description:
      "Sample cuisines from around the world in this outdoor food festival.",
    image: "https://picsum.photos/seed/pic20sum/500/241.webp",
    category: "Food",
  },
];

export const useEvents = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadEvents = async () => {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setEvents(mockEvents);
      setLoading(false);
    };
    loadEvents();
  }, []);

  return { events, loading };
};
