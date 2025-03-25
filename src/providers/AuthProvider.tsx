import { createContext, PropsWithChildren, useContext, useState } from "react";
import { User } from "@/types/models";

type Session = {
  user: User;
  accessToken: string;
};

const AuthContext = createContext<{
  signIn: (handle: string) => void;
  signOut: () => void;
  session?: Session | null;
  isLoading: boolean;
}>({
  signIn: () => null,
  signOut: () => null,
  session: null,
  isLoading: false,
});

const avatar =
  "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.png";

export function AuthProvider({ children }: PropsWithChildren) {
  const [session, setSession] = useState<Session | null>();
  const [isLoading, setIsLoading] = useState(false);
  const signIn = (handle: string) => {
    //sign in with the server
    const session: Session = {
      user: {
        id: "1",
        handle,
        name: "Nenad",
        avatar: avatar,
      },
      accessToken: "accessToken",
    };
    setSession(session);
  };
  const signOut = () => {
    setSession(null);
  };

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        session,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
