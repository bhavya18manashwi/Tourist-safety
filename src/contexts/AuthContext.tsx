import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  role: 'tourist' | 'police' | 'transport' | 'superadmin';
  blockchainId: string;
}

interface AuthContextType {
  user: User | null;
  login: (blockchainId: string, password: string, userType: string) => boolean;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Demo credentials for easy access
const DEMO_CREDENTIALS = {
  'BLK-NE-TOUR-001': { role: 'tourist' as const, password: '1234' },
  'BLK-NE-POLI-001': { role: 'police' as const, password: '5678' },
  'BLK-NE-TRAN-001': { role: 'transport' as const, password: '9012' },
  'BLK-NE-ADMN-001': { role: 'superadmin' as const, password: '3456' },
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Check for stored user session
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (blockchainId: string, password: string, userType: string): boolean => {
    const credentials = DEMO_CREDENTIALS[blockchainId as keyof typeof DEMO_CREDENTIALS];
    
    if (credentials && credentials.password === password && credentials.role === userType) {
      const newUser: User = {
        id: blockchainId,
        role: credentials.role,
        blockchainId
      };
      
      setUser(newUser);
      localStorage.setItem('user', JSON.stringify(newUser));
      return true;
    }
    
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const value: AuthContextType = {
    user,
    login,
    logout,
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};