const Section = ({ id, title, subtitle, className = '', children }) => {
  return (
    <section className={`section ${className}`} id={id}>
      <div className="section__inner">
        <div className="section__header">
          <h2 className="section__title">{title}</h2>
          <p className="section__subtitle">{subtitle}</p>
        </div>
        {children}
      </div>
    </section>
  );
}

export default Section;
