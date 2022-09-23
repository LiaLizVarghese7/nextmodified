import Head from "next/head";
import { FunctionComponent, ReactElement } from "react";
import Header from "./Header";

interface BaseLayoutProps {
  children: ReactElement;
}

const BaseLayout: FunctionComponent<BaseLayoutProps> = (props) => {
  const { children } = props;
  return (
    <>
     
      <Header />
      {children}
    </>
  );
};

export default BaseLayout;