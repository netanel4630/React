import React, { useState } from 'react';
// import Accordion from './components/Accordion';
//import Serach from './components/Search'
import DropDown from './components/DropDown'
import Translate from './components/Translate'

const items =[
    {
        title:'What is React?',
        content:'React is a front end JS framework'
    },
    {
        title:'Why use React?',
        content:'React is a favorite JS library among engineers'
    },
    {
        title:'How do you use React?',
        content:'You use React by creating components'
    },
]

const options = [
  {
    label: 'The Color Red',
    value: 'red',
  },
  {
    label: 'The Color Green',
    value: 'green',
  },
  {
    label: 'A Shade of Blue',
    value: 'blue',
  },
];

export default () => {
    const [selected, setSelected] = useState(options[0]);
  
    return (
      <div>
        {/* <Accordion items={items} /> */}
        {/*<Serach />*/}
        {/* <DropDown/> */}
        <Translate />
      </div>
    );
  };