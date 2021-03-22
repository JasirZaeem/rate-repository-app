import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = () => {
  const {
    data: { repositories },
    loading,
    refetch,
  } = useQuery(GET_REPOSITORIES);
  return { repositories, loading, refetch };
};

export default useRepositories;
