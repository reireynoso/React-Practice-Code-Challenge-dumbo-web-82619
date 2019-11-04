import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  // console.log("p:", props)
  return (
    <Fragment>
      <div className="belt">
        {
          props.sushi.map((sushi) => {
           
            return <Sushi eatSushi={props.eatSushi} sushi={ sushi } eatenSushi={props.eatenSushi}/>
          }).slice(props.start,props.end)
        }
        <MoreButton handleClicked={ props.handleClicked }/>
      </div>
    </Fragment>
  )
}

export default SushiContainer