
import React from "react";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import DonationSection from "@/components/home/DonationSection";
import EducationSection from "@/components/home/EducationSection";
import EventsSection from "@/components/home/EventsSection";
import VolunteerSection from "@/components/home/VolunteerSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <DonationSection />
      <EducationSection />
      <EventsSection />
      <VolunteerSection />
    </Layout>
  );
};

export default Index;
