const con = require("../../database/connection");

function add_developer(req, res) {
    if(!req.file) {
        console.log('No file uploaded!')
    } else {

        const name = req.body.name
        const position = req.body.position
        const img_src = req.file.filename
        const email = req.body.email
        const home_phone = req.body.home_phone
        const mobile_phone = req.body.mobile_phone
        const insert_data = `INSERT INTO developer (name, position, img_src, email, home_phone, mobile_phone) VALUES ('${name}', '${position}', '${img_src}', '${email}', '${home_phone}', '${mobile_phone}')`

        con.query(insert_data, (err) => {
             if (err) console.log(`error query in adding new developer : ${err}`);
                res.redirect("/new-developer");
        })

    }
}


module.exports = add_developer