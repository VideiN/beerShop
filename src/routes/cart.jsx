import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router';

function cart () {
    let navigate = useNavigate();
    return (
        <div>
            <CartTable/>
        <div style={{textAlign:"center"}}>
            <Button variant="outline-primary" onClick={()=>{navigate(-1)}}> 쇼핑 계속하기 </Button>
            <Button variant="success">구매 진행</Button>
        </div>
        </div>
    )
}

function CartTable() {
    return (
        <table class="table">
            <thead class="thead-dark">
                <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
                </tr>
            </thead>
            <tbody>
            </tbody>
        </table>
    )
}

export default cart;