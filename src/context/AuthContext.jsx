import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    const savedOrders = localStorage.getItem('orders');
    
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    if (savedOrders) {
      setOrders(JSON.parse(savedOrders));
    }
  }, []);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const register = (userData) => {
    const newUser = {
      id: Date.now(),
      ...userData,
      createdAt: new Date().toISOString()
    };
    setUser(newUser);
    localStorage.setItem('user', JSON.stringify(newUser));
  };

  const addOrder = (orderData) => {
    const newOrder = {
      id: Date.now(),
      userId: user?.id,
      ...orderData,
      createdAt: new Date().toISOString(),
      status: 'confirmed'
    };
    const updatedOrders = [...orders, newOrder];
    setOrders(updatedOrders);
    localStorage.setItem('orders', JSON.stringify(updatedOrders));
    return newOrder;
  };

  const getUserOrders = () => {
    return orders.filter(order => order.userId === user?.id);
  };

  return (
    <AuthContext.Provider value={{
      user,
      orders,
      login,
      logout,
      register,
      addOrder,
      getUserOrders,
      isAuthenticated: !!user
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};