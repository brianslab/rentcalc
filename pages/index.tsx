import Link from 'next/link';
import Head from 'next/head';
import HouseholdForm from '../components/HouseholdForm';
import HouseholdShow from '../components/HouseholdShow';

export default function Home() {
  return (
    <>
      <Head>
        <title>Rent Calculator</title>
        <meta
          name='description'
          content='Calculate the rent split for your household'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1>RentCalc</h1>
      <HouseholdForm />
      <HouseholdShow />
      <Link href='/purchases' prefetch={false}>
        <button>Continue</button>
      </Link>
    </>
  );
}
