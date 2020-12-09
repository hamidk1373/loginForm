import React, { createContext, useState } from 'react'

export const AuthorizationContext = createContext({
  isLoggedIn: false,
  setIsLoggedIn: () => {}
})

export default function AuthorizationContextProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.token)

  return (
    <AuthorizationContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn
      }}
    >
      {children}
    </AuthorizationContext.Provider>
  )
}
