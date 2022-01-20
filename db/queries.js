
const showData = () => {
        db.query("SELECT * from employee", function (err, results){
        console.table(results)
    })
}


module.exports = showData;