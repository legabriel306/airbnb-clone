//import katieFoto from '../assets/images/katie-zaferes-foto.png'
import starIcon from "../assets/images/star-icon.png"

interface ItemData {
    id: number,
    title: string,
    description: string,
    price: number,
    coverImg: string,
    stats: {
        rating: number,
        reviewCount: number
    },
    location: string,
    openSpots: number
}

interface CardParameter {
    key: number,
    item: ItemData
}



const Card = (props: CardParameter) => {
    let cardImg: string = `./images/${props.item.coverImg}`
    let badgeText: string = "";
    if(props.item.openSpots === 0){
        badgeText = "SOLD OUT";
    } else if(props.item.location === "Online"){
        badgeText = "ONLINE";
    }
    return (
        <div className="card">
            {badgeText && <div className='card-badge'>{badgeText}</div>}
            <img src={cardImg} alt="katie zaferes" className="card-image" />
            <div className='card-info'>
                <span className='card-rating'><img src={starIcon} alt="star icon" className="star-icon" /> {props.item.stats.rating.toFixed(1)} </span>
                <span className='card-reviewcount'>({props.item.stats.reviewCount}) </span>
                <span className='elipse'></span>
                <span className='card-country'> {props.item.location}</span>
            </div>
            <p className='card-title'>{props.item.title}</p>
            <p className='card-price'><strong>From $<span>{props.item.price}</span></strong> / person</p>
        </div>
    )
}

export default Card;