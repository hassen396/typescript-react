import { useState, type FormEvent } from "react";

const Form = () => {
  
  const [person, setPerson] = useState({
    name: "",
    age: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(person);
  };
  return (
    <form onSubmit={handleSubmit} onReset={() => console.log("resseted")}>
      <div className="mb-3">
        <label htmlFor="name" className="">
          Name
        </label>
        <input
          value={person.name}
          onChange={(event) =>
            setPerson({ ...person, name: event.target.value })
          }
          id="name"
          type="text"
          className=""
        />
      </div>

      <div className="mb-3">
        <label htmlFor="age" className="">
          Age
        </label>
        <input
          value={person.age}
          onChange={(event) =>
            setPerson({ ...person, age: event.target.value })
          }
          id="age"
          type="number"
          className=""
        />
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
