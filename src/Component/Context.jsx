import { createContext, useState } from "react";

// Create the context
export const ToggleContext = createContext();

// Create the provider component
export const UseToggleProvider = ({ children }) => {
  const [toggleView, setToggleView] = useState(false);

  return (
    <ToggleContext.Provider value={{ toggleView, setToggleView }}>
      {children} {/* Ensures children components are rendered */}
    </ToggleContext.Provider>
  );
};
