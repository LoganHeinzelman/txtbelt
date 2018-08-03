const superagent = require("superagent");

module.exports = class sms {
    constructor(host) {
        this.host = host;
    }

    text(number, message, provider) {
        const providers = ["intl", "canada", "text"];
        if (!provider) provider = "text";
        if (!providers.includes(provider))
            throw new Error("Not a valid provider");
        superagent
            .post(`${this.host}/${provider.toLowerCase()}`)
            .send({ number: number, message: message })
            .end((err, res) => {
				if (err) {
					throw new Error(err);
				} else {
					return res.body;
				}
            });
    }
};
