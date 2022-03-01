const logger = require('../logger/logger');
const axios = require('axios');

exports.index = async (req, res) => {
    try {
        const response = await axios.get('https://ipinfo.io/json');
        logger.info('//////////////////////////////////////////')
        logger.info('//////////////////////////////////////////')
        logger.info('-----Inicio-----')
        logger.info('Ip= ' + response.data.ip);
        logger.info('hostname= ' + response.data.hostname);
        logger.info('city= ' + response.data.city);
        logger.info('region= ' + response.data.region);
        logger.info('country= ' + response.data.country);
        logger.info('loc= ' + response.data.loc);
        logger.info('org= ' + response.data.org);
        logger.info('postal= ' + response.data.postal);
        logger.info('timezone= ' + response.data.timezone);
        logger.info('-----Fim-----')
        logger.info('//////////////////////////////////////////')
        logger.info('//////////////////////////////////////////')
       
        
        res.send('Ops! conteudo não esta disponivel');
    } catch (error) {
        logger.error('Error: ' + error);
    }
}
