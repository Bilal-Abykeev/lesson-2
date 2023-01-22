import React from "react";



export default function MainPage () {

    const [users, setUsers] = useState([])

    useEffect(() => {
        .fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                if(response.status === 200) {
                    return response.json()
                }
                else{
                    throw response.status
                }
            }



            )
            .then(Date)
    }, []) 


    return (
        <>
            <h1>MainPage</h1>
        </>
    )
}