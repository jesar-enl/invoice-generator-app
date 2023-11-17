'use client';
import { CldImage, CldUploadButton } from 'next-cloudinary';
import { useEffect, useState } from 'react';
import { AiOutlineCloudDownload, AiOutlineCloudUpload } from 'react-icons/ai';
import { CiEdit, CiMail } from 'react-icons/ci';
import { MdPreview } from 'react-icons/md';
import FormPreview from '../../components/FormPreview';
import FormTable from '../../components/FormTable';

export default function InvoiceCreation() {
  const [preview, setPreview] = useState(false);

  const [combinedData, setCombinedData] = useState({});

  const [logoUrl, setLogoUrl] = useState('');

  const [tableData, setTableData] = useState([]);

  const [formData, setFormData] = useState({
    companyName: '',
    author: '',
    companyAddress: '',
    companyCity: '',
    companyCountry: '',
    clientName: '',
    clientAddress: '',
    invoiceNumber: '',
    billDate: '',
    dueDate: '',
  });

  // invoice number
  const [number, setNumber] = useState('');

  const generateNumber = () => {
    let invoiceNumber = formData.invoiceNumber;
    do {
      invNumber = Math.floor(10000 + Math.random() * 90000);
    } while (localStorage.getItem(`INV-${invoiceNumber}`));

    localStorage.setItem(`INV-${invoiceNumber}`, true);
    return invoiceNumber;
  };

  useEffect(() => {
    setNumber(`INV-${generateNumber()}`);
  }, []);

  const updatedTableData = (newData) => {
    setTableData(newData);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const allFormData = {
      ...formData,
      tableData,
      logoUrl,
    };
    setCombinedData(allFormData);
    setPreview(!preview);
  };

  return (
    <div className="bg-slate-50 md:py-10 py-8 px-4 md:px-16 mt-10">
      {/** Action buttons for the invoice */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex gap-4">
          {preview ? (
            <button
              type="button"
              onClick={() => setPreview(!preview)}
              className="flex items-center space-x-1 px-2 py-3 shadow rounded-lg border border-gray-300 gap-2"
            >
              <CiEdit />
              Edit Form
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setPreview(!preview)}
              className="flex items-center space-x-1 px-2 py-3 shadow rounded-lg border border-gray-300 gap-2"
            >
              <MdPreview />
              Preview
            </button>
          )}
          <button
            type="button"
            className="flex items-center space-x-1 px-2 py-3 shadow rounded-lg border border-gray-300 gap-2"
          >
            <AiOutlineCloudDownload />
            Print/Download
          </button>
        </div>

        <div className="flex gap-4 text-white">
          <button
            type="button"
            className="flex items-center space-x-1 px-2 py-3 shadow rounded-lg border border-gray-300 bg-blue-500 hover:bg-blue-600 gap-2"
          >
            <AiOutlineCloudUpload />
            Save Online
          </button>
          <button
            type="button"
            className="flex items-center space-x-1 px-2 py-3 shadow rounded-lg border border-gray-300 bg-rose-500 hover:bg-rose-600 gap-2"
          >
            <CiMail />
            Send
          </button>
        </div>
      </div>

      {/** Preview form and Edit form */}
      {preview ? (
        <FormPreview data={combinedData} />
      ) : (
        <form
          onSubmit={handleSubmit}
          className="w-full mx-auto mb-6 max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8"
        >
          <div className="flex justify-between items-center">
            <div className="flex items-center justify-between">
              {logoUrl ? (
                <CldImage
                  width="240"
                  height="240"
                  src={logoUrl}
                  alt="Invoice logo"
                />
              ) : (
                <CldUploadButton
                  className="flex flex-col items-center justify-center w-48 h-24 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 text-sm text-gray-500"
                  onUpload={(data) => {
                    setLogoUrl(data.info.secure_url);
                  }}
                  uploadPreset="InvoicePreset"
                />
              )}
            </div>
            <h2 className="font-bold text-4xl uppercase">Invoice</h2>
          </div>

          {/* invoice input */}
          <div className="flex flex-col gap-2 w-1/2 mt-4">
            <input
              name="author"
              value={formData.author}
              onChange={handleInputChange}
              type="text"
              placeholder="Your name"
              className="border-none mb-1 text-xl font-bold rounded-lg focus:ring focus:ring-slate-600 h-6 placeholder:text-slate-400 placeholder:text-sm"
            />
            <input
              name="companyName"
              value={formData.companyName}
              onChange={handleInputChange}
              type="text"
              placeholder="Company's name"
              className="border-none mb-1 text-xl font-bold rounded-lg focus:ring focus:ring-slate-600 h-6 placeholder:text-slate-400 placeholder:text-sm"
            />
            <input
              name="companyCity"
              value={formData.companyCity}
              onChange={handleInputChange}
              type="text"
              placeholder="City, State zip"
              className="border-none mb-1 text-xl font-bold rounded-lg focus:ring focus:ring-slate-600 h-6 placeholder:text-slate-400 placeholder:text-sm"
            />
            <input
              name="companyCountry"
              value={formData.companyCountry}
              onChange={handleInputChange}
              type="text"
              placeholder="Country i.e. Uganda"
              className="border-none mb-1 text-xl font-bold rounded-lg focus:ring focus:ring-slate-600 h-6 placeholder:text-slate-400 placeholder:text-sm"
            />
          </div>
          <div className="flex justify-between gap-2">
            <div className="flex flex-col gap-2 w-1/2 mt-4">
              <input
                name="clientName"
                value={formData.clientName}
                onChange={handleInputChange}
                type="text"
                placeholder="Client's name"
                className="border-none mb-1 text-xl font-bold rounded-lg focus:ring focus:ring-slate-600 h-6 placeholder:text-slate-400 placeholder:text-sm"
              />
              <input
                name="clientAddress"
                value={formData.clientAddress}
                onChange={handleInputChange}
                type="text"
                placeholder="Address"
                className="border-none mb-1 text-xl font-bold rounded-lg focus:ring focus:ring-slate-600 h-6 placeholder:text-slate-400 placeholder:text-sm"
              />
            </div>
            <div className="flex flex-col gap-2 w-1/2 mt-4">
              <div className="flex gap-3 items-center">
                <label
                  htmlFor="invoice-number"
                  className="text-slate-500 text-xs"
                >
                  Invoice #.
                </label>
                <input
                  name="invoiceNumber"
                  value={number}
                  readOnly
                  onChange={handleInputChange}
                  type="text"
                  className="border-slate-200 mb-1 text-sm font-bold rounded-lg focus:ring focus:ring-slate-600 h-6 w-20 placeholder:text-slate-400 placeholder:text-sm"
                />
              </div>
              <div className="flex gap-3 items-center">
                <label
                  htmlFor="invoice-number"
                  className="text-slate-500 text-xs"
                >
                  Bill Date
                </label>
                <input
                  name="billDate"
                  value={formData.billDate}
                  onChange={handleInputChange}
                  type="date"
                  className="border-none mb-1 text-sm font-bold rounded-lg focus:ring focus:ring-slate-600 h-6 w-30"
                />
              </div>
              <div className="flex gap-3 items-center">
                <label
                  htmlFor="invoice-number"
                  className="text-slate-500 text-xs"
                >
                  DueDate
                </label>
                <input
                  name="dueDate"
                  value={formData.dueDate}
                  onChange={handleInputChange}
                  type="date"
                  className="border-none mb-1 text-sm font-bold rounded-lg focus:ring focus:ring-slate-600 h-6 w-30"
                />
              </div>
            </div>
          </div>
          <FormTable updatedTableData={updatedTableData} />
          <button
            type="submit"
            className="my-3 p-2 text-sm rounded-lg hover:bg-blue-600 text-white font-bold bg-blue-500"
          >
            Create Invoice
          </button>
        </form>
      )}
    </div>
  );
}
