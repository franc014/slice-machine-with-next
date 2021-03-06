import { Client } from "../prismic-configuration";
import SliceZone from "next-slicezone";
import { useGetStaticProps, useGetStaticPaths } from "next-slicezone/hooks";

import resolver from "../sm-resolver.js";

const Page = (props) => <SliceZone {...props} resolver={resolver} />;

// Fetch content from prismic
export const getStaticProps = useGetStaticProps({
  client: Client(),
  apiParams({ params }) {
    return {
      uid: params.uid,
    }
  },
});

export const getStaticPaths = useGetStaticPaths({
  client: Client(),
  formatPath: (prismicDocument) => {
    return {
      params: {
        uid: prismicDocument.uid,
      },
    }
  },
});

export default Page;
