import classNames from 'classnames'
import { useState } from 'react'
import './style/save.scss'

export function Save({id}) {
    const [save, setSave] = useState(false)

    function saveNotice() {
        
        setSave(!save)
    }

    return (
        <button title="Favorito" className={classNames('save-element', {saved: save})} onClick={saveNotice}>
            <svg className="w-6 h-6" fill="currentColor" width="24px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">	
	            <path fill="transparent" strokeWidth="1.5" stroke="#888" d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z">
	            </path>
            </svg>
        </button>
    )
}