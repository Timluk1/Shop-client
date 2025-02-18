"use client"

import { Card, CardHeader, CardFooter, CardTitle, CardContent, CardDescription } from "@/shared/ui/shadcn/card";
import { TabsContent } from "@/shared/ui/shadcn/tabs";
import { Button } from "@/shared/ui/shadcn/button";
import { Input } from "@/shared/ui/shadcn/input";
import { Label } from "@/shared/ui/shadcn/label";

export const LoginForm = () => {
    return (
        <TabsContent value="login">
            <Card>
                <CardHeader>
                    <CardTitle>Login</CardTitle>
                    <CardDescription>
                        Login in your account
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                    <div className="space-y-1">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" />
                    </div>
                    <div className="space-y-1">
                        <Label htmlFor="text">Username</Label>
                        <Input id="username" />
                    </div>
                    <div className="space-y-1">
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" />
                    </div>
                </CardContent>
                <CardFooter>
                    <Button>Login</Button>
                </CardFooter>
            </Card>
        </TabsContent>
    )
}
