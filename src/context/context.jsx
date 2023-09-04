import { useState, createContext, useContext } from 'react';

// create context
const AppContext = createContext();

// app provider
const AppPorvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function openSidebar() {
    setIsSidebarOpen(true);
  }
  function closeSidebar() {
    setIsSidebarOpen(false);
  }

  function openModal() {
    setIsModalOpen(true);
  }
  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    // provide context to the app
    <AppContext.Provider
      value={{
        openModal,
        openSidebar,
        closeModal,
        closeSidebar,
        isModalOpen,
        isSidebarOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// call context to use latter
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppPorvider, useGlobalContext };
