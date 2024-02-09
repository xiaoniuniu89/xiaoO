"use client";
import React, { createContext, useState, useContext, useEffect } from "react";


type DashboardState = {
  daily: boolean;
  weekly: boolean;
};

export type ChatHistory = {
  role: string;
  content: string}[];

type ApplicationContextType = {
  dashboard: DashboardState;
  setDashboard: React.Dispatch<React.SetStateAction<DashboardState>>;
  chatHistory: ChatHistory;
  setChatHistory: React.Dispatch<React.SetStateAction<ChatHistory>>;
};

const defaultDashboardState: DashboardState = {
  daily: true,
  weekly: false,
};

const defaultContextValue: ApplicationContextType = {
  dashboard: defaultDashboardState,
  setDashboard: () => {},
  chatHistory: [],
  setChatHistory: () => {},
};

const ApplicationContext =
  createContext<ApplicationContextType>(defaultContextValue);

export const useApplicationContext = () => useContext(ApplicationContext);

interface ApplicationContextProviderProps {
  children: React.ReactNode;
}

export const ApplicationContextProvider: React.FC<
  ApplicationContextProviderProps
> = ({ children }) => {
  const [dashboard, setDashboard] = useState<DashboardState>(
    defaultDashboardState,
  );

  const [chatHistory, setChatHistory] = useState<ChatHistory>([]);

  return (
    <ApplicationContext.Provider
      value={{
        dashboard,
        setDashboard,
        chatHistory,
        setChatHistory
      }}
    >
      {children}
    </ApplicationContext.Provider>
  );
};
