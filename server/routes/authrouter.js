import e from "express";
import {signup} from "../controller/authcontroller.js";
import { login } from "../controller/authcontroller.js";
import { logout } from "../controller/authcontroller.js";
import { users } from "../controller/authcontroller.js";
import { checktoken } from "../middleware/checktoken.js";
const router = e.Router();

router.route('/signup').post(signup);
router.route('/login').post(login);
router.route('/logout').post(logout)
router.route('/users').get(checktoken,users)

export default router