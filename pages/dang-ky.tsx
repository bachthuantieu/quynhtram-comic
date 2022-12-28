import FormGroup from "components/FormGroup";
import Input from "components/Input";
import { InputPassword } from "components/InputPassword";
import Label from "components/Label";
import { WrapLink } from "components/link";
import { defaultAvatar, userRole, userStatus } from "constants/global";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import useInputChange from "hooks/useInputChange";
import { auth, db } from "libs/firebase-app";
import { FormEvent, useState } from "react";
import { toast } from "react-toastify";

const SignUpPage = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    confirmPassword: ""
  });
  const { onChange } = useInputChange(values, setValues);
  const handleSignUp = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isAllInputFilled = Object.values(values).every((value) => value !== "");
    if (!isAllInputFilled) {
      toast.error("Please fill all inputs!");
      return;
    }
    if (values.password !== values.confirmPassword) {
      toast.error("Confirmation password do not match!");
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, values.email, values.password);
      if (!auth.currentUser) return;
      await updateProfile(auth.currentUser, {
        photoURL: defaultAvatar
      });
      await setDoc(doc(db, "users", auth.currentUser.uid as string), {
        uid: auth.currentUser.uid,
        photoURL: defaultAvatar,
        displayName: auth.currentUser.displayName || "Người dùng",
        email: values.email,
        password: values.password,
        status: userStatus.ACTIVE,
        role: userRole.USER,
        createdAt: serverTimestamp(),
        follows: []
      });
      toast.success("Sign up successfully!");
    } catch (error: any) {
      toast.error(error?.message);
    }
  };
  return (
    <div className="relative min-h-screen before:bg-cover before:brightness-[0.6] before:bg-auth before:inset-0 before:absolute flex items-center">
      <form
        onSubmit={handleSignUp}
        className="bg-white p-10 rounded-2xl w-full max-w-[500px] z-20 relative mx-auto"
      >
        <h1 className="mb-4 text-xl font-bold text-center md:text-2xl text-dark4d">Đăng ký</h1>

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
        <FormGroup>
          <Label htmlFor="confirmPassword">Xác nhận mật khẩu</Label>
          <InputPassword
            name="confirmPassword"
            placeholder="Xác nhận mật khẩu ít nhất 8 kí tự"
            onChange={onChange}
          />
        </FormGroup>
        <button type="submit" className="w-full py-3 mt-2 text-white rounded bg-redff4">
          Đăng ký
        </button>
        <div className="flex items-center justify-between mt-3">
          <WrapLink>Đăng nhập ngay</WrapLink>
          <WrapLink>Quên mật khẩu?</WrapLink>
        </div>
      </form>
    </div>
  );
};

export default SignUpPage;
