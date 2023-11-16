import ThemeLink from './ThemeLink';

export default function InvoiceCTA() {
  return (
    <div className="invoice-cta flex items-center justify-center">
      <div className="py-24 px-16 bg-slate-100 bg-opacity-50 shadow-2xl rounded-md">
        <ThemeLink
          className="bg-rose-600 hover:bg-rose-700 focus:ring-rose-400"
          title="Create you Invoice"
          href="/invoice/new"
        />
      </div>
    </div>
  );
}
