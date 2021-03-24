import React from "react";
import { render } from "@testing-library/react-native";
import RepositoryListContainer from "../../../components/RepositoryList/RepositoryListContainer";

describe("RepositoryList", () => {
  describe("RepositoryListContainer", () => {
    it("renders repository information correctly", () => {
      const repositories = {
        totalCount: 8,
        pageInfo: {
          hasNextPage: true,
          endCursor:
            "WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==",
          startCursor: "WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd",
        },
        edges: [
          {
            node: {
              id: "jaredpalmer.formik",
              fullName: "jaredpalmer/formik",
              description: "Build forms in React, without the tears",
              language: "TypeScript",
              forksCount: 1619,
              stargazersCount: 21856,
              ratingAverage: 88,
              reviewCount: 3,
              ownerAvatarUrl:
                "https://avatars2.githubusercontent.com/u/4060187?v=4",
            },
            cursor: "WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd",
          },
          {
            node: {
              id: "async-library.react-async",
              fullName: "async-library/react-async",
              description: "Flexible promise-based React data loader",
              language: "JavaScript",
              forksCount: 69,
              stargazersCount: 1760,
              ratingAverage: 72,
              reviewCount: 3,
              ownerAvatarUrl:
                "https://avatars1.githubusercontent.com/u/54310907?v=4",
            },
            cursor:
              "WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==",
          },
        ],
      };

      // Add your test code here
      const formattedValue = (value) =>
        Math.abs(value) > 999
          ? Math.sign(value) * (Math.abs(value) / 1000).toFixed(1) + "k"
          : Math.sign(value) * Math.abs(value);

      const repositoryNodes = repositories.edges.map(({ node }) => node);

      const { getAllByTestId } = render(
        <RepositoryListContainer repositories={repositoryNodes} />
      );

      const items = getAllByTestId("repositoryListItem");
      const repoStats = getAllByTestId("stat");

      items.forEach((item, index) => {
        const repository = repositoryNodes[index];
        expect(item).toHaveTextContent(repository.fullName);
        expect(item).toHaveTextContent(repository.description);
        expect(item).toHaveTextContent(repository.language);

        expect(repoStats[index * 4]).toHaveTextContent("Stars");
        expect(repoStats[index * 4]).toHaveTextContent(
          formattedValue(repository.stargazersCount).toString()
        );

        expect(repoStats[index * 4 + 1]).toHaveTextContent("Forks");
        expect(repoStats[index * 4 + 1]).toHaveTextContent(
          formattedValue(repository.forksCount).toString()
        );

        expect(repoStats[index * 4 + 2]).toHaveTextContent("Reviews");
        expect(repoStats[index * 4 + 2]).toHaveTextContent(
          formattedValue(repository.reviewCount).toString()
        );

        expect(repoStats[index * 4 + 3]).toHaveTextContent("Rating");
        expect(repoStats[index * 4 + 3]).toHaveTextContent(
          formattedValue(repository.ratingAverage).toString()
        );
      });
    });
  });
});
