import { Teacher } from "../types/teachers";

export const fetchTeachers = async (): Promise<Teacher[]> => {
  const res = await fetch(
    "https://cms.itstartline.com/api/teachers?populate=image",
    {
      headers: {
        Authorization: process.env.NEXT_PUBLIC_ITSL_API_TOKEN!,
        "Content-Type": "application/json",
      },
    }
  );

  if (!res.ok) {
    throw new Error("Something went wrong!");
  }

  const jsonResponse = await res.json();
  const data = jsonResponse.data;
  const mappedData = data.map((item: any) => {
    const obj = {
      name: item.attributes.name,
      description: item.attributes.description,
      image:
        "https://cms.itstartline.com" +
        item.attributes.image.data.attributes.url,
    };
    return obj;
  });

  return mappedData;
};
