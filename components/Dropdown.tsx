import React, { useState, useEffect, useRef } from 'react';
import { GoChevronDown } from 'react-icons/go';
import Panel from './Panel';
import { DropdownOptionType, DropdownProps } from './DropdownTypes';

function Dropdown({ options, value, onChange }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const divEl = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (event: MouseEvent) => {
      if (!divEl.current) {
        return;
      }

      if (!divEl.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handler, true);

    return () => {
      document.removeEventListener('click', handler);
    };
  }, []);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: DropdownOptionType) => {
    setIsOpen(false);
    onChange(option);
  };

  const renderedOptions = options.map((option: DropdownOptionType) => {
    return (
      <div
        className='hover:bg-sky-100 rounded cursor-pointer p-1'
        onClick={() => handleOptionClick(option)}
        key={option.value}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div ref={divEl} className='w-48 relative'>
      <Panel
        className='flex justify-between items-center cursor-pointer'
        onClick={handleClick}
      >
        {value || 'Select...'}
        <GoChevronDown className='text-lg' />
      </Panel>
      {isOpen && <Panel className='absolute top-full'>{renderedOptions}</Panel>}
    </div>
  );
}

export default Dropdown;
