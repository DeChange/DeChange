import React, { createContext, useContext, useEffect, useState } from 'react'

interface AppContextProps {
  completedQuizzes: boolean[]
  setCompletedQuizzes: React.Dispatch<React.SetStateAction<boolean[]>>
  completedQuests: Record<string, boolean>
  setCompletedQuests: React.Dispatch<
    React.SetStateAction<Record<string, boolean>>
  >
  currentSection: number
  setCurrentSection: React.Dispatch<React.SetStateAction<number>>
  contextCompletedSections: boolean[]
  setContextCompletedSections: React.Dispatch<React.SetStateAction<boolean[]>>
}

const AppContext = createContext<AppContextProps | undefined>(undefined)

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [completedQuizzes, setCompletedQuizzes] = useState<boolean[]>(() => {
    const storedQuizzes =
      typeof window !== 'undefined'
        ? localStorage.getItem('completedQuizzes')
        : null
    return storedQuizzes ? JSON.parse(storedQuizzes) : [false, false] // Default for 2 quizzes
  })

  const [completedQuests, setCompletedQuests] = useState<
    Record<string, boolean>
  >(() => {
    const storedQuests =
      typeof window !== 'undefined'
        ? localStorage.getItem('completedQuests')
        : null
    return storedQuests
      ? JSON.parse(storedQuests)
      : {
          claimFaucet: false,
          swapTokens: false,
          bridgeToBase: false,
        }
  })

  const [currentSection, setCurrentSection] = useState<number>(() => {
    const storedSection =
      typeof window !== 'undefined'
        ? localStorage.getItem('currentSection')
        : null
    return storedSection ? JSON.parse(storedSection) : 0 // Default to the first section
  })

  const [contextCompletedSections, setContextCompletedSections] = useState<
    boolean[]
  >(() => {
    const storedSections =
      typeof window !== 'undefined'
        ? localStorage.getItem('completedSections')
        : null
    return storedSections ? JSON.parse(storedSections) : Array(5).fill(false) // Default for 5 sections
  })

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('completedQuizzes', JSON.stringify(completedQuizzes))
      localStorage.setItem('currentSection', JSON.stringify(currentSection))
      localStorage.setItem(
        'completedSections',
        JSON.stringify(contextCompletedSections),
      )
    }
  }, [completedQuizzes, currentSection, contextCompletedSections])

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
        currentSection,
        setCurrentSection,
        contextCompletedSections,
        setContextCompletedSections,
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
