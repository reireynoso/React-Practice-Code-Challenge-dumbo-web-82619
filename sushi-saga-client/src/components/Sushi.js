import React, { Fragment } from 'react'

const Sushi = (props) => {
  


 const handleClick = () => {
   props.eatSushi(props.sushi)
 }

  return (
    <div className="sushi">
      <div className="plate" key={props.id}
           >
        { 
          /* Tell me if this sushi has been eaten! */ 
          props.eatenSushi.includes(props.sushi) ?
            null
          :
            <img src={props.sushi["img_url"]} width="100%" alt="" onClick={handleClick} />
        }
      </div>
      <h4 className="sushi-details">
        { props.sushi.name } - ${ props.sushi.price }
      </h4>
    </div>
  )
}

export default Sushi