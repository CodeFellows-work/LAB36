import { useSelector, useDispatch } from "react-redux"; 

import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ListSubheader from '@material-ui/core/ListSubheader';

function CategoryList() {

    const categories = useSelector(state => state.store.categories);
    const dispatch = useDispatch();


    const setCategory = (category) => {
        dispatch({
            type: 'ACTIVATE',
            payload: category,
        });
    }

    return(
        
            <ImageList className='imageList'>
            {categories.map(category => {
                return (
                    <div style={{width: '200px', height:'250px'}} >
                        <ListSubheader style={{color: 'white'}}>
                            {category.displayName}
                        </ListSubheader>
                        <div>
                        <ImageListItem  onClick={() => setCategory(category.displayName)} >
                            <img src={category.image} alt={category.normalizedName}/>
                        </ImageListItem>
                        </div>
                    </div>
                    )
                })}
                </ImageList>
    )
}

export default CategoryList;