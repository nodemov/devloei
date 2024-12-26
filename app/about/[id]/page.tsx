const AboutDetailPage = async ({ params }) => {
    const { id } = await params;
    console.log(id);

    return (
        <div>
            <h1>AboutDetailPage</h1>
            {id}
        </div>
    )
}
export default AboutDetailPage