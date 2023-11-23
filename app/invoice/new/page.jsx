'use client';
import { CldImage, CldUploadButton } from 'next-cloudinary';
import { useEffect, useRef, useState } from 'react';
import { AiOutlineCloudDownload, AiOutlineCloudUpload } from 'react-icons/ai';
import { CiEdit, CiMail } from 'react-icons/ci';
import { MdPreview } from 'react-icons/md';
import { useReactToPrint } from 'react-to-print';
import FormPreview from '../../components/FormPreview';
import FormTable from '../../components/FormTable';
import toast from 'react-hot-toast';

export default function InvoiceCreation() {
  const [loading, setLoading] = useState(false);

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
  const invoiceRef = useRef();

  // invoice number
  const [number, setNumber] = useState('');

  const generateNumber = () => {
    let invoiceNumber = formData.invoiceNumber;
    do {
      invoiceNumber = Math.floor(10000 + Math.random() * 90000);
    } while (localStorage.getItem(`INV-${invoiceNumber}`));

    localStorage.setItem(`INV-${invoiceNumber}`, true);
    return invoiceNumber;
  };

  useEffect(() => {
    const invoiceNumber = `INV-${generateNumber()}`;
    setNumber(invoiceNumber);
    setFormData((prevState) => ({ ...prevState, invoiceNumber }));
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const allFormData = {
      ...formData,
      tableData,
      logoUrl,
    };
    setCombinedData(allFormData);

    try {
      setLoading(true);
      const response = await fetch('http://localhost:3000/api/invoice', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          invoiceData: {
            ...formData,
            logoUrl,
          },
          tableData,
        }),
      });
      console.log(response)
      setLoading(false);
      toast.success('Invoice created');
      setPreview(!preview);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const handlePrint = useReactToPrint({
    content: () => invoiceRef.current,
  });

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
            onClick={handlePrint}
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
        <div ref={invoiceRef}>
          <FormPreview data={combinedData} />
        </div>
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
                  uploadPreset="invoiceUpload"
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
          {loading ? (
            <button
              disabled
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center"
            >
              <svg
                aria-hidden="true"
                role="status"
                className="inline w-4 h-4 me-3 text-white animate-spin"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="#E5E7EB"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentColor"
                />
              </svg>
              Creating invoice...
            </button>
          ) : (
            <button
              type="submit"
              className="my-3 p-2 text-sm rounded-lg hover:bg-blue-600 text-white font-bold bg-blue-500"
            >
              Create Invoice
            </button>
          )}
        </form>
      )}
    </div>
  );
}
