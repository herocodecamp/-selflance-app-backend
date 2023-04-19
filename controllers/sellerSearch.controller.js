const JobPost = require('../models/JobPost')




const getJobSearchandFilter = async(req,res)=>{

    const page = parseInt(req.query.page) - 1 || 0;
    const limit = parseInt(req.query.limit) || 5;
    // title search
    const search = req.query.search || "";
    // category as filter
    let subCategory = req.query.subCategory || "All";
    // language as filter
    let language = req.query.language || "All";
    // seller Level as filter
    let experience = req.query.experience || "All";

    
    
try{

    const jobData = await JobPost.find({title: { $regex: search, $options: "i" }})

    // getting all categories in search
    let toFilter=[]
    jobData.map((item)=>{
        return(
            toFilter.push(item.category)
        )
    })

    let uniqueFilter = [...new Set(toFilter)];

    // getting all language in search
      let languageFilter=[]
      jobData.map((item)=>{
          return(
              languageFilter.push(item.language)
          )
      })
  
      let uniqueLanguageFilter = [...new Set(languageFilter)];

    // getting all experience in search
    let experienceFilter=[]
    jobData.map((item)=>{
        return(
            experienceFilter.push(item.experience)
        )
    })

    let uniqueExperienceFilter = [...new Set(experienceFilter)];

    // for language
    language === "All"
        ? (language = [...uniqueLanguageFilter])
        : (language = req.query.language.split(","));

    // for category
    subCategory === "All"
    ? (subCategory = [...uniqueFilter])
    : (subCategory = req.query.subCategory.split(","));

    // for experience
    experience === "All"
    ? (experience = [...uniqueExperienceFilter])
    : (experience = req.query.experience.split(","));



    

    const jobDataFilter = await JobPost.find({title: { $regex: search, $options: "i" }}).where("category")
    .in([...subCategory])
    .where('experience').in([...experience])
    .where('language').in([...language])
    .skip(page * limit)
    .limit(limit).populate({
        path: 'userDetail',
        select: 'firstname lastname profileImage'
    })


    const total= await JobPost.countDocuments({
        category: { $in:[...subCategory]},
       title: { $regex: search, $options: "i" }
                                        },)

    const response = {
        page: page,
        totalSearch: total,
        queryData: jobDataFilter,
        categories: uniqueFilter,
        languages: uniqueLanguageFilter,
        experiences: uniqueExperienceFilter,
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

module.exports = {getJobSearchandFilter}