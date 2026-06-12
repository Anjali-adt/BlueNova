import { Calendar, Clock } from 'lucide-react';
import { usePageTitle } from '../../hooks/usePageTitle';
import PageHero from '../../components/PageHero/PageHero';
import { BLOG_POSTS } from '../../constants/content';
import styles from './Blog.module.css';

const Blog = () => {
  usePageTitle('Blog');

  return (
    <>
      <PageHero
        label="Blog"
        title="Insights & Updates"
        description="Stay informed with the latest trends in technology, digital transformation, and industry best practices."
      />

      <section className="section">
        <div className="container">
          <div className={styles.grid}>
            {BLOG_POSTS.map((post) => (
              <article key={post.id} className={styles.card}>
                <div className={styles.category}>{post.category}</div>
                <h2 className={styles.title}>{post.title}</h2>
                <p className={styles.excerpt}>{post.excerpt}</p>
                <div className={styles.meta}>
                  <span>
                    <Calendar size={14} aria-hidden="true" />
                    {post.date}
                  </span>
                  <span>
                    <Clock size={14} aria-hidden="true" />
                    {post.readTime}
                  </span>
                </div>
                <button type="button" className={styles.readMore}>
                  Read Article →
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
