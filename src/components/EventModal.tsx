import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle, DialogHeader } from '@/components/ui/dialog';
import { Event } from '@/types/event';

interface EventModalProps {
    event: Event | null;
    isOpen: boolean;
    onClose: () => void;
}
export const EventModal: React.FC<EventModalProps> = ({ event, isOpen, onClose }) => {
    if (!event) return null;

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-2xl">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold">{event.name}</DialogTitle>
                </DialogHeader>
                <div className="mt-4">
                    <img
                        src={event.image}
                        alt={event.name}
                        className="w-full h-64 object-cover rounded-lg"
                    />
                    <div className="mt-4 space-y-4">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-5 h-5 text-blue-500" />
                            <span>{new Date(event.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <MapPin className="w-5 h-5 text-blue-500" />
                            <span>{event.location}</span>
                        </div>
                        <p className="text-gray-600">{event.description}</p>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};