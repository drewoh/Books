import { useState } from 'react';
import { 
  Card, Row, Text, 
} from '@nextui-org/react';

import { IBook } from "models";
import BookModal from "./BookModal";

interface BookProps {
  book: IBook;
}

const BookCard = ({ book }: BookProps) => {

  const [visibility, setVisibility] = useState<boolean>(false);

  const onPressHandler = () => {
    setVisibility(true);
  };

  return (
    <>
      <BookModal book={book} isVisible={visibility} setVisibility={setVisibility}/>
      <Card 
        className="card" isPressable
        onPress={onPressHandler}
        css={{maxWidth: "192px", height: "293px", border: "0", boxShadow: "none"}}
      >
        <Card.Image
          src={book.img}
          alt={book.title}
          className="image-container"
        />
        <Card.Footer className="card-footer" css={{ flexDirection: "column", alignItems: "flex-start", marginLeft: "5px"}}>
          <Row>
            <Text className="authors" css={{color: "$accents7", fontWeight: "$semibold", fontSize: "$sm", whiteSpace: "nowrap", overflow: "hidden", textOverflow:"ellipsis"}}>
              {book.authors}
            </Text>
          </Row>
          <Row>
            <Text b className="title" css={{fontSize: "$md", whiteSpace: "nowrap", overflow: "hidden", textOverflow:"ellipsis"}}>
              {book.title}
            </Text>
          </Row>
        </Card.Footer>
      </Card>
    </>
  );
};

export default BookCard