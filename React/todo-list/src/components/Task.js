import React from 'react';

const Task = (props) => {
  const {task, index, list, setList} = props;

  const onClick = () => {
    const newList = () => list.filter((task) => list.indexOf(task) !== index);

    setList(newList);
  };

  const onChange = e => {
    list[index].isComplete = !list[index].isComplete;
    setList([...list]);
  }

  return (
    <div>
      <h4>{task.name}</h4>
      <div>
        <label
          style={{ textDecorationLine: task.isComplete ? "line-through" : 'none' }}
          htmlFor="checkbox"
        >
          Completed?
        </label>
        <input
          onChange={onChange}
          type="checkbox"
          name=""
          checked={task.isComplete}
        ></input>
        <button onClick={onClick}> X </button>
      </div>
    </div>
  );
}

export default Task;
