export default function ContentWrapper({ content, children, className }) {
  return (
    <article className={className}>
      <div dangerouslySetInnerHTML={{ __html: content ?? '' }} />
      {children}
    </article>
  );
}
