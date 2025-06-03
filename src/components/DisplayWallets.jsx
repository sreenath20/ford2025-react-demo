import { useEffect, useState } from "react";
import WalletService from '../services/WalletService';
function DisplayWallets() {
    const [wallets, setWallets] = useState([]);

    useEffect(() => {
        WalletService.getAllWallets()
            .then((response) => {
                console.log(response);
                console.log(response.data);
                setWallets(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, []); // renders once at component load

    // renders sideeffect once at component load
    return (
        <><h3> Display Wallets</h3>

            <table className='table table-hover'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Balance</th>
                    </tr>

                </thead>
                <tbody>
                    {
                        wallets.map(
                            (w) =>
                                <tr key={w.id}>
                                    <td> {w.name}</td>
                                    <td> {w.email}</td>
                                    <td> {w.balance}</td>
                                </tr>
                        )
                    }
                </tbody>
            </table>
        </>

    )
}
export default DisplayWallets;

// const DisplayWallets = () => <h3> Display Wllets</h3>

// export default DisplayWallets;