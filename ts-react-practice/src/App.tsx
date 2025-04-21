//* React
import { useState } from "react";
import "./App.css";

//* Components
import AppHeader from "./components/AppHeader/AppHeader";
import UserCard from "./components/UserCard/UserCard";
import LoginForm from "./components/LoginForm/LoginForm";

function App() {
  return (
    <>
      <AppHeader title="Practice Typescript & React" color="black" />

      <UserCard name="Alex Kostiuchenko" age={14} isActive={true} />

      <LoginForm />
    </>
  );
}

export default App;
