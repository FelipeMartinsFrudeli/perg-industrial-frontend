import React, { createContext, useContext, useState, ReactNode } from 'react';
import { login, AuthUser } from '../services/authService';

interface AuthContextType {
  user: AuthUser | null;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<AuthUser | null>(null);

  const handleLogin = async (username: string, password: string) => {
    const loggedInUser = await login(username, password);
    setUser(loggedInUser);
    // Salvar token no localStorage ou cookies se necessário
  };

  const handleLogout = () => {
    setUser(null);
    // Remover token do localStorage ou cookies
  };

  return (
    <AuthContext.Provider value={{ user, login: handleLogin, logout: handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }
  return context;
};
