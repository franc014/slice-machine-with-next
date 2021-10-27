import { Client } from "../prismic-configuration";
import SliceZone from "next-slicezone";
import { useGetStaticProps } from "next-slicezone/hooks";


import resolver from "../sm-resolver.js";

const Home = (props) => {
  return (

      <SliceZone {...props} resolver={resolver} />

  );
};

// Fetch content from prismic
export const getStaticProps = useGetStaticProps({
  client: Client(),
  type: 'home-page',
  queryType: 'single',
  /* apiParams: {
    uid: 'home'
  } */
});

export default Home;
