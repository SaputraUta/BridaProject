import EventNews from "@/components/component-customer/EventNews";
import LandingHero from "@/components/component-dashboard/LandingHero";
import Layout from "@/layout/layout";
import dynamic from "next/dynamic";

const DynamicVenueCart = dynamic(
  () => import("@/components/component-dashboard/VenueCart"),
  {
    loading: () => <p className="text-xl font-bold text-center">Loading...</p>,
    ssr: false,
  }
);

export default function index() {
  return (
    <Layout>
      <div className="mx-24 mt-36">
        <LandingHero />
        <DynamicVenueCart />
        <EventNews />
      </div>
    </Layout>
  );
}
