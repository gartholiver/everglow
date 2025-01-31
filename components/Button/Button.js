export default function Button({ children, data, isLink, ...props }) {
  const content = (
    <span className="relative z-10 flex items-center justify-between gap-2 whitespace-nowrap">
      {children}
    </span>
  );

  return (
    <div className="button">
      {isLink === true ? (
        <a
          href={data.url}
          target={data.target ?? '_self'}
          title={data.title}
          {...props}
        >
          {content}
        </a>
      ) : (
        <button {...props}>{content}</button>
      )}
    </div>
  )
}