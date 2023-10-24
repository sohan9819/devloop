"use client";

import React, { useEffect, useState } from "react";
import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";
import { api } from "~/trpc/server";

const Nav = () => {
  const { isSignedIn, user, isLoaded } = useUser();

  return (
    <div className="flex flex-col items-center gap-2">
      {!isLoaded && "Loading..."}
      {isSignedIn && user.fullName}
      {!isSignedIn ? <SignInButton /> : <SignOutButton />}
    </div>
  );
};

export default Nav;
