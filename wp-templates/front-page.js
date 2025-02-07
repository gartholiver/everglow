import { useQuery, gql } from '@apollo/client';
import * as MENUS from '../constants/menus';
import { BlogInfoFragment } from '../fragments/GeneralSettings';
import {
  Header,
  Footer,
  Main,
  Container,
  NavigationMenu,
  SEO,
} from '../components';
import FrontPage from '../views/frontpage';
import { SiteContext } from '../views/contexts';

export default function Component() {
  const { data } = useQuery(Component.query, {
    variables: Component.variables(),
  });

  const {
    title: siteTitle,
    description: siteDescription
  } = data?.generalSettings;

  const {
    generalSettingsUrl: sitePath
  } = data?.allSettings;

  const primaryMenu = data?.headerMenuItems?.nodes ?? [];
  const footerMenu = data?.footerMenuItems?.nodes ?? [];

  return (
    <SiteContext.Provider
      value={{
        sitePath
      }}
    >
      <SEO title={siteTitle} description={siteDescription} />
      <Header
        title={siteTitle}
        description={siteDescription}
        menuItems={primaryMenu}
      />
      <Main>
        <Container>
          <FrontPage />
        </Container>
      </Main>
      <Footer title={siteTitle} menuItems={footerMenu} />
    </SiteContext.Provider>
  );
}

Component.query = gql`
  ${BlogInfoFragment}
  ${NavigationMenu.fragments.entry}
  query GetPageData(
    $headerLocation: MenuLocationEnum
    $footerLocation: MenuLocationEnum
  ) {
    generalSettings {
      ...BlogInfoFragment
    }
    allSettings {
      generalSettingsUrl
    }
    headerMenuItems: menuItems(where: { location: $headerLocation }) {
      nodes {
        ...NavigationMenuItemFragment
      }
    }
    footerMenuItems: menuItems(where: { location: $footerLocation }) {
      nodes {
        ...NavigationMenuItemFragment
      }
    }
  }
`;

Component.variables = () => {
  return {
    headerLocation: MENUS.PRIMARY_LOCATION,
    footerLocation: MENUS.FOOTER_LOCATION,
  };
};
