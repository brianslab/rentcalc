import Head from 'next/head';
import HouseholdForm from '../components/HouseholdForm';
import HouseholdShow from '../components/HouseholdShow';

export default function Home() {
  return (
    <>
      <h1>RentCalc</h1>
      <HouseholdForm />
      <HouseholdShow />
    </>
  );
}
