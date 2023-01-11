import { Roommate } from '../store/types';

export function getRoommateByID(id: string, roommates: Roommate[]): string {
  const wantedRoommate = roommates.find((roommate) => roommate.id === id);
  return wantedRoommate?.name || '';
}
