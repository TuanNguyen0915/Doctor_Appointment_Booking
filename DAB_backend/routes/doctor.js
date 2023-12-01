import { Router } from "express"
import * as doctorCtrl from "../controllers/doctorController.js"

const router = Router()

router.get('/:doctorId', doctorCtrl.showDoctor)
router.get('/', doctorCtrl.getAllDoctors)
router.put('/:doctorId', doctorCtrl.updateDoctor)
router.delete('/:doctorId', doctorCtrl.deleteDoctor)

export { router }