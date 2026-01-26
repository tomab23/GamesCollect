import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import silk from "../../assets/silk.png";

const AuthPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <Card className="w-full max-w-sm">
        <CardHeader>
            <h1 className="mb-2 text-2xl text-center cursor-default">
              Log In to <b className="text-primary">GamesCollect</b>
            </h1>
          {/* <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
          <CardAction>
            <Button variant="link">Sign Up</Button>
          </CardAction> */}
          <div className="outline-1 outline-accent h-28 rounded-2xl">
            <img
              src={silk}
              alt=""
              className="h-28 w-full object-cover rounded-2xl"
            />
          </div>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input id="password" type="password" required />
                <a
                  href="#"
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </a>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button
            type="submit"
            className="w-full text-lg"
            onClick={() => navigate("/home")}
          >
            Login
          </Button>

          {/* <div className="mt-5">
              Sign up
            </div> */}
        </CardFooter>
      </Card>
    </div>
  );
};

export default AuthPage;
