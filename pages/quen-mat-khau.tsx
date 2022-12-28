import FormGroup from "components/FormGroup";
import Input from "components/Input";
import Label from "components/Label";
import { WrapLink } from "components/link";
import { PATH } from "constants/path";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "libs/firebase-app";
import { FormEvent, useState } from "react";
import { toast } from "react-toastify";

const ResetPasswordPage = () => {
  const [email, setEmail] = useState("");
  const handleResetPassword = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) {
      toast.error("Vui lòng nhập email!");
      return;
    }
    try {
      e.preventDefault();
      await sendPasswordResetEmail(auth, email);
      toast.success("Đã gửi link đổi mật khẩu, vui lòng kiểm tra email!");
    } catch (error: any) {
      toast.error(error.message);
    }
  };
  return (
    <div className="relative min-h-screen before:bg-cover before:brightness-[0.6] before:bg-auth before:inset-0 before:absolute flex items-center">
      <form
        onSubmit={handleResetPassword}
        className="bg-white p-10 rounded-2xl w-full max-w-[500px] z-20 relative mx-auto"
      >
        <h1 className="mb-4 text-xl font-bold text-center md:text-2xl text-dark4d">
          Quên mật khẩu
        </h1>
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input
            name="email"
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>
        <button type="submit" className="w-full py-3 mt-2 text-white rounded bg-redff4">
          Gửi link đổi mật khẩu
        </button>
        <div className="mt-4 text-center">
          Chưa có tài khoản? <WrapLink href={PATH.signUp}>Đăng ký ngay</WrapLink>
        </div>
      </form>
    </div>
  );
};

export default ResetPasswordPage;
