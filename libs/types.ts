import { Entry, EntryCollection } from "contentful";

export interface IPostFields {
  title: string;
  slug: string;
  date: string;
  description: string;
  body: string;
}

export interface IPost extends EntryCollection<IPostFields> {
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
