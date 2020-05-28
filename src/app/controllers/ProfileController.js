import * as Yup from 'yup';
import User from '../models/User';

class ProfileController {
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
}

export default new ProfileController();
