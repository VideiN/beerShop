import Button from 'react-bootstrap/Button';


function cart () {
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
        <div>
            <h1>Cart</h1>
        </div>
    )
}

export default cart;