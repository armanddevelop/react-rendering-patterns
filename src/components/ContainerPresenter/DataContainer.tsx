import { useEffect, useState } from "react";
import { DataPresenter } from "./DataPresenter";

type IDataItem = {
  id: number;
  name: string;
  description: string;
  img: string;
};

export const DataContainer = () => {
  const [data, setData] = useState<IDataItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data/data.json");
        if (!response.ok) {
          throw new Error("Data fetch fail");
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("[fetchDataError]: ", error);
        setError(`Fail to get data: ${error}`);
        setData([]);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      {loading && <p>Loading.... </p>}
      {error && <p>{error}</p>}
      <DataPresenter data={data} />
    </div>
  );
};
