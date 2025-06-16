'use client';

import { motion } from 'framer-motion';
import {
  ShieldCheck,
  ClipboardCheck,
  Boxes,
  Truck,
  Megaphone,
  MessageSquare,
  LucideIcon,
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  ShieldCheck,
  ClipboardCheck,
  Boxes,
  Truck,
  Megaphone,
  MessageSquare,
};

type OurServicesProps = {
  title: string;
  subTitle: string;
  services: string; // raw textarea string from ACF
};

type Service = {
  title: string;
  icon: LucideIcon;
};

export default function OurServices({ title, subTitle, services }: OurServicesProps) {
  const parsedServices: Service[] = services
    .split('\n')
    .map((line) => {
      const [rawTitle, rawIcon] = line.split('|');
      const title = rawTitle?.trim();
      const icon = iconMap[rawIcon?.trim() || ''] || ShieldCheck; // fallback
      return { title, icon };
    })
    .filter((s) => s.title);

  return (
    <section id="services" className="bg-white px-6 py-20 text-[#003582]">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold sm:text-4xl mb-4">{title}</h2>
        <p className="max-w-2xl mx-auto mb-12 text-base text-[#003582]/90">{subTitle}</p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {parsedServices.map(({ title, icon: Icon }, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-md shadow hover:shadow-md transition-shadow bg-gray-50"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Icon className="w-8 h-8 mb-4 text-[#003582]" />
              <p className="text-base font-medium">{title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
