import { Heading, PostInfo, Container, FeaturedImage } from '../../components';

export default function EntryHeader({ title, image, date, author, className }) {
  const hasText = title || date || author;

  return (
    <div className={className}>
      {image && (
        <FeaturedImage
          image={image}
          priority
        />
      )}

      {hasText && (
        <div className={cx('text', { 'has-image': image })}>
          <Container>
            {!!title && <Heading>{title}</Heading>}
            <PostInfo
              author={author}
              date={date}
            />
          </Container>
        </div>
      )}
    </div>
  );
}
