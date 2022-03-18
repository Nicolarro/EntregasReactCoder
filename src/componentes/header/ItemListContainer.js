import 'bootstrap/dist/css/bootstrap.min.css';


const ItemListContainer = (props) => {

const {greeting} = props

    return(

        <div>
        
        <br/>
        <p> {greeting}</p>
           
        </div>


    )
}

export default ItemListContainer;