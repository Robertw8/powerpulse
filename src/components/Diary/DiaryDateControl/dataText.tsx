import React, { ReactNode } from 'react';

interface DateTextProps {
  onClick: () => void;
  children: ReactNode;
}

const DateText: React.FC<DateTextProps> = ({ children, onClick }) => (
  <p
    style={{ marginRight: '20px', marginLeft: '0px', cursor: 'pointer' }}
    onClick={onClick}
  >
    {children}
  </p>
);

export { DateText };
