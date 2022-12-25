import { useEffect, useState } from "react";

function useFetchData<Payload>(url: string): {
  data: Payload | null;
  done: boolean;
} {
  const [data, dataSet] = useState<Payload | null>(null);
  const [done, doneSet] = useState(false);

  function fetchData() {
    fetch(url)
      .then((resp) => resp.json())
      .then((d: Payload) => {
        dataSet(d);
        doneSet(true);
      });
  }

  useEffect(() => fetchData(), [url]);

  return {
    data,
    done,
  };
}
export { useFetchData };
