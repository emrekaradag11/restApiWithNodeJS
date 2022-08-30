const { Currency } = require("../../config/db.config"); 
const { Op } = require("sequelize");

exports.getCurrencies = async (req, res) => {

    const whereParams = {
        deleted_at : {
            [Op.is]: null
        }
    }
    
    const data = await Currency.findAll({
        where : whereParams,
    });
    return res.status(200).json({ success: true, data: data });
}
