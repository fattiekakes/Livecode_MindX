import React from 'react'
import { Top20Container, Top20Label, Top20List, Top20Wrap } from './Top20Elements'

function Top20Section(props) {
    console.log(props.totalCountries,props.arrData.length )
    return (
        <>
         <Top20Container>
             <Top20Wrap>
                 <Top20Label>Top 20</Top20Label>
             {props.totalCountries === props.arrData.length ?<Top20List>

             </Top20List>:<Top20Label>Loading...</Top20Label>}
             </Top20Wrap>
         </Top20Container>
        
        </>
    )
}

export default Top20Section
