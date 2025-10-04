import { useRef, type FormEvent } from "react";

const Form = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const person = { name: "", age: 0 };
  console.log(person)

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (nameRef.current !== null && ageRef.current !== null) {
      
      person.name = nameRef.current.value;
      person.age = parseInt(ageRef.current.value);
      console.log(person.age, 'age')
    }
    console.log(person)
  };
  return (
    <form onSubmit={handleSubmit} onReset={() => console.log("resseted")}>
      <div className="mb-3">
        <label htmlFor="name" className="">
          Name
        </label>
        <input ref={nameRef} id="name" type="text" className="" />
      </div>

      <div className="mb-3">
        <label htmlFor="age" className="">
          Age
        </label>
        <input ref={ageRef} id="age" type="number" className="" />
      </div>
      <button className="bg-amber-200 px-2 rounded-xl block" type="submit">
        Submit
      </button>
      <button className="bg-amber-200 px-2 rounded-xl block" type="reset">
        Submit
      </button>
    </form>
  );
};

export default Form;
