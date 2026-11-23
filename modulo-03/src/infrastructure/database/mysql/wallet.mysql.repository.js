
import { DataTypes } from "sequelize";
import sequelize from "./connection.js";

export const WalletModel = sequelize.define("Wallet", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    type: {
        type: DataTypes.ENUM(
            "CASH",
            "BANK",
            "DEBIT_CARD",
            "CREDIT_CARD"
        ),
        allowNull: false
    },
    balance: {
        type: DataTypes.DECIMAL(12, 2),
        allowNull: false,
        defaultValue: 0
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    },
    userId: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: true
});

export default class WalletMySQLRepository {

    async save(walletEntity) {
        const wallet = await WalletModel.create({
            name: walletEntity.name,
            type: walletEntity.type,
            balance: walletEntity.balance,
            description: walletEntity.description,
            userId: walletEntity.userId
        });

        return wallet.toJSON();
    }

    async findByUserId(userId) {
        return await WalletModel.findAll({
            where: { userId },
            order: [["createdAt", "DESC"]]
        });
    }

    async findById(id) {
        const wallet = await WalletModel.findByPk(id);
        return wallet ? wallet.toJSON() : null;
    }

    async findByIdAndUserId(id, userId) {
        const wallet = await WalletModel.findOne({
            where: { id, userId }
        });

        return wallet ? wallet.toJSON() : null;
    }

    async delete(id) {
        const wallet = await WalletModel.findByPk(id);

        if (!wallet) return false;

        await wallet.destroy();
        return true;
    }
}
