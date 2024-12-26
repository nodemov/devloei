'use client'
import { useFormStatus } from 'react-dom';
import { createCamps } from '../utils/actions';
import { useActionState } from 'react';

const SubmitButton = () => {
    const { pending } = useFormStatus()
    return (
        <button type="submit" disabled={pending} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            {pending ? 'Submitting...' : 'Submit'}
        </button>
    )
}

const Form = () => {
    const [message, formAction] = useActionState(createCamps, null)

    return (
        <>
            {message && <h1>{message}</h1>}
            <form action={formAction}>
                <div className="mb-4">
                    <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">Camp Name</label>
                    <input
                        type="text"
                        placeholder="Camping Name"
                        name="title"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        defaultValue="Loei River Camp"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="location" className="block text-gray-700 text-sm font-bold mb-2">Location</label>
                    <input
                        type="text"
                        placeholder="Location"
                        name="location"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        defaultValue="Loei, Thailand"
                    />
                </div>

                <SubmitButton />
            </form>
        </>
    )
}
export default Form