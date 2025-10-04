import { useForm, type FieldValues } from "react-hook-form";

interface formData {
  name: string;
  age: number;
}
const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formData>();

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="m-2">
          Name
        </label>
        <input
          {...register("name", { minLength: 3, required: true })}
          id="name"
          type="text"
          className=""
        />
        {errors.name?.type === "required" && (
          <p className="text-destructive">Name is required</p>
        )}
        {errors.name?.type === "minLength" && (
          <p className="text-destructive">
            Name must be at least 3 charachters
          </p>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="age" className="m-3">
          Age
        </label>
        <input
          {...register("age", { required: true, min: 18, max: 100 })}
          id="age"
          type="number"
          className=""
        />
        {errors.age?.type === "required" && (
          <p className="text-destructive">age is required</p>
        )}
        {errors.age?.type === "min" && (
          <p className="text-destructive">Age must be at least 18</p>
        )}
      </div>

      <button className="bg-amber-200 px-2 rounded-xl block" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
