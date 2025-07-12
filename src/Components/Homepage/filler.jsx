import React, { useState } from 'react';
import {
  Brain,
  Eye,
  Lock,
  BarChart3,
  ImagePlus,
  Clock,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

const Filler = () => {
  const features = [
    {
      icon: <Brain size={28} className="text-indigo-400" />,
      title: 'Dream Understanding',
      subtitle: 'Emotional & symbolic tagging',
      desc: 'Each dream is analyzed for key emotions and recurring archetypes based on AI sentiment parsing.',
    },
    {
      icon: <ImagePlus size={28} className="text-pink-400" />,
      title: 'Visual Dreamscapes',
      subtitle: 'AI-generated images',
      desc: 'Get surreal, dream-like visuals automatically generated from your text inputs using custom diffusion models.',
    },
    {
      icon: <BarChart3 size={28} className="text-emerald-400" />,
      title: 'Analytics Dashboard',
      subtitle: 'Patterns, themes & mood shifts',
      desc: 'View graphs that highlight emotional swings, frequency of themes, and weekly visualizations.',
    },
    {
      icon: <Eye size={28} className="text-yellow-400" />,
      title: 'Private Dream Viewer',
      subtitle: 'Scrollable archive & filters',
      desc: 'Your entire dream history is neatly organized and filterable by emotion, tag, or date.',
    },
    {
      icon: <Lock size={28} className="text-red-400" />,
      title: 'Data Privacy First',
      subtitle: 'Your dreams, your control',
      desc: 'All entries are encrypted and only accessible to you. You choose what to share and what to keep.',
    },
    {
      icon: <Clock size={28} className="text-blue-400" />,
      title: 'Auto Logging',
      subtitle: 'Quick capture UI',
      desc: 'Log dreams in under 30 seconds with structured prompts and emoji mood sliders.',
    },
  ];

  const plans = [
    {
      name: 'Free',
      price: '₹0',
      subtitle: 'Get started with basic features',
      features: ['Log up to 30 dreams', 'AI image generation (SD)', 'Basic mood analysis'],
      highlight: false,
    },
    {
      name: 'Pro',
      price: '₹299/mo',
      subtitle: 'For frequent dreamers & analysts',
      features: ['Unlimited dreams', 'HD visuals + prompt editing', 'Advanced emotion charts', 'Priority support'],
      highlight: true,
    },
    {
      name: 'Dream Team',
      price: 'Custom',
      subtitle: 'Collaboration tools for groups',
      features: ['Team dashboard', 'Dream sharing & annotation', 'Admin tools', 'Premium support'],
      highlight: false,
    },
  ];

  const faqs = [
    {
      q: 'Is my dream data private?',
      a: 'Yes. Your dreams are encrypted and only accessible to you unless you explicitly choose to share them.',
    },
    {
      q: 'How are dream visuals generated?',
      a: 'We use custom-tuned generative models that convert natural language prompts into surreal dream-like images.',
    },
    {
      q: 'Can I export my dream journal?',
      a: 'Yes. You can download your full dream history as a JSON, PDF, or image archive from the dashboard.',
    },
    {
      q: 'Do I need to write full paragraphs?',
      a: 'Nope. Bullet points or fragments are fine — our AI is trained to interpret varied dream formats.',
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <section className="bg-[#0f0e17] text-gray-300 px-6 py-20 space-y-32">

      {/* FEATURES */}
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Features Tailored for Dreamers</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((f, i) => (
            <div key={i} className="bg-[#2b2544] border border-[#2a2438] rounded-xl p-6 shadow-md hover:shadow-lg transition">
              <div className="mb-4">{f.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-1">{f.title}</h3>
              <p className="text-sm text-indigo-300 mb-2">{f.subtitle}</p>
              <p className="text-sm text-gray-400">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* PLANS */}
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Simple & Transparent Plans</h2>
        <p className="text-gray-400 text-lg mb-16">Choose a plan that fits your dreaming journey.</p>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-10">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`rounded-2xl p-6 border transition shadow-sm ${
                plan.highlight
                  ? 'bg-gradient-to-br from-indigo-600 to-purple-600 text-white border-indigo-500 shadow-lg'
                  : 'bg-[#2b2544] border-[#2a2438]'
              }`}
            >
              <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
              <p className={`text-lg mb-4 ${plan.highlight ? 'text-indigo-100' : 'text-gray-400'}`}>
                {plan.subtitle}
              </p>
              <p className="text-3xl font-bold mb-6">{plan.price}</p>
              <ul className="space-y-3 text-left">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm">
                    <CheckCircle2
                      size={16}
                      className={plan.highlight ? 'text-white mt-[2px]' : 'text-indigo-400 mt-[2px]'}
                    />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`mt-8 w-full py-2 rounded-full font-semibold transition ${
                  plan.highlight
                    ? 'bg-white text-indigo-700 hover:bg-gray-100'
                    : 'border border-indigo-400 text-indigo-400 hover:bg-indigo-500 hover:text-white'
                }`}
              >
                {plan.name === 'Free' ? 'Start Free' : 'Choose Plan'}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
        <p className="text-gray-400 text-lg mb-12">All your dream app curiosities, clarified.</p>
        <div className="space-y-4 text-left">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-[#2a2438] rounded-xl bg-[#2b2544] p-5 hover:shadow-md transition"
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex justify-between items-center text-left"
              >
                <span className="text-white font-medium text-base">{faq.q}</span>
                {openIndex === i ? (
                  <ChevronUp size={18} className="text-indigo-400" />
                ) : (
                  <ChevronDown size={18} className="text-indigo-400" />
                )}
              </button>
              {openIndex === i && (
                <p className="mt-3 text-sm text-gray-400">{faq.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Filler;
