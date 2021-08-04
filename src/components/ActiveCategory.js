import { useSelector } from 'react-redux';


import Card from 'react-bootstrap/Card';
import Button from '@material-ui/core/Button';


import Typography from '@material-ui/core/Typography';

function ActiveCategory() {
    let activeCategory = useSelector(state => state.store.activeCategory);
    let songCat = useSelector(state => state.store.songs)

    return(
        <div>
            <div>
                <Typography style={{color: 'white'}} variant="h3" component="h3">{activeCategory}</Typography>
                <div style={{marginTop:'10%'}}>
                    {songCat.map(song => {
                        while(song.category === activeCategory){
                            return(
                                <Card style={{
                                    width:'400px',
                                    borderStyle:'solid',
                                    borderColor:'black',
                                    borderWidth:'5px',
                                    }}
                                >
                                    <Card.Img variant="top" src={song.image}/>
                                    <Card.Body>
                                        <Card.Text>
                                            <p>
                                                Song: {song.name}
                                            </p> 
                                            <p>
                                                Price: {song.price}
                                            </p>
                                            <p>
                                                Available now: {song.inventory}
                                            </p>
                                        </Card.Text>
                                        <Button variant="contained"  color="secondary">
                                            Add to cart
                                        </Button>
                                    </Card.Body>
                                </Card>
                            )
                        }
                    })}
                </div>
            </div>
        </div>

    )
}

export default ActiveCategory;