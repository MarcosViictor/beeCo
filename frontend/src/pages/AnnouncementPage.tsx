import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { GalleryRoulette } from "@/components/GalleryRoullete";
import { AnnouncementDetail } from "@/components/AnnouncementDetail";
import { SideMenu } from "@/components/SideMenu";

export const AnnouncementPage = () => {
  return (
    <>
      <Header />
      <SideMenu />
      <GalleryRoulette />
      <AnnouncementDetail />
      <Footer />
    </>
  );
};
