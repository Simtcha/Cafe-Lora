import { OrderItm } from '../OrderItm/OrderItm';

export const OrderComp = ( {items} ) => {
    return (
 
        <div className="order">
      
        {items.length === 0 ? ( <p>Zatím nemáte nic objednáno</p>
                ) : (
                  <div className="order-items">
                    {items.map((item) => (
                      <OrderItm key={item.id} name={item.name} image={item.image} />
                    ))}
                  </div>
                )}
              </div>
        )
    }


   