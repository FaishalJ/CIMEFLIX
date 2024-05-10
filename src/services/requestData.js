import { API_URL } from "./helper";

// fetch movies
export default async function requestData(title = "war") {
  let controller = new AbortController();
  try {
    const res = await fetch(`${API_URL}&s=${title}`, {
      signal: controller.signal,
    });
    const data = await res.json();
    if (data.Response === "False") throw new Error("Movie not found");
    return data;
  } catch (error) {
    if (error.name !== "AbortError") throw Error(error);
  }
}

// fetch details
export async function requestDetails(id) {
  try {
    const res = await fetch(`${API_URL}&i=${id}`);
    const data = await res.json();
    if (data.Response === "False") throw new Error("Movie not found");
    return data;
  } catch (error) {
    throw Error(error);
  }
}
