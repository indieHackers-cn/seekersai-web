import ManagePricing from './ManagePricing';
import {
    getSession,
    getSubscription,
    getActiveProductsWithPrices
  } from '@/app/supabase-server';



export default async function Pricing() {
   const [session, products, subscription] = await Promise.all([
    getSession(),
    getActiveProductsWithPrices(),
    getSubscription()
  ]);

  return (
    <ManagePricing
      session={session}
      user={session?.user}
      products={products}
      subscription={subscription}
    />
  );
}