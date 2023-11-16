import { BsCurrencyDollar, BsRepeat, BsFillGrid1X2Fill } from 'react-icons/bs';
import { HiOutlineMail, HiTemplate } from 'react-icons/hi';
import { MdOutlineAccessAlarms, MdAutoGraph } from 'react-icons/md';
import { TbBrandBunpo } from 'react-icons/tb';

export default function Features() {
  const features = [
    {
      icon: BsCurrencyDollar,
      title: 'Easy Tax Invoice',
      desc: 'Create, manage, send and track tax invoice without husstle.',
    },
    {
      icon: BsFillGrid1X2Fill,
      title: 'Customization of Columns',
      desc: 'Customizable invoice format to add more relevant information',
    },
    {
      icon: TbBrandBunpo,
      title: 'Brand your Invoice',
      desc: 'Easily add the business logo and change the color of the invoice with one click.',
    },
    {
      icon: HiTemplate,
      title: 'Invoice Templates',
      desc: 'Beautifully designed and fully customized invoice templates with magic colors.',
    },
    {
      icon: HiOutlineMail,
      title: 'Email & track invoices',
      desc: 'Send invoices via email and get to know when it was opened',
    },
    {
      icon: BsRepeat,
      title: 'Recurring Invoices',
      desc: 'Create recurring invoices for you that take place at regular intervals.',
    },
    {
      icon: MdAutoGraph,
      title: 'Insightful Report',
      desc: 'Get ready-made essential reports to analyze your business and client information.',
    },
    {
      icon: MdOutlineAccessAlarms,
      title: 'Easy Tax Invoice',
      desc: 'Create, manage, send and track tax invoice without husstle.',
    },
  ];

  return (
    <div className="text-white bg-slate-900 md:py-16 py-8 md:px-16 px-4 flex flex-col gap-8 items-center">
      <h2 className="text-center mb-6 text-2xl md:text-4xl font-bold">
        Features of the Invoice generator
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div className="mb-3" key={index}>
              <div className="flex justify-center items-center w-16 h-16 border-2 border-purple-500 rounded-lg py-4 mb-4">
                <Icon className="text-2xl" />
              </div>
              <p className="flex mb-4 text-xl text-slate-200">
                {feature.title}
              </p>
              <p>{feature.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
