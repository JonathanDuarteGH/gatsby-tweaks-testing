import React from "react";
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import { ExampleButton } from '../components/button';

export default function Home() {
  return (
    <Layout>
      Hello people!
      <div>
        <Link to='/blog/'>blog page</Link>
      </div>
      <a href='https://www.gatsbyjs.com/'>gatsby docs</a>
      <ExampleButton>Click Me</ExampleButton>
    </Layout>
  )
}
