import { CldImage } from 'next-cloudinary';
import PreviewTable from './PreviewTable';

export default function FormPreview({ data }) {
  const {
    companyName,
    author,
    companyAddress,
    companyCity,
    companyCountry,
    clientName,
    clientAddress,
    invoiceNumber,
    billDate,
    dueDate,
    logoUrl,
    tableData,
  } = data;

  // const options = { year: 'numeric', month: 'long', day: 'numeric' };
  // const newBillDate = new Date(billDate.toLocaleDateString(undefined, options));
  // const newDueDate = new Date(dueDate.toLocaleDateString(undefined, options));

  return (
    <div className="w-full mx-auto mb-6 max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8">
      <div className="flex justify-between items-center">
        <div className="flex items-center justify-between">
          {logoUrl && (
            <CldImage
              width="140"
              height="140"
              src={logoUrl}
              alt="Invoice logo"
            />
          )}
        </div>
        <h2 className="font-bold text-4xl uppercase">Invoice</h2>
      </div>

      {/* invoice input */}
      <div className="flex flex-col border-b gap-2 w-1/2 mt-4">
        <p className="text-base">{author}</p>
        <p className="text-base">{companyName}</p>
        <p className="text-base">{companyAddress}</p>
        <p className="text-base">{companyCity}</p>
        <p className="text-base">{companyCountry}</p>
      </div>
      <div className="flex justify-between gap-2">
        <div className="flex flex-col gap-2 w-1/2 mt-4">
          <span className="text-base text-slate-400">Billed to:</span>
          <p className="text-base">{clientName}</p>
          <p className="text-base">{clientAddress}</p>
        </div>
        <div className="flex flex-col gap-2 w-1/2 mt-4">
          <div className="flex gap-3 items-center">
            <label htmlFor="invoice-number" className="text-slate-500 text-xs">
              Invoice #.
            </label>
            <p className="text-base">{invoiceNumber}</p>
          </div>
          <div className="flex gap-3 items-center">
            <label htmlFor="invoice-number" className="text-slate-500 text-xs">
              Bill Date
            </label>
            <p className="text-base">{billDate}</p>
          </div>
          <div className="flex gap-3 items-center">
            <label htmlFor="invoice-number" className="text-slate-500 text-xs">
              DueDate
            </label>
            <p className="text-base">{dueDate}</p>
          </div>
        </div>
      </div>
      <PreviewTable tableData={tableData} />
      <div className="mt-12 flex flex-col">
        <div className="flex justify-end">
          <span className="text-slate-400">...................................</span>
        </div>        
        <div className="flex justify-end">          
          <span className="text-slate-400 text-xs">authorized signatory</span>
        </div>        
        <div className="flex justify-end mt-10">
          <span className="text-slate-400">e-Invoice Powered by: </span>
          <span className="text-rose-400 font-bold"> J-SofTech</span>
        </div>
      </div>
    </div>
  );
}
