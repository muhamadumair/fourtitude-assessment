import './App.scss';


const devCards = [
  {
    icon: (<img src="/assets/custom-dev.svg" alt="Customised Development" />),
    eyebrow: 'Customised Development',
    title: 'Tailor-made solutions for your business',
    body: "Can't find a ready-made solution that fits? We can custom build mobile & web applications to suit your business needs."
  },
  {
    icon: (<img src="/assets/integration-api.svg" alt="Integration & API Management" />),
    eyebrow: 'Integration & API Management',
    title: 'Achieve digital transformation via an API management ecosystem',
    body: 'Venture into the mobile space with our mobility services. From mobile-first websites to mobile apps, we\u2019re ready to help you develop a mobile solution that works.'
  },
  {
    icon: (<img src="/assets/cloud-native.svg" alt="Cloud-native Development" />),
    eyebrow: 'Cloud-native Development',
    title: 'Enhance your business in a cloud-native environment',
    body: 'Improve business agility, velocity and flexibility through the cloud \u2013 we are here to guide you through the entire process.'
  },
  {
    icon: (<img src="/assets/mobile-dev.svg" alt="Mobile Development" />),
    eyebrow: 'Mobile Development',
    title: 'Become an anywhere business',
    body: "From mobile-first websites to mobile apps, we\u2019re ready to help you develop a mobile solution that works."
  },
  {
    icon: (<img src="/assets/application-modernisation.svg" alt="Application Modernisation" />),
    eyebrow: 'Application Modernisation',
    title: 'Breathing new life into old technology',
    body: 'Give legacy or aging systems a new lease on life. We can help you modernise them to better serve your business needs.'
  }
];



function Card({ icon, eyebrow, title, body }) {
  return (
    <div className="card">
      <div className="card__icon">{icon}</div>
      <div className="card__content">
        <p className="card__eyebrow">{eyebrow}</p>
        <h3 className="card__title">{title}</h3>
        {body && <p className="card__body">{body}</p>}
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="site-header">
        <div className="site-header__inner">
          <div className="brand">
            <img src="/assets/logo.svg" alt="fourtitude" />
          </div>
          <nav className="site-nav">
            <a href="#dev" className="site-nav__link site-nav__link--active">Development & Integration</a>
            <a href="#ux" className="site-nav__link">UI &UX Design</a>
            <a href="#connect" className="site-nav__link">Connect</a>
          </nav>
        </div>
      </header>

      <section className="section section--dev" id="dev">
        <div className="section__inner">
          <div className="section__header">
            <h1 className="section__title">Development & Integration</h1>
            <p className="section__subtitle">
              Our development and integration services cater to organisations looking at digital transformation and Industry 4.0.
              <br />
              Let's work together to realise your business goals today.
            </p>
          </div>

          <div className="card-grid">
            {devCards.map((c, i) => (
              <Card key={i} {...c} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;