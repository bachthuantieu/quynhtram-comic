interface FormGroupProps {
  children: React.ReactNode;
}

const FormGroup = ({ children }: FormGroupProps) => {
  return <div className="inline-flex flex-col w-full gap-2 mb-3">{children}</div>;
};

export default FormGroup;
