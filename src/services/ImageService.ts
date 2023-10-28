import APIClient from "./APIClient";

const ImageService = new APIClient<Buffer>("/images");

export default ImageService;
