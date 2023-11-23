import Link from 'next/link';
import ThemeLink from '../components/ThemeLink';
import { getInvoices } from '../libs/getInvoices';

export default async function Page() {
  const invoices = await getInvoices();
  console.log(invoices);

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-24 mb-16 container max-w-5xl mx-auto">
      <div className="flex items-center justify-between px-8 py-8">
        <caption className="p-5 text-lg font-bold text-left rtl:text-right text-gray-900 bg-white">
          <h2 className="text-3xl">Your Invoices ({invoices.length})</h2>
        </caption>
        <ThemeLink
          className="bg-rose-600 hover:bg-rose-700 focus:ring-rose-400"
          title="Create new Invoice"
          href="/invoice/new"
        />
      </div>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3">
              Invoice ID
            </th>
            <th scope="col" className="px-6 py-3">
              Invoice Name
            </th>
            <th scope="col" className="px-6 py-3">
              Invoice Date
            </th>
            <th scope="col" className="px-6 py-3">
              <span className="sr-only">View</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {invoices?.map((invoice, i) => {
            const options = { year: 'numeric', month: 'long', day: 'numeric' };
            const date = new Date(invoice.billDate).toLocaleString(
              undefined,
              options
            );

            return (
              <tr className="bg-white border-b" key={i}>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  {invoice.id}
                </th>
                <td className="px-6 py-4">{invoice.clientName}</td>
                <td className="px-6 py-4">{date}</td>
                <td className="px-6 py-4 text-right">
                  <Link
                    href={`/invoice/${invoice.id}`}
                    className="font-medium text-blue-600 hover:text-blue-700"
                  >
                    Preview
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
