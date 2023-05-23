'use client'
import { Generator } from "@/components/Generator";
import { useAppContext } from "@/components/ContextProvider";
import { SearchResult } from "@/components/SearchResult";
import { Search } from "@/components/Search";
import logo from "@/public/GCL-logo.png";
import Image from "next/image";

export const Body = () => {
    const { elapsed } = useAppContext()

    return (
        <main className={`full_height ${elapsed ? 'elapsed' : ''}`}>
            <header className="header container">
                <Image src={logo} alt="Grand Cereals Logo" width="100" height="75" />
                <h2>Grand 14</h2>
            </header>
            <section className="container">
                <Generator />
                <Search />
                <SearchResult />
            </section>
        </main>
    )
}