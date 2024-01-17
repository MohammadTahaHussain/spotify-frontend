"use client"

import axios from "axios";
import Head from "next/head"
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import SearchResultCard from "@/components/resultCard"
import { useRef } from "react";

const SearchPage = () => {
    const [search, setSearch] = useState('')
    const [results, setResults] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const inputRef = useRef();

    const handleSearch = (e) => {
        e.preventDefault()
        inputRef.current.blur();
        setIsLoading(true)
        axios.get('http://192.168.1.109:8080/api/search', {
            params: {
                query: search
            }
        })
            .then((res) => {
                console.clear()
                console.log(res.data.tracks.items[0]);
                setResults(res.data.tracks.items)
                setIsLoading(false)
            })
            .catch((error) => {
                alert(error)
                console.error(error);
                setIsLoading(false)
            });

    }
    return (
        <>
            <Head>
                <title>Spotify - Search</title>
            </Head>
            <div className="bg-black min-h-screen">
                <div className="max-w-screen-xl m-auto max-lg:px-5">
                    <div className="flex gap-x-2 justify-between items-center sticky top-0 z-10 py-2 bg-black">
                        <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png" width={122} height={122} alt="" />
                        <form onSubmit={handleSearch} className="flex">
                            <input ref={inputRef} value={search} onChange={(e) => setSearch(e.target.value)} type="text" name="" id="" placeholder="Search track" className="px-2 rounded-l" />
                            <button type="submit" className="bg-spotify rounded-r flex justify-center items-center h-8 w-10"><CiSearch className="text-white text-[26px]" /></button>
                        </form>
                    </div>

                    {!isLoading && <div className="flex items-center justify-center gap-4 mt-4 flex-wrap">
                        {results?.map((album) => (
                            <SearchResultCard key={album.id} data={album} />
                        ))}
                    </div>}

                    {
                        isLoading && <div className="h-[90vh] flex justify-center items-center">

                            <div role="status">
                                <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-spotify" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                </svg>
                                <span class="sr-only">Loading...</span>
                            </div>

                        </div>
                    }

                </div>
            </div>
        </>
    )
}

export default SearchPage