import React, {useState} from 'react';

const Input = (props) => {
  const {list, setList} = props;

  const [input, setInput] = useState("");

  const onChange = e => {
    setInput(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();

    let task = {
      name: input,
      isComplete: false,
    };

    setList([...list, task]);
    e.target.value = "";
  }

  return (
    <form onSubmit={onSubmit}>
      <input onChange={onChange} type="text" name="task" value={input} />
      <button>Add Task</button>
    </form>
  );
}

export default Input;
