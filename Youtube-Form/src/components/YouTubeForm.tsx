import { useForm } from "react-hook-form";

type FormValues = {
  username: string;
  email: string;
  channel: string;
};

let renderCount = 0;

const YouTubeForm = () => {
  const form = useForm<FormValues>({
    // defaultValues: {
    //   username: "Batman",
    //   email: "",
    //   channel: "",
    // },

    defaultValues: async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1"
      );

      const data = await response.json();

      return {
        username: data.username,
        email: data.email,
        channel: data.website,
      };
    },
  });

  const { register, control, handleSubmit, formState } = form;

  const { errors } = formState;

  //   console.log("form", form);
  //   console.log("register", register);

  //   console.log("control", control);

  const onSubmit = (data: FormValues) => {
    console.log("Form Submitted", data);

    //   console.log("DevTool", DevTo);
  };
  renderCount++;

  return (
    <div>
      <h1>Form ({renderCount / 2})</h1>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          {...register("username", { required: "Username is required" })}
        />

        <label htmlFor="email">E-mail</label>
        <input type="email" id="email" {...register("email")} />

        <label htmlFor="channel">Channel</label>
        <input type="text" id="channel" {...register("channel")} />

        <button>Submit</button>
      </form>
    </div>
  );
};

export default YouTubeForm;
