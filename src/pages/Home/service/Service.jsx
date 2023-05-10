import { useState } from "react";
import ServiceCard from "./ServiceCard";

const Service = () => {
    const [services, setServices] = useState([])
    useState(() => {
        fetch('service.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

console.log(services);
    return (
        <div>
            <div className="service-header mx-auto text-center mt-32">
                <h5 className="text-[#FF3811] text-xl font-normal">Service</h5>
                <h3 className="text-black font-bold mt-5 text-5xl">Our Service Area</h3>
                <p className="text-base mt-5 mb-12 font-normal text-[#737373]">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className="service-wrapper grid grid-cols-3 gap-6">
                {
                    services.map(service=><ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
            <button className="btn btn-outline btn- text-center block mx-auto mt-12 mb-32">More Service</button>

        </div>
    );
};

export default Service;