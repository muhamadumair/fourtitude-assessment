import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import './App.scss';


const HEADER_HEIGHT = 50;
const SECTIONS = ['dev', 'ux', 'connect'];

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

const uxCards = [
  {
    icon: (<img src="/assets/user-experience.svg" alt="UX Research" />),
    eyebrow: 'User Experience',
    title: 'Intuitive digital experiences to elevate your business',
    body: 'Intuitive digital experiences to elevate your business'
  },
  {
    icon: (<img src="/assets/user-interface.svg" alt="UI Design" />),
    eyebrow: 'User Interface',
    title: 'Deliver memorable brand experiences using human-centred design',
    body: 'We meld innovation and technology with content and design best practices to translate your business goals into experiences that are meaningful to customers.'
  },
  {
    icon: (<img src="/assets/cloud-marketing.svg" alt="User Testing" />),
    eyebrow: 'Cloud Marketing',
    title: 'Leverage cloud applications for digital marketing efficacy',
    body: 'Through social media and cloud marketing, we help create impactful digital campaigns and experiences that are bound to captivate audiences.'
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

const schema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Please enter a valid email address'),
  contact: z
    .string()
    .min(1, 'Contact no. is required')
    .regex(/^[\d+\-()\s]+$/, 'Please enter a valid contact number')
    .refine((value) => value.replace(/\D/g, '').length >= 7, {
      message: 'Contact number must be at least 7 digits',
    }),
  message: z.string().min(1, 'Message is required'),
});

function FloatingField({
  id,
  name,
  type = 'text',
  label,
  register,
  error,
  isTextarea = false,
}) {
  const InputTag = isTextarea ? 'textarea' : 'input';
  return (
    <div className={`connect-form__field ${isTextarea ? 'connect-form__field--textarea' : ''}`}>
      <InputTag
        id={id}
        type={isTextarea ? undefined : type}
        className={isTextarea ? 'connect-form__textarea' : 'connect-form__input'}
        placeholder=" "
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        {...register(name)}
      />
      <label htmlFor={id} className="connect-form__label">{label}</label>
      {error && (
        <span id={`${id}-error`} className="connect-form__error">{error.message}</span>
      )}
    </div>
  );
}

function App() {
  const [activeSection, setActiveSection] = useState('dev');
  const [menuOpen, setMenuOpen] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(schema),
    mode: 'onBlur',
    reValidateMode: 'onChange',
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + HEADER_HEIGHT + 20;
      let current = SECTIONS[0];
      for (const id of SECTIONS) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPosition) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const top = el.offsetTop - HEADER_HEIGHT;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const onSubmit = () => {
    window.alert('Thank you for reaching out! We will connect with you soon.');
  };

  const onReset = () => {
    reset();
  };

  return (
    <div className="App">
      <header className="site-header">
        <div className="site-header__inner">
          <div className="brand">
            <img src="/assets/logo.svg" alt="fourtitude" />
          </div>
          <button
            className="site-header__menu-toggle"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <nav className={`site-nav ${menuOpen ? 'site-nav--open' : ''}`}>
            <a
              href="#dev"
              className={`site-nav__link ${activeSection === 'dev' ? 'site-nav__link--active' : ''}`}
              onClick={(e) => handleNavClick(e, 'dev')}
            >
              Development & Integration
            </a>
            <a
              href="#ux"
              className={`site-nav__link ${activeSection === 'ux' ? 'site-nav__link--active' : ''}`}
              onClick={(e) => handleNavClick(e, 'ux')}
            >
              UI & UX Design
            </a>
            <a
              href="#connect"
              className={`site-nav__link ${activeSection === 'connect' ? 'site-nav__link--active' : ''}`}
              onClick={(e) => handleNavClick(e, 'connect')}
            >
              Connect
            </a>
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

      <section className="section section--ux" id="ux">
        <div className="section__inner">
          <div className="section__header">
            <h2 className="section__title">UI & UX Design</h2>
            <p className="section__subtitle">
              We bring value to your business by producing seamless, multi-platform digital experiences that result in strong,
              <br />
              meaningful user engagements. Read more about our services below.
            </p>
          </div>

          <div className="card-grid card-grid--three">
            {uxCards.map((c, i) => (
              <Card key={i} {...c} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--connect" id="connect">
        <div className="section__inner">
          <div className="section__header">
            <h1 className="section__title">Connect</h1>
            <p className="section__subtitle">
              Every successful connection starts in conversation. Drop us a line today :)
            </p>
          </div>

          <form className="connect-form" onSubmit={handleSubmit(onSubmit)} onReset={onReset}>
            <div className="connect-form__fields">
              <FloatingField
                id="name"
                name="name"
                label="Name"
                register={register}
                error={errors.name}
              />
              <FloatingField
                id="email"
                name="email"
                type="email"
                label="Email address"
                register={register}
                error={errors.email}
              />
              <FloatingField
                id="contact"
                name="contact"
                type="tel"
                label="Contact no."
                register={register}
                error={errors.contact}
              />
              <FloatingField
                id="message"
                name="message"
                label="How can we help?"
                register={register}
                error={errors.message}
                isTextarea
              />
            </div>

            <div className="connect-form__buttons">
              <button type="reset" className="connect-form__btn connect-form__btn--clear">Clear</button>
              <button
                type="submit"
                className="connect-form__btn connect-form__btn--submit"
                disabled={!isValid}
              >
                Connect with us
              </button>
            </div>
          </form>
        </div>
      </section>

      <footer className="site-footer">
        <div className="site-footer__inner">
          <p className="site-footer__text">&copy; 2021 fourtitude.asia. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;