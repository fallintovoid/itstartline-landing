import { QuestionsAndAnswers } from "../types/questionsAndAnswers";

export const fetchQuestions = async (): Promise<QuestionsAndAnswers[]> => {
  const res = await fetch("https://cms.itstartline.com/api/faqs", {
    headers: {
      Authorization: process.env.NEXT_PUBLIC_ITSL_API_TOKEN!,
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error("Something went wrong!");
  }

  const jsonResponse = await res.json();
  const data = jsonResponse.data;
  const mappedData = data.map((item: any) => {
    const obj = {
      answer: item.attributes.answer,
      question: item.attributes.question,
    };
    return obj;
  });

  return mappedData;
};
