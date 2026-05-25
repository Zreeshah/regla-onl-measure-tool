import type { Metadata } from 'next';
import AboutPageClient from './AboutPageClient';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn more about Online-Ruler.Onl, the most precise and easy-to-use online measurement tool.',
  alternates: { canonical: 'https://online-ruler.onl/about' },
};

export default function AboutPage() {
  return <AboutPageClient />;
}
