import { ChangeEvent, FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeItemBuyer,
  changeItemCost,
  changeItemName,
  changeItemSplit,
  addItem,
} from '../store';
import { RootState, Item, Roommate, ItemSplit } from '../store/types';
import { getRoommateByID } from '../utils/getRoommateByID';
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

  function handleNameChange(event: ChangeEvent<HTMLInputElement>) {
    dispatch(changeItemName(event.target.value));
  }
  function handleCostChange(event: ChangeEvent<HTMLInputElement>) {
    dispatch(changeItemCost(parseFloat(event.target.value)));
  }
  function handleBuyerChange(option: DropdownOptionType) {
    dispatch(changeItemBuyer(option.value));
  }
  function handleShareChange(id: string, event: ChangeEvent<HTMLInputElement>) {
    const newSplit = {
      roommateID: id,
      share: parseInt(event.target.value),
    };

    dispatch(changeItemSplit(newSplit));
  }

  const renderedItemSplit: any = itemSplit.map((split: ItemSplit) => {
    return (
      <p key={split.roommateID}>
        {getRoommateByID(split.roommateID, roommates)}:{' '}
        <input
          value={split.share || ''}
          onChange={(event) => handleShareChange(split.roommateID, event)}
          type='number'
          step='0.01'
        />
      </p>
    );
  });
  const AccordionForm: AccordionOptionType[] = [
    {
      id,
      label: 'Split:',
      content: renderedItemSplit,
    },
  ];

  function handleAddItem(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const itemToAdd = {
      name,
      buyer,
      cost,
      itemSplit,
    };

    dispatch(addItem(itemToAdd));
  }

  return (
    <div className='flex'>
      <form style={{ display: 'flex' }} onSubmit={handleAddItem}>
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
        <Accordion items={AccordionForm} />
        <div>
          <button>Add item</button>
        </div>
      </form>
    </div>
  );
}

export default AddItem;
