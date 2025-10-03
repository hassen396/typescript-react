interface props {
  children: string;
  color?: "destructive" | "primary";
  onClick: ()=> void;
}

const Button = ({ children, color="primary", onClick }: props) => {
  return (
    <button
    onClick={onClick}
      className={
        ` bg- text-white font-bold py-2 px-4 rounded bg-` + color
      }>
      {children}
    </button>
  );
};

export default Button;
