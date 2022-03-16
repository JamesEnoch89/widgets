import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Convert = ({ language, text }) => {
  const [translated, setTranslated] = useState('');
  const [debouncedText, setDebouncedText] = useState(text);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedText(text);
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [text]);

  useEffect(() => {
    const translate = async () => {
      const { data } = await axios.get(
        'https://translation.googleapis.com/language/translate/v2',
        {
          params: {
            key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM',
            q: debouncedText,
            source: 'en',
            target: language.value,
            format: 'text',
          },
        }
      );

      setTranslated(data.data.translations[0].translatedText);
    };

    translate();
  }, [language, debouncedText]);

  return (
    <div>
      <h1 className="ui header">{translated}</h1>
    </div>
  );
};

export default Convert;
