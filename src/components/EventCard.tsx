import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Event } from '@/types/event';

interface EventCardProps {
    event: Event;
    onClick: (event: Event) => void;
}

export const EventCard: React.FC<EventCardProps> = ({ event, onClick }) => {
    return (
        <Card
            className="transform transition-all duration-300 hover:scale-105 cursor-pointer"
            onClick={() => onClick(event)}
        >
            <CardHeader className="p-4">
                <div className="w-full h-48 mb-4 overflow-hidden rounded-lg">
                    <img
                        src={event.image}
                        alt={event.name}
                        className="w-full h-full object-contain"
                        loading="lazy"
                    />
                </div>
                <CardTitle className="text-xl font-bold">{event.name}</CardTitle>
                <CardDescription className="text-gray-600">
                    <div className="flex items-center gap-2 mt-2">
                        <Calendar className="w-4 h-4" />
                        {new Date(event.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                        <MapPin className="w-4 h-4" />
                        {event.location}
                    </div>
                </CardDescription>
            </CardHeader>
        </Card>
    );
};
