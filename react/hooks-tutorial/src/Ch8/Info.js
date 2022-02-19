import React, { useState, useEffect, useReducer } from 'react';
import useInputs from './useInputs';

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

const Info = () => {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');

  const [state, dispatch] = useReducer(reducer, {
    _name: '',
    _nickname: '',
  });

  const { _name, _nickname } = state;
  const onChange = (e) => {
    dispatch(e.target);
  }

  // useEffect(() => {
  //   console.log("Rendering is done (Mount, Update)");
  //   console.log({
  //     name,
  //     nickname
  //   });
  // });
  //
  // useEffect(() => {
  //   console.log("Rendering is done (Mount)");
  // }, []);
  //
  // useEffect(() => {
  //   console.log("Rendering is done (Mount, Update - Conditionally)");
  //   console.log(name);
  // }, [name]);

  useEffect(() => {
    console.log('effect');
    if(name) console.log(name);
    if(_name) console.log(_name);

    return () => {
      console.log('cleanup');
      if(name) console.log(name);
      if(_name) console.log(_name);
    }
  }, [name, _name]);

  useEffect(() => {
    console.log('effect');
    return () => {
      console.log('unmount');
    }
  }, []);

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };

  return (
    <div>
      <div>
        <h3>useState</h3>
        <div>
          <input value={name} onChange={onChangeName} />
          <input value={nickname} onChange={onChangeNickname} />
        </div>
        <div>
          <div>
            <b>Name:</b> {name}
          </div>
          <div>
            <b>Nickname:</b> {nickname}
          </div>
        </div>
      </div>
      <div>
        <h3>useReducer</h3>
        <div>
          <input name="_name" value={_name} onChange={onChange} />
          <input name="_nickname" value={_nickname} onChange={onChange} />
        </div>
        <div>
          <div>
            <b>Name:</b> {_name}
          </div>
          <div>
            <b>Nickname:</b> {_nickname}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
