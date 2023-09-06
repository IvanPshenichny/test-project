module.exports = (req, res, next) => {
    const {firstname, lastname, email, passwords} = req.body;

    function validEmail (email) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
    }
    if (req.path === '/register') {
        if(!firstname) {
            return res.status(401).json('Missing firstname');
        }
        else if(![lastname].every(Boolean)) {
            return res.status(401).json('Missing lastname');
        }
        else if(![email].every(Boolean)) {
            return res.status(401).json('Missing email');
        }
        else if(![passwords].every(Boolean)) {
            return res.status(401).json('Missing passwords');
        }
        else if(!validEmail(email)) {
            return res.status(401).json('Invalid email');
        }
    }
    else if (req.path === '/login') {
        if(![email, passwords].every(Boolean)) {
return res.status(401).json('Missing Credentials');
        }
        
        else if (!validEmail(email)) {
            return res.status(401).json('Invalid email')
        }
        
        }
        next();
    }
