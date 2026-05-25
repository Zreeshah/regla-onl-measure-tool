import type { Metadata } from 'next';
import PrintRulerClient from './PrintRulerClient';

export const metadata: Metadata = {
  title: 'Print Ruler - Free Printable Ruler Online',
  description: 'Print a 30 cm or 12 inch ruler for free. Printable real size ruler, calibrated and ready to use at home or school.',
  keywords: ['print ruler', 'printable ruler', 'ruler to print', 'ruler 30 cm', 'ruler 12 inches'],
  alternates: { canonical: 'https://online-ruler.onl/print-ruler' },
};

export default function PrintRulerPage() {
  return <PrintRulerClient />;
}
