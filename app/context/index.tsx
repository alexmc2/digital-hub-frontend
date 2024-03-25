'use client';
import { createContext, useContext, ReactNode } from 'react';
import { useAuth } from '@/hooks/auth'; // Make sure to import your useAuth hook

const AuthContext = createContext({} as ReturnType<typeof useAuth>);

export function AuthProvider({ children }: { children: ReactNode }) {
  const auth = useAuth();

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
  return useContext(AuthContext);
}
