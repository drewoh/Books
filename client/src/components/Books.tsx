import { IBook } from "models";
import { 
  Card, Grid, Row, Text, 
} from '@nextui-org/react';
import "./styles.css"

import BookCard from './BookCard';

interface IProps {
  books: IBook[];
}

const Books = () => {
  const list = [
    {
      title: "Post Office",
      authors: "Charles Bukowski",
      img: "https://prodimage.images-bn.com/pimages/9780061177576_p0_v15_s192x300.jpg",
    },
    {
      title: "On Writing",
      authors: "Stephen King",
      img: "https://prodimage.images-bn.com/pimages/9781982159375_p0_v5_s192x300.jpg",
    },
    {
      title: "\"Surely You're Joking, Mr. Feynman!\"",
      authors: "Richard P. Feynman",
      img: "https://prodimage.images-bn.com/pimages/9780393355628_p0_v6_s192x300.jpg",
    },
    {
      title: "Catch-22",
      authors: "Joseph Heller",
      img: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B600%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9781451626650_p0_v4_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B600x10000%5D&sink=format%5Bwebp%5D",
    },
  ];

 return (
  <>
    <Text h2>Comments on Books.</Text>
    <Grid.Container gap={0} wrap="wrap" className="grid-container" css={{margin: "auto", padding:0, justifyContent: "space-between"}}>
      {list.map((item, index) => (
        <Grid key={index} className="grid-card" css={{justifyContent: "center", padding: "0", border: "none", borderShadow: "none", borderRadius: "0"}}>
          <BookCard book={{...item, id: index}} />
        </Grid>
      ))}
    </Grid.Container>
  </>
 )
}

export default Books