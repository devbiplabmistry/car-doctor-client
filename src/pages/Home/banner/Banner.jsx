import banner1 from '../../../assets/images/banner/1.jpg'
import banner2 from '../../../assets/images/banner/2.jpg'
import banner3 from '../../../assets/images/banner/3.jpg'
import banner4 from '../../../assets/images/banner/4.jpg'
import banner5 from '../../../assets/images/banner/5.jpg'
import banner6 from '../../../assets/images/banner/6.jpg'
import './Banner.css'
const Banner = () => {
    return (
        <div className="carousel w-full mt-16">
            <div id="slide1" className="carousel-item relative w-full z-0 rounded-lg">
                <img src={banner1} className='rounded-lg banner-1' />
                <div className="slider-content absolute z-10 top-[100px] left-[100px] ">
                    <h2 className='text-white text-6xl font-bold font-inter leading-[75px]'>Affordable <br /> Price For Car <br /> Servicing</h2>
                    <p className='text-white text-xl font-normal leading-7 my-7 '>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                    <div className="slider-btn">
                    <button className="btn btn-active btn-secondary mr-5">Discover More</button>
                    <button className="btn btn-outline btn-success">Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex  right-7 gap-4 bottom-8 z-40">
                    <a href="#slide6" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full rounded-lg">
                <img src={banner2} className='rounded-lg' />
                <div className="slider-content absolute z-10 top-[100px] left-[100px] ">
                    <h2 className='text-white text-6xl font-bold font-inter leading-[75px]'>Affordable <br /> Price For Car <br /> Servicing</h2>
                    <p className='text-white text-xl font-normal leading-7 my-7 '>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                    <div className="slider-btn">
                    <button className="btn btn-active btn-secondary mr-5">Discover More</button>
                    <button className="btn btn-outline btn-success">Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex  right-7 gap-4 bottom-8 z-40">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full rounded-lg">
                <img src={banner3} className='rounded-lg'/>
                <div className="slider-content absolute z-10 top-[100px] left-[100px] ">
                    <h2 className='text-white text-6xl font-bold font-inter leading-[75px]'>Affordable <br /> Price For Car <br /> Servicing</h2>
                    <p className='text-white text-xl font-normal leading-7 my-7 '>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                    <div className="slider-btn">
                    <button className="btn btn-active btn-secondary mr-5">Discover More</button>
                    <button className="btn btn-outline btn-success">Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex  right-7 gap-4 bottom-8 z-40">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full rounded-lg">
                <img src={banner4} className='rounded-lg'/>
                <div className="slider-content absolute z-10 top-[100px] left-[100px] ">
                    <h2 className='text-white text-6xl font-bold font-inter leading-[75px]'>Affordable <br /> Price For Car <br /> Servicing</h2>
                    <p className='text-white text-xl font-normal leading-7 my-7 '>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                    <div className="slider-btn">
                    <button className="btn btn-active btn-secondary mr-5">Discover More</button>
                    <button className="btn btn-outline btn-success">Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex  right-7 gap-4 bottom-8 z-40">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide5" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full rounded-lg">
                <img src={banner5} className='rounded-lg'/>
                <div className="slider-content absolute z-10 top-[100px] left-[100px] ">
                    <h2 className='text-white text-6xl font-bold font-inter leading-[75px]'>Affordable <br /> Price For Car <br /> Servicing</h2>
                    <p className='text-white text-xl font-normal leading-7 my-7 '>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                    <div className="slider-btn">
                    <button className="btn btn-active btn-secondary mr-5">Discover More</button>
                    <button className="btn btn-outline btn-success">Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex  right-7 gap-4 bottom-8 z-40">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide6" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide6" className="carousel-item relative w-full rounded-lg">
                <img src={banner6} className='rounded-lg'/>
                <div className="slider-content absolute z-10 top-[100px] left-[100px] ">
                    <h2 className='text-white text-6xl font-bold font-inter  leading-[75px]'>Affordable <br /> Price For Car <br /> Servicing</h2>
                    <p className='text-white text-xl font-normal leading-7  my-7 '>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
                    <div className="slider-btn">
                    <button className="btn btn-active btn-secondary mr-5">Discover More</button>
                    <button className="btn btn-outline btn-success">Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex  right-7 gap-4 bottom-8 z-40">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide6" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;