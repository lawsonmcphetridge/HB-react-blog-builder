import React, { useState } from 'react';

import Preview from '../Preview/Preview';
import Editor from '../Editor/Editor';

import './Home.css';

export default function Home() {
  
  const [title, setTitle] = useState('');
  const [subtitle, setSubTitle] = useState('');
  const [font, setFont] = useState('Roboto');
  const [align, setAlign] = useState('center');
  const [text, setText] = useState('');


  return (
    <main className='main'>
      <Preview title={title} subtitle={subtitle} text={text} font={font} align={align} />
      <Editor setTitle={setTitle} setSubTitle={setSubTitle} setText={setText} setFont={setFont} setAlign={setAlign}
        title={title} subtitle={subtitle} text={text} font={font} align={align} />
    </main>
  );
}
