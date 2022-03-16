import Head from 'next/head'

import Date from '../../components/date'
import Layout from '../../components/layout'
import utilStyles from '../../styles/utils.module.css'
import { getAllPostSlugs, getPostData } from '../../lib/posts'

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.slug)
  return {
    props: {
      postData
    }
  }
}

export async function getStaticPaths() {
  const paths = getAllPostSlugs()
  return {
    paths,
    fallback: false
  }
}

export default function SinglePostPage({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{`${postData.title} | emmanuelJet`}</title>
        <link
          rel="canonical"
          href={`https://nextjs-blog-emmanueljet.vercel.app/posts/${postData.slug}`}
          key="canonical"
        />
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  )
}