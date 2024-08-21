class HealthController {
    static getHealth(req, res) {
        res.status(200).json({ status: 'ok' });
    }
}

module.exports = HealthController;
