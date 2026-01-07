import type { ReactNode } from "react";

export interface ICardProps {
  children?: ReactNode;
  isLoading?: boolean;
  containerClassName?: string;
}