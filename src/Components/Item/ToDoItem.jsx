import style from './ToDoItem.module.css';

export function ToDoItem({ value, complet }) {
  const style = complet ? { color: 'black' } : { color: 'green' };
  return <li className={style.item}>{value}</li>;
}
