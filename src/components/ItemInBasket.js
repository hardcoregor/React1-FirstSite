function ItemIn(props) {
  return(
    <div className="page__item">
    <img className="page__item__photo" src={props.imageUrl} alt="shoes" />
    <div className="page__item__content">
      <h4 className="page__item__title">{props.title}</h4>
      <p className="page__item__price">{props.price} грн.</p>
    </div>
    <button className="card__button card__button--close">
      <img className="card__button--size" src="/img/close.svg" alt="close" />
    </button>
  </div>
  );
}

export default ItemIn;