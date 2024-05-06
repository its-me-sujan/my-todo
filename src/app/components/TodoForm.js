import { useForm } from "react-hook-form";

export default function TodoForm({onSubmit}) {
  const { register, handleSubmit, reset, formState } = useForm();

  const { errors } = formState;
  const handleFormSubmit = (data) => {
    onSubmit(data);
    reset();
  };
  return (
    <form
      className=" max-w-sm  mx-auto mb-3 p-4 border-2 shadow-lg rounded-lg"
      onSubmit={handleSubmit(handleFormSubmit)}
      noValidate
    >
      <input
        className="w-full h-12 border-2  rounded-lg px-2 mb-2"
        {...register("title", {
          required: {
            value: true,
            message: "Title is required",
          },
        })}
        placeholder="Title"
      />
      <p>{errors.title?.message}</p>
      <textarea
        className="w-full h-24 border-2 rounded-lg px-2 mb-2"
        {...register("description", {
          required: {
            value: true,
            message: "Description is required",
          },
        })}
        placeholder="Description"
      />
      <p>{errors.description?.message}</p>
      <div className="flex justify-center">
        <button
          className="w-24 h-8 rounded-lg bg-sky-500 text-white hover:bg-sky-700"
          type="submit"
        >
          Add Todo
        </button>
      </div>
    </form>
  );
}
