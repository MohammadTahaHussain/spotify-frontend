import React from 'react';
import { Carousel } from 'antd';



const Slider = ({ data }) => (
    <Carousel autoplay className='z-0'>
        {data?.map(({ url }, index) => (
            <div key={index} className='h-[200px] w-full z-0'>
                <img src={url} alt={`Slide ${index + 1}`} className='w-full h-[200px] z-0' />
            </div>
        ))}
    </Carousel>
);

export default Slider;
