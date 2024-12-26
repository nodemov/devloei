import Counter from "@/components/Counter"
import Image from "next/image"

const url = "https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU";

const InfoPage = () => {
    return (
        <>
            <h1> InfoPage</h1>
            <Counter />

            <Image
                src={url}
                width={400}
                height={400}
                alt="random"
                priority
            />
        </>
    )
}
export default InfoPage