
import { createContext, useState } from "react"
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({ name: "Jithin" });

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, logout }}>
   { children }
    </AuthContext.Provider>
  );
};
