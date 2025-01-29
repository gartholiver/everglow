import { gql } from '@apollo/client';
import Link from 'next/link';
import { flatListToHierarchical } from '@faustwp/core';

export default function NavigationMenu({ menuItems, className }) {
  if (!menuItems) {
    return null;
  }

  // Based on https://www.wpgraphql.com/docs/menus/#hierarchical-data
  const hierarchicalMenuItems = flatListToHierarchical(menuItems);

  function renderMenu(items) {
    return (
      <ul>
        {items.map((item) => {
          const { id, path, label, children, cssClasses } = item;

          // @TODO - Remove guard clause after ghost menu items are no longer appended to array.
          if (!item.hasOwnProperty('__typename')) {
            return null;
          }

          return (
            <li key={id} className={cxFromWp(cssClasses)}>
              <Link href={path ?? ''}>{label ?? ''}</Link>
              {children.length ? renderMenu(children) : null}
            </li>
          );
        })}
      </ul>
    );
  }

  return (
    <nav
      role="navigation"
      aria-label={`${menuItems[0]?.menu?.node?.name} menu`}>
      {renderMenu(hierarchicalMenuItems)}
    </nav>
  );
}

NavigationMenu.fragments = {
  entry: gql`
    fragment NavigationMenuItemFragment on MenuItem {
      id
      path
      label
      parentId
      cssClasses
      menu {
        node {
          name
        }
      }
    }
  `,
};
