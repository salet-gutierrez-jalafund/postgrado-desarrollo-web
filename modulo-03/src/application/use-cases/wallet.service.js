
import WalletEntity from "../../domain/entities/wallet.entity.js";

export default class WalletService {

    constructor(walletRepository) {
        this.walletRepository = walletRepository;
    }

    async createWallet(data) {

        if (!data.name || !data.type || !data.userId) {
            throw new Error("Name, type and userId are required");
        }

        const validTypes = [
            "CASH",
            "BANK",
            "DEBIT_CARD",
            "CREDIT_CARD"
        ];

        if (!validTypes.includes(data.type)) {
            throw new Error("Invalid wallet type");
        }

        const balance = Number(data.balance ?? 0);

        if (!Number.isFinite(balance) || balance < 0) {
            throw new Error("Balance must be a valid non-negative number");
        }

        const wallet = new WalletEntity({
            ...data,
            balance
        });

        return await this.walletRepository.save(wallet);
    }

    async getWallets(userId) {
        return await this.walletRepository.findByUserId(userId);
    }

    async deleteWallet(id, userId) {

        const wallet = await this.walletRepository.findByIdAndUserId(
            id,
            userId
        );

        if (!wallet) {
            throw new Error("Wallet not found or unauthorized");
        }

        await this.walletRepository.delete(id);

        return {
            message: "Wallet deleted successfully"
        };
    }
}
