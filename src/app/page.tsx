import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stack from "@/components/Stack";
import SelectedWork from "@/components/SelectedWork";
import Archive from "@/components/Archive";
import Experience from "@/components/Experience";
import About from "@/components/About";
import WorkWithMe from "@/components/WorkWithMe";
import Contact from "@/components/Contact";
import RevealController from "@/components/RevealController";
import ScrollProgress from "@/components/ScrollProgress";
import CommandPalette from "@/components/CommandPalette";
import CursorGlow from "@/components/CursorGlow";

export default function Home() {
  return (
    <>
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
        <Contact />
      </main>
      <RevealController />
      <CommandPalette />
    </>
  );
}
