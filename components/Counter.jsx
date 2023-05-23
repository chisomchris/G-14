import { useEffect, useState } from 'react'
import { useAppContext } from '@/components/ContextProvider'

export const Counter = () => {
    const { counter, pauseTimer } = useAppContext()
    const [count, setCount] = useState(0)

    useEffect(() => {
        if (counter === 5) {
            setCount(5)
            pauseTimer()
        } else {
            setCount(counter)
        }
    }, [counter, pauseTimer])

    return (
        <>
            <p className='counter'>
                {count < 6 ? Math.trunc(count) : 5}
            </p>
        </>
    )
}