// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const HOMEPAGE_HERO_GQL = `
query {
  fields: item(path: "__datasource__", language: "__language__") {
    ... on HomePageHero {
      personaImage{
        jsonValue
      }
      title{
        jsonValue
      }
      description{
        jsonValue
      }
      button{
        jsonValue
      }
    }
  }
}
`;
