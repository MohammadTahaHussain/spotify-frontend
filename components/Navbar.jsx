'use client'

import Link from "next/link"
import { useEffect, useRef, useState } from "react";
import { CiSearch } from "react-icons/ci";
import axios from "axios";
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import { FaBarsStaggered } from "react-icons/fa6";
import { usePathname } from "next/navigation";

const Navbar = ({ setValue, isSearch, setLoading, searchValue, setSearchResults }) => {
    const inputRef = useRef();
    const pathname = usePathname()

    const items = [
        {
            key: '1',
            label: (
                <Link className={`${pathname == '/' ? 'bg-gray-600 !text-white' : ''} px-2 py-1 rounded mb-2 w-full`} href={'/'} >
                    Introduction
                </Link>
            ),
        },
        {
            key: '2',
            label: (
                <Link href={'/search'} className={`${pathname == '/search' ? 'bg-gray-600 !text-white' : ''} px-2 py-1 rounded mb-2 w-full`}  >
                    Tracks
                </Link>
            ),
        },
    ];


    const handleSearch = (e) => {
        e.preventDefault()
        if(searchValue?.length < 1) return
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

    useEffect(() => {
        console.log(pathname)
    }, [])

    return (
        <div className="bg-gray-100 py-2 sticky z-50 top-0">
            <section className="flex justify-between items-center max-w-screen-xl m-auto px-2 lg:px-10 gap-x-2">
                <div>
                    <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png" width={122} height={122} alt="" />
                </div>
                {isSearch && <div className="flex gap-x-2 justify-between items-center">
                    <form onSubmit={handleSearch} className="flex">
                        <input ref={inputRef} value={searchValue} onChange={(e) => setValue(e.target.value)} type="text" name="" id="" placeholder="Search track" className="px-2 rounded-l" />
                        <button type="submit" className="bg-spotify rounded-r flex justify-center items-center h-8 w-10"><CiSearch className="text-white text-[26px]" /></button>
                    </form>
                </div>}
                <nav className="flex items-center gap-x-3 text-center justify-center max-md:hidden">
                    <Link className={pathname == '/' ? 'border-black border-b-2' : ''} href={'/'}>Introduction</Link>
                    <Link href={'/search'} className={pathname == '/search' ? 'border-black border-b-2' : ''}>Tracks</Link>
                </nav>
                <Dropdown
                    className="md:hidden p-0"
                    menu={{
                        items,
                    }}
                >
                    <a onClick={(e) => e.preventDefault()}>
                        <Space>
                            <FaBarsStaggered className="text-[22px]"/>
                        </Space>
                    </a>
                </Dropdown>
            </section>
        </div>
    )
}

export default Navbar