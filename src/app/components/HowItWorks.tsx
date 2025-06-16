'use client';

import { motion } from 'framer-motion';
import { PackageCheck, Settings, TrendingUp } from 'lucide-react';

type Step = {
  title: string;
  description: string;
  icon: React.ElementType;
};

const steps: Step[] = [
  {
    title: 'Send Us Your Terms',
    description: 'Provide your wholesale pricing, inventory, and brand guidelines.',
    icon: PackageCheck,
  },
  {
    title: 'We Handle It All',
    description: 'Listings, logistics, customer experience — all fully managed.',
    icon: Settings,
  },
  {
    title: 'You Grow Effortlessly',
    description: 'Get consistent orders and build long-term brand presence.',
    icon: TrendingUp,
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-[#f9fafb] px-6 py-20 text-[#003582]">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold sm:text-4xl mb-6">How It Works</h2>
        <p className="max-w-2xl mx-auto text-base text-[#003582]/90 mb-16">
          We simplify the process into three straightforward steps.
        </p>

        <div className="flex flex-col md:flex-row justify-between items-center gap-12 relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                className="flex flex-col items-center text-center max-w-sm relative z-10"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
              >
                <div className="w-14 h-14 rounded-full bg-[#003582] text-white flex items-center justify-center text-xl font-bold mb-4 shadow-lg">
                  {index + 1}
                </div>
                <div className="mb-4 text-[#003582]">
                  <Icon className="w-6 h-6 mx-auto" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-[#003582]/80">{step.description}</p>
              </motion.div>
            );
          })}

          {/* connector line */}
          <div className="absolute top-7 left-0 right-0 h-0.5 bg-[#003582]/20 hidden md:block z-0 mx-16" />
        </div>
      </div>
    </section>
  );
}
