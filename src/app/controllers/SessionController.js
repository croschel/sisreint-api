import jwt from 'jsonwebtoken';

import User from '../models/User';
import authConfig from '../../configs/auth';

class SessionController {
  async store(req, res) {
    const { nickname, password } = req.body;

    const user = await User.findOne({ where: { nickname } });

    if (!user) {
      return res.status(401).json({ error: 'User does not exists!' })
    }

    if (!(await user.checkPassword(password))) {
      return res.status(401).json({ error: 'User / Password does not match' });
    }

    const { id, name, email } = user;
    return res.json({
      user: {
        id,
        name,
        nickname,
        email,
      },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      })
    })
  }
}

export default new SessionController();
