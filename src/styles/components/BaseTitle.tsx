import { ReactNode } from 'react';

interface IBaseTitleProps {
  children: ReactNode;
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span';
  className?: string;
}

const BaseTitle = ({ children, tag, className }: IBaseTitleProps) => (
  <>
    {tag === 'h1' && <h1 className={className}>{children}</h1>}
    {tag === 'h2' && <h2 className={className}>{children}</h2>}
    {tag === 'h3' && <h3 className={className}>{children}</h3>}
    {tag === 'h4' && <h4 className={className}>{children}</h4>}
    {tag === 'h5' && <h5 className={className}>{children}</h5>}
    {tag === 'h6' && <h6 className={className}>{children}</h6>}
    {tag === 'span' && <span className={className}>{children}</span>}
  </>
);

export default BaseTitle;
