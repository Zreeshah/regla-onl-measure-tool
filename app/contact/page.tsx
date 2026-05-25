import type { Metadata } from 'next';
import ContactPageClient from './ContactPageClient';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact us for any questions or suggestions about our online ruler tool.',
  alternates: { canonical: 'https://online-ruler.onl/contact' },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
