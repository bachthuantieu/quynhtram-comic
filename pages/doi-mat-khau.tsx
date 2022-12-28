import FormGroup from "components/FormGroup";
import { InputPassword } from "components/InputPassword";
import Label from "components/Label";
import { WrapLink } from "components/link";
import { PATH } from "constants/path";
import { EmailAuthProvider, reauthenticateWithCredential, updatePassword } from "firebase/auth";
import useInputChange from "hooks/useInputChange";
import LayoutUser from "layouts/LayoutUser";
import { auth } from "libs/firebase-app";
import Template from "modules/Template";
import { FormEvent, useState } from "react";
import { toast } from "react-toastify";

const ChangePasswordPage = () => {
  const [values, setValues] = useState({
    password: "",
    newPassword: "",
    confirmPassword: ""
  });
  const { onChange } = useInputChange(values, setValues);
  const handleChangePassword = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isAllInputFilled = Object.values(values).every((value) => value !== "");
    if (!isAllInputFilled) {
      toast.error("Please fill all inputs!");
      return;
    }
    if (values.newPassword !== values.confirmPassword) {
      toast.error("Password not same!");
      return;
    }
    try {
      if (!auth?.currentUser) return;
      const credential = EmailAuthProvider.credential(
        auth?.currentUser.email as string,
        values.password
      );
      await reauthenticateWithCredential(auth?.currentUser, credential);
      await updatePassword(auth?.currentUser, values.newPassword);
      toast.success("Change password successfully!");
    } catch (error: any) {
      toast.error(error?.message);
    }
  };

  return (
    <LayoutUser>
      <Template
        title="Đổi Mật Khẩu"
        desc="Để bảo vệ tài khoản, vui lòng không chia sẻ mật khẩu cho người khác"
      >
        <form
          autoComplete="off"
          className="w-full mt-3 max-w-[500px]"
          onSubmit={handleChangePassword}
        >
          <FormGroup>
            <Label htmlFor="password">Mật khẩu</Label>
            <InputPassword
              name="password"
              placeholder="Nhập mật khẩu"
              onChange={onChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="newPassword">Mật khẩu mới</Label>
            <InputPassword
              name="newPassword"
              placeholder="Nhập mật khẩu mới"
              onChange={onChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="confirmPassword">Xác nhận mật khẩu mới</Label>
            <InputPassword
              name="confirmPassword"
              placeholder="Nhập xác nhận mật khẩu mới"
              onChange={onChange}
              required
            />
          </FormGroup>
          <button type="submit" className="w-full py-3 mt-2 text-white rounded bg-redff4">
            Đổi mật khẩu
          </button>
        </form>
        <WrapLink className="inline-block mt-3 text-center" href={PATH.forgotPassword}>
          Quên mật khẩu?
        </WrapLink>
      </Template>
    </LayoutUser>
  );
};

export default ChangePasswordPage;
