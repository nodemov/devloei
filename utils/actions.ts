'use server'

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export const createCamps = async (formData) => {
    // const title = formData.get('title')
    // console.log('camps', title);

    const rawData = Object.fromEntries(formData)
    console.log('rawData', rawData);

    revalidatePath('/camp')
    redirect('/camp')

    return "create camps success";
}