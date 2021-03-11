import React, { ReactElement } from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const defaultProps = {
  linkText: `more...`,
};

type ContentProps = typeof defaultProps;

type BlogProps = {
  site: {
    siteMetadata: {
      content: {
        title: string;
        blog: string;
      };
    };
  };
};

const Source = ({ linkText }: ContentProps): ReactElement => {
  const data = useStaticQuery<BlogProps>(graphql`
    query {
      site {
        siteMetadata {
          content {
            title
          }
        }
      }
      site {
        siteMetadata {
          content {
            blog
          }
        }
      }
    }
  `);

  return (
    <React.Fragment>
      <h1>{data.site.siteMetadata.content.title}</h1>
      <p>{data.site.siteMetadata.content.blog}</p>
      <a>{linkText}</a>
    </React.Fragment>
  );
};

export default Source;

Source.defaultProps = defaultProps;
