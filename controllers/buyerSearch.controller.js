
const Gig = require("../models/Gig");



const getSearchandFilter = async(req,res)=>{

        const page = parseInt(req.query.page) - 1 || 0;
		const limit = parseInt(req.query.limit) || 9;
        // category search
		const search = req.query.search || "";
        // subcategory as filter
		let subCategory = req.query.subCategory || "All";
        
    try{

        const gigData = await Gig.find({category: { $regex: search, $options: "i" }})
        // getting all subcategories
        let toFilter=[]
        gigData.map((item)=>{
            return(
                toFilter.push(item.subCategory)
            )
        })

        let uniqueFilter = [...new Set(toFilter)];


        subCategory === "All"
			? (subCategory = [...uniqueFilter])
			: (subCategory = req.query.subCategory.split(","));

        const gigDataFilter = await Gig.find({category: { $regex: search, $options: "i" }}).where("subCategory")
        .in([...subCategory]).skip(page * limit)
        .limit(limit).populate({
            path: 'userDetail',
            select: 'firstname lastname profileImage'
        })


        const total= await Gig.countDocuments({
            subCategory: { $in:[...subCategory]},
           category: { $regex: search, $options: "i" }
                                            },)

        const response = {
            page: page,
            totalSearch: total,
            queryData: gigDataFilter,
            subCategories: uniqueFilter,
            limit: limit,
            page: page+1
        }
        
        res.status(200).json(response);
    }
    catch(error)
    {
        res.status(500).json({ message: error.massage, type: error.name });
    }

}

module.exports = {getSearchandFilter}
