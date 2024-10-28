import Image from "next/image";
import section from './images/section.png'
import Main from './home/page'
import Features from "./features/page";
import About from "./about/page";
import Contact from "./contact/page";

export default function Home() {
  return (
    <>
    <div className="background">
  <Main/>
  <About/>
  <Features/>
  </div>
    </>
  );
}
