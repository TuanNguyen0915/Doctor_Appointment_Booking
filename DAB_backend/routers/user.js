import { Router } from 'express'
import * as UserCtrl from '../controller/user.js'
import { authenticate, restrict } from '../auth/auth.js'


const router = Router()
router.get('/', authenticate, restrict(['admin']), UserCtrl.allUsers)
router.get('/:userId', authenticate, restrict(['patient']), UserCtrl.showUser)
router.put('/:userId', authenticate, restrict(['patient']), UserCtrl.updateUser)
router.delete('/:userId', authenticate, restrict(['patient']), UserCtrl.deleteUser)

export { router }