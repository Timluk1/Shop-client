import { Tabs, TabsList, TabsTrigger } from "@/shared/ui/shadcn/tabs";
import { LoginForm, RegistrationForm } from "@/entities/Auth";

export default function Page() {
    return (
        <Tabs defaultValue="login" className="font-mont w-[400px]">
            <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="registration">Registration</TabsTrigger>
            </TabsList>
            <LoginForm />
            <RegistrationForm />
        </Tabs>
    );
}
