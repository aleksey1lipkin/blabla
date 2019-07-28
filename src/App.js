import React from 'react';

import Report from './components/Report';


function App() {
  return (
    <div className="App">
      <p style={{marginBottom: 40}}>Отчёт</p>
      <Report
        fullName='Джордж Клуни Сергеевич'
        specialty='Стоматолог'
        resultId='123456'
        date='12.01.1992'
        total='40'
        correct='30'
        wrong='5'
        missed='5'
      />
    </div>
  );
}

export default App;