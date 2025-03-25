import AdminSideBar from '../Components/AdminSideBar';


class Beer {
    constructor(id, name, style, abv, price) {
        this.id = id;
        this.name = name;
        this.style = style;
        this.abv = abv;
        this.price = price;
    }
}


// var newBeer = new Beer()

function Admin() {
  return (
    <AdminSideBar/>
  );
}

export default Admin;