/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { useStaticQuery, graphql, navigate } from 'gatsby';
import debounce from 'lodash.debounce';
import * as JsSearch from 'js-search';

import {
  Dropdown,
  Field,
  Autocomplete,
  Menu,
  Item,
  ItemMeta,
  HeaderItem,
  Separator
} from '@zendeskgarden/react-dropdowns';

/**
 * TODO
 */
function Search() {
  const [inputValue, setInputValue] = useState('');
  const [matchingOptions, setMatchingOptions] = useState([]);

  const data = useStaticQuery(graphql`
    query SiteSearch {
      allMdx(
        filter: { fields: { sourceInstanceName: { in: ["components", "content-strategy"] } } }
      ) {
        edges {
          node {
            id
            fields {
              slug
              sourceInstanceName
            }
            frontmatter {
              title
              category
              description
            }
            excerpt
          }
        }
      }
    }
  `);

  const siteSearch = useMemo(() => {
    const s = new JsSearch.Search('id');

    s.addIndex(['frontmatter', 'name']);
    s.addIndex(['frontmatter', 'category']);
    s.addIndex(['frontmatter', 'description']);
    s.addIndex('excerpt');

    s.addDocuments(data.allMdx.edges.map(edge => edge.node));

    return s;
  }, [data.allMdx.edges]);

  /**
   * Debounce filtering
   */
  const filterMatchingOptions = useCallback(
    debounce(value => {
      const newOptions = siteSearch.search((value || '').trim().toLowerCase());

      setMatchingOptions(newOptions);
    }, 300),
    []
  );
  // const filterMatchingOptionsRef = React.useRef(
  //   debounce(value => {
  //     const newOptions = siteSearch.search((value || '').trim().toLowerCase());

  //     setMatchingOptions(newOptions);
  //   }, 300)
  // );

  useEffect(() => {
    filterMatchingOptions(inputValue);
  }, [filterMatchingOptions, inputValue]);

  const renderOptions = () => {
    if (matchingOptions.length === 0) {
      let emptyMessage = 'No matches found';

      if (inputValue && inputValue.length === 0) {
        emptyMessage = 'Search Garden documentation for components, patterns, and guidelines.';
      }

      return (
        <Item
          disabled
          css={`
            text-align: center;
          `}
        >
          {emptyMessage}
        </Item>
      );
    }

    const componentOptions = matchingOptions.filter(
      option => option.fields.sourceInstanceName === 'components'
    );

    const contentStrategyOptions = matchingOptions.filter(
      option => option.fields.sourceInstanceName === 'content-strategy'
    );

    return (
      <>
        {componentOptions.length > 0 && (
          <>
            <HeaderItem>Components</HeaderItem>
            <Separator />
            {componentOptions.map(option => (
              <Item key={option.id} value={option}>
                {option.frontmatter.title}
                <ItemMeta>{option.frontmatter.description || option.excerpt}</ItemMeta>
              </Item>
            ))}
          </>
        )}
        {contentStrategyOptions.length > 0 && (
          <>
            <HeaderItem>Content Strategy</HeaderItem>
            <Separator />
            {contentStrategyOptions.map(option => (
              <Item key={option.id} value={option}>
                {option.frontmatter.title}
                <ItemMeta>{option.frontmatter.description || option.excerpt}</ItemMeta>
              </Item>
            ))}
          </>
        )}
      </>
    );
  };

  return (
    <Dropdown
      selectedItem={null}
      onSelect={option => {
        navigate(`/${option.fields.sourceInstanceName}${option.fields.slug}`);
      }}
      onInputValueChange={value => setInputValue(value)}
      downshiftProps={{
        defaultHighlightedIndex: 0,
        itemToString: option => option && option.frontmatter.title
      }}
    >
      <Field
        css={`
          margin-left: ${p => p.theme.space.md} !important;
          width: 200px;
        `}
      >
        <Autocomplete></Autocomplete>
      </Field>
      <Menu
        css={`
          width: 400px !important;
          max-height: 600px;
        `}
        placement="bottom-end"
      >
        {renderOptions()}
      </Menu>
    </Dropdown>
  );
}

export default Search;
