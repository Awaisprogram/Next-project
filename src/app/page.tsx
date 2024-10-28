import Main from './home/page'
import Features from "./features/page";
import About from "./about/page";

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
