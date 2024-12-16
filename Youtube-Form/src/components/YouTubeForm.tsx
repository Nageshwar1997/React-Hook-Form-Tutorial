// import { useForm } from "react-hook-form";

// import { DevTool } from "@hookform/devtools";

// type FormValues = {
//   username: string;
//   email: string;
//   channel: string;
// };

// // let renderCount = 0;

// const YouTubeForm = () => {
//   const { register, control, handleSubmit } = useForm<FormValues>();

//   //   console.log("form", form);
//   //   console.log("register", register);

//   //   console.log("control", control);

//   const onSubmit = (data: FormValues) => {
//     console.log("Form Submitted", data);
//   };
//   //   renderCount++;

//   return (
//     <>
//       {/* <h1>Form ({renderCount / 2})</h1> */}

//       <form onSubmit={handleSubmit(onSubmit)}>
//         <label htmlFor="username">Username</label>
//         <input type="text" id="username" {...register("username")} />

//         <label htmlFor="email">E-mail</label>
//         <input type="email" id="email" {...register("email")} />

//         <label htmlFor="channel">Channel</label>
//         <input type="text" id="channel" {...register("channel")} />

//         <button>Submit</button>
//       </form>
//       <DevTool control={control} />
//     </>
//   );
// };

// export default YouTubeForm;

import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
const YouTubeForm = () => {
  const { register, control, handleSubmit } = useForm({
    mode: "onChange",
  });

  return (
    <>
      <form onSubmit={handleSubmit((d) => console.log(d))}>
        <h1>React Hook Form DevTools</h1>

        <label>Test</label>
        <input {...register("test")} />

        <input type="submit" />
      </form>
      <DevTool control={control} /> {/* set up the dev tool */}
    </>
  );
};

export default YouTubeForm;
