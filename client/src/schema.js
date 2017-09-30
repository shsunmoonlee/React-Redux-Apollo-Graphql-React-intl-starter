export const typeDefs = `
type CaseStudy {
  locale: String
  company: String
  url: String
  image1: String
  image2: String
  shortDescription: String
  industry: String
  languages: String
  textType: String
  volume: String
  longDescription: String
  challenge: String
  solution: String
  valueAdded: String
  position: Int
  urlFollowingCaseStudy: String
  urlPreviousCaseStudy: String
}

type Query {
  caseStudies(locale: "en"): [CaseStudy]
  caseStudy(position: Int!): CaseStudy
}
`;
