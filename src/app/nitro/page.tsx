import Intro from "./intro";
import Body from "./body";
import Footer from "../footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden font-primary">
      <Intro />

      <Body />

      <Footer />
    </main>
  );
}
