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
import { useAuth } from "@/entities/Auth/lib";
import { Label } from "@/shared/ui/shadcn/label";
import { useForm } from "react-hook-form";
import { FormInput } from "@/shared/ui/FormInput/FormInput";
import { useToast } from "@/shared/lib/use-toast";
import { useEffect } from "react";

interface FormData {
    email: string;
    password: string;
}

export const LoginForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        mode: "onBlur",
        criteriaMode: "all",
        defaultValues: {
            email: "",
            password: "",
        },
    });
    const { toast } = useToast();
    const { handleAuth, error, isPending } = useAuth();

    useEffect(() => {
        if (error) {
            toast({
                title: "Login failed",
                description: error || "Something went wrong",
                variant: "destructive",
            });
        }
    }, [isPending, error, toast]);

    return (
        <TabsContent value="login">
            <Card className="font-mont">
                <CardHeader>
                    <CardTitle className="text-center text-2xl font-medium">
                        Login
                    </CardTitle>
                </CardHeader>
                <form onSubmit={handleSubmit(handleAuth)}>
                    <CardContent className="space-y-2">
                        <div className="space-y-1">
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
                        </div>
                        <div className="space-y-1">
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
                                        message: "Password must be at least 6 characters",
                                    },
                                }}
                            />

                        </div>
                    </CardContent>
                    <CardFooter className="flex justify-center">
                        <Button type="submit" disabled={isPending}>
                            Login
                        </Button>
                    </CardFooter>
                </form>
            </Card>
        </TabsContent>
    );
};
