import About from "../components/About";
import Beverages from "../components/Beverages";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Menu from "../components/Menu";


export default function HomePage(){
    return(
        <main className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
            <Header />
            <Hero />
            <About />
            <Menu />
            <Beverages />
            <Contact />
            <Footer />
        </main>
    )
}