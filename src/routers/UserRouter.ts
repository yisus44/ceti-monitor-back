import { Router, Response, Request } from "express";
import ResponseDTO from "../DTOS/ResponseDTO";
import { IUser, User } from "../models/User";

const UserRouter = Router();

UserRouter.post(
  "/signup",
  async function (req: Request<{}, IUser>, res: Response) {
    try {
      const user = new User({
        email: req.body.email,
        password: req.body.password,
        username: req.body.username,
      });
      await user.save();
      return res.json(new ResponseDTO<IUser>(user, null, 201));
    } catch (error: any) {
      return res.json(new ResponseDTO<null>(null, error.message, 400));
    }
  }
);

UserRouter.post("/signin", async function (req: Request, res: Response) {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) throw new Error("Invalid credentials");

    if (user.password != req.body.password)
      throw new Error("Invalid credentials");

    return res.json(new ResponseDTO<typeof user>(user, null, 200));
  } catch (error: any) {
    return res.json(new ResponseDTO<null>(null, error.message, 400));
  }
});

export default UserRouter;
