import { createContext, useReducer } from "react";

export const TitleColorContext = createContext();

//provider

export const titleColorReducer = (state, action) => {
  //switch
};

export const TitleColorContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(titleColorReducer, { color: "green" });

console.log('Title Color context: ', state)

  return <TitleColorContext.Provider value={{...state}}>{children}</TitleColorContext.Provider>;
};
