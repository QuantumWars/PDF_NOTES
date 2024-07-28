// import { OpenAIEmbeddings } from "@langchain/openai";



// const embeddings = new OpenAIEmbeddings();

// export async function getEmbeddings(text: string) {
//   try {
//     // const response = await openai.createEmbedding({
//     //   model: "text-embedding-ada-002",
//     //   input: text.replace(/\n/g, " "),
//     // });
//     const response = await embeddings.embedQuery(text)
//     return response
//     // const result = await response.json();
//     // return result.data[0].embedding as number[];
//   } catch (error) {
//     console.log("error calling openai embeddings api", error);
//     throw error;
//   }
// }