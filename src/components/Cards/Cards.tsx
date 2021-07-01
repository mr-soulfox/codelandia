import { Like } from '../Like/Like'
import { formatDate } from '../../services/scripts/formatDate'
import './style/card.scss'

export function Cards({ info }) {
    const thisCardLiked = localStorage.getItem(info.id) == null ? false : localStorage.getItem(info.id) === 'false' ? false : true 

    return (
        <div className="notices">
            <div className="notices-header">
                <span>{formatDate(info.Date)}</span>
                <Like id={info.id} liked={thisCardLiked}/>
            </div>

            <div className="notices-main">
                <span>{info.Title}</span>
                <p>{info.Description}</p>
            </div>
        </div>
    )
}