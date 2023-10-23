// import Pricing from '@/components/Pricing';
import Home from '@/components/Home'
// import {
//   getSession,
//   getSubscription,
//   getActiveProductsWithPrices
// } from '@/app/supabase-server';


export default async function HomePage() {
  // const [session] = await Promise.all([
  //   getSession()
  // ]);

  return (
    <Home
      // session={session}
    />
  )

} 

// export default async function PricingPage() {
//   const [session, products, subscription] = await Promise.all([
//     getSession(),
//     getActiveProductsWithPrices(),
//     getSubscription()
//   ]);

//   return (
//     <Pricing
//       session={session}
//       user={session?.user}
//       products={products}
//       subscription={subscription}
//     />
//   );
// }
