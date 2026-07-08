import type { ReactNode } from "react";

type SvgIconProps = {
  children: ReactNode;
  className?: string;
};

export function SvgIcon({ children, className }: SvgIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden="true">
      {children}
    </svg>
  );
}