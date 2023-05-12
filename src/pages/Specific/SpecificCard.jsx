

const SpecificCard = ({ services }) => {
    const { img, name, amount, date } = services;
    return (
        <div className="card card-side bg-base-100 shadow-xl">
        <figure><img className="w-[250px] h-[250px]" src={img} alt="Movie"/></figure>
        <div className="items-center gap-6 ml-6 flex gap-5">
          <h2 className="card-title">{name}</h2>
          <p>{amount}</p>
          <p>{date}</p>
        </div>
      </div>
    );
};

export default SpecificCard;