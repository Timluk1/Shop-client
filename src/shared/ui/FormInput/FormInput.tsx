import { Input } from "../shadcn/input";
import {
    UseFormRegister,
    FieldValues,
    Path,
    RegisterOptions,
} from "react-hook-form";

interface IFormInputProps<T extends FieldValues>
    extends React.ComponentProps<"input"> {
    name: Path<T>;
    error?: string;
    placeholder?: string;
    register: UseFormRegister<T>;
    rules?: RegisterOptions<T>;
}

export const FormInput = <T extends FieldValues>({
    className,
    name,
    error,
    type,
    placeholder,
    register,
    rules,
}: IFormInputProps<T>) => {
    return (
        <div>
            <Input
                className={className}
                {...register(name, rules)}
                placeholder={placeholder}
                type={type}
            />
            <div className="h-6">
                <span className="text-red-600 text-sm">{error && error}</span>
            </div>
        </div>
    );
};
