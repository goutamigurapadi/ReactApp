export const GraphQlUrl = "https://api.platform.opentargets.org/api/v4/graphql";
export const LungCarcinomaAssociatedTargets = "lungCarcinomaAssociatedTargets";
export const DiseaseEfoId = "EFO_0001071";
export const LungCarcinomaAssociatedTargetsApiPayload = {
  operationName: "lungCarcinomaAssociatedTargets",
  variables: {},
  query: `query lungCarcinomaAssociatedTargets {
      disease(efoId: "EFO_0001071") {
        associatedTargets(page: { index: 0, size: 25 }) {
          rows {
            target {
              id
              approvedSymbol
              approvedName
            }
            score
            datatypeScores {
              id
              score
            }
          }
        }
      }
    }`
};
