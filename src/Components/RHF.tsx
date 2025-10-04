import { useForm, type FieldValues } from 'react-hook-form';

export default function RHF() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data: FieldValues) => console.log(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="First name" {...register("First name", {required: true, maxLength: 80})} />
      <input type="text" placeholder="Last name" {...register("Last name", {required: true, maxLength: 100})} />
      <input type="text" placeholder="Age" {...register} />
      <input type="number" placeholder="Price" {...register("Price", {required: true, max: 100, min: 1, maxLength: 3})} />

      <input type="submit" />
    </form>
  );
}