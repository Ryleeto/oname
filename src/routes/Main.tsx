import React, { FC } from 'react'
import App from '../App';
import Layout from '../components/Layout';
import Content from '../components/Content';

// interface IContent {
//     children?: React.ReactNode;
// }

const Main = () => {
  return (
    <div>
        <Layout>
          <Content />
        </Layout>
    </div>
  )
}

export default Main