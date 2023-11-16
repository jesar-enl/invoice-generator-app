import Link from 'next/link';
import { CiCircleCheck } from 'react-icons/ci';
import { IoDiamond } from 'react-icons/io5';

export default function Pricing() {
  const features = [
    {
      icon: CiCircleCheck,
      title: 'Free plan',
      desc: 'Create up to 100 invoices and other documents in a year - completely free. Invoices, quotations, Pro-formas, Expenses and more. No hidden charges.',
      href: '/invoice/new',
      link: 'Create free invoice',
    },
    {
      icon: IoDiamond,
      title: 'Premium plan',
      desc: 'Manage your accounting at faster pace with additional premium features at minimal cost.',
      href: '/features',
      link: 'Explore premium features',
    },
  ];

  return (
    <div className="flex flex-col bg-slate-100 gap-6 py-8 md:py-16 px-4 md:px-16">
      <div>
        <div className="flex flex-col items-center justify-center mb-6">
          <h2 className="text-center text-2xl md:text-4xl font-bold mb-3">
            Pricing of the Invoice Generator
          </h2>
          <p className="text-sm text-slate-500">
            Only pay when you need Premium features.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div className="" key={index}>
                <div className="bg-white shadow-2xl rounded-md p-12 flex flex-col gap-6">
                  <Icon className="text-2xl text-purple-600 mb-6 bg-purple-100 w-16 h-16 flex items-center justify-center rounded-full" />
                  <h4 className="text-slate-900 text-2xl font-bold mb-6">
                    {feature.title}
                  </h4>
                  <p className="mb-6 text-slate-600">{feature.desc}</p>
                  <Link
                    className="text-bold text-purple-600 hover:text-purple-700"
                    href={feature.href}
                  >
                    {feature.link}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
