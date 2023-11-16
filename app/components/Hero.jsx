import Image from 'next/image';
import { AiOutlineArrowDown } from 'react-icons/ai';
import invoiceImage from '../../public/images/invoice-image.webp';
import ThemeLink from './ThemeLink';

export default function Hero() {
  return (
    <div className="mt-16 bg-violet-600 items-center gap-3 grid grid-cols-1 md:grid-cols-2 py-8 md:py-16 px-4 md:px-16">
      <div className="flex items-start flex-col space-y-4">
        <h2 className="text-gray-50 md:text-5xl text-3xl font-bold">
          Free invoice Generator
        </h2>
        <p className="md:text-2xl text-base">
          Create, Manage, and track recurring Invoices, Dowload as PDF, Email,
          and Print Invoices
        </p>
        <ThemeLink
          className="bg-rose-600 hover:bg-rose-700 focus:ring-rose-400"
          title="Create your first Invoice"
          href="/invoice/new"
          Icon={AiOutlineArrowDown}
        />
      </div>
      <div>
        <Image src={invoiceImage} alt="Invoice image" />
      </div>
    </div>
  );
}
