import { useState } from 'react';
import './App.scss';
import Header from './components/Header';
import Section from './components/Section';
import Card from './components/Card';
import ConnectForm from './components/ConnectForm';
import Footer from './components/Footer';
import Modal from './components/Modal';
import devCards from './data/devCards';
import uxCards from './data/uxCards';

const App = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="App">
      <Header />

      <Section
        id="dev"
        title="Development & Integration"
        subtitle={
          <>
            Our development and integration services cater to organisations looking at digital transformation and Industry 4.0.
            <br />
            Let's work together to realise your business goals today.
          </>
        }
        className="section--dev"
      >
        <div className="card-grid">
          {devCards.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </Section>

      <Section
        id="ux"
        title="UI & UX Design"
        subtitle={
          <>
            We bring value to your business by producing seamless, multi-platform digital experiences that result in strong,
            <br />
            meaningful user engagements. Read more about our services below.
          </>
        }
        className="section--ux"
      >
        <div className="card-grid card-grid--three">
          {uxCards.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </Section>

      <ConnectForm onSuccess={() => setShowModal(true)} />

      <Footer />

      <Modal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
}

export default App;
