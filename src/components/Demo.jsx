
import { name, age } from './person.js';
import displayFun from './message.js';
import Car from './Car.jsx';
import Person from './Person.jsx';
import UserForm from './UserForm.jsx';


function Demo() {
    console.log(name + ":" + age);
    let outerData = 20; // block scoping
    { // inner block
        let innerData = 10;// dynamic data binding
        innerData = "ford";
        var global = 100;
        const fixedValue = 500;
        console.log(innerData);
        // console.log(outerData);
    }
    //console.log(innerData);
    //console.log(global);
    // console.log(fixedValue);

    const myArray = ['apple', 'banana', 'orange'];
    myArray[0] = 'chennai';

    const myList = myArray.map((item) => <p key={item}>{item}</p>)
    const orderedList = myArray.map((item) => <li key={item}>{item}</li>)
    const products = [
        { id: 1, name: "Product 1", price: 5500.0 },
        { id: 2, name: "Product 2", price: 3300.0 },
        { id: 3, name: "Product 3", price: 2200.0 }
    ];

    const productsElement =
        <table>
            <thead>
                <tr>
                    <th> Id</th>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map(
                        p =>
                            <tr key={p.id}>
                                <td>{p.id}</td>
                                <td> {p.name}</td>
                                <td> {p.price}</td>
                            </tr>)
                }
            </tbody>

        </table>;
    // destructuring array &  objects
    const [first, second] = myArray;
    console.log(first);
    console.log(second);
    const employee = {
        id: 100,
        name: "Kumar",
        salary: 55000.0,
        email: "kumar@gmail.com"
    };
    const { email, name1 } = employee;
    console.log(name1 + ":" + email);

    const isActive = false;
    const numbersOne = [1, 2, 3];
    const numbersTwo = [4, 5, 6];
    const numbersCombined = [...numbersOne, ...numbersTwo];
    console.log(numbersCombined);
    console.log(numbersOne);
    console.log(numbersTwo);
    const numbers = [1, 2, 3, 4, 5, 6];

    const [one, ...two] = numbers;

    const myVehicle = {
        brand: 'Ford',
        model: 'Mustang',
        color: 'red'
    }

    const updateMyVehicle = {
        type: 'car',
        year: 2021,
        color: 'yellow'
    }

    const myUpdatedVehicle = { ...updateMyVehicle, myVehicle }

    console.log(myUpdatedVehicle);
    let carObj = { name: "BMW", model: 'i8' };
    // object properties and values eg. name & model

    let personObj = {
        id: 101, name: "Kumar",
        email: "kumar@gmail.com",
        isActive: true
    }
    let personObj2 = {
        id: 102, name: "Sanjay",
        email: "Sanjay@gmail.com",
        isActive: false
    }
    const handleClick = () => {
        console.log(" You clicked");

    }
    const handleChange = () =>
        console.log("change detected");
    const handleMouseOver = () => console.log("mouse Over");
    const handleInfo = (name, event) => alert(event.type);
    const userEmailChangeHandle = e => console.log(e.target.value + ":" + e.type);
    let isUserActive = false; //true;

    return (
        <div >
            <UserForm ></UserForm>
            {isUserActive && <Person info={personObj}></Person>}
            {personObj.isActive ? <Person info={personObj}></Person> : <h2>User {personObj.name} is inactive</h2>}

            {personObj2.isActive ? <Person info={personObj2}></Person> : <h2>User {personObj2.name} is inactive</h2>}

            {/* <Person info={personObj}></Person> */}


            {/* <Person info={personObj2}></Person> */}
            <button onClick={handleClick} >Click</button>
            <form >
                Name:
                <input onChange={handleChange} onMouseMove={handleMouseOver}></input><br></br>
                input email:
                <input onChange={e => userEmailChangeHandle(e)}></input>
            </form>

            <button onClick={(event) => handleInfo("Ford", event)}>Display</button>

            <Car info={carObj}></Car>
      // brand is attribute of car element
            {/* <Car brand = "Maruthi"></Car>
        <Car brand="BMW"></Car> */}

            {/* conditional rendering like *ngIf in angular */}
            {isActive ? <h3>User is active</h3> : <h3>User is inactive</h3>}

            {displayFun()}
            <h1>My first React application !</h1>
            {myList}
            <ul>
                {orderedList}
            </ul>
            <h3>Products list: </h3>
            {productsElement}
        </div >
    );
}
export default Demo;