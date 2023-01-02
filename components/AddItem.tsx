import { ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeItemBuyer, changeItemCost, changeItemName } from '../store';
import { RootState, Item, Roommate } from '../store/types';
import Dropdown from './Dropdown';
import { DropdownOptionType } from './DropdownTypes';

function AddItem() {
  const dispatch = useDispatch();
  const { name, buyer, cost, split } = useSelector<RootState, Item>((state) => {
    return state.item;
  });
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

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeItemName(event.target.value));
  };
  const handleCostChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeItemCost(parseFloat(event.target.value)));
  };
  const handleBuyerChange = (option: DropdownOptionType) => {
    dispatch(changeItemBuyer(option.value));
  };

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
            value={cost || 0}
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
        <label>
          Split:
          <button>FIXME - accordian form</button>
        </label>
        <div>
          <button>Add item</button>
        </div>
      </form>
    </div>
  );
}

export default AddItem;
