import { useState } from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { EventCard } from '@/components/EventCard';
import { EventModal } from '@/components/EventModal';
import { LoadingSpinner } from '@/components/LoadingSpinner';
import { useEvents } from '@/hooks/useEvents';
import { Event } from '@/types/event';

const EventListing: React.FC = () => {
    const { events, loading } = useEvents();
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const filteredEvents = events.filter(event =>
        event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.location.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleEventClick = (event: Event) => {
        setSelectedEvent(event);
        setIsModalOpen(true);
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            {/* Navigation Bar */}
            <nav className="fixed top-0 w-full bg-white shadow-md z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <h1 className="text-2xl font-bold text-blue-600">EventSphere</h1>
                        <div className="relative w-full max-w-xs md:max-w-md ml-4">
                            <Input
                                type="text"
                                placeholder="Search events or locations..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="pl-10"
                            />
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        </div>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main className="flex-grow  px-4 sm:px-6 lg:px-8 pt-24 pb-12">
                {loading ? (
                    <LoadingSpinner />
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredEvents.map(event => (
                            <EventCard
                                key={event.id}
                                event={event}
                                onClick={() => handleEventClick(event)}
                            />
                        ))}
                    </div>
                )}
            </main>

            {/* Footer */}
            <footer className="bg-white shadow-md mt-auto">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex items-center justify-between">
                        <p className="text-sm text-gray-500">© 2023 EventSphere. All rights reserved.</p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-sm text-gray-500 hover:text-blue-600">Privacy Policy</a>
                            <a href="#" className="text-sm text-gray-500 hover:text-blue-600">Terms of Service</a>
                            <a href="#" className="text-sm text-gray-500 hover:text-blue-600">Contact Us</a>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Event Details Modal */}
            <EventModal
                event={selectedEvent}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </div>
    );
};

export default EventListing;
