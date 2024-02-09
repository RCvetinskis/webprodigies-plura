import { db } from "@/lib/db";
import React from "react";
import DataTable from "./_components/data-table";
import { Plus } from "lucide-react";
import { columns } from "./_components/columns";
import { currentUser } from "@clerk/nextjs";
import SendInvitation from "@/components/forms/send-invitation";

type Props = {
  params: { agencyId: string };
};

const Page = async ({ params }: Props) => {
  const authUser = await currentUser();
  if (!authUser) return null;
  const teamMembers = await db.user.findMany({
    where: {
      Agency: {
        id: params.agencyId,
      },
    },
    include: {
      Agency: {
        include: { SubAccount: true },
      },
      Permissions: {
        include: {
          SubAccount: true,
        },
      },
    },
  });
  if (!teamMembers) return null;

  const agencyDetails = await db.agency.findUnique({
    where: { id: params.agencyId },
    include: {
      SubAccount: true,
    },
  });

  if (!agencyDetails) return null;
  return (
    <DataTable
      actionButtonText={
        <>
          <Plus size={15} />
          Add
        </>
      }
      modalChildren={<SendInvitation agencyId={agencyDetails.id} />}
      filterValue="name"
      columns={columns}
      data={teamMembers}
    ></DataTable>
  );
};

export default Page;
