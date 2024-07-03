const profileModel = require("../models/profileModel.js");
const ngoProfileModel = require("../models/ngoProfileModel.js");
const profileController = async (req, res,next) => {
  try {
    const {
      firstName,
      lastName,
      genderIn,
      phoneNumber,
      dob,
      country,
      education,
      city,
      avatar,
      userId
    } = req.body;
    const userExist = await profileModel.findOne({userId : userId});
    if(userExist){
      const updatedProfile = await profileModel.findOneAndUpdate({userId : userId},{
        $set : {
          firstName : firstName,
          lastName : lastName,
          avatar : avatar,
          gender : genderIn,
          phoneNumber : phoneNumber,
          dob : dob,
          country : country,
          education : education,
          city : city
        }
    },{new : true})
    return res.json({
      success: true,
      message: "Profile Updated Successfully",
      data : updatedProfile
    });
  }
    const profile = new profileModel({
      firstName: firstName,
      lastName: lastName,
      avatar: avatar,
      gender: genderIn,
      phoneNumber: phoneNumber,
      dob: dob,
      country: country,
      education: education,
      city: city,
      userId : userId
    });
    await profile.save();
    res.json({
      success: true,
      message: "Profile Created Successfully",
    });
  } catch (err) {
    next(err);
  }
};

const ngoProfileController = async (req, res, next) => {
  try {
    const {
      name,
      phone,
      country,
      city,
      webLink,
      desc,
      avatar,
      orgId
    } = req.body;
    const userExist = await profileModel.findOne({orgId : orgId});
    if(userExist){
      const updatedProfile = await profileModel.findOneAndUpdate({orgId : orgId},{
        $set : {
          name: name,
          phoneNumber: phone,
          country: country,
          city: city,
          website: webLink,
          description: desc,
          avatar: avatar,
        }
    },{new : true})

    return res.json({
      success: true,
      message: "Profile Updated Successfully",
      data : updatedProfile
    });
  }
    const profile = new ngoProfileModel({
      name: name,
      phoneNumber: phone,
      country: country,
      city: city,
      website: webLink,
      description: desc,
      avatar: avatar,
      orgId : orgId
    });
    await profile.save();
    res.json({
      success: true,
      message: "Profile Created Successfully",
    });
  } catch (err) {
    next(err);
  }
}

const userProfile = (req,res)=>{
  const id = req.params.id;
  console.log(id);
  profileModel.findOne({userId : id})
  .then((data)=>{
    console.log(data);
    res.json(data);
  })
  .catch((err)=>{
    console.log(err);
    res.json(err);
  })
}

const ngoProfile = (req,res)=>{
  const id = req.params.id;
  ngoProfileModel.findOne({orgId : id})
  .then((data)=>{
    console.log(data);
    res.json(data);
  })
  .catch((err)=>{
    console.log(err);
    res.json(err);
  })
}

module.exports = {profileController,ngoProfileController , userProfile, ngoProfile};