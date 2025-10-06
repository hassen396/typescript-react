import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z
    .string()
    .min(2, { error: "Name must be at least 2 charachters long!" }),
  age: z
    .number({ error: "Age filed is required" })
    .min(12, { message: "Age can't be least than 12" }),
});
type FormData = z.infer<typeof schema>;
// interface formData {
//   name: string;
//   age: number;
// }
const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label
          htmlFor="name"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Name
        </label>
        <input
          placeholder="write your name"
          {...register("name")}
          id="name"
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        {errors.name && (
          <p className="text-destructive">{errors.name.message}</p>
        )}
      </div>

      <div className="mb-3">
        <label
          htmlFor="age"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Age
        </label>
        <input
          min={1}
          max={100}
          {...register("age", { valueAsNumber: true })}
          id="age"
          type="number"
          className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        {errors.age && <p className="text-destructive">{errors.age.message}</p>}
      </div>

      <button
        disabled={!isValid}
        className="bg-amber-200 px-2 rounded-xl block"
        type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
