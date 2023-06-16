import Hero from "../layout/Hero";
import { Benefits } from "../layout/Benefits";
import { Features } from "../layout/Features";
import { Footer } from "../layout/Footer";
import { Notify } from "../layout/Notify";
import Faq from "./Faq";

export default function Home() {
  return (
    <div className="wrapper home-wrapper">
      <Hero /> {/* non-sharable*/}
      <Benefits />
      <Features />
      <Notify />
      <Faq />
      <Footer />
    </div>
  )
}
