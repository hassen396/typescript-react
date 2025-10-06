import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import categories from "../categories";

const schema = z.object({
  description: z
    .string()
    .min(2, { error: "Description must be at least 2 charachters long!" })
    .max(50, { error: "Description can't be more than 50 chars!" })
    .nonoptional({ error: "Descrioption is required" }),
  amount: z.number({ error: "Enter a number!" }).min(0.01, { error: "amout can't be empty" }).max(100_000),
  category: z.enum(categories, { error: "Please choose one of them!" }),
});

type ExpenseFormData = z.infer<typeof schema>;
interface Props {
  categories: string[];
  onSave: (ex: ExpenseFormData) => void;
}
const ExpenseForm = ({ categories, onSave }: Props) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<ExpenseFormData>({ resolver: zodResolver(schema) });
  const [expense, setExpense] = useState({
    description: "",
    amount: 0,
    category: "",
  });
  return (
    <form
      className=" sm:mx-auto mx-12 mt-5"
      onSubmit={handleSubmit((data) => {
        onSave(data);
        reset();
      })}>
      <div className="flex flex-col md:justify-evenly gap-6 md:flex-row ">
        <div className="min-w-50 mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="description">
            Description
          </label>
          <input
            {...register("description")}
            onChange={(event) => setExpense({ ...expense, description: event.target.value })}
            id="description"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            type="text"
          />
          {errors.description && <p className="text-red-500">{errors.description.message}</p>}
        </div>
        <div className="min-w-50 mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="amount">
            Amount
          </label>
          <input
            {...register("amount", { valueAsNumber: true })}
            onChange={(event) => setExpense({ ...expense, amount: parseInt(event.target.value) })}
            id="amount"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            type="text"
          />
          {errors.amount && <p className="text-red-500">{errors.amount.message}</p>}
        </div>
        <div className="min-w-50 mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="category">
            Category
          </label>
          <select
            {...register("category")}
            onChange={(event) => setExpense({ ...expense, category: event.target.value })}
            id="category"
            className="min-w-50 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option value="">Select one</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
          {errors.category && <p className="text-red-500">{errors.category.message}</p>}
        </div>
      </div>
      <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Submit
      </button>
    </form>
  );
};

export default ExpenseForm;
