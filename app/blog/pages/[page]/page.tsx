// pages/blog/[page].js
import { getAllPosts } from '../../../helpers/getPosts';
import HomePage from '../../../page';

export const getStaticProps = async ({ params }) => {
  const page = parseInt(params.page, 10) || 1;
  const allPosts = getAllPosts();
  return {
    props: { allPosts },
  };
};

export default HomePage;
