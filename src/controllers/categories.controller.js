const { Categories } = require("../../config/db.config"); 
const { Op } = require("sequelize");

exports.getCategories = async (req, res) => {

    const whereParams = {
        deleted_at : {
            [Op.is]: null
        }
    }
    
    const data = await Categories.findAll({
        where : whereParams,
    });
    return res.status(200).json({ success: true, data: data });
}
