import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Photo, GetPhotosResponse } from "../type/photoType";

export const photoApi = createApi({
  reducerPath: "photoApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://picsum.photos/" }),

  endpoints: (builder) => ({
    getPhotos: builder.query<
      GetPhotosResponse,
      { page: number; limit: number }
    >({
      query: ({ page, limit = 12 }) => `v2/list?page=${page}&limit=${limit}`,

      transformResponse: (response: Photo[], _, arg) => {
        return {
          photos: response,
          hasMore: response.length === arg.limit,
        };
      },

      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },

      merge: (currentCache, newItems, { arg }) => {
        if (arg.page === 1) {
          return newItems;
        }

        currentCache.photos.push(...newItems.photos);
        currentCache.hasMore = newItems.hasMore;
      },

      forceRefetch({ currentArg, previousArg }) {
        return currentArg?.page !== previousArg?.page;
      },
    }),

    getPhotoById: builder.query<Photo, string>({
      query: (id) => `id/${id}/info`,
    }),
  }),
});

export const {
  useGetPhotosQuery,
  useLazyGetPhotosQuery,
  useGetPhotoByIdQuery,
} = photoApi;
