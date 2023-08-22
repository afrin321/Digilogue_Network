import { createContext, useState } from "react";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [userInfo, setUserInfo] = useState({});

  return (
    <UserContext.Provider value={{setUserInfo, userInfo}}>
      {children}
    </UserContext.Provider>
  );
}
