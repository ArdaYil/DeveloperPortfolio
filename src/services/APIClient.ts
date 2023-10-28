import axios from "axios";
import get from "../util/configuration";

const axiosInstance = axios.create({
  baseURL: get("apiUrl"),
});

class APIClient<T> {
  private endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  public get(id?: string): Promise<T> {
    const idPath = id ? `/${id}` : "";

    return axiosInstance
      .get<T>(this.endpoint + idPath, { responseType: "blob" })
      .then((res) => res.data)
      .catch((error) => error);
  }
}

export default APIClient;
