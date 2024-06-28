'use client'
import { useEffect, useState } from "react";

export default function CustomerReviews({ listReviews }: any) {
    return (
        <div className="w-1/3">
            {listReviews.map((review: any) => (
                <div key={review.id} className="border border-gray-300 my-3 bg-white shadow overflow-hidden sm:rounded-lg">
                    <div className="flex justify-between">
                        <div className="px-4 py-5 sm:px-6">
                            <h3 className="text-lg leading-6 font-medium text-gray-900">{review.name}</h3>
                            {
                                [...Array(review.rating)].map((_, i) => (
                                    <span key={i} style={{ color: 'gold' }}>★</span>
                                ))
                            }
                            <p className="mt-1 max-w-2xl text-sm text-gray-500">{review.comment}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}