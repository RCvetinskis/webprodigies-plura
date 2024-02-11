import Blurpage from "@/components/global/blur-page";
import MediaComponent from "@/components/media";
import { getMedia } from "@/lib/queries";
import React from "react";

type Props = {
  params: { subaccountId: string };
};

const Page = async ({ params }: Props) => {
  const data = await getMedia(params.subaccountId);
  return (
    <Blurpage>
      <MediaComponent data={data} subaccountId={params.subaccountId} />
    </Blurpage>
  );
};

export default Page;
