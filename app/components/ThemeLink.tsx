import Link from 'next/link';
import { IconType } from 'react-icons';

interface MyProps {
  Icon?: IconType;
  className: string;
  href: string;
  title: string;
}

export default function ThemeLink({ className, href, title, Icon }: MyProps) {
  return (
    <div>
      <Link
        href={href}
        className={`flex items-center text-white px-5 py-3 text-center font-medium rounded-lg text-sm focus:ring-4 focus:outine-none ${className}`}
      >
        {title}
        <span className="ml-2 text-md">{Icon && <Icon />}</span>
      </Link>
    </div>
  );
}
