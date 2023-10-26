import EventNews from "@/components/component-customer/EventNews";
import LandingHero from "@/components/component-dashboard/LandingHero";
import VenueCart from "@/components/component-dashboard/VenueCart";
import Layout from "@/layout/layout";

export default function index() {
  return (
    <Layout>
      <LandingHero />
      <VenueCart />
      <EventNews />
    </Layout>
  );
}
