import Link from "next/link";

const page = async () => {
    await new Promise(resolve => setTimeout(resolve, 1000));

    return (
        <>
            <h1>Hello</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </>
    )
}

export default page;