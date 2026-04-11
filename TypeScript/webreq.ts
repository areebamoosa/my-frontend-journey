import axios from "axios"

import type {AxiosResponse} from "axios"


// Jo bhi data web req s hamary pass any wla hy ya jany wla hy ham donon ki object ki definition ham defie krty hain 
interface Todo{
    userId: number;
    id: number;
    title: string,
    completed : boolean
}

// axios.get('https://example.com/data').then(response =>{
//     console.log(response.data)
// })

const fetchData = async () => {
    try {
        const response: AxiosResponse <Todo> = await axios.get(
            "https//jsonplaceholder.typicode.com/todos/1"
        )
        console.log("Todo", response)
    } catch(error:any){
        if (axios.isAxiosError(error)){
            console.log("Axios error", error.message)
            if(error.response){
                console.log(error.response.status)
            }
        }
    }
}