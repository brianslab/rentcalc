import { ChangeEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeItemBuyer,
  changeItemCost,
  changeItemName,
  changeItemSplit,
} from '../store';
import { RootState, Item, Roommate, ItemSplit } from '../store/types';
import Accordion from './Accordion';
import { AccordionOptionType } from './AccordionTypes';
import Dropdown from './Dropdown';
import { DropdownOptionType } from './DropdownTypes';

function AddItem() {
  const dispatch = useDispatch();
  const { id, name, buyer, cost, itemSplit } = useSelector<RootState, Item>(
    (state) => {
      return state.item;
    }
  );
  const roommates = useSelector<RootState, Roommate[]>((state) => {
    return state.household.roommates;
  });

  const BuyerDropdownOptions: DropdownOptionType[] = roommates.map(
    (roommate: Roommate) => {
      return {
        value: roommate.name,
        label: roommate.name,
      };
    }
  );

  const [accordionInputValue, setAccordionInputValue] = useState(0);
  function findAccordianInputValue(itemSplit: ItemSplit[], id: string) {
    console.log(itemSplit);
    const a = itemSplit.find((sp) => Object.values(sp).includes(id))?.share;

    const b = itemSplit.find((sp) => sp.roommateID === id)?.share;

    console.log('a:', a, 'b:', b);
    return b || 0;
  }

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeItemName(event.target.value));
  };
  const handleCostChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeItemCost(parseFloat(event.target.value)));
  };
  const handleBuyerChange = (option: DropdownOptionType) => {
    dispatch(changeItemBuyer(option.value));
  };
  const handleShareChange = (
    id: string,
    event: ChangeEvent<HTMLInputElement>
  ) => {
    // setAccordionInputValue(findAccordianInputValue(itemSplit, id));

    dispatch(
      changeItemSplit({
        roommateID: id,
        share: parseInt(event.target.value) || 0,
      })
    );
  };

  // const AccordionForm: AccordionOptionType[] = roommates.map(
  //   (roommate: Roommate) => {
  //     const inputValue = itemSplit.find((sp) =>
  //       Object.values(sp).includes(roommate.id)
  //     )?.share;

  //     console.log('inputValue:', inputValue);

  //     return {
  //       id: roommate.id,
  //       label: roommate.name,
  //       content: (
  //         <input
  //           // value={accordionInputValue || ''}
  //           value={inputValue || ''}
  //           onChange={(event) => handleShareChange(roommate.id, event)}
  //           type='number'
  //         />
  //       ),
  //     };
  //   }
  // );

  const reducedItemSplit: any = itemSplit.reduce((acc, curr) => {
    return { ...acc, ...curr };
  });
  const renderedReducedItemSplit = Object.keys(reducedItemSplit).map((key) => {
    const value = reducedItemSplit[key];
    return (
      <p>
        {key}: {value}
      </p>
    );
  });
  const AccordionForm: AccordionOptionType[] = [
    {
      id,
      label: 'Split:',
      content: renderedReducedItemSplit,
    },
  ];

  return (
    <div className='flex'>
      <form style={{ display: 'flex' }}>
        <label>
          Item:
          <input value={name || ''} onChange={handleNameChange} />
        </label>
        <label>
          Cost:
          <input
            value={cost || ''}
            onChange={handleCostChange}
            type='number'
            step='0.01'
          />
        </label>
        <label>
          Buyer:
          <Dropdown
            options={BuyerDropdownOptions}
            value={buyer}
            onChange={handleBuyerChange}
          />
        </label>
        {/* <label> */}
        {/* Split: */}
        <Accordion items={AccordionForm} />
        {/* </label> */}
        <div>
          <button>Add item</button>
        </div>
      </form>
    </div>
  );
}

export default AddItem;
