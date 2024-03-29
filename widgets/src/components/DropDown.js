import React, { useEffect, useRef, useState } from 'react'

const Dropdown = ({label, options, selected, onSelectedChange}) =>{
    const [open, setOpen] = useState(false);
    const ref = useRef();

    useEffect(()=> {
        const onBodyClick = (event)=>{
            if(ref.current && ref.current.contains(event.target)){
                return;
            }
            setOpen(false);
        }

        document.body.addEventListener('click', onBodyClick);

        return () =>{ //Cleanup function 
            document.body.removeEventListener('click', onBodyClick);
        }
    }, []) // [] to work only once in init




    const renderedOptions = options.map((option) =>{
        if(option.value === selected.value){ //for not showing the selceted item
            return null;
        }
        
        return(
            <div key={option.value} className="item"
                onClick={() => onSelectedChange(option)}
            >
                {option.label}
            </div>
            )    
        });
         
    return (
            <div ref={ref} className="ui form">
                <div className="field">
                    <label className="label">{label}</label>                             
                    <div onClick={()=>setOpen(!open)} className={`ui selection dropdown ${open ? 'visible active' : ''}`}>
                        <i className="dropdown icon"></i>
                        <div className="text">{selected.label}</div>
                        <div onClick={()=>setOpen(!open)}  className={`menu ${open ? 'visible transition' : ''}`}>
                            {renderedOptions}
                        </div>
                    </div>
                </div>
            </div>
        )
}

export default Dropdown;