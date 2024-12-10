import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCheckTokenLoading, setLoggedIn, setToken } from "../store/slices/globalSlice";

function useCheckToken() {
    const dispatch = useDispatch();

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            fetch(`${import.meta.env.VITE_API}/auth/check`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({token})
            })
            .then((res) => res.json())
            .then((res) => {
                if (res.success) {
                    dispatch(setLoggedIn(true));
                    dispatch(setToken(token));
                } else {
                    localStorage.removeItem('token');
                    window.location.href = '/login';
                }
            })
            .finally(() => {
                dispatch(setCheckTokenLoading(false));
            })
        } else {
            dispatch(setCheckTokenLoading(false));
        }
    }, [])
}

export default useCheckToken;