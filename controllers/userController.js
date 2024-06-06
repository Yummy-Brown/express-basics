const users = require("../models/users");

// getHomepage
const getHomepage = (req, res) => {
    res.status(200).send("Home Page");
}


// getAboutpage
const getAboupage = (req, res) => {
    res.status(200).send("About Page");
}


// get Users
 const getUsers =  (req, res) => {
  res.status(200).json({ users, numOfUsers: users.length });
};



//get a Single User
const getSingleUser = (req, res) => {
       const { userId } =req.params;
   const user = users.find((user) => user.id === parseInt(userId));
   if(!user) {
    return res.status(404).json({
        success: false,
        message: `User with the id ${userId} not found`,
    })
   }

   res.status(200).json({ success: true, user });

};


module.exports = {getHomepage, getAboupage, getUsers, getSingleUser};
