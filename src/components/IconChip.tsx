import type { ReactNode } from "react";

type IconChipProps = {
  children: ReactNode;
  dark?: boolean;
};

export function IconChip({ children, dark = false }: IconChipProps) {
  return (
    <div className={`icon-chip ${dark ? "icon-chip--dark" : ""}`}>
      <svg viewBox="0 0 24 24" aria-hidden="true">
        {children}
      </svg>
    </div>
  );
}