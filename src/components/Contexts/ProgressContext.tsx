import { createContext } from "react";

interface ProgressContextProps {
  children: React.ReactNode;
}
interface ProgressContextType {
  lasttime: string;
  status: string;
}
const progressDefault = {
  lasttime: "17/4/2025",
  status: "In progress",
};

export const ProgressContext =
  createContext<ProgressContextType>(progressDefault);

export const ProgressContextProvider = ({ children }: ProgressContextProps) => {
  return (
    <ProgressContext.Provider value={progressDefault}>
      {children}
    </ProgressContext.Provider>
  );
};
