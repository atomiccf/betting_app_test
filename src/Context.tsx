import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AppContextProps {
    notification: string | null;
    showNotification: (message: string) => void;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [notification, setNotification] = useState<string | null>(null);

    const showNotification = (message: string) => {
        setNotification(message);
        setTimeout(() => {
            setNotification(null);
        }, 5000); // Уведомление исчезает через 5 секунд
    };

    return (
        <AppContext.Provider value={{ notification, showNotification }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = (): AppContextProps => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
};