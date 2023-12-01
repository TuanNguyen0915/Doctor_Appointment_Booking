import { Router } from 'express'
import * as userCtrl from "../controllers/userController.js"
import { authenticate, restrict } from '../auth/verifyToken.js'
const router = Router()

router.get('/:userId', authenticate, restrict(['patient']), userCtrl.showUser)
router.get('/', authenticate, restrict(['admin']), userCtrl.getAllUsers)
router.put('/:userId', authenticate, restrict(['patient']), userCtrl.updateUser)
router.delete('/:userId', authenticate, restrict(['patient']), userCtrl.deleteUser)

export { router } 