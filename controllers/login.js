const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.getLogin = async (req, res, next) => {
    try {
        let { username, password } = req.body;
        const user = await prisma.User.findUnique({ where: { email } });
        if (!user) {
          return res.status(400).json({
            status: false,
            message: "Bad Request",
            err: "Email atau password salah",
            data: null,
          });
        }
    
        // let isPasswordCorrect = await bcrypt.compare(password, user.password);
        // if (!isPasswordCorrect) {
        //   return res.status(400).json({
        //     status: false,
        //     message: "Bad Request",
        //     err: "Email atau password salah",
        //     data: null,
        //   });
        // }
    
        // if (!user.isActivated) {
        //   return res.status(400).json({
        //     status: false,
        //     message: 'Bad Request',
        //     err: 'You are not activated',
        //     data: null,
        //   });
        // }
    
        // let token = jwt.sign({ email: user.email }, JWT_SECRET_KEY);
        res.status(200).json({
          status: true,
          message: "OK",
          err: null,
          data: { user},
        });
      } catch (err) {
        next(err);
      }
};

exports.postLogin = async (req, res) => {
    const { username, password } = req.body;
    
    // Validasi input
    if (!username || !password) {
        return res.render('login', { error: 'Username and password are required' });
    }

    // Cek username dan password dengan database
    try {
        const user = await prisma.User.findUnique({
            where: { username: username },
        });

        if (user && User.password === password) {
            // Login berhasil, arahkan ke halaman lain, misalnya dashboard
            res.redirect('/dashboard');
        } else {
            // Login gagal, kembalikan ke halaman login dengan pesan error
            res.render('login', { error: 'Invalid username or password' });
        }
    } catch (error) {
        console.error(error);
        res.render('login', { error: 'An error occurred. Please try again later.' });
    }
};
