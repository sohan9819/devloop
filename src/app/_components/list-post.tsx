"use client";

import React, { useEffect, useState } from "react";
import { api } from "~/trpc/react";

const ListPost = () => {
  //   const hello = await api.post.hello.query({ text: "from tRPC" });
  const { data, isLoading } = api.post.getAll.useQuery();

  return (
    <div>
      <h1>ListPost</h1>
      <ul>
        {isLoading && "Loading..."}
        {data?.map((pst, index) => <li key={index}>{pst.title}</li>)}
      </ul>
    </div>
  );
};

export default ListPost;
