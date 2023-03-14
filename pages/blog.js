import Head from "next/head";
import Link from "next/link";
import { client } from "../libs/client";
import classes from "../components/BlogList.module.scss";

export default function Blog({ blog }) {
  return (
    <div className={classes.margin}>
      <Head>
        <title>Web班のブログ</title>
        <meta
          name="description"
          content="名工大プログラミング部C0deのWeb班のブログです。"
        />
      </Head>
      <div className={classes.titleBox}>
        <h1 className={classes.title}>Web班のブログ</h1>
        <Link className={classes.link} href="/">
          掲示板へ
        </Link>
      </div>
      <ul className={classes.main}>
        {blog.map((blog) => (
          <li className={classes.card} key={blog.id}>
            <div>
              <Link className={classes.postlink} href={`/blog/${blog.id}`}>
                {blog.title}
              </Link>
              　
              <span className={classes.date}>
                {new Date(blog.publishedAt).toLocaleDateString()}
              </span>
            </div>
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
