import React from 'react'
import './ListItems.css';
import FlipMove from 'react-flip-move';
import { FontAwesomeIcon }  from '@fortawesome/react-fontawesome';


function ListItems(props) {
    const items=props.items;

    const listItems=items.map(item =>{
        return(
            <FlipMove key={item.key}>
            <div className="list" key={item.key}>
             <p>
                <input 
                type="text"
                id={item.key}
                value={item.text}
                onChange={
                    (e) => {
                        props.setUpdate(e.target.value,item.key);
                    }
                }

                />
             <span>
                <FontAwesomeIcon className='faicon'
                 icon='trash'
                onClick={ () => props.deleteItem(item.key)
                } 
                
                   />
             </span>
             </p>

            </div>

            </FlipMove>
            
        )
    })

    return(
        <div>
            {listItems}
        </div>
    )
}

export default ListItems