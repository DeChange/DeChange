import React, { createContext, useContext, useState } from 'react'

interface CourseState {
  completedQuizzes: boolean[]
  completedQuests: Record<string, boolean>
  currentSection: number
  contextCompletedSections: boolean[]
}

interface AppContextProps {
  courses: Record<string, CourseState>
  setCourseState: (courseId: string, state: Partial<CourseState>) => void
  setCompletedQuests: (
    courseId: string,
    quests: Record<string, boolean>,
  ) => void
}

const AppContext = createContext<AppContextProps | undefined>(undefined)

const initialCourseState = (courseId: string): CourseState => {
  const storedData =
    typeof window !== 'undefined' ? localStorage.getItem(courseId) : null
  const defaultState: CourseState = {
    completedQuizzes: [false, false],
    completedQuests: {},
    currentSection: 0,
    contextCompletedSections: Array(5).fill(false),
  }

  if (storedData) {
    try {
      const parsedData = JSON.parse(storedData)
      if (Array.isArray(parsedData.contextCompletedSections)) {
        return { ...parsedData }
      }
    } catch (error) {
      console.error('Error parsing local storage data:', error)
    }
  }

  // Returns default state if no valid data found
  return defaultState
}

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [courses, setCourses] = useState<Record<string, CourseState>>({
    'nft-and-daos': initialCourseState('nft-and-daos'),
    'introduction-to-defi': initialCourseState('introduction-to-defi'),
  })

  const setCourseState = (courseId: string, state: Partial<CourseState>) => {
    setCourses((prevCourses) => {
      const updatedCourse = { ...prevCourses[courseId], ...state }
      if (typeof window !== 'undefined') {
        localStorage.setItem(courseId, JSON.stringify(updatedCourse))
      }
      return { ...prevCourses, [courseId]: updatedCourse }
    })
  }

  const setCompletedQuests = (
    courseId: string,
    quests: Record<string, boolean>,
  ) => {
    setCourseState(courseId, { completedQuests: quests })
  }

  return (
    <AppContext.Provider
      value={{ courses, setCourseState, setCompletedQuests }}
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
