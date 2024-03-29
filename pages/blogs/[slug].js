import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import {marked} from 'marked'
import "../../styles/blog-template.module.css";

export default function PostPage({
  frontmatter: { title, date, cover_image, author },
  slug,
  content,
}) {
  return (
    <>
      <div className="card card-page container">
        <h1 className="post-title">{title}</h1>
        <h1 className="post-title">&nbsp;&nbsp;~&nbsp;&nbsp;{author}</h1>
        <div className="post-body">
          <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
        </div>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts'))

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join('posts', slug + '.md'),
    'utf-8'
  )

  const { data: frontmatter, content } = matter(markdownWithMeta)

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  }
}
