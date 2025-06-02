

function Car(props){ // props are immutable
    // return <h3> My car Brand is : Ford </h3>
    // return <h3> My car Brand is : { props.brand} </h3>
    props.info.name = "ford";// modifying deep copy i.e object refered by info
   // props.info = {name:"Breeza", model:"maruthi"}; // Immutable
    return <h3> My car Brand is : 
        { props.info.model +":"+ props.info.name} </h3>
    
}

export default Car;