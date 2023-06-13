import React, {useState} from 'react';
import './index.scss';
import addTask from '../../assets/add-task.png';
import editarTask from '../../assets/editar-task.png';
import excluirTask from '../../assets/excluir-task.png';



function List () {
  const [newItem, setnewItem] = useState("");
  const [items, setItems] = useState([]);

  function addItem() {

    if(!newItem) {
      alert("Adicione uma atividade!!");
      return;
    }

    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem
    };

    setItems(oldList => [...oldList, item]);
    setnewItem("");
  }

  function deleteItem(id) {
    const newArray = items.filter(item => item.id !== id);
    setItems(newArray)
    
    if (idItemEditado === id) {
      setIdItemEditado(null);
    }
  }

  return (
    <div className='lista'>
      <h1>Otimize seu tempo e se organize com o nosso Planejador Diário</h1>
      
      <div className="itens-da-lista">
        <h3>Tarefa</h3>
        <h3>Status</h3>
        <h3>Opções</h3>
      </div>

        <div className="add-task">
          <input 
            type="text" 
            placeholder='Nova tarefa...' 
            name='atividade'
            value={newItem}
            onChange={e => setnewItem(e.target.value)}
            />
          <img 
            className="add-task" 
            src={addTask} 
            alt="simbolo de mais" 
            onClick={() => addItem()}
            />
        </div>

      <div className="lista-itens">
        <ul>
            {items.map(item => {
              return(
                <div className="itens-lista">
                  <div className="item-lista">
                    <li key={item.id}>{item.value}</li>
                  </div>
                  <input type="checkbox" name="" id="check-task" />
                  <div className="editar-excluir-tasks">
                    <img src={editarTask} alt="" id='editar-task'/>
                      <img src={excluirTask} alt="" id='excluir-task' onClick={() => deleteItem(item.id)}/>
                  </div>
                </div>
              )
            })}
          </ul>
    </div>
  </div>
  )
}

export default List;