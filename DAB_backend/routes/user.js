import { Router } from 'express'
import * as userCtrl from "../controllers/userController.js"
import { authenticate } from '../auth/verifyToken.js'
const router = Router()

router.get('/:userId', authenticate, userCtrl.showUser)
router.get('/', userCtrl.getAllUsers)
router.put('/:userId', userCtrl.updateUser)
router.delete('/:userId', userCtrl.deleteUser)

export { router }