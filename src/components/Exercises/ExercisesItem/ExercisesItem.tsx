import {ExercisesListItem, ItemTextWrapper, ListItemTitle, ListItemCategory, ListItemImg} from './ExercisesItem.styled'

const ExercisesItem: React.FC = ({ _id, name, filter, img }) => {

    return (
        <ExercisesListItem id={_id}>
            <ItemTextWrapper>
                <ListItemTitle>{name}</ListItemTitle>
                <ListItemCategory>{filter}</ListItemCategory>
            </ItemTextWrapper>   
            <ListItemImg src={img} alt={name}/>
        </ExercisesListItem>
    )
}

export default ExercisesItem;