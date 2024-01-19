'use client'

import Link from "next/link"
import { useRef, useState } from "react";
import { CiSearch } from "react-icons/ci";
import axios from "axios";

const Navbar = ({ setValue, isSearch, setLoading, searchValue, setSearchResults }) => {
    const inputRef = useRef();

    const handleSearch = (e) => {
        e.preventDefault()
        inputRef.current.blur();
        setLoading(true)
        axios.get('https://lazy-puce-bandicoot-wig.cyclic.app/api/search', {
            params: {
                query: searchValue
            }
        })
            .then((res) => {
                console.clear()
                console.log(res.data.tracks.items[0]);
                setSearchResults(res.data.tracks.items)
                setLoading(false)
            })
            .catch((error) => {
                alert(error)
                console.error(error);
                setLoading(false)
            });
    }

    return (
        <div className="bg-gray-100 py-2 sticky z-50 top-0">
            <section className="flex justify-between items-center max-w-screen-xl m-auto px-10">
                <div>
                    <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png" width={122} height={122} alt="" />
                </div>
                {isSearch && <div className="flex gap-x-2 justify-between items-center">
                    <form onSubmit={handleSearch} className="flex">
                        <input ref={inputRef} value={searchValue} onChange={(e) => setValue(e.target.value)} type="text" name="" id="" placeholder="Search track" className="px-2 rounded-l" />
                        <button type="submit" className="bg-spotify rounded-r flex justify-center items-center h-8 w-10"><CiSearch className="text-white text-[26px]" /></button>
                    </form>
                </div>}
                <nav className="flex items-center gap-x-3 text-center justify-center">
                    <Link href={'/'}>Introduction</Link>
                    <Link href={'/search'}>Tracks</Link>
                </nav>
            </section>
        </div>
    )
}

export default Navbar