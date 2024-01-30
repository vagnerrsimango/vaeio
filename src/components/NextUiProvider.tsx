"use client";
import React from "react";
import { NextUIProvider } from "@nextui-org/react";
interface INextUIProvider {
  children: React.ReactNode;
}
export default function NextUiProviderComponent({ children }: INextUIProvider) {
  return <NextUIProvider>{children}</NextUIProvider>;
}
