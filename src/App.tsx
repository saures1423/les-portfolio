import AboutMe from './sections/AboutMe';
import Contact from './sections/Contact';
import Experience from './sections/Experience';
import Footer from './sections/Footer';
import Header from './sections/Header';
import Hero from './sections/Hero';
import Projects from './sections/Projects';

function App() {
    return (
        <div className="min-h-screen overflow-hidden bg-[#071316] text-[#f3f7f4]">
            <Header />
            <main>
                <Hero />
                <AboutMe />
                <Experience />
                <Projects />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

export default App;
