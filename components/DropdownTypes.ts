export interface DropdownOptionType {
  value: string;
  label: string;
}

export interface DropdownProps {
  options: DropdownOptionType[];
  value: string;
  onChange: (option: DropdownOptionType) => void;
}
