import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';
// import axios from 'axios';

const items = [
  {
    title: 'What is React?',
    content: 'React is a front end javascript framework',
  },
  {
    title: 'What use React?',
    content: 'React is a popular favorite among engineers',
  },
  {
    title: 'How do you use React?',
    content: 'You use React by creating components',
  },
];

const options = [
  {
    label: 'The Color Red',
    value: 'red',
  },
  {
    label: 'The Color Blue',
    value: 'blue',
  },
  {
    label: 'The Color Green',
    value: 'green',
  },
];

const App = () => {
  return (
    <div>
      <Header></Header>
      <Route path={'/'}>
        <Accordion items={items}></Accordion>
      </Route>
      <Route path={'/list'}>
        <Search></Search>
      </Route>
      <Route path={'/translate'}>
        <Translate></Translate>
      </Route>
    </div>
  );
};

export default App;
