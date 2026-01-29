import { Container } from './Container';

export function SocialProof() {
    const companies = [
        { name: 'TechStart', opacity: 'opacity-40' },
        { name: 'GlobalVentures', opacity: 'opacity-60' },
        { name: 'FutureScale', opacity: 'opacity-50' },
        { name: 'InnoHub', opacity: 'opacity-40' },
        { name: 'CloudPeak', opacity: 'opacity-60' },
    ];

    const stats = [
        { label: 'Founders', value: '5,000+' },
        { label: 'Countries', value: '85+' },
        { label: 'Events Annually', value: '200+' },
    ];

    return (
        <section className="py-12 border-y border-slate-100 bg-slate-50/50" id="community">
            <Container>
                <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

                    {/* Company Logos */}
                    <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12 flex-1">
                        <span className="text-sm font-semibold text-slate-400 uppercase tracking-wider w-full text-center lg:w-auto lg:text-left">
                            Members founding companies at:
                        </span>
                        {companies.map((company) => (
                            <div
                                key={company.name}
                                className={`text-xl font-bold text-slate-800 ${company.opacity} grayscale hover:grayscale-0 transition-all cursor-default select-none`}
                            >
                                {company.name}
                            </div>
                        ))}
                    </div>

                    {/* Vertical Divider (Hidden on mobile) */}
                    <div className="hidden lg:block h-12 w-px bg-slate-200"></div>

                    {/* Quick Stats */}
                    <div className="flex items-center gap-8 md:gap-12 pl-0 lg:pl-6">
                        {stats.map((stat) => (
                            <div key={stat.label} className="text-center lg:text-left">
                                <div className="text-2xl font-bold text-primary">{stat.value}</div>
                                <div className="text-xs font-medium text-slate-500 uppercase tracking-wide">{stat.label}</div>
                            </div>
                        ))}
                    </div>

                </div>
            </Container>
        </section>
    );
}
