import { useLoaderData } from "react-router-dom";
import SpecificCard from "./SpecificCard";

const SpecificBook = () => {
    const service =useLoaderData()
    console.log(service);
    return (
        <div className="grid grid-cols-2 gap-6">
          {
            service.map(services =><SpecificCard key={services._id} services={services}></SpecificCard>)
          }
        </div>
    );
};

export default SpecificBook;