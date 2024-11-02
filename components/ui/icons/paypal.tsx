import type { IconProps } from '@/lib/types';

const PayPal: React.FC<IconProps> = ({ size = '20', color = 'currentColor', ...attributes }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={size}
      width={size}
      viewBox="0 0 26 25"
      id="paypalIcon"
      {...attributes}
    >
      <path
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.9 20.5H2c-.6 0-.5-.1-.5-.5s2.9-18 3-18.5.5-1 1-1h10c2.8 0 5 2.2 5 5h0c0 4.4-3.6 8-8 8H7.9"
      ></path>
      <path
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7 23.5c-.3 0-.5-.2-.5-.5 0 0 0 0 0 0 0-.3 2.4-16 2.5-16.5s.3-1 1-1h7.5c2.8 0 5 2.2 5 5h0c0 3.9-3.1 7-7 7h-2l-1 6H7z"
      ></path>
    </svg>
  );
};

export default PayPal;
