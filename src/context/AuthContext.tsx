import React, { ReactNode, useState } from 'react';

type AuthValuesType = {
  user: string | null;
  updateUser: () => void;
};

const defaultProvider: AuthValuesType = {
  user: 'string',
  updateUser: () => null,
};

const AuthContext = React.createContext(defaultProvider);

interface IAuthProvider {
  children: ReactNode;
}

const AuthProvider = ({ children }: IAuthProvider) => {
  const [user, setUser] = useState<string | null>(null);

  const updateUser = () => {
    setUser('new user updated');
  };

  const values = {
    user: user,
    updateUser: updateUser,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export { AuthProvider, AuthContext };
