"use client";

import {
    Card,
    CardHeader,
    CardFooter,
    CardTitle,
    CardContent,
} from "@/shared/ui/shadcn/card";
import { TabsContent } from "@/shared/ui/shadcn/tabs";
import { Button } from "@/shared/ui/shadcn/button";
import { useForm } from "react-hook-form";
import { Label } from "@/shared/ui/shadcn/label";
import { FormInput } from "@/shared/ui/FormInput/FormInput";
import { useAuth } from "@/entities/Auth/lib";
import { useEffect } from "react";
import { useToast } from "@/shared/lib/use-toast";

interface FormData {
    email: string;
    password: string;
    confirmPassword: string;
}

export const RegistrationForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm<FormData>({
        mode: "onBlur",
        criteriaMode: "all",
        defaultValues: {
            email: "",
            password: "",
            confirmPassword: "",
        },
    });

    const { handleAuth, error, isPending } = useAuth();
    const { toast } = useToast();
    useEffect(() => {
        if (error) {
            toast({
                title: "Registration failed",
                description: error || "Something went wrong",
                variant: "destructive",
            });
        }
    }, [isPending, error, toast]);

    return (
        <TabsContent value="registration">
            <Card className="font-mont">
                <CardHeader>
                    <CardTitle className="text-center text-2xl font-medium">
                        Create account
                    </CardTitle>
                </CardHeader>
                <form onSubmit={handleSubmit(handleAuth)}>
                    <CardContent className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <FormInput
                            name="email"
                            placeholder="Email"
                            className="h-11"
                            register={register}
                            error={errors.email?.message || ""}
                            rules={{
                                required: "Email is required",
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: "Invalid email format",
                                },
                            }}
                        />
                        <Label htmlFor="password">Password</Label>
                        <FormInput
                            name="password"
                            placeholder="Password"
                            className="h-11"
                            type="password"
                            register={register}
                            error={errors.password?.message || ""}
                            rules={{
                                required: "Password is required",
                                minLength: {
                                    value: 6,
                                    message:
                                        "Password must be at least 6 characters",
                                },
                            }}
                        />
                        <Label htmlFor="password">Confirm password</Label>
                        <FormInput
                            name="confirmPassword"
                            placeholder="Confirm password"
                            className="h-11"
                            type="password"
                            register={register}
                            error={errors.confirmPassword?.message || ""}
                            rules={{
                                required: "Confirm password is required",
                                validate: (value) =>
                                    value === watch("password") ||
                                    "Passwords do not match",
                            }}
                        />
                    </CardContent>
                    <CardFooter className="flex justify-center">
                        <Button type="submit" disabled={isPending}>
                            Register
                        </Button>
                    </CardFooter>
                </form>
            </Card>
        </TabsContent>
    );
};
