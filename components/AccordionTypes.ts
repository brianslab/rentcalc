import { ReactNode } from 'react';

export interface AccordionOptionType {
  id: string;
  label: string;
  content: ReactNode;
}

export interface AccordionProps {
  items: AccordionOptionType[];
}
