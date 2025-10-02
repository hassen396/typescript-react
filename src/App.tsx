import ListGroup from './Components/ListGroup';

function App() {
const items = [
  'one',
  'two',
  'three',
  'four'    
];
  return (
    <>
      <ListGroup items={items} heading='Numbers' onSelectItem={handleSelectItem} />
    </>
  )
  function handleSelectItem(item: string){
    console.log(item)
  }
}

export default App
