const { Products, Product_units, Product_dtl, Product_discount, Categories, Currency, Status_list, Brands, Product_variant_group, Product_variant_group_option, Product_variants } = require("../../config/db.config"); 
const { Op } = require("sequelize");

exports.getProducts = async (req, res) => {

    const whereParams = {
        deleted_at : {
            [Op.is]: null
        }
    }

    if(req.query.category){
        whereParams.category_id = req.query.category
    }

    const data = await Products.findAll({
        include: [
            { model: Product_units },
            { model: Categories },
            { model: Status_list },
            { model: Brands },
            {
                model: Product_dtl,
                include: [
                    { model: Product_discount },
                    { model: Currency },
                    { 
                        model: Product_variant_group, 
                        include : [
                            {
                                model : Product_variant_group_option,
                                include : [
                                    { model : Product_variants }
                                ]
                            }
                        ]
                    },
                ],
            }
        ],
        where : whereParams,
    });
    return res.status(200).json({ success: true, data: data });
}
