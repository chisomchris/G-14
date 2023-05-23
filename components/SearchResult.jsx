'use client'
import { useAppContext } from '@/components/ContextProvider'

export const SearchResult = () => {
    const { searchResult } = useAppContext()
    return (<>
        {
            searchResult.length > 0 ? <>
                <h2>Search Results</h2>
                <ul>{searchResult.map(
                    (country, index) => <li key={index}>
                        {country}
                    </li>
                )}</ul>
            </> : null
        }
    </>)
}