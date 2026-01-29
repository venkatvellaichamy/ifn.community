import { FileText, Download, PlayCircle, Shield } from 'lucide-react';
import { Container } from './Container';
import { Button } from './Button';

export function Resources() {
    const resources = [
        {
            icon: FileText,
            title: 'Startup Playbook',
            description: 'A comprehensive guide to building your company from zero to one.',
            tag: 'Guide'
        },
        {
            icon: Download,
            title: 'Founder Templates',
            description: 'Swipe files for pitch decks, financial models, and legal agreements.',
            tag: 'Template'
        },
        {
            icon: PlayCircle,
            title: 'Masterclass Library',
            description: 'On-demand video lessons from successful founders and investors.',
            tag: 'Video'
        },
        {
            icon: Shield,
            title: 'Legal & Compliance',
            description: 'Essential checklists to ensure your startup is compliant from day one.',
            tag: 'Checklist'
        },
    ];

    return (
        <section className="py-24 bg-slate-50" id="resources">
            <Container>
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Founder Toolkit</h2>
                    <p className="text-lg text-slate-600">
                        Everything you need to build faster and smarter, all in one place.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {resources.map((resource, index) => (
                        <div key={index} className="bg-white p-6 rounded-2xl border border-slate-100 hover:border-primary/20 hover:shadow-lg transition-all group">
                            <div className="mb-6 flex justify-between items-start">
                                <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                    <resource.icon size={24} />
                                </div>
                                <span className="text-xs font-semibold bg-slate-100 text-slate-600 px-2 py-1 rounded-full">
                                    {resource.tag}
                                </span>
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                                {resource.title}
                            </h3>
                            <p className="text-slate-600 text-sm leading-relaxed mb-6">
                                {resource.description}
                            </p>

                            <Button variant="ghost" size="sm" className="w-full justify-between items-center bg-slate-50 text-slate-400 cursor-not-allowed hover:bg-slate-50" disabled>
                                Coming Soon
                                {/* <span className="text-lg">→</span> */}
                            </Button>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
