import React, { useState } from 'react';

const EventPracticeFunction = () => {
  const [form, setForm] = useState({
    username: '',
    message: '',
  });
  const { username, message } = form;

  const onChange = (e) => {
    const nxtForm = {
      ...form,
      [e.target.name]: e.target.value
    };
    setForm(nxtForm);
  };
  const onClick = () => {
    alert(`${username}: ${message}`);
    setForm({
      username: '',
      message: '',
    });
  }
  const onKeyPress = (e) => {
    if(e.key === 'Enter') {
      onClick();
    }
  }

  return (
    <div>
      <h1>Event Practice with function</h1>
      <input
        type="text"
        name="username"
        placeholder="Enter username"
        value={username}
        onChange={onChange}
      />
      <input
        type="text"
        name="message"
        placeholder="Enter message"
        value={message}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <button onClick={onClick}>Check</button>
    </div>
  );
}

export default EventPracticeFunction;
