import { SubmitHandler, useForm } from "react-hook-form";
import "./App.css";

interface MyForm {
  nameState: string;
  numberState: number;
  passwordState: string;
}

function App() {
  const { register, handleSubmit } = useForm<MyForm>({
    defaultValues: {
      numberState: 18,
    },
  });

  const submit: SubmitHandler<MyForm> = (data) => {
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(submit)}>
        <input type="text" {...register("nameState")} />
        <input type="text" />
        <input type="number" {...register("numberState")} />
        <input type="password" {...register("passwordState")} />
        <button type="submit">submit</button>
      </form>
    </>
  );
}

export default App;
