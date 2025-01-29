import * as SELECTORS from '../../constants/selectors';

export default function SkipNavigationLink() {
  return (
    <a
      className="sr-only"
      href={`#${SELECTORS.MAIN_CONTENT_ID}`}
    >
      Skip To Main Content
    </a>
  );
}
