import { fetchCamps } from "@/utils/actions";

const CampList = async () => {
    const camps = await fetchCamps();

    return (
        <div>
            {camps.map(camp => (
                <li key={camp.id}>{camp.title}</li>
            ))}
        </div>
    )
}

export default CampList;