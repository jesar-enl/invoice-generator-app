'use client';

import { useState } from 'react';
import { AiOutlineCloseCircle, AiOutlinePlus } from 'react-icons/ai';

export default function FormTable({ updatedTableData }) {
  const [tableData, setTableData] = useState([
    {
      desc: '',
      qty: '',
      rate: '',
      tax: '',
      amount: '',
    },
  ]);

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const updatedData = [...tableData];
    updatedData[index][name] = value;

    // if (name === 'qty' || name === 'rate' || name === 'tax') {
    //   const qty = parseFloat(updatedData[index].qty);
    //   const rate = parseFloat(updatedData[index].rate);
    //   const tax = parseFloat(updatedData[index].tax);
    //   const amount = qty * rate + (qty * rate * tax) / 100;

    //   if (!isNaN(qty) && !isNaN(rate) && !isNaN(tax)) {
    //     updatedData[index].amount = amount.toFixed(2);
    //   } else {
    //     updatedData[index].amount = '';
    //   }
    // }
    if (name === 'qty' || name === 'rate') {
      const qty = parseFloat(updatedData[index].qty);
      const rate = parseFloat(updatedData[index].rate);
      const amount = qty * rate;

      if (!isNaN(qty) && !isNaN(rate)) {
        updatedData[index].amount = amount.toFixed(2);
      } else {
        updatedData[index].amount = '';
      }
    }
    setTableData(updatedData);
    updatedTableData(updatedData);
  };

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
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
            <th scope="col" className="px-6 py-3">
              <span className="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => {
            return (
              <tr key={index} className="bg-white border-b hover:bg-gray-200">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  <input
                    onChange={(e) => handleChange(index, e)}
                    type="text"
                    name="desc"
                    id=""
                    className="border-none mb-1 sm:w-full p-3 md:w-3/4 text-sm rounded-lg focus:ring focus:ring-slate-500 placeholder:text-gray-400 placeholder:italic bg-zinc-50"
                    placeholder="Item desc..."
                    value={row.desc}
                  />
                </th>
                <td className="px-6 py-4">
                  <input
                    onChange={(e) => handleChange(index, e)}
                    type="number"
                    name="qty"
                    id=""
                    className="border-none mb-1 p-3 w-14 text-sm rounded-lg focus:ring focus:ring-slate-500 placeholder:text-gray-400 placeholder:italic bg-zinc-50 text-right"
                    placeholder="1"
                    value={row.qty}
                  />
                </td>
                <td className="px-6 py-4">
                  <input
                    onChange={(e) => handleChange(index, e)}
                    type="number"
                    name="rate"
                    id=""
                    className="border-none mb-1 p-3 w-24 text-sm rounded-lg focus:ring focus:ring-slate-500 placeholder:text-gray-400 placeholder:italic bg-zinc-50 text-right"
                    placeholder="100"
                    value={row.rate}
                  />
                </td>
                <td className="px-6 py-4">
                  <input
                    onChange={(e) => handleChange(index, e)}
                    type="number"
                    name="tax"
                    id=""
                    className="border-none mb-1 w-14 p-3 text-sm rounded-lg focus:ring focus:ring-slate-500 placeholder:text-gray-400 placeholder:italic bg-zinc-50 text-right"
                    placeholder="10"
                    value={row.tax}
                  />
                </td>
                <td className="px-6 py-4">
                  <input
                    onChange={(e) => handleChange(index, e)}
                    type="number"
                    name="amount"
                    id=""
                    className="border-none mb-1 w-28 p-3 text-sm rounded-lg focus:ring focus:ring-slate-500 placeholder:text-gray-400 placeholder:italic bg-zinc-50 text-right"
                    placeholder="290000"
                    value={row.amount}
                  />
                </td>
                <td className="px-6 py-4 text-right">
                  <button
                    type="button"
                    onClick={(index) => {
                      const updatedData = [...tableData];
                      updatedData.splice(index, 1);
                      setTableData(updatedData);
                    }}
                    className="text-red-600 text-base hover:text-red-700"
                  >
                    <AiOutlineCloseCircle />
                  </button>
                </td>
              </tr>
            );
          })}
          <button
            type="button"
            onClick={() =>
              setTableData([
                ...tableData,
                {
                  desc: '',
                  qty: '',
                  rate: '',
                  tax: '',
                  amount: '',
                },
              ])
            }
            className="flex my-3 items-center text-blue-400 hover:text-blue-600 font-bold"
          >
            <AiOutlinePlus />
            <span className="ml-2">Add Item</span>
          </button>
        </tbody>
      </table>
    </div>
  );
}
