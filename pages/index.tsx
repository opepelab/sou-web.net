import client from 'libs/contentful';
import { GetStaticProps } from 'next';
import OG from 'components/Sys/OG';
import Framer from 'components/Sys/Framer';
import { Text, Heading } from '@chakra-ui/react';
import { Entry, EntryCollection } from 'contentful';
import { IPostFields } from 'libs/types';
import Date from 'components/Sys/date';
import Link from 'next/link';
import generateRssFeed from '../libs/feed';
import { MoonIcon } from '@chakra-ui/icons';
import { HiRss, HiOutlineMail } from 'react-icons/hi';
import { RiGithubFill } from 'react-icons/ri';

type Map = {
  blog: {
    map: StringConstructor;
  };
};

const Index: React.FC<Map> = ({ blog }) => {
  return (
    <Framer>
      <OG title="Sou Watanabe - Homepage" description="Index Top Page" />
      <main className="inblo textLeft">
        <Heading as="h1" m="0" fontWeight="200" fontSize="32">
          Hello?, My name is Sou😼
        </Heading>
        <Text fontWeight="200" fontSize="20px">
          Software contributor, from JPN Tokyo.
        </Text>
        {/* <Text fontSize="12px">15才くらいの猫を飼っています。よろしくお願いします.</Text> */}
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
        <br />
        <MoonIcon />
        <h5>最新記事.</h5>
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
  };
};

export default Index;
