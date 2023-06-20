import { Photo } from "../types/photo";

export const fetchPhotos = async (): Promise<Photo[]> => {
  const res = await fetch(
    "https://cms.itstartline.com/api/galleries?populate=image",
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
      title: item.attributes.title,
      src:
        "https://cms.itstartline.com" +
        item.attributes.image.data.attributes.url,
    };
    return obj;
  });

  return mappedData;
};
