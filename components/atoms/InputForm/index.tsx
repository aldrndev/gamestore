interface InputFormProps {
  label: string;
  title: string;
  type: string;
  name: string;
  id: string;
  placeholder: string;
  describedby: string;
}

export default function InputForm(props: InputFormProps) {
  const { label, title, type, name, id, placeholder, describedby } = props;
  return (
    <div className="pt-30">
      <label
        htmlFor={label}
        className="form-label text-lg fw-medium color-palette-1 mb-10"
      >
        {title}
      </label>
      <input
        type={type}
        className="form-control rounded-pill text-lg"
        id={id}
        name={name}
        aria-describedby={describedby}
        placeholder={placeholder}
      />
    </div>
  );
}
