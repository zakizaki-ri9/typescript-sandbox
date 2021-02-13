import React from "react";
import { graphql } from "gatsby";

type HatenaPost = Pick<GatsbyTypes.FeedHatena, "title" | "link" | "pubDate">;

const PostItem: React.FC<{ post: HatenaPost }> = ({ post }) => {
  const { title, link, pubDate } = post;
  return (
    <li>
      <a href={link}>
        <small>{pubDate}</small> {title}
      </a>
    </li>
  );
};

const IndexPage: React.FC<{ data: GatsbyTypes.IndexPageQuery }> = ({
  data,
}) => {
  return (
    <ul>
      {data.allFeedHatena.nodes.map((post) => {
        return <PostItem post={post} key={post.link} />;
      })}
    </ul>
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
