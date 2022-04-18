import React, { useState } from "react";
import Modal from "../../components/AdminLayouts/Modal/Modal";
import Container from "../../layout/Container";

function ModalPage() {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <Container>
      {/* <PopModal
        title="Payment successful"
        closePopModalBtnText="Got it, thanks!"
        isOpen={isOpen}
        openModal={() => setIsOpen(true)}
        sizeClass={"xl-w-[40%]"}
        top="top"
        closeModal={() => setIsOpen(false)}
      >
        <p className="text-sm text-gray-500">
          Your payment has been successfully submitted. We 've sent you an email
          with all of the details of your order.
        </p>
      </PopModal> */}
    </Container>
  );
}

export default ModalPage;
