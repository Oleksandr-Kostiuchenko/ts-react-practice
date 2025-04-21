//* React & TS
import style from "./LoginForm.module.css";
import { ChangeEvent, FormEvent, useState } from "react";
import { FormData } from "./LoginForm.types";

const LoginForm = () => {
  const [formValue, setFormValue] = useState<FormData>({
    email: "",
    password: "",
  });

  const onChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const input = event.target as HTMLInputElement;

    setFormValue((prev) => ({
      ...prev,
      [input.name]: input.value,
    }));
  };

  const onFormSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const emailInput = form.elements.namedItem("email") as HTMLInputElement;
    const passwordInput = form.elements.namedItem(
      "password"
    ) as HTMLInputElement;

    console.log(
      `Form submitted! Email: ${emailInput.value} | Password: ${passwordInput.value}`
    );
    console.log(formValue);

    setFormValue({
      email: "",
      password: "",
    });
    form.reset();
  };

  return (
    <form onSubmit={onFormSubmit} className={style.formWrapper}>
      <div>
        <input
          value={formValue.email}
          onChange={onChange}
          name="email"
          type="email"
          placeholder="Email"
          required
        />
        <input
          value={formValue.password}
          onChange={onChange}
          name="password"
          type="password"
          placeholder="Password"
          required
        />
      </div>

      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
