import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stack from "@/components/Stack";
import SelectedWork from "@/components/SelectedWork";
import Archive from "@/components/Archive";
import Experience from "@/components/Experience";
import About from "@/components/About";
import WorkWithMe from "@/components/WorkWithMe";
import Footer from "@/components/Footer";
import RevealController from "@/components/RevealController";
import ScrollProgress from "@/components/ScrollProgress";
import CommandPalette from "@/components/CommandPalette";
import CursorGlow from "@/components/CursorGlow";

export default function Home() {
  return (
    <>
      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-copper focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:uppercase focus:tracking-wider focus:text-oncopper"
      >
        Skip to content
      </a>
      <CursorGlow />
      <Navbar />
      <ScrollProgress />
      <main>
        <Hero />
        <Stack />
        <SelectedWork />
        <Archive />
        <Experience />
        <About />
        <WorkWithMe />
      </main>
      <Footer />
      <RevealController />
      <CommandPalette />
    </>
  );
}
