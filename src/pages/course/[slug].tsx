import React from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';

const CourseDetails: React.FC = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <Layout>
        <div className="flex justify-center items-center h-screen text-2xl text-gray-700">
        <h1>{Array.isArray(slug) ? slug[0].replace(/-/g, ' ') : slug ? slug.replace(/-/g, ' ') : 'Loading...'}</h1>
      </div>
    </Layout>
  );
};

export default CourseDetails;