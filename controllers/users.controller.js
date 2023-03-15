
// example
exports.createExample = (req,res) =>{
    try {
        res.status(200).json({result: 'success'})
    } catch (error) {
        res.status(500).json({message: error.message, type:error.name})
    }
}