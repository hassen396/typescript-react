import {useState} from 'react'

interface props {
  items: string[];
  heading: string;
  onSelectItem: (item: string)=> void;
}
export default function ListGroup({ items, heading, onSelectItem }: props) {
    const [currentindex, setCurrentIndex] = useState(-1);
  return (
    <div className='w-25 rounded-xl mt-5 flex flex-col items-center bg-amber-600'>
      <h1>{heading}</h1>
      <ul className="list-none">
        {items.map((item, index) => (
          <li key={item} className={currentindex === index? "bg-amber-300":""} onClick={()=>handleClick(index, item)}>{item}</li>
        ))}
      </ul>
    </div>
  );
  function handleClick(index: number, item: string ){
        setCurrentIndex(index);
        onSelectItem(item)
  }
}
