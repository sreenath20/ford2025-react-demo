function Person(props) {

    return <table>
        <thead>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
        </thead>
        <tbody>
            <tr>
                <td> {props.info.id}</td>
                <td> {props.info.name}</td>
                <td> {props.info.email}</td>
            </tr>
        </tbody>
    </table>
}
export default Person;