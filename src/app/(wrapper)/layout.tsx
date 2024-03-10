"use client";
interface LayoutProps {
  children?: React.ReactNode;
}

import { Helloworld } from "@/contracts/helloworld";
import artifact from "../../../artifacts/helloworld.json";
import { Scrypt, bsv } from "scrypt-ts";

const LocaleLayout = ({ children }: LayoutProps) => {
  Helloworld.loadArtifact(artifact);

  Scrypt.init({
    // https://docs.scrypt.io/advanced/how-to-integrate-scrypt-service#get-your-api-key
    apiKey: process.env.NEXT_PUBLIC_API_KEY || "",
    network: bsv.Networks.testnet,
  });

  return <div>{children}</div>;
};

export default LocaleLayout;
