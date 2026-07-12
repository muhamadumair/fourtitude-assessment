const Card = ({ iconSrc, iconAlt, iconWidth, iconHeight, eyebrow, title, body }) => {
  return (
    <div className="card">
      <div className="card__icon">
        <img
          src={iconSrc}
          alt={iconAlt}
          style={{
            '--icon-width': iconWidth,
            '--icon-height': iconHeight,
          }}
        />
      </div>
      <div className="card__content">
        <p className="card__eyebrow">{eyebrow}</p>
        <h3 className="card__title">{title}</h3>
        {body && <p className="card__body">{body}</p>}
      </div>
    </div>
  );
}

export default Card;
