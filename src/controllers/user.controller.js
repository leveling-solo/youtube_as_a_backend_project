import { asyncHandler } from "../utils/asyncHanlder.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.models.js";
import { uploadCloudinary } from "../utils/cloudinary.js";
import { APiResponse } from "../utils/ApiResponse.js"; 
const registeUser = asyncHandler(async (req, res) => {
  // get user details from frontend
  const { username, email, password, fullname } = req.body;
  console.log("email :", email);
  console.log("password :", password);
  // validation cheeck that none of the object is empty

  if (
    [fullname, email, username, password].some((field) => field?.trim() === "")
  ) {
    throw new ApiError(400, `All fields are  required`);
  }

  // check if user already exists : username , email

  const existedUser = User.findOne({
    $or: [{ email }, { username }],
  });
  if (existedUser) {
    throw new ApiError(409, "User with email or username already exist");
  }
  //  check for images , check for avatar
  const avatarLocalPath = req.files?.avatar[0]?.path;

  const coverImgLocalPath = req.files?.coverImage[0]?.path;

  if (!avatarLocalPath) {
    throw new ApiError(400, "Avatar file is required");
  }

  // upload them to cloudinary , avatar  images cover image etc...
  const avatar = await updloadCloudinary(avatarLocalPath);

  const coverImg = await uploadCloudinary(coverImgLocalPath);

  if (avatar) {
    throw new ApiError(400, "Avatar file is required");
  }
  // create user object -create entry in db
  const user = await User.create({
    username: username.toLowerCase(),
    fullname,
    avatar: avatar.url,
    coverImage: coverImg?.url || "",
    eamil,
    password,
  });
  //  remove password and refresh token field from response
  const createdUser = await User.findById(user._id).select(
    "-password -refreshToken"
    );
    // check for user creation
    if(!createdUser){
        throw new ApiError(500 , "Something went wrong while registering the user in the database" )
    }
      
  // return response
  return res.status(201).json(
    new APiResponse(200, createdUser , "User registered Successfully")
  )

});

export { registeUser };
