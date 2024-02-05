import Link from "next/link";
import Layout from "../components/Layout";

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Midori Li👋</h1>
    <p>
      Full Stack Web Developer
      <Link href="/about">About</Link>
    </p>
  </Layout>
);

export default IndexPage;
