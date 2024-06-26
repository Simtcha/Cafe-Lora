import './Layer.css'

export const Layer = ( drinks ) => {
    const { color, label } = drinks
    return (
    <>
      <div className="layer">
        <div className="layer__color" style={{ backgroundColor: color}}></div>
        <div className="layer__label">{label}</div>
      </div>
    </> 
    )} 
