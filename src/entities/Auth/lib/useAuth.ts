import { useEffect, useState } from "react";
import { axiosInstance, apiPaths } from "@/shared/api/axios";
import { useRouter } from "next/navigation";
import { useIsAuth } from "@/shared/lib/useIsAuth";

interface IUseAuthReturn {
    handleAuth: (data: IAuthData & { confirmPassword?: string }) => void;
    isPending: boolean;
    error: string | null;
}

interface IAuthData {
    email: string;
    password: string;
}

export const useAuth = (): IUseAuthReturn => {
    const router = useRouter();
    const [isPending, setIsPending] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const { isAuth } = useIsAuth();

    useEffect(() => {
        if (isAuth) {
            router.push("/");
        }
    }, [router, isAuth]);

    const handleAuth = async (
        data: IAuthData & { confirmPassword?: string },
    ) => {
        setIsPending(true);
        setError(null);

        try {
            const path = data.confirmPassword
                ? apiPaths.registration
                : apiPaths.login;
            const { data: responseData } = await axiosInstance.post(path, {
                email: data.email,
                password: data.password,
            });
            localStorage.setItem("accessToken", responseData.accessToken);
            router.push("/");
        } catch {
            setError("Authentication failed");
        } finally {
            setIsPending(false);
        }
    };

    return { handleAuth, isPending, error };
};
