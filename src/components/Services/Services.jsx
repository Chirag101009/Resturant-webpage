import React from 'react';
import Img2 from '../../assets/biryani/biryani2.png';

const ServicesData = [
  {
    id: 1,
    img: Img2,
    name: "Biryani",
    description:
      "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet.",
  },
  {
    id: 2,
    img: Img2,
    name: "Chiken kari",
    description:
      "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet",
  },
  {
    id: 3,
    img: Img2,
    name: "Cold Cofee",
    description:
      "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet",
  },
];

const Services = () => {
    return (
        <>
            <div>
                <div className="container">
                    {/* {Header Section} */}
                    <div className='text-center mb-20 max-w-[400px] mx-auto'>
                        <p className='text-sm bg-clip-text text-transport bg-gradient-to-r from-primary to-secondary'>Our Services</p>
                        <h1 className='text-3xl font-bold'>Services</h1>
                        <p className='text-xs text-gray-400'>
                            {" "}Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione necessitatibus beatae blanditiis asperiores nulla assumenda ea officiis eius harum aperiam.
                        </p>
                    </div>
                    {/* {Card Section} */}
                    <div>
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center'>
                            {ServicesData.map(({ id, img, name, description }) =>{
                                return(
                                    <div 
                                    div-aos = "zoom-in"
                                    data-aos-duration = "300"
                                    key={id} className='max-w-[300px] group rounded-2xl bg-white dark:bg-gray-800 hover:bg-primary hover:text-white duration-300 p-4'>
                                        <div className='h-[100px]'>
                                            <img src={img} alt=""
                                            className='max-w-[200px] mx-auto block transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300' />
                                        </div>
                                        <div className='p-4 text-center'>
                                            <h1 className='text-xl font-bold'>{name}</h1>
                                            <p className='text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2'>{description}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services