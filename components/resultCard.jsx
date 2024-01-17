import React, { useEffect } from 'react';
import Slider from './slider';
import AudioPlayer from './audioPlayer';

const SearchResultCard = ({ data }) => {
    return (
        <div className='w-[300px] flex flex-col text-white'>
            <div className=''>
                <Slider data={data?.album?.images} />
            </div>
            <div className='p-1'>
                <h1 className='font-semibold'>{data?.name?.slice(0, 33)}{data?.name?.length > 33 && '...'}</h1>
                <div className='flex items-center flex-wrap mt-1 gap-2'>
                    {
                        data?.artists?.map(({ name, id }, index) => <button className='bg-spotify text-[12px] p-1 rounded' key={index}>{name}</button>)
                    }
                </div>
                <div className="flex mt-1">
                    Release date: {data?.album?.release_date}
                </div>
                {
                    data?.preview_url?.length > 0 &&
                    <AudioPlayer audioUrl={data?.preview_url} />
                }
            </div>
        </div>
    );
};

export default SearchResultCard;
