import Link from 'next/link';
import HouseholdForm from '../components/HouseholdForm';
import HouseholdShow from '../components/HouseholdShow';

export default function Home() {
  return (
    <>
      <h1>RentCalc</h1>
      <HouseholdForm />
      <HouseholdShow />
      <Link href='/purchases'>
        <button>Continue</button>
      </Link>
    </>
  );
}
