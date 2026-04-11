## Working with API Data Types

When working with APIs in TypeScript, you define the expected structure of the response using interfaces. This ensures the data you receive matches what your code expects.

* Helps avoid runtime errors
* Makes API responses predictable
* Works with both `fetch` and `axios`

```ts id="a1b2c3"
interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
```

---

## Fetch API with TypeScript

You can use `fetch` to get data from an API and then cast the response to a specific type.

* Requires manual error handling
* Response needs to be converted using `.json()`

```ts id="d4e5f6"
const fetchData = async () => {
  try {
    const response = await fetch("https//jsonplaceholder.typicode.com/todos/1");

    if (!response.ok) {
      throw new Error(`HTTP eroor ${response.status}`);
    }

    const data: Todo = await response.json();
  } catch (error: any) {}
};
```

---

## Axios with TypeScript

Axios provides better TypeScript support and built-in types for responses.

* Automatically supports typed responses
* Easier error handling compared to fetch

```ts id="g7h8i9"
import axios from "axios"
import type { AxiosResponse } from "axios"

interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}
```

---

## Typed Axios Response

You can define the response type using `AxiosResponse<T>`.

* Ensures response data follows the expected structure
* Strong type safety for API calls

```ts id="j1k2l3"
const fetchData = async () => {
    try {
        const response: AxiosResponse<Todo> = await axios.get(
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
```

---

## Axios Error Handling

Axios provides a built-in way to check if an error is related to an HTTP request.

* `axios.isAxiosError()` helps identify API errors
* You can access response status and message

This makes error handling more structured and reliable compared to basic fetch.
