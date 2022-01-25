import { Entry, EntryCollection } from "contentful";

// declare module "contentful" {
//   interface EntryCollection {
//     items: any;
//     entries: number[];
//     contents: number;
//   }
// }

export interface IPostFields {
  title: string;
  slug: string;
  date: string;
  items: number;
}

export interface IPost extends Entry<IPostFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "blog";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}
