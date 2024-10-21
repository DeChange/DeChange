import React, { createContext, useContext, useEffect, useState } from 'react'

interface AppContextProps {
  completedQuizzes: boolean[]
  setCompletedQuizzes: React.Dispatch<React.SetStateAction<boolean[]>>
  completedQuests: Record<string, boolean>
  setCompletedQuests: React.Dispatch<
    React.SetStateAction<Record<string, boolean>>
  >
}

const AppContext = createContext<AppContextProps | undefined>(undefined)

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [completedQuizzes, setCompletedQuizzes] = useState<boolean[]>(() => {
    if (typeof window !== 'undefined') {
      const storedQuizzes = localStorage.getItem('completedQuizzes')
      return storedQuizzes ? JSON.parse(storedQuizzes) : [false, false] // Default for 2 quizzes
    }
    return [false, false] // Default for SSR
  })

  const [completedQuests, setCompletedQuests] = useState<
    Record<string, boolean>
  >(() => {
    if (typeof window !== 'undefined') {
      const storedQuests = localStorage.getItem('completedQuests')
      return storedQuests
        ? JSON.parse(storedQuests)
        : {
            claimFaucet: false,
            swapTokens: false,
            bridgeToBase: false,
          }
    }
    return {
      claimFaucet: false,
      swapTokens: false,
      bridgeToBase: false,
    } // Default for SSR
  })

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('completedQuizzes', JSON.stringify(completedQuizzes))
    }
  }, [completedQuizzes])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('completedQuests', JSON.stringify(completedQuests))
    }
  }, [completedQuests])

  return (
    <AppContext.Provider
      value={{
        completedQuizzes,
        setCompletedQuizzes,
        completedQuests,
        setCompletedQuests,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider')
  }
  return context
}
