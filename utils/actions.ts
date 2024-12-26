'use server'

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export const createCamps = async (prevState: any, formData: FormData) => {
    await new Promise(resolve => setTimeout(resolve, 1000));

    // const title = formData.get('title')
    const rawData = Object.fromEntries(formData)

    console.log('rawData', rawData);

    // revalidatePath('/camp')
    // redirect('/camp')
    return "create camps success";
}

export const fetchCamps = async () => {
    const camps = [
        { id: 1, title: 'Loei River Camp' },
        { id: 2, title: 'Chiang Dao Camp' },
        { id: 3, title: 'Phi Phi Camp' },
        { id: 4, title: 'Koh Chang Camp' },
    ]

    return camps;
}