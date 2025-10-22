import ServicesPageClient from './ServicesPageClient';

export const metadata = {
  title: 'Services',
  description: 'Professional fire safety services including fire extinguisher sales, alarm installation, safety audits, emergency response, maintenance, and training. NFPA certified technicians.',
  openGraph: {
    title: 'FireGuard Services - Professional Fire Safety Solutions',
    description: 'Professional fire safety services including fire extinguisher sales, alarm installation, safety audits, emergency response, maintenance, and training.',
  },
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}
