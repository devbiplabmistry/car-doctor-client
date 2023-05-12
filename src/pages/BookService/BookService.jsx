import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../authProvider/AuthProvider";

const BookService = () => {
    const { img,  title, price } = useLoaderData()
    const { user } = useContext(AuthContext)

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const amount = form.amount.value;
        const date = form.date.value;
        const service = {
            name,
            email,
            amount,
            date,
            img
        }
      
        fetch('http://localhost:5000/service', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => 
                {
                    if(data.insertedId){
                        alert('SERVICE ADDED')
                    }
                })
    }






    return (
      
            <div className="mt-9 mb-9 bg-base-200">
                <h3 className="text-center text-2xl pt-6">Car Service :{title}</h3>
              <form onSubmit={handleSubmit}>
              <div className="card-body grid grid-cols-2">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Service Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Service name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="date" name="date" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name="email" defaultValue={user && user.email} placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Due Amount</span>
                        </label>
                        <input type="text" name="amount" placeholder={price} className="input input-bordered" />
                    </div>
                    <input className="btn btn-block" type="submit" value="Book" />
                </div>
              </form>
               
            </div>
       

    );
};

export default BookService;