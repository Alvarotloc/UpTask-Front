import { FC } from "react";
import { Outlet } from "react-router-dom";

export const AuthLayout: FC = (): JSX.Element => {
  return (
    <main className="container mx-auto p-5 md:flex md:justify-center">
      <div className="md:w-2/3 lg:w-2/5">
        <Outlet />
      </div>
    </main>
  );
};
