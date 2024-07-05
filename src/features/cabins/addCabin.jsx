import { useState } from "react";
import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import Modal from "../../ui/Modal";

export default function AddCabin() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      {openModal ? (
        <Button onClick={() => setOpenModal((show) => !show)}>
          close form
        </Button>
      ) : (
        <Button onClick={() => setOpenModal((show) => !show)}>
          Add new cabin
        </Button>
      )}
      {openModal && (
        <Modal onClose={() => setOpenModal(false)}>
          <CreateCabinForm
            setShowForm={setOpenModal}
            onClose={() => setOpenModal(false)}
          />
        </Modal>
      )}
    </div>
  );
}
