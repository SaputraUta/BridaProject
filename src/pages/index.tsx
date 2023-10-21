import LandingHero from "@/components/component-dashboard/LandingHero";
import VenueCart from "@/components/component-dashboard/VenueCart";
import Layout from "@/layout/layout";
import axios from "axios";
import Link from "next/link";
import React from "react";

export default function index() {
  return (
    <Layout>
      <LandingHero />
      <VenueCart />
    </Layout>
  );
}
