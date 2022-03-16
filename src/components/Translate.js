import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

const options = [
  {
    label: 'Arabic',
    value: 'ar',
  },
  {
    label: 'Afrikaans',
    value: 'af',
  },
  {
    label: 'Bosnian',
    value: 'bs',
  },
  {
    label: 'Bulgarian',
    value: 'bg',
  },
  {
    label: 'Chinese',
    value: 'zh-CN',
  },
  {
    label: 'Czech',
    value: 'cs',
  },
  {
    label: 'Danish',
    value: 'da',
  },
  {
    label: 'Dutch',
    value: 'nl',
  },
  {
    label: 'French',
    value: 'fr',
  },
  {
    label: 'German',
    value: 'de',
  },
  {
    label: 'Greek',
    value: 'el',
  },
  {
    label: 'Italian',
    value: 'it',
  },
  {
    label: 'Japanese',
    value: 'ja',
  },
  {
    label: 'Korean',
    value: 'ko',
  },
  {
    label: 'Portuguese',
    value: 'pt',
  },
  {
    label: 'Russian',
    value: 'ru',
  },
  {
    label: 'Spanish',
    value: 'es',
  },
  {
    label: 'Vietnamese',
    value: 'vi',
  },
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState('');

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Text to Translate</label>
          <input value={text} onChange={(e) => setText(e.target.value)} />
        </div>
      </div>
      <Dropdown
        label="Select a Language"
        selected={language}
        onSelectedChange={setLanguage}
        options={options}></Dropdown>
      <Convert language={language} text={text}></Convert>
    </div>
  );
};

export default Translate;
