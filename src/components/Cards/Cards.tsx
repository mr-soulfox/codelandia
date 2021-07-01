import { Like } from '../Like/Like'
import { Save } from '../Save/Save'
import { formatDate } from '../../services/scripts/formatDate'
import sr from 'scrollreveal'
import { useEffect } from 'react'
import './style/card.scss'

export function Cards({ info }) {
    const thisCardLiked = localStorage.getItem(info.id) == null ? false : localStorage.getItem(info.id) === 'false' ? false : true 
    


    useEffect(() => {
        const scroll = sr({ duration: 900, origin: 'top', distance:'50px', reset: true })
        scroll.reveal('.notices', { delay: 200 })
        scroll.reveal('#date', { delay: 400 })
        scroll.reveal('#buttons', { delay: 450 })
        scroll.reveal('#title', { delay: 500 })
        scroll.reveal('#desc', { delay: 600 })

    }, [])



    return (
        <div className="notices">
            <div className="notices-header">
                <span id="date">{formatDate(info.Date)}</span>

                <div id="buttons">
                    <Like id={info.id} liked={thisCardLiked}/>
                    <Save id={info.id}/>
                </div>
            </div>

            <div className="notices-main">
                <span id="#title">{info.Title}</span>
                <p id="#desc">{info.Description}</p>
            </div>
        </div>
    )
}