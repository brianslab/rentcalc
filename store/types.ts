export interface Roommate {
  id: string;
  name: string;
  rentSplit: number;
  owes: Record<string, number>;
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
  split: Record<string, number>;
}

export type Purchases = Item[];

export interface RootState {
  roommate: Roommate;
  household: Household;
  item: Item;
  purchases: Purchases;
}
