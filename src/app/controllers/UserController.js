import * as Yup from 'yup';
import User from '../models/User';

class UserController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      nickname: Yup.string().required(),
      posto_grad: Yup.string().required(),
      email: Yup.string().email().required(),
      juridico: Yup.boolean().required(),
      password: Yup.string().required().min(6),
    });

    if (!(await schema.isValid(req.body))) {
      res.status(401).json({ error: "Input error" });
    }

    const userExists = await User.findOne({ where: { nickname: req.body.nickname } });

    if (userExists) {
      return res.status(401).json({ error: "User Already Exists" });
    }

    const { id, name, nickname, posto_grad, email, juridico } = await User.create(req.body);

    return res.json({
      id, name, nickname, posto_grad, email, juridico
    });
  }
}

export default new UserController();
