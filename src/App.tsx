import { useState } from "react";
import Alert from "./Components/Alert";
import Button from "./Components/Button";

function App() {
  const [isHidden, setIsHidden] = useState(true);
  return (
    <div className="flex flex-col items-center mt-5">
        {!isHidden && <Alert onClose={handleAlert}> Hiii </Alert>}
      <Button
        onClick={() => {
          if(isHidden)
          handleAlert();
        }}>
        click me
      </Button>
    </div>
  );
  function handleAlert() {
    setIsHidden(!isHidden);
  }
}

export default App;
