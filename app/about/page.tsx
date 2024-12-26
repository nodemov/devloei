import Link from "next/link"

const url = 'https://jsonplaceholder.typicode.com/todos'

const fetchTodos = async () => {
    await new Promise(resolve => setTimeout(resolve, 1000));

    const res = await fetch(url);
    return await res.json();
}

type Todo = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

const AboutPage = async () => {
    const data: Todo[] = await fetchTodos();

    return (
        <>
            <h1>About</h1>
            {
                data.map((todo) => (
                    <li key={todo.id}>{todo.title}</li>
                ))
            }
        </>
    )
}
export default AboutPage