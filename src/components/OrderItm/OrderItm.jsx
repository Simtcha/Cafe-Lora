export const OrderItm = ( {name, image} ) => {
    return (
        <div className="order-item">
        <img src={`http://localhost:4000${image}`} alt={name} className="order-item__image" />
        <div className="order-item__name">{name}</div>
      </div>
    )
}

