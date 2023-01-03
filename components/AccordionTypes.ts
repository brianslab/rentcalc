export interface AccordionOptionType {
  id: string;
  label: string;
  content: any;
}

export interface AccordionProps {
  items: AccordionOptionType[];
}
