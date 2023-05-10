
import {
    AiOutlineArrowRight
} from "react-icons/ai";
import { Link } from "react-router-dom";
const ServiceCard = ({ service }) => {
    const { img, price, title } = service;
    console.log(service);
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" className="p-6 border-slate-800" /></figure>
            <div className="card-body  border-slate-800 p-6 ">
                <h2 className="card-title">{title}</h2>
                <div className="card-actions justify-end">
                    <p className="text-[#FF3811] text-xl">Price :${price}</p>
                    <Link className="text-base text-orange-500"><AiOutlineArrowRight
                    ></AiOutlineArrowRight></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;