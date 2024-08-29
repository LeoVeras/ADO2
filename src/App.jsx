import { useState } from 'react';
import './App.css';
import { ToDoItem } from './Components/Item/ToDoItem';

function App() {
  const [type, setType] = useState('');
  const [notes, setNotes] = useState([]);

  const addNote = () => {
    if (type.length > 0) {
      setNotes([...notes, type]);
      setType('');
    } else {
      alert('Valor invalido');
    }
  };

  return (
    <>
      <section className="container">
        <div className="inputContainer">
          <label htmlFor="typeNote">Digitar Tarefa</label>
          <input
            id="typeNote"
            type="text"
            placeholder="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
          <button onClick={addNote}>Adicionar Tarefa</button>
        </div>
        <div className="listContainer">
          <nav>
            {notes && notes.length > 0 ? (
              notes.map((item, index) => {
                return <ToDoItem value={item} key={`itemToDo${index}`} />;
              })
            ) : (
              <p>Lista Vazia</p>
            )}
          </nav>
        </div>
      </section>
    </>
  );
}

export default App;
