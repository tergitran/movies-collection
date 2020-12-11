import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState({ love: "You" });
  const [loading, setLoading] = useState(true);

  const [pagesNumber, setPagesNumber] = useState(1);

  const getdata = async () => {
    setLoading(true);

    const response = await fetch(url);
    const data = await response.json();
    setLoading(false);

    setData(data);
    setPagesNumber(data.total_pages);
  };

  useEffect(() => {
    getdata();
    console.log("Get data Done");
  }, [url]);

  return { data, pagesNumber, loading };
};
