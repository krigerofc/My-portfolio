import Contact from "@/components/contact";
import Header from "@/components/header";
import Nav from "@/components/Nav";
import Project from "@/components/Projects";

export default function Home() {
  return (
    <div>
      <Nav/>
      <Header/>
      <Project/>
      <Contact/>
    </div>
  );
}
