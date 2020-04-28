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
  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      nickname: Yup.string(),
      posto_grad: Yup.string(),
      email: Yup.string().email(),
      juridico: Yup.boolean(),
      oldPassword: Yup.string().min(6),
      password: Yup.string().min(6)
        .when('oldPassword', (oldPassword, field) => (oldPassword ? field.required() : field)),
      confirmPassword: Yup.string()
        .when('password', (password, field) => (password ? field.required().oneOf([Yup.ref('password')]) : field))
    });

    if (!(await schema.isValid(req.body))) {
      res.status(401).json({ error: "Input error" });
    }

    const { nickname, email, oldPassword } = req.body;
    const user = await User.findByPk(req.userId);

    // Validations
    if (nickname !== user.nickname) {
      const nickExists = await User.findOne({ where: { nickname } });
      if (nickExists) {
        return res.status(401).json({ error: "This nickname already exists" });
      }
    }
    if (email !== user.email) {
      const emailExists = await User.findOne({ where: { email } });
      if (emailExists) {
        return res.status(401).json({ error: "This email already exists" });
      }

    }
    if (oldPassword && !(await user.checkPassword(oldPassword))) {
      return res.status(401).json({ error: "Password does not Match" });
    }
    // End Validations

    const updatedUser = await user.update(req.body);

    return res.json(updatedUser);
  }
  async index(req, res) {
    const users = await User.findAll({
      order: id
    });

    if (!users) {
      return res.status(400).json({ error: "There's no one user on DB" });
    }
    return res.json(users);
  }
  async delete(req, res) {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(400).json({ error: "This user does not exists" });
    }
  }
}

export default new UserController();
