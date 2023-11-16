import { BsChevronRight } from 'react-icons/bs';

export default function Steps() {
  return (
    <div className="py-8 md:py-16 px-4 md:px-16 bg-slate-100 mx-auto flex items-center justify-center">
      <div>
        <h2 className="font-bold text-2xl md:text-4xl mb-4">
          Create your Invoice in less than 2 minutes
        </h2>
        <div className="flex flex-col md:flex-row md:grid-cols-3 gap-6 items-center">
          <div className="flex gap-3 mb-4 md:mb-0 items-center">
            <p className="border-2 rounded-full p-2 h-8 w-8 flex border-gray-800 items-center justify-center">
              1
            </p>
            <p>Invoice details</p>
            <BsChevronRight className="hidden md:block" />
          </div>
          <div className="flex gap-3 mb-4 md:mb-0 items-center">
            <p className="border-2 rounded-full p-2 h-8 w-8 flex border-gray-800 items-center justify-center">
              2
            </p>
            <p>
              Your bank details <br />
              <span className="text-sm text-slate-500">(optional)</span>
            </p>
            <BsChevronRight className="hidden md:block" />
          </div>
          <div className="flex gap-3 mb-4 md:mb-0 items-center">
            <p className="border-2 rounded-full p-2 h-8 w-8 flex border-gray-800 items-center justify-center">
              3
            </p>
            <p>
              Select design and colors <br />
              <span className="text-sm text-slate-500">(Downlaod/Email)</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
