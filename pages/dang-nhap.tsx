import { CheckLoggedIn } from "components/Authentication";
import FormGroup from "components/FormGroup";
import Input from "components/Input";
import { InputPassword } from "components/InputPassword";
import Label from "components/Label";
import { WrapLink } from "components/link";
import { PATH } from "constants/path";
import { signInWithEmailAndPassword } from "firebase/auth";
import useInputChange from "hooks/useInputChange";
import { auth } from "libs/firebase-app";
import { FormEvent, useState } from "react";
import { toast } from "react-toastify";

const SignInPage = () => {
  const [values, setValues] = useState({
    email: "",
    password: ""
  });
  const { onChange } = useInputChange(values, setValues);
  const handleSignIn = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isAllInputFilled = Object.values(values).every((value) => value !== "");
    if (!isAllInputFilled) {
      toast.error("Vui lòng nhập đầy đủ thông tin!");
      return;
    }
    try {
      await signInWithEmailAndPassword(auth, values.email, values.password);
      toast.success("Đăng nhập thành công!");
    } catch (error: any) {
      toast.error(error.message);
    }
  };
  return (
    <CheckLoggedIn>
      <div className="relative min-h-screen before:bg-cover before:brightness-[0.6] before:bg-auth before:inset-0 before:absolute flex items-center">
        <form
          onSubmit={handleSignIn}
          className="bg-white p-10 rounded-2xl w-full max-w-[500px] z-20 relative mx-auto"
        >
          <h1 className="mb-4 text-xl font-bold text-center md:text-2xl text-dark4d">Đăng nhập</h1>
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input name="email" type="email" placeholder="Nhập địa chỉ email" onChange={onChange} />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="password">Mật khẩu</Label>
            <InputPassword
              name="password"
              placeholder="Mật khẩu ít nhất 8 kí tự"
              onChange={onChange}
            />
          </FormGroup>
          <button type="submit" className="w-full py-3 mt-2 text-white rounded bg-redff4">
            Đăng nhập
          </button>
          <div className="flex items-center justify-between mt-3">
            <WrapLink href={PATH.signUp}>Đăng ký ngay</WrapLink>
            <WrapLink href={PATH.forgotPassword}>Quên mật khẩu?</WrapLink>
          </div>
        </form>
      </div>
    </CheckLoggedIn>
  );
};

export default SignInPage;
