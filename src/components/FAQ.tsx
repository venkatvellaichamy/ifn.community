import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { Container } from './Container';

export function FAQ() {
    const faqs = [
        {
            question: "Who can join IFN?",
            answer: "IFN is open to founders at all stages—from idea to post-IPO. We have specific tracks for early-stage, growth, and established founders to ensure you're matched with peers at a similar journey point."
        },
        {
            question: "Is there a membership fee?",
            answer: "There are no membership fees at this point in time. Early members receive full access to all community features, including forums, events, and mentorship opportunities, completely free of charge."
        },
        {
            question: "What if there's no local chapter in my city?",
            answer: "No problem! Our virtual community is vibrant and active. You can join virtual coffee chats, masterclasses, and regional groups. Plus, you can apply to start a chapter in your city!"
        },
        {
            question: "How much time commitment is required?",
            answer: "It's up to you. Most members spend 1-2 hours per week engaging with the community, but there are no mandatory requirements for general membership. Advisory circles meet once a month for 90 minutes."
        },
        {
            question: "What makes IFN different from other founder communities?",
            answer: "We focus on true global diversity and strict curation to ensure high-quality connections. Unlike noisy slack groups, every interaction here is designed to be meaningful and actionable."
        }
    ];

    return (
        <section className="py-24 bg-slate-50 border-t border-slate-100" id="faq">
            <Container size="md">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Questions? We've Got Answers</h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} question={faq.question} answer={faq.answer} />
                    ))}
                </div>
            </Container>
        </section>
    );
}

function FAQItem({ question, answer }: { question: string, answer: string }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-slate-200 rounded-xl bg-white overflow-hidden transition-all duration-200 hover:border-primary/20">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
            >
                <span className="font-semibold text-lg text-slate-900">{question}</span>
                <span className={`bg-slate-50 p-2 rounded-full text-slate-400 transition-colors ${isOpen ? 'bg-primary/10 text-primary' : ''}`}>
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                </span>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
