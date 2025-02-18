import {FaStar, FaStarHalfAlt, FaRegStar} from "react-icons/fa";

const StarRating = ({rating}) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
        <div className="stars">
            {[...Array(fullStars)].map((_, index) => (
                <FaStar key={`full-${index}`} className="star full"/>
            ))}

            {halfStar && <FaStarHalfAlt className="star half"/>}

            {[...Array(emptyStars)].map((_, index) => (
                <FaRegStar key={`empty-${index}`} className="star empty"/>
            ))}
        </div>
    );
};

export default StarRating;
