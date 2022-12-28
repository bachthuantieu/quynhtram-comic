import { ProtectedRoute } from "components/Authentication";
import FormGroup from "components/FormGroup";
import Input from "components/Input";
import Label from "components/Label";
import { defaultAvatar } from "constants/global";
import useInputChange from "hooks/useInputChange";
import LayoutUser from "layouts/LayoutUser";
import Template from "modules/Template";
import { UploadAvatar } from "modules/UploadAvatar";
import { useEffect, useState } from "react";
import useGlobalStore from "store/global-store";

const ProfilePage = () => {
  const { currentUser } = useGlobalStore();
  const [values, setValues] = useState({
    fullname: "",
    gender: "",
    avatar: defaultAvatar,
    address: ""
  });
  const { onChange } = useInputChange(values, setValues);
  useEffect(() => {
    if (!currentUser) return;
    setValues({ ...values, fullname: currentUser.displayName, avatar: currentUser.photoURL });
  }, [currentUser]);
  return (
    <ProtectedRoute>
      <LayoutUser>
        <Template
          title="Thông tin tài khoản"
          desc="Cập nhật đầy đủ thông tin của bạn để được hỗ trợ tốt hơn"
        >
          <div className="flex flex-col-reverse gap-14 lg:flex-row">
            <form
              className="w-full mt-3 max-w-[500px]"
              autoComplete="off"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <FormGroup>
                <Label htmlFor="email">Địa chỉ email</Label>
                <Input
                  name="email"
                  disabled
                  value={currentUser?.email || ""}
                  placeholder="Địa chỉ email"
                  onChange={onChange}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="fullname">Họ và tên</Label>
                <Input
                  name="fullname"
                  value={values.fullname || ""}
                  placeholder="Nhập họ và tên"
                  onChange={onChange}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="address">Địa chỉ</Label>
                <Input
                  name="address"
                  value={values.address || ""}
                  placeholder="Nhập địa chỉ"
                  onChange={onChange}
                />
              </FormGroup>
              <div className="flex items-center w-full mb-3 gap-7">
                <Label htmlFor="gender">Giới tính</Label>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="gender"
                      value="boy"
                      className="w-[15px] h-[15px] cursor-pointer"
                    />
                    <span>Nam</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="gender"
                      value="girl"
                      className="w-[15px] h-[15px] cursor-pointer"
                    />
                    <span>Nữ</span>
                  </div>
                </div>
              </div>
              <button type="submit" className="w-full py-3 mt-2 text-white rounded bg-redff4">
                Cập nhật
              </button>
            </form>
            <div className="flex-1">
              <UploadAvatar />
            </div>
          </div>
        </Template>
      </LayoutUser>
    </ProtectedRoute>
  );
};

export default ProfilePage;
