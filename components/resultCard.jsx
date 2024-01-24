import React, { useEffect, useState } from 'react';
import Slider from './slider';
import AudioPlayer from './audioPlayer';
import { Modal } from 'antd';
import axios from 'axios';

const SearchResultCard = ({ data }) => {
    const [result, setResult] = useState()
    const [modal2Open, setModal2Open] = useState(false);

    const getArtist = (id) => {
        console.log(id)
        // axios.get('https://lazy-puce-bandicoot-wig.cyclic.app/api/search', {
        axios.get('https://lazy-puce-bandicoot-wig.cyclic.app/api/search/artist', {
            params: {
                query: id
            }
        })
            .then((res) => {
                console.clear()
                console.log(res)
                setResult(res.data)
                setModal2Open(true)
            })
            .catch((error) => {
                alert(error)
                console.error(error);
            });
    }
    return (
        <div className='w-[300px] flex flex-col relative text-white'>
            <div className=''>
                {/* <Slider data={data?.album?.images} /> */}
                <img src={data?.album?.images[0].url} alt="" className='w-full h-[260px]'/>
            </div>
            <div className='p-1 absolute bottom-0 w-full'>
                <h2 className='font-semibold bg-black text-[14px] w-fit rounded p-1'>{data?.name?.slice(0, 33)}{data?.name?.length > 33 && '...'}</h2>
                <div className='flex items-center flex-wrap mt-1 gap-2'>
                    {
                        data?.artists?.map(({ name, id }, index) => <button onClick={() => getArtist(id)} className='bg-spotify text-[12px] p-1 rounded' key={index}>{name}</button>)
                    }
                </div>
                <div className="flex mt-1 w-fit text-[12px] bg-black p-1 rounded">
                    Release date: {data?.album?.release_date}
                </div>
                {
                    data?.preview_url?.length > 0 &&
                    <AudioPlayer audioUrl={data?.preview_url} />
                }
            </div>
            <Modal
                // title={result?.name}
                centered
                footer={false}
                open={modal2Open}
                onOk={() => setModal2Open(false)}
                onCancel={() => setModal2Open(false)}
            >
                <div className=''>
                    <div className='h-[300px] w-full m-auto'>
                        <img src={result?.images[0].url} className='w-full h-full' alt="" />
                    </div>
                    <h1 className='mt-3 text-xl text-center font-semibold'>{result?.name}</h1>
                    <div className='flex items-center flex-wrap mt-3 gap-2'>
                        {
                            result?.genres?.map((val, index) => <button className='bg-spotify text-white text-[14px] py-1 px-2 rounded' key={index}>{val}</button>)
                        }
                    </div>

                    {/* <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-2">
                        <div className="flex">
                            <div class={`bg-spotify h-2.5 rounded-full w-[${result?.popularity}%]`}></div>
                            <span className='relative top-2'>{result?.popularity}%</span>
                        </div>
                    </div> */}

                    <div className='flex mt-2 gap-x-2 text-lg items-center'>
                        <span className='font-semibold'>Followers:</span>
                        {result?.followers?.total?.toLocaleString()}
                    </div>
                    <div className='bg-spotify rounded w-full text-white text-center px-2 py-1 mt-10'>
                        <a href={result?.external_urls?.spotify} target='_blank'>
                            <button>
                                Follow
                            </button>
                        </a>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default SearchResultCard;
