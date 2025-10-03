import type { ReactNode } from "react";

interface props {
    children: ReactNode;
    onClose:()=> void;
}

const Alert = ({children, onClose}: props) => {
    return ( 
    // <div>{children}</div> 
        <div className="flex items-center justify-between p-4 mb-4 text-yellow-800 bg-yellow-100 border border-yellow-200 rounded-lg w-58"  role="alert">
  <span>{children}</span>
  <button onClick={onClose} type="button" className="ml-4 text-yellow-500 hover:text-yellow-700" aria-label="Close">
    &times;
  </button>
</div>

    );
}
 
export default Alert;