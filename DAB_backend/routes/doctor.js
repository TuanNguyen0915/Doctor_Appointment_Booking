import { Router } from "express"
import * as doctorCtrl from "../controllers/doctorController.js"
import { authenticate, restrict } from "../auth/verifyToken.js"
const router = Router()

router.get('/:doctorId', doctorCtrl.showDoctor)
router.get('/', doctorCtrl.getAllDoctors)
router.put('/:doctorId', authenticate, restrict(['doctor']), doctorCtrl.updateDoctor)
router.delete('/:doctorId', authenticate, restrict(['doctor']), doctorCtrl.deleteDoctor)

export { router }