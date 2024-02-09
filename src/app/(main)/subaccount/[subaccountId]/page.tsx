import React from "react";

type Props = {
  params: { subaccountId: string };
};

const Page = ({ params }: Props) => {
  return <div>{params.subaccountId}</div>;
};

export default Page;
