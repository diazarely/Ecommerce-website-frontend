import { useParams } from "react-router-dom"

function ProductScreen(){
const params = useParams();
const { slug } = params;
return(
    <div>
        
        <h1> hello </h1>
    </div>
)

}
export default ProductScreen;