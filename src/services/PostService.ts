import axios, { AxiosResponse } from "axios";

import { IPost } from "@models/models";

export default class PostService {
  static async getPosts(): Promise<AxiosResponse<IPost[]>> {
    return axios.get<IPost[]>(
      "https://cloud.codesupply.co/endpoint/react/data.json"
    );
  }
}
