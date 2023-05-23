"use client"
import { useState } from 'react'
import { useAppContext } from '@/components/ContextProvider'
import { Counter } from '@/components/Counter'
import { random } from '@/lib/utilities'
import { initials } from '@/lib/countries'

export const Generator = () => {
    const { alphabet, setAlpha, startTimer, stopTimer, clearElapsed } = useAppContext()
    const [isClicked, setIsClicked] = useState(false)
    const [isResetClicked, setIsResetClicked] = useState(false)

    const generate = (factor = 15) => {
        setIsClicked(true)
        for (let i = 0; i < factor; i++) {
            setTimeout(() => {
                setAlpha(initials[random(initials.length - 1)])
            }, 100 * i)
        }
        setTimeout(() => {
            startTimer()
            setIsResetClicked(true)
        }, (factor) * 100)
    }

    const handleClick = () => {
        stopTimer()
        generate()
    }
    const handleReset = () => {
        setIsResetClicked(false)
        setIsClicked(false)
        clearElapsed()
        stopTimer()
    }

    return (
        <div className='card'>
            <div>
                <div>
                    <h1>{alphabet}</h1>
                </div>
                <Counter />
            </div>
            <button onClick={handleClick} disabled={isClicked}>Generate Alphabet</button>
            <button onClick={handleReset} disabled={!isResetClicked}>Reset</button>
        </div>
    )
}