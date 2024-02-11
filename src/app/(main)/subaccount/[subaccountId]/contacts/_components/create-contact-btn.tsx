"use client";

import ContactUserForm from "@/components/forms/contact-user-form";
import CustomModal from "@/components/global/custom-modal";
import { Button } from "@/components/ui/button";
import { useModal } from "@/providers/modal-proivder";

type Props = {
  subaccountId: string;
};

const CreateContactButton = ({ subaccountId }: Props) => {
  const { setOpen } = useModal();

  const onClick = () => {
    setOpen(
      <CustomModal
        title="Create Contact"
        subheading="Contacts are like customers."
      >
        <ContactUserForm subaccountId={subaccountId} />
      </CustomModal>
    );
  };
  return <Button onClick={onClick}>Create Contact</Button>;
};

export default CreateContactButton;
