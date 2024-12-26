'use client'
import { useEffect, useState } from "react"
import Link from "next/link"

const Counter = () => {
    const [count, setCount] = useState(0)
    console.log('Counter')
    return (
        <>
            <div className="flex justify-center items-center my-4 gap-4">
                <button className="px-4 border-2" onClick={() => setCount(count - 1)} >-</button>
                {count}
                <button className="px-4 border-2" onClick={() => setCount(count + 1)}>+</button>
            </div>
        </>
    )
}
export default Counter