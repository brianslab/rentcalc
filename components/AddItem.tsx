function AddItem() {
  return (
    <form style={{ display: 'flex' }}>
      <label>
        Item:
        <input />
      </label>
      <label>
        Buyer:
        <button>FIXME - dropdown</button>
      </label>
      <label>
        Cost:
        <input type='number' />
      </label>
      <label>
        Split:
        <button>FIXME - dropdown form</button>
      </label>
      <div>
        <button>Add item</button>
      </div>
    </form>
  );
}

export default AddItem;
