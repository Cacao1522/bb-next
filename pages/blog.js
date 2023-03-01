import Link from 'next/link';
import { client } from "../libs/client";

export default function Blog({ blog }) {
  return (
    <div>
        <Link href="/">
        掲示板へ
      </Link>
      <ul>
        {blog.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blog/${blog.id}`}>{blog.title}</Link>　{new Date(blog.publishedAt).toLocaleDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });

  return {
    props: {
      blog: data.contents,
    },
  };
};
