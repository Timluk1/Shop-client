"use client"

import { Card, CardHeader, CardFooter, CardTitle, CardContent, CardDescription } from "@/shared/ui/shadcn/card";
import { TabsContent } from "@/shared/ui/shadcn/tabs";
import { Button } from "@/shared/ui/shadcn/button";
import { Input } from "@/shared/ui/shadcn/input";
import { Label } from "@/shared/ui/shadcn/label";

export const RegistrationForm = () => {
    return (
        <TabsContent value="registration">
            <Card>
                <CardHeader>
                    <CardTitle>Registration</CardTitle>
                    <CardDescription>
                        Create your account here
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                    <div className="space-y-1">
                        <Label htmlFor="emaik">Email</Label>
                        <Input id="email" />
                    </div>
                    <div className="space-y-1">
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" />
                    </div>
                    <div className="space-y-1">
                        <Label htmlFor="emaik">Password replace</Label>
                        <Input id="password-replace" />
                    </div>
                </CardContent>
                <CardFooter>
                    <Button>Registration</Button>
                </CardFooter>
            </Card>
        </TabsContent>
    )
}
