
import imgPerson from '../../../assets/images/about_us/person.jpg'
import imgParts from '../../../assets/images/about_us/parts.jpg'
const About = () => {
    return (
        <div className="card card-side bg-base-100 shadow-xl flex mt-32 ">
           <div className="about-img relative">
           <figure className='w-[450px] h-[450px] rounded-xl' ><img src={imgPerson} className='rounded-xl' /></figure>
            <figure className='absolute w-[327px] h-[327px] rounded-xl top-[158px] right-[-48px]'><img src={imgParts} className='rounded-xl'/></figure>
           </div>
            
            <div className="card-body ml-20 mt-14">
                <h2 className="card-title text-orange-400">About</h2>
                <h3>We are qualified & of experience in this field</h3>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                <div className="card-actions justify-start">
                    <button className="btn bg-[#FF3811] rounded-md text-lg font-normal">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;