import Link from 'next/link';
import { FeaturedImage } from '../FeaturedImage';
import { PostInfo } from '../PostInfo';

export default function Post({
  title,
  content,
  date,
  author,
  uri,
  featuredImage,
}) {
  return (
    <article>
      {featuredImage && (
        <Link legacyBehavior href={uri}>
          <a>
            <FeaturedImage
              image={featuredImage}
              layout="responsive"
            />
          </a>
        </Link>
      )}

      <Link legacyBehavior href={uri}>
        <a>
          <h2>{title}</h2>
        </a>
      </Link>
      <PostInfo date={date} author={author} />
      <div
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </article>
  );
}
