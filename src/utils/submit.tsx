import { useState } from "react";

const useSubmit = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<false | Error>(false);

  const handleSubmit = async (url: string, initialData: any) => {
    setLoading(true);
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ initialData }),
      });
      if (!res.ok) {
        throw new Error("Something went wrong");
      }
    } catch (error) {
      if (error instanceof Error) {
        setError(error);
        console.log(error);
      }
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, handleSubmit };
};
export default useSubmit;
