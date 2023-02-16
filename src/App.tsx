
import { Header } from './components/Header'
import { About } from './components/About';
import { Resume } from './components/Resume';
import { ContactUs } from './components/ContactUs';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Resume />
      <ContactUs />
      <Footer />
    </div>
  );
}


export default App;