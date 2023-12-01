import { Router } from 'express'
import * as userCtrl from "../controllers/userController.js"

const router = Router()

router.get('/:userId', userCtrl.showUser)
router.get('/', userCtrl.getAllUsers)
router.put('/:userId', userCtrl.updateUser)
router.delete('/:userId', userCtrl.deleteUser)

export {router}