import { Card_LOGO } from "../util/logo";

const CardComponent = (props) => {
    const { name } = props;
    return (
      <div className="cards">
              {console.log(name)}

        
        <img
          className="card-img"
          src={name?.info?.cloudinaryImageId} />
        
        <h1>{name?.info?.name}</h1>
        <p>{name?.info?.costForTwo}</p>
        <p>avgrating:{name?.info?.avgRating}</p>
      </div>
    );
};

export default CardComponent;