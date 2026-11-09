"use client";
import { createContext, useContext, useState, type ReactNode } from "react";
import usersJson from "../database/users.json";
export type User = (typeof usersJson)[number];
export const emptyUser: User = {
  ...(Object.fromEntries(Object.keys(usersJson[0]).map((key) => [key, ""])) as unknown as User),
  role: "STUDENT",
};
type AccountContextValue = {
  currentUser: User | null;
  setCurrentUser: (user: User | null) => void;
};
const AccountContext = createContext<AccountContextValue | null>(null);
export function AccountProvider({ children }: { children: ReactNode }) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  return (
    <AccountContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </AccountContext.Provider>
  );
}
export function useAccountContext() {
  const value = useContext(AccountContext);
  if (!value) {
    throw new Error("useAccountContext must be used inside AccountProvider");
  }
  return value;
}