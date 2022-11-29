import { FC } from "react";
import { IAlerta } from "../interfaces";
export const Alerta: FC<IAlerta> = ({ msg, error }): JSX.Element => {
  return (
    <div
      className={`${
        error ? "from-red-400 to-red-600" : "from-sky-400 to-sky-600"
      } bg-gradient-to-br text-center p-3 rounded-md uppercase text-white font-bold text-sm my-10`}
    >
      {msg}
    </div>
  );
};
