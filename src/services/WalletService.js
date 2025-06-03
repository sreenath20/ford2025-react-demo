import axios from 'axios'

const baseUrl =
    'http://localhost:8080/v1/wallet';

const WalletService = {
    getAllWallets: () =>
        axios.get(baseUrl + '/all'),

    getAllWallets2: () =>
        axios.get(baseUrl + '/all')
}
export default WalletService;
