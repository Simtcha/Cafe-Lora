import { Layer } from '../Layer/Layer'
import './Drink.css'
  

export const Drink = ( drinks ) => {
    const {id, name, ordered, image, layers} = drinks

    const infobutton = ordered ? "Zrušit objednávku" : "Objednat"
    const trida = ordered ? "order-btn--ordered" : "order-btn"
    
   
return (
  <div className="drink">

    <div className="drink__product">
      <div className="drink__cup">
        <img src={`http://localhost:4000${image}`} alt={name} />
      </div>
      <div className="drink__info">
        <h3>{name}</h3>

        {layers.map((layer, index) => (
            <Layer key={index} color={layer.color} label={layer.label} />
          ))}
        
      </div>
    </div>

    <form className="drink__controls" data-id={id}>
      <input type="hidden" className="order-id" value={id}/>
      <button  className={trida}>{infobutton}</button>
    </form>

  </div>
    )
}



/*
<form className="drink__controls" data-id={id}>
<input type="hidden" className="order-id" value={id}/>
<button  className={`order-btn ${ordered ? "order-btn--ordered" : "order-btn"}`}>{ordered ? 'Zrušit objednávku' : 'Objednat'}</button>
</form>*/

