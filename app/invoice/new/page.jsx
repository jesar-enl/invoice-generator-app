'use client';
import { useState } from 'react';
import { AiOutlineCloudDownload, AiOutlineCloudUpload } from 'react-icons/ai';
import { CiEdit, CiMail } from 'react-icons/ci';
import { MdPreview } from 'react-icons/md';
import Form from '../../components/Form';
import FormPreview from '../../components/FormPreview';

export default function InvoiceCreation() {
  const [preview, setPreview] = useState(false);
  const [invoice, setInvoice] = useState({
    id: '',
    date: '',
    dueDate: '',
    description: '',
    items: [],
    from: {
      name: '',
      address: '',
      city: '',
      state: '',
      zip: '',
      country: '',
    },
    to: {
      name: '',
      address: '',
      city: '',
      state: '',
      zip: '',
      country: '',
    },
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
      {preview ? <FormPreview /> : <Form />}
    </div>
  );
}
