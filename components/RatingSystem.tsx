'use client'
import { useState } from "react"

const RatingSystem = () => {
    
    const [name, setName] = useState('')
    const [rating, setRating] = useState(0)
    const [comment, setComment] = useState('')

    return (
        <div className="flex flex-col my-3 items-center">
            <input className="border border-gray-300 rounded-lg p-1 w-full" type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)}/>
            <div>
                {[1, 2, 3, 4, 5].map((star) => {
                return (  
                    <span
                    className='start'
                    style={{
                        cursor: 'pointer',
                        color: rating >= star ? 'gold' : 'gray',
                        fontSize: `35px`,
                    }}
                    onClick={() => {
                        setRating(star)
                    }}
                    >
                    {' '}
                    ★{' '}
                    </span>
                )
                })}

            </div>
            <textarea className="border border-gray-300 rounded-lg p-1 w-full" rows={3} placeholder="Insert comment here..." value={comment} onChange={e => setComment(e.target.value)}/>
        </div>
    )
}

export default RatingSystem