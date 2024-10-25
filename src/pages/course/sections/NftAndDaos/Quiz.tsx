import Image from 'next/image'
import React, { Dispatch, SetStateAction, useState } from 'react'
import { useAppContext } from '../../../../context/AppContext'

import arrowDown from '../../../../assets/icons/arrow-down.svg'
import arrowRight from '../../../../assets/icons/arrow-side.svg'
import radioButton from '../../../../assets/icons/radio-button.svg'

interface QuizProps {
  onAnswersChecked: Dispatch<SetStateAction<boolean>>
}

const Quiz: React.FC<QuizProps> = ({ onAnswersChecked }) => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0)
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([])
  const { courses, setCourseState } = useAppContext()
  const courseState = courses['nft-and-daos']

  const questions = [
    {
      question: 'What does NFT stand for?',
      options: [
        'Non-Fungible Token',
        'Non-Financial Transaction',
        'Networked Financial Technology',
      ],
    },
    {
      question:
        'Which of the following is a popular platform for buying and selling NFTs?',
      options: ['Coinbase', 'OpenSea', 'Binance'],
    },
    {
      question: 'What is a DAO?',
      options: [
        'Digital Asset Ownership',
        'Distributed Application Operator',
        'Decentralized Autonomous Organization',
      ],
    },
    {
      question: 'What is a primary benefit of using NFTs?',
      options: [
        'Guaranteed profit on resale',
        'Proof of ownership and authenticity',
        'Unlimited supply',
      ],
    },
  ]

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index)
  }

  const correctAnswers = [0, 1, 2, 1]

  const handleAnswerSelect = (questionIndex: number, answerIndex: number) => {
    const newSelectedAnswers = [...selectedAnswers]
    newSelectedAnswers[questionIndex] = answerIndex
    setSelectedAnswers(newSelectedAnswers)

    const allCorrect = newSelectedAnswers.every(
      (answer, index) => answer === correctAnswers[index],
    )

    if (typeof onAnswersChecked === 'function') {
      onAnswersChecked(allCorrect)
    } else {
      console.error('onAnswersChecked is not a function')
    }

    if (allCorrect) {
      const updatedQuizzes = [...courseState.completedQuizzes]
      updatedQuizzes[questionIndex] = true
      setCourseState('nft-and-daos', { completedQuizzes: updatedQuizzes })
    }
  }

  return (
    <div className="flex flex-col justify-start items-start w-full gap-8">
      <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-[9px]">
        <div className="flex justify-start items-end self-stretch flex-grow-0 flex-shrink-0 relative gap-5">
          <p className="flex-grow-0 flex-shrink-0 text-4xl font-semibold text-left text-white">
            Quiz
          </p>
          <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2 py-[5px]">
            <p className="flex-grow-0 flex-shrink-0 opacity-40 text-base text-left text-white">
              Ensure to answer questions CORRECTLY, answers cannot be changed
              once submitted.
            </p>
          </div>
        </div>
        <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-4">
          <div className="flex-grow h-1.5 rounded-[5px] bg-[#7b51ea]" />
        </div>
      </div>

      {questions.map((item, index) => (
        <div
          key={index}
          className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-4"
        >
          <div
            className={`flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 overflow-hidden gap-4 p-2.5 rounded-[11px] ${
              activeAccordion === index ? 'bg-black/[0.16]' : ''
            }`}
          >
            <div
              className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 h-11"
              onClick={() => toggleAccordion(index)}
            >
              <div className="flex justify-start items-center flex-grow relative gap-[7px]">
                <Image
                  src={activeAccordion === index ? arrowDown : arrowRight}
                  alt="Arrow"
                  className="flex-grow-0 flex-shrink-0"
                />
                <p
                  className={`flex-grow w-full text-xl font-semibold text-left text-white ${
                    activeAccordion === index ? 'text-primary-400' : ''
                  }`}
                >
                  {item.question}
                </p>
              </div>
            </div>
            {activeAccordion === index && (
              <div className="flex cursor-pointer flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-4">
                {item.options.map((option, optionIndex) => (
                  <div
                    key={optionIndex}
                    className={`flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 h-10 relative gap-4 p-2 ${
                      selectedAnswers[index] === optionIndex
                        ? optionIndex === correctAnswers[index]
                          ? 'text-primary-400'
                          : 'text-red-500'
                        : ''
                    }`}
                    onClick={(e) => {
                      e.stopPropagation()
                      handleAnswerSelect(index, optionIndex)
                    }}
                  >
                    <Image
                      src={radioButton}
                      alt="Radio Button"
                      className={`flex-grow-0 flex-shrink-0 ${
                        selectedAnswers[index] === optionIndex
                          ? optionIndex === correctAnswers[index]
                            ? 'text-primary-400'
                            : 'text-red-500'
                          : ''
                      }`}
                    />
                    <p
                      className={`flex-grow w-full text-base text-left ${
                        selectedAnswers[index] === optionIndex
                          ? optionIndex === correctAnswers[index]
                            ? 'text-white font-bold'
                            : 'text-red-500'
                          : 'text-[#a8a7a8]'
                      }`}
                    >
                      {option}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Quiz
