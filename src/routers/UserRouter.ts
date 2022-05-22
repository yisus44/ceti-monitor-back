import { Router, Response, Request } from "express";
import ResponseDTO from "../DTOS/ResponseDTO";
import { IUser, User } from "../models/User";

const UserRouter = Router();

UserRouter.get(
  "/user/:id",
  async function (req: Request<any, IUser>, res: Response) {
    try {
      const id = req.params.id;
      if (!id) throw new Error("Provide a id");
      const user = await User.findById(id);
      return res.json(new ResponseDTO<typeof user>(user, null, 200));
    } catch (error: any) {
      return res.json(new ResponseDTO<null>(null, error.message, 400));
    }
  }
);

UserRouter.post(
  "/user",
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

UserRouter.post("/user/session", async function (req: Request, res: Response) {
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
