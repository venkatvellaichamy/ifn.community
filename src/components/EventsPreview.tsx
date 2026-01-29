import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import { Container } from './Container';
import { Button } from './Button';

export function EventsPreview() {
    const events = [
        {
            date: "Mar 15",
            title: "Global Founder Summit 2024",
            type: "Virtual",
            location: "Online",
            category: "Conference"
        },
        {
            date: "Mar 22",
            title: "NYC Tech Mixer",
            type: "In-Person",
            location: "New York, USA",
            category: "Networking"
        },
        {
            date: "Apr 05",
            title: "Fundraising Masterclass: Series A",
            type: "Virtual",
            location: "Online",
            category: "Workshop"
        },
        {
            date: "Apr 12",
            title: "London Chapter Meetup",
            type: "In-Person",
            location: "London, UK",
            category: "Networking"
        },
    ];

    return (
        <section className="py-24 bg-white" id="events">
            <Container>
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Join Us Next</h2>
                        <p className="text-lg text-slate-600">Connect with the community at our upcoming events.</p>
                    </div>
                    <Button variant="outline" className="shrink-0 group" onClick={() => window.open('https://lu.ma', '_blank')}>
                        View Calendar on Luma
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {events.map((event, index) => (
                        <div key={index} className="group p-6 rounded-2xl border border-slate-200 hover:border-primary/50 hover:shadow-lg transition-all bg-white relative cursor-pointer" onClick={() => window.open('https://lu.ma', '_blank')}>
                            <div className="text-sm font-bold text-accent mb-2 uppercase tracking-wide">{event.category}</div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors min-h-[3.5rem]">
                                {event.title}
                            </h3>

                            <div className="space-y-3 mb-6">
                                <div className="flex items-center gap-2 text-slate-600 text-sm">
                                    <Calendar className="w-4 h-4 text-slate-400" />
                                    <span>{event.date}</span>
                                </div>
                                <div className="flex items-center gap-2 text-slate-600 text-sm">
                                    <MapPin className="w-4 h-4 text-slate-400" />
                                    <span>{event.location}</span>
                                </div>
                            </div>

                            <div className="pt-4 border-t border-slate-100 flex justify-between items-center">
                                <span className={`text-xs font-semibold px-2 py-1 rounded-full ${event.type === 'Virtual' ? 'bg-blue-50 text-blue-600' : 'bg-green-50 text-green-600'}`}>
                                    {event.type}
                                </span>
                                <span className="text-sm font-medium text-primary group-hover:underline flex items-center gap-1">RSVP on Luma <ArrowRight size={14} /></span>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
