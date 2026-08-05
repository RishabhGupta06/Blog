const {Router} = require("express");
const User = require('../models/user.js')

const router = Router();

router.get('/signin',(req,res) =>{
    return res.render('signin')
})
router.get('/signup',(req,res) =>{
    return res.render('signup')
});


router.post('/signin', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.matchPassword(email, password);
        console.log(user);
        return res.redirect("/");
    } catch (error) {
        console.error(error);
        return res.status(401).send(error.message);
    }
});

router.post('/signup', async(req,res) =>{
    const {fullName,email,password} = req.body;
    console.log(req.body);
    await User.create({
        fullName,
        email,
        password,
    });
    return res.redirect('/');
})

module.exports = router;