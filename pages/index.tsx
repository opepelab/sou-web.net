import client from 'libs/contentful';
import { GetStaticProps } from 'next';
// import axios, { AxiosResponse } from 'axios';
import useSWR from 'swr';
import { useEffect, useState } from 'react';
import OG from 'components/Sys/OG';
import Framer from 'components/Sys/Framer';
import { Text, Heading } from '@chakra-ui/react';
import { Entry, EntryCollection } from 'contentful';
import { IPostFields } from 'libs/types';
import Date from 'components/Sys/date';
import Link from 'next/link';
import generateRssFeed from '../libs/feed';
import { HiRss, HiOutlineMail } from 'react-icons/hi';
import { RiGithubFill } from 'react-icons/ri';
import { IoMdMoon } from 'react-icons/io';

type Map = {
  blog: {
    map: StringConstructor;
  };
};

// const fetcher = (url: string) => fetch(url).then((res) => res.json());
const Index: React.FC<Map> = ({ blog }) => {
  // const { data: Set, mutate } = useSWR(client.getEntries(), fetcher, {
  //   fallback: blog,
  // });
  // useEffect(() => {
  //   mutate();
  // }, []);

  return (
    <Framer>
      <OG title="Sou Watanabe - Homepage" description="Index Top Page" />
      <main className="inblo textLeft">
        <Heading as="h1" m="0" fontWeight="200" fontSize="32">
          Hello?, My name is Sou😼
        </Heading>
        <Text fontWeight="200" fontSize="20px">
          Software contributor, from Tokyo.
        </Text>
        <div className="Flex">
          <a href="https://github.com/opepelab" target="_blank">
            <RiGithubFill size={30} />
          </a>
          <Link href="mail">
            <a>
              <HiOutlineMail size={30} />
            </a>
          </Link>
          <a href="/rss/atom.xml" target="_blank">
            <HiRss size={30} />
          </a>
        </div>
        <p />
        <IoMdMoon className="Top-2px" />
        <h5>最新記事</h5>
        {blog.map((blog: Entry<IPostFields>) => (
          <dl key={blog.sys.id}>
            <dt className="dateST">
              <Date dateString={blog.fields.date} />
            </dt>
            <Link href={`/docs/url/${blog.fields.slug}`}>
              <a>
                <div className="PPx scaleLinks pinkLinks">{blog.fields.title}</div>
              </a>
            </Link>
          </dl>
        ))}
        <Link href="/docs/1">
          <a>
            <h5>リストを見に行く →</h5>
          </a>
        </Link>
      </main>
    </Framer>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  await generateRssFeed();
  const data: EntryCollection<IPostFields> = await client.getEntries({
    content_type: 'blog',
    order: '-fields.date',
    limit: 15,
  });
  return {
    props: {
      blog: data.items,
    },
    // revalidate: 3,
  };
};

export default Index;
// -p $PORT
