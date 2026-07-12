import './App.scss';




function App() {
  return (
    <div className="App">
      <header className="site-header">
        <div className="site-header__inner">
          <div className="brand">
            {/* <span className="brand__mark">&#10022;</span>
            <span className="brand__name">fourtitude<span className="brand__tld">.asia</span></span> */}
            <img src="/assets/logo.svg" alt="fourtitude" />
          </div>
          <nav className="site-nav">
            <a href="#dev" className="site-nav__link site-nav__link--active">Development &amp; Integration</a>
            <a href="#ux" className="site-nav__link">UI &amp; UX Design</a>
            <a href="#connect" className="site-nav__link">Connect</a>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default App;