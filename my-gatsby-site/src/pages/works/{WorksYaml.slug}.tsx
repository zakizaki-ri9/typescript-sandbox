import React from "react";
import { graphql } from "gatsby";

const WorkDetailPage: React.FC<{ data: GatsbyTypes.WorkPageQuery }> = ({
  data,
}) => {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
};

export default WorkDetailPage;

export const query = graphql`
  query WorkPage($id: String!) {
    worksYaml(id: { eq: $id }) {
      slug
      title
      description
      imageUrl
    }
  }
`;
