import { useQuery } from "@tanstack/react-query";
import ImageService from "../services/ImageService";
import ms from "ms";

type ImageType = "svg+xml" | "webp" | "png";
type CreateUrl = (data: Buffer, type?: ImageType) => string;

const createUrl: CreateUrl = (data, type = "webp") => {
  const blob = new Blob([data], { type: `image/${type}` });

  return URL.createObjectURL(blob);
};

export default (image: string, type?: ImageType) =>
  useQuery({
    queryKey: ["images/" + image],
    queryFn: async () => {
      const result = await ImageService.get(image);

      return createUrl(result, type);
    },
    refetchOnWindowFocus: false,
    staleTime: ms("24 h"),
    cacheTime: ms("24 h"),
  });
