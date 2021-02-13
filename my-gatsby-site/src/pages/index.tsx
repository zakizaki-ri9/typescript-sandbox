import React from "react";
import { graphql } from "gatsby";

const IndexPage: React.FC<{ data: GatsbyTypes.IndexPageQuery }> = ({
  data,
}) => {
  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export const query = graphql`
  query IndexPage {
    allFeedHatena {
      nodes {
        title
        link
        pubDate
      }
    }
  }
`;

export default IndexPage;
