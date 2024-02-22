import LandingHero from "@/components/component-dashboard/LandingHero";
import Layout from "@/layout/layout";
import dynamic from "next/dynamic";

const DynamicVenueCart = dynamic(
  () => import("@/components/component-dashboard/VenueList"),
  {
    loading: () => <p className="text-xl font-bold text-center">Loading...</p>,
    ssr: false,
  }
);

const DynamicEventNews = dynamic(
  () => import("@/components/component-customer/EventNews"),
  {
    loading: () => <p className="text-xl font-bold text-center">Loading...</p>,
    ssr: false,
  }
);

export default function index() {
  return (
    <Layout>
      <div className="mt-36 mx-5 sm:mt-44 md:mt-48 lg:mt-56 sm:mx-10 md:mx-16 lg:mx-24">
        <LandingHero />
        {/* <DynamicVenueCart />
        <div className="mt-10"></div>
        <DynamicEventNews /> */}
      </div>
    </Layout>
  );
}
