import React from "react";
import { LoginForm } from "./components/LoginForm";

export function Login() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
      <div className="homeContainer">
        <LoginForm
          handleClose={handleClose}
          handleOpen={handleOpen}
          open={open}
          userType="user"
        />
        <LoginForm
          handleClose={handleClose}
          handleOpen={handleOpen}
          open={open}
          userType="company"
        />
      </div>
  );
}