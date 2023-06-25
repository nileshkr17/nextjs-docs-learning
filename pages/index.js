import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p className={utilStyles.para}>Passionate computer science student with a focus on full-stack web development, specializing in TypeScript. Experienced in the MERN stack and dedicated to enhancing user experiences through innovative solutions. Strong problem-solving skills, quick learner, and effective communicator seeking meaningful projects to contribute to.</p>
        
<p>Follow me on <a href="https://github.com/nileshkr17">GitHub</a> and <a href="https://twitter.com/nilesh">Twitter</a> for updates and exciting content.</p>
      </section>
    </Layout>
  );
}