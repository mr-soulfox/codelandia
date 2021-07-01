import classNames from 'classnames'
import { useState } from 'react'
import { update } from '../../services/database/update'
import { getLikes } from '../../services/database/getLikes'
import toast from 'react-hot-toast'
import { useEffect } from 'react'
import './style/like.scss'

export function Like({id, liked}) {
    const [like, setLike ] = useState(liked)
    const [likeValue, setLikeValue] = useState(0)
    const [disabled, setDisabled] = useState(false)

    async function likeNotice() {

        setDisabled(true)

        const loadToastId = toast.loading('Espere', {
            position: 'top-center'
        })

        const error = await update(id, !like)

        toast.dismiss(loadToastId)

        if (error == null) {
            setLike(!like)

        } else {
            toast.error('Erro interno', {
                duration: 3000,
                position: 'top-center'
            })
        }
    }

    async function likesFromDb(id: string | number) {
        const [ likesInDb, error ] = await getLikes(id)

        if (error == null) {
            setLikeValue(likesInDb[0].like)

        } else {
            toast.error('Erro interno', {
                duration: 3000,
                position: 'top-center'
            })

        }
    }

    useEffect(() => {
        likesFromDb(id)

        localStorage.setItem(id, String(like))

        setDisabled(false)

    }, [like, id])

    return (
        <>
            <button title="Gostei" className={classNames('button-element', { liked: like })} onClick={likeNotice} disabled={disabled}>
                <span>{likeValue === 0 ? '' : likeValue}</span>
                <svg className="w-6 h-6" fill="currentColor" width="24px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" fill="#fff" strokeWidth="1.5" stroke="#888" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd">
                    </path>
                </svg>
            </button>
        </>
    )
}