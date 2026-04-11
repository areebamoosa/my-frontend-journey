import { useState } from "react";

interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

export function useFetch<T>(url: string): FetchState<T> {
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    loading: true,
    error: null,
  });

  // useeffect to make fetch request
}



// search on gpt these topics examples

propswithchildren
reactnode
forms submit => ask it to submit a form with a handle submit function