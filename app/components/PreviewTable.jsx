import { ToWords } from 'to-words';

export default function PreviewTable({ tableData }) {
  const toWords = new ToWords({
    localeCode: 'en-GB',
    converterOptions: {
      currency: true,
      ignoreDecimal: false,
      ignoreZeroCurrency: false,
      doNotAddOnly: false,
      currencyOptions: {
        name: 'shilling',
        plural: 'shillings',
        symbol: 'UGX',
        fractionalUnit: {
          name: 'cent',
          plural: 'cents',
          symbol: '',
        },
      },
    },
  });

  const total = tableData?.reduce((sum, row) => {
    const amount = parseFloat(row.amount);

    if (!isNaN(amount)) {
      return sum + amount;
    }
    return sum;
  }, 0);

  const totalInWords = toWords.convert(total);

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-6">
      <table className="w-full text-sm text-left text-gray-100 dark:text-gray-400">
        <thead className="text-xs text-gray-50 my-6 uppercase bg-gray-700 dark:bg-gray-700 dark:text-gray-400 items-center font-bold">
          <tr>
            <th scope="col" className="px-6 py-3">
              Item Description
            </th>
            <th scope="col" className="px-6 py-3">
              Qty
            </th>
            <th scope="col" className="px-6 py-3">
              Rate
            </th>
            <th scope="col" className="px-6 py-3">
              Tax (%)
            </th>
            <th scope="col" className="px-6 py-3">
              Amount
            </th>
          </tr>
        </thead>
        <tbody>
          {tableData?.map((row, index) => {
            return (
              <tr key={index} className="bg-white border-b">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  {row.desc}
                </th>
                <td className="px-6 py-4 text-gray-900 text-end">{row.qty}</td>
                <td className="px-6 py-4 text-gray-900 text-end">{row.rate}</td>
                <td className="px-6 py-4 text-gray-900 text-end">{row.tax}</td>
                <td className="px-6 py-4 text-gray-900 text-end">{row.amount}</td>
              </tr>
            );
          })}
          <tr className="bg-slate-400 border-b font-bold">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
            >
              Total Amount:
            </th>
            <td className="px-6 py-4"></td>
            <td className="px-6 py-4"></td>
            <td className="px-6 py-4"></td>
            <td className="px-6 py-4 text-gray-900 text-end">{total.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
      <div className="p-5 mt-4 text-lg font-bold text-left rtl:text-right text-gray-900 bg-white ">
        Amount in words:
        <p className="mt-1 text-sm font-semibold text-gray-500">
          {totalInWords}
        </p>
      </div>
    </div>
  );
}
