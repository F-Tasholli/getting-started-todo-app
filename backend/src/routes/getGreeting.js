const GREETING = 'Ciao Fatijon!';

module.exports = async (req, res) => {
    res.send({
        greeting: GREETING,
    });
};
