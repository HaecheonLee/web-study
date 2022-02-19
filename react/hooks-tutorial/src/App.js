import { useState } from 'react';
import Counter from './Ch8/Counter';
import Info from './Ch8/Info';
import Average from './Ch8/Average';

function App() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Counter />
      <br/>
      <div>
        <button onClick={() => { setVisible(!visible) }}>{ visible ? 'hide' : 'show' }</button>
        <hr/>
        { visible && <Info /> }
      </div>
      <br/>
      <Average />
    </>
  );
}

export default App;
