import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Cover1 from '../../../src/assets/images/banner/1.jpg'
import Cover2 from '../../../src/assets/images/banner/2.jpg'
import Cover3 from '../../../src/assets/images/banner/3.jpg'
import Cover4 from '../../../src/assets/images/banner/4.jpg'
import Cover5 from '../../../src/assets/images/banner/5.jpg'
import Cover6 from '../../../src/assets/images/banner/6.jpg'



const Banner = () => {
    return (
        <div className='z-30'>
            <div className='w-full'>
            
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                      <SwiperSlide>
                               <div className='relative'>
                               <img className='w-full lg:h-[600px] h-[270px] md:h-[450px] rounded-b-lg' src={Cover1} alt="" />
                              
                              <div className='absolute top-0 lg:h-[600px] left-0 text-white bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]'>
                              <div className='my-44 mx-20 space-y-5'>
                              <h3 className='text-4xl font-semibold'>Affordable Price For Car Servicing</h3>
                              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique incidunt repudiandae quod ut velit odit laborum ipsum non explicabo ea.</p>
                              <div>
                                 <button className='btn bg-orange-600 text-white mr-5'>Discover More</button>
                                 <button className='btn btn-outline text-white'>Latest Project</button>
                              </div>
                              </div>
                              </div>
                               </div>
                    
                               
                      </SwiperSlide>
                      <SwiperSlide>
                      <div className='relative'>
                               <img className='w-full lg:h-[600px] h-[270px] md:h-[450px] rounded-b-lg' src={Cover2} alt="" />
                              
                              <div className='absolute top-0 lg:h-[600px] left-0 text-white bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]'>
                              <div className='my-44 mx-20 space-y-5'>
                              <h3 className='text-4xl font-semibold'>Affordable Price For Car Servicing</h3>
                              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique incidunt repudiandae quod ut velit odit laborum ipsum non explicabo ea.</p>
                              <div>
                                 <button className='btn bg-orange-600 text-white mr-5'>Discover More</button>
                                 <button className='btn btn-outline text-white'>Latest Project</button>
                              </div>
                              </div>
                              </div>
                               </div>
                                
                               
                      </SwiperSlide>
                      <SwiperSlide>
                      <div className='relative'>
                               <img className='w-full lg:h-[600px] h-[270px] md:h-[450px] rounded-b-lg' src={Cover3} alt="" />
                              
                              <div className='absolute top-0 lg:h-[600px] left-0 text-white bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]'>
                              <div className='my-44 mx-20 space-y-5'>
                              <h3 className='text-4xl font-semibold'>Affordable Price For Car Servicing</h3>
                              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique incidunt repudiandae quod ut velit odit laborum ipsum non explicabo ea.</p>
                              <div>
                                 <button className='btn bg-orange-600 text-white mr-5'>Discover More</button>
                                 <button className='btn btn-outline text-white'>Latest Project</button>
                              </div>
                              </div>
                              </div>
                               </div>
                                
                      
                      </SwiperSlide>
                      <SwiperSlide>
                      <div className='relative'>
                               <img className='w-full lg:h-[600px] h-[270px] md:h-[450px] rounded-b-lg' src={Cover4} alt="" />
                              
                              <div className='absolute top-0 lg:h-[600px] left-0 text-white bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]'>
                              <div className='my-44 mx-20 space-y-5'>
                              <h3 className='text-4xl font-semibold'>Affordable Price For Car Servicing</h3>
                              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique incidunt repudiandae quod ut velit odit laborum ipsum non explicabo ea.</p>
                              <div>
                                 <button className='btn bg-orange-600 text-white mr-5'>Discover More</button>
                                 <button className='btn btn-outline text-white'>Latest Project</button>
                              </div>
                              </div>
                              </div>
                               </div>
                               
                      </SwiperSlide>
                      <SwiperSlide>
                      <div className='relative'>
                               <img className='w-full lg:h-[600px] h-[270px] md:h-[450px] rounded-b-lg' src={Cover5} alt="" />
                              
                              <div className='absolute top-0 lg:h-[600px] left-0 text-white bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]'>
                              <div className='my-44 mx-20 space-y-5'>
                              <h3 className='text-4xl font-semibold'>Affordable Price For Car Servicing</h3>
                              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique incidunt repudiandae quod ut velit odit laborum ipsum non explicabo ea.</p>
                              <div>
                                 <button className='btn bg-orange-600 text-white mr-5'>Discover More</button>
                                 <button className='btn btn-outline text-white'>Latest Project</button>
                              </div>
                              </div>
                              </div>
                               </div>
                                
                               
                      </SwiperSlide>
                      <SwiperSlide>
                      <div className='relative'>
                               <img className='w-full lg:h-[600px] h-[270px] md:h-[450px] rounded-b-lg' src={Cover6} alt="" />
                              
                              <div className='absolute top-0 lg:h-[600px] left-0 text-white bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]'>
                              <div className='my-44 mx-20 space-y-5'>
                              <h3 className='text-4xl font-semibold'>Affordable Price For Car Servicing</h3>
                              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique incidunt repudiandae quod ut velit odit laborum ipsum non explicabo ea.</p>
                              <div>
                                 <button className='btn bg-orange-600 text-white mr-5'>Discover More</button>
                                 <button className='btn btn-outline text-white'>Latest Project</button>
                              </div>
                              </div>
                              </div>
                               </div>
                                
                      
                      </SwiperSlide>
                      
                </Swiper>
                
            </div>
            
        </div>
    );
};

export default Banner;