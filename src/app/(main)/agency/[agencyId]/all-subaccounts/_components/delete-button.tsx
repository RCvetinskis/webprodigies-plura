"use client";

import { Button } from "@/components/ui/button";
import {
  deleteSubAccount,
  getSubaccountDetails,
  saveActivityLogsNotification,
} from "@/lib/queries";
import { useRouter } from "next/navigation";

type Props = {
  subaccountId: string;
};

const DeleteButton = ({ subaccountId }: Props) => {
  const router = useRouter();

  const onClick = async () => {
    const response = await getSubaccountDetails(subaccountId);
    await saveActivityLogsNotification({
      agencyId: undefined,
      description: `Deleted a subaccount | ${response?.name}`,
      subaccountId,
    });
    await deleteSubAccount(subaccountId);
    router.refresh();
  };
  return <Button onClick={onClick}>Delete Subaccount</Button>;
};

export default DeleteButton;
