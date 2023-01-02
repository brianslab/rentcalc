export type Owes = Record<string, number>;
export type ItemSplit = Record<string, number>;

export interface Roommate {
  id: string;
  name: string;
  rentSplit: number;
  owes: Owes;
}

export interface Household {
  rent: number;
  roommates: Roommate[];
}

export interface Item {
  id: string;
  name: string;
  buyer: string;
  cost: number;
  split: ItemSplit;
}

export interface Purchases {
  items: Item[];
}

export interface RootState {
  roommate: Roommate;
  household: Household;
  item: Item;
  purchases: Purchases;
}
