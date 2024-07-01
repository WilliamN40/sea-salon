'use client'
import { useRouter } from "next/navigation"
import { useState } from "react"

const RatingSystem = ({ listReviews, setListReviews }: any) => {
    
    const [name, setName] = useState('')
    const [rating, setRating] = useState(0)
    const [comment, setComment] = useState('')

    const router = useRouter()
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        try {
            const response = await fetch('/api/review/new', {
                method: 'POST',
                body: JSON.stringify({
                    name,
                    rating,
                    comment
                })
            })

            if (response.ok) {
                alert('Review submitted successfully')
                setName('')
                setRating(0)
                setComment('')
                setListReviews([...listReviews, {
                    name,
                    rating,
                    comment
                }])
            } else {
                alert('Failed to submit review')
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="flex flex-col my-3 items-center w-56">
            <form onSubmit={handleSubmit}>
                <input className="border border-gray-300 rounded-lg p-1 w-full" type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)}/>
                <div className="flex justify-between">
                    {[1, 2, 3, 4, 5].map((star) => {
                    return (  
                        <span
                        key={star}
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
                <button className="btn btn-blue my-2 w-full" type="submit">Submit Review</button>
            </form>
        </div>
    )
}

export default RatingSystem