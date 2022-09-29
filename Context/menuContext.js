import { createContext, useState } from "react";

export const Context = createContext();
export const ContextProvider = ({ children }) => {
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const [userMenuIsOpen, setUserMenuIsOpen] = useState(false);
  const [movilMenuIsOpen, setMovilMenuIsOpen] = useState(false);

  const handleSwitchCartOpen = () => {
    setCartIsOpen(previousState => !previousState);
  };
  const handleSwitchMenuOpen = () => {
    setMovilMenuIsOpen(previousState => !previousState);
  };

  const handleCartClose = () => {
    if (cartIsOpen) {
      setCartIsOpen(false);
    }
  };

  const handleMenuClose = () => {
    if (userMenuIsOpen , movilMenuIsOpen) {
      setUserMenuIsOpen(false);
      setMovilMenuIsOpen(false)
     
    }
  };
  return (
    <Context.Provider
      value={{
        movilMenuIsOpen,
        userMenuIsOpen,
        handleSwitchMenuOpen,
        handleMenuClose,
        cartIsOpen,
        handleCartClose,
        handleSwitchCartOpen,
      }}
    >
      {children}
    </Context.Provider>
  );
};
