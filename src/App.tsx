import AboutMe from './sections/AboutMe';
import Contact from './sections/Contact';
import Experience from './sections/Experience';
import Footer from './sections/Footer';
import Header from './sections/Header';
import Hero from './sections/Hero';
import Projects from './sections/Projects';

function App() {
    return (
        <div className="h-full">
            <Header />
            <Hero />
            <AboutMe />
            <Experience />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
