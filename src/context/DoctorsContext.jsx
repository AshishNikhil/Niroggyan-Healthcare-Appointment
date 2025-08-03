import { createContext } from "react";
import doctors from "../data/doctorsData";

const DoctorsContext = createContext();

export const DoctorsProvider = ({ children }) => {
  return (
    <DoctorsContext.Provider value={{ doctors }}>
      {children}
    </DoctorsContext.Provider>
  );
};

export default DoctorsContext;