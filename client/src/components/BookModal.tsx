import { Modal, Button, Text } from "@nextui-org/react";
import { IBook } from "models";

interface ModalProps {
  book: IBook;
  isVisible: boolean;
  setVisibility: (params: any) => any;
}


const BookModal = ({ book, isVisible, setVisibility }: ModalProps) => {
  const onCloseHandler = () => {
    setVisibility(false);
  }

  return (
    <Modal
      scroll
      width="600px"
      aria-labelledby="book"
      aria-describedby="book-description"
      open={isVisible}
      onClose={onCloseHandler}
    >
      <Modal.Header>
        <Text id="modal-title" size={18}>
          Book Title
        </Text>
      </Modal.Header>
      <Modal.Body>
        <Text id="modal-description">
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
          ac consectetur ac, vestibulum at eros. Praesent commodo cursus
          magna, vel scelerisque nisl consectetur et. Cras mattis consectetur
          purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
          egestas eget quam. Morbi leo risus, porta ac consectetur ac,
          vestibulum at eros. Praesent commodo cursus magna, vel scelerisque
          nisl consectetur et. Cras mattis consectetur purus sit amet
          fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
        </Text>
      </Modal.Body>
      <Modal.Footer>
        <Button auto flat color="error" onPress={onCloseHandler}>
          Close
        </Button>
        <Button auto onPress={onCloseHandler}>
          Okay
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default BookModal;