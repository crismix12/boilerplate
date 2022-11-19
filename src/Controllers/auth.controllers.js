//necesitar el servicio
const {AuthServices} = require('../Services');

const userLogin = async(req, res, next) => {
    try {
        //email y password
        const credentials = req.body;
        const result = await AuthServices.authenticate(credentials);
        // res.json(result);
        //false ==> no era contrasenia invalida
        //null ==> no se encuentra al usuario

        //Responde:
        //{isValid, result}
        //por eso result.result
        if(result) {
            const { firstname, lastname, email, id, phone } = result.result;
            const user = { firstname, lastname, email, id, phone };
            const token = AuthServices.genToken(user); 
            // res.json({token, user});
            user.token = token;
            res.json({...user});
        }else{
            res.status(400).json({message: 'Informacion invalida'});
        }
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: 'Email o contrasenia invalida'
        })       
    }
}

module.exports = {
    userLogin,

};