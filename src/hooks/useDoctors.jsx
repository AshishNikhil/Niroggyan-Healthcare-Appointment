import { useContext } from "react";
import DoctorsContext from "../context/DoctorsContext";

const useDoctors = () => useContext(DoctorsContext);

export default useDoctors;