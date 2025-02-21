import { useEffect, useState } from "react";

export const useIsAuth = () => {
    const [isAuth, setIsAuth] = useState<boolean>(false);
    useEffect(() => {
        const accessToken = localStorage.getItem("accessToken");
        if (accessToken) {
            setIsAuth(true);
        }
    }, []);
    return { isAuth };
};
