import React from 'react';
import { Carousel } from 'antd';



const Slider = ({ data }) => (
    <Carousel autoplay>
        {data?.map(({ url }, index) => (
            <div key={index} className='h-[200px] w-full'>
                <img src={url} alt={`Slide ${index + 1}`} className='w-full h-[200px]' />
            </div>
        ))}
    </Carousel>
);

export default Slider;
