import { createContext, useState } from "react";

export const Context = createContext();
export const ContextProvider = ({ children }) => {
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const [userMenuIsOpen, setUserMenuIsOpen] = useState(false);

  const handleSwitchCartOpen = () => {
    setCartIsOpen(previousState => !previousState);
  };
  const handleSwitchMenuOpen = () => {
    setUserMenuIsOpen(previousState => !previousState);
  };
  const handleCartClose = () => {
    if (cartIsOpen) {
      setCartIsOpen(false);
    }
  };

  const handleMenuClose = () => {
    if (userMenuIsOpen) {
      setUserMenuIsOpen(false);
    }
  };
  return (
    <Context.Provider
      value={{
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
