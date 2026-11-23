
export default class WalletController {

    constructor(walletService) {
        this.walletService = walletService;
    }

    createWallet = async (req, res) => {
        try {
            const data = {
                ...req.body,
                userId: req.user.id
            };

            const wallet = await this.walletService.createWallet(data);

            res.status(201).json(wallet);

        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    };

    getWallets = async (req, res) => {
        try {
            const wallets = await this.walletService.getWallets(req.user.id);

            res.status(200).json(wallets);

        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    };

    deleteWallet = async (req, res) => {
        try {
            const result = await this.walletService.deleteWallet(
                req.params.id,
                req.user.id
            );

            res.status(200).json(result);

        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    };
}
