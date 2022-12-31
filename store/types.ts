export interface Roommate {
  id: string;
  name: string;
  split: number;
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
}

export type Purchases = Item[];
