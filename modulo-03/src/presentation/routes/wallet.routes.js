
import { Router } from "express";

import WalletController from "../controllers/wallet.controller.js";
import WalletService from "../../application/use-cases/wallet.service.js";
import WalletMySQLRepository from "../../infrastructure/database/mysql/wallet.mysql.repository.js";

import { authMiddleware } from "../middlewares/auth.middleware.js";

const walletRepository = new WalletMySQLRepository();
const walletService = new WalletService(walletRepository);
const walletController = new WalletController(walletService);

const router = Router();

// Crear billetera
router.post("/", authMiddleware, walletController.createWallet);

// Listar billeteras del usuario
router.get("/", authMiddleware, walletController.getWallets);

// Eliminar billetera
router.delete("/:id", authMiddleware, walletController.deleteWallet);

export default router;
