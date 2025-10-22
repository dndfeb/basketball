import ServicesPageClient from './ServicesPageClient';

export const metadata = {
  title: 'Services',
  description: 'Professional basketball coaching services including private coaching, group clinics, team training, court rental, skill assessment, and youth development programs. USA Basketball certified coaches.',
  openGraph: {
    title: 'Elite Basketball Coaching Services - Professional Training Programs',
    description: 'Professional basketball coaching services including private coaching, group clinics, team training, court rental, skill assessment, and youth development programs.',
  },
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}
