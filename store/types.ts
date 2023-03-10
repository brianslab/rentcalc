export type Owes = Record<string, number>;

export interface ItemSplit {
  roommateID: string;
  share: number;
}

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
  itemSplit: ItemSplit[];
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
