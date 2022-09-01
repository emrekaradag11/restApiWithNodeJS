const { Members } = require("../../config/db.config"); 
const { Op } = require("sequelize");

exports.getMembers = async (req, res) => {
    const data = await Members.findAll();
    return res.status(200).json({ success: true, data: data });
}
