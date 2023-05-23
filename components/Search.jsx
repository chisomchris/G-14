'use client'
import { useAppContext } from '@/components/ContextProvider'

export const Search = () => {
    const {searchTerm, setSearchTerm} = useAppContext()

    return (
        <div>
            <label htmlFor='search'>Search for Country</label>
            <input
                id='search'
                value={searchTerm}
                onInput={({ target: { value } }) => setSearchTerm(value)}
                placeholder='Search Country Here...'
            />
        </div>
    )
}