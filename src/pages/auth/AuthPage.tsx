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
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useState } from "react";

const AuthPage = () => {
  const navigate = useNavigate();

  const [see, setSee] = useState<boolean>(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <h1 className="mb-2 text-2xl text-center cursor-default">
            Log In to <b className="text-primary">GamesCollect</b>
          </h1>
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
              {/* EMAIL */}
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  autoComplete="email"
                  required
                />
              </div>
              {/* PASSWORD */}
              <Field className="max-w-sm">
                <FieldLabel htmlFor="password">Password</FieldLabel>
                <InputGroup className="-mt-1">
                  <InputGroupInput
                    id="password"
                    type={see ? "text" : "password"}
                    placeholder="Enter password"
                    required
                  />
                  <InputGroupAddon
                    onClick={() => setSee(!see)}
                    align="inline-end"
                    className="hover:cursor-pointer"
                  >
                    {see ? <EyeOffIcon /> : <EyeIcon />}
                  </InputGroupAddon>
                </InputGroup>
                 {/* <FieldError>Validation message.</FieldError> */}
                <FieldDescription className="flex justify-end">
                  Forgot your password?
                </FieldDescription>
              </Field>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button
            type="submit"
            className="w-full text-lg"
            onClick={() => navigate("/home")}
          >
            Log in
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
