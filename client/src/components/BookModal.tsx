import { 
  Modal, Card, Text, Grid, 
} from '@nextui-org/react';

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
      aria-labelledby="book"
      aria-describedby="book-description"
      open={isVisible}
      onClose={onCloseHandler}
      className="book-modal"
    >
      <Modal.Body
      >
        <Card 
          css={{ 
            w: "100%", textAlign: "left", 
            margin: 0, overflowWrap: "break-word"
          }}
        >
          <Card.Body>
              <Grid>
                <Card.Image className="modal-image" src={book.img} />
                <Text>{book.authors}</Text>
                <Text>{book.title}</Text>
                <Text>{book.comment}</Text>
              </Grid>
          </Card.Body>
        </Card>
      </Modal.Body>
    </Modal>
  );
}

export default BookModal;
