
export default class WalletEntity {
    constructor({
        id,
        name,
        type,
        balance,
        description,
        userId
    }) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.balance = Number(balance ?? 0);
        this.description = description || null;
        this.userId = userId;
    }
}
