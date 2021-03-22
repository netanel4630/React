import React, { useState } from 'react'
import { act } from 'react-dom/test-utils';


//in line 15 - if we write onClick={onTitleClick(index)}, it call the function only one time when it go up
const Accordion =({items})=>{
    const [activeIndex, setActicIndex] = useState(null);

    const onTitleClick = (index) => {
        setActicIndex(index);
      };

    const renderedItems = items.map( (item, index)=>{
        const active = index === activeIndex ? 'active' : ''
        return(
            <React.Fragment key={item.title}>
                <div className={`title ${active}`}
                 onClick={()=>onTitleClick(index)}
                >
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>
                <div className={`content ${active}`}>
                    <p>{item.content}</p>
                </div>
            </React.Fragment>
        )
    })

    return (
        <div className="ui styled accordion">
            {renderedItems}
        </div>
    )
}

export default Accordion;
