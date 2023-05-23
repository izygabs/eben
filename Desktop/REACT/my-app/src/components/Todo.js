import React from "react";
import { useState } from "react";
import "./Todo.css";

function Todo() {
  const [todo, setTodo] = useState([]);
  const [item, setItem] = useState("");

  const addList = (list) => {
    if (!item) {
      alert("Enter an item");
      return;
    }
    const newList = {
      id: Math.random(),
      list: list,
    };

    setTodo([...todo, newList]);
    setItem("");
    console.log(todo);
  };

  const deleteList = (id) => {
    const newTodo = todo.filter((list) => list.id !== id);

    setTodo(newTodo);
  };

  return (
    <div className="todo">
      <div className="todowrapper">
        <h1>To do List</h1>
        <form className="forme">
          <input
            type="text"
            placeholder="Enter to do..."
            value={item}
            onChange={(e) => setItem(e.target.value)}
          ></input>
          <button
            onClick={(e) => {
              e.preventDefault();
              addList(item);
            }}
          >
            Add item
          </button>
        </form>
        <ul className="list">
          {todo.map((list) => (
            <li key={list.id}>
              {list.list}
              <button className="Btn" onClick={() => deleteList(list.id)}>
                Del
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
// function Todo() {
//   const [item, setItem] = useState("");
//   const [todo, setTodo] = useState([]);

//   // function change(e) {

//   function addItem() {
//     const list = {
//       id: Math.floor(Math.random() * 1000),
//       value: item,
//     };
//     setItem((oldList) => [...oldList, list]);
//     setTodo("");
//   }

//   return (
//     <div className="todo">
//       <div className="todowrapper">
//         <h1>To do List</h1>
//         <form>
//           <input
//             type="text"
//             name="item"
//             value={item}
//             onChange={(e) => setItem(e.target.value)}
//             placeholder="enter to do..."
//           ></input>
//           <button onClick={() => addItem}>Add Item</button>
//         </form>
//         <form>
//           <ul>
//             {todo.map((list) => {
//               return (
//                 <li key={list.id}>
//                   {list.value}
//                   <button>Del</button>
//                 </li>
//               );
//             })}
//           </ul>
//         </form>
//       </div>
//     </div>
//   );
// }
export default Todo;
