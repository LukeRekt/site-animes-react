export const register = async ({ username, email, password, userAvatar } = {}) => {
    const user = { username, email, password, userAvatar };

    try {
        const res = await fetch(`${process.env.REACT_APP_API_URL}/registrar`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user),
        });
        return await res.json();
    } catch (err) {
        throw new Error(`Nao foi possivel registrar. ${err}`);
    }
};

export const login = async ({email, password } = {}) => {
    const user = {email, password };

    try {
        const res = await fetch(`${process.env.REACT_APP_API_URL}/login`, {
            method: 'POST',
            credentials: "include",
            headers: {
                Accept: 'application/json',
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user),
        });
        return await res.json();
    } catch (err) {
        throw new Error(`Nao foi possivel fazer Login. ${err}`);
    }
};

export const logout = async () => {
    try {
        const res = await fetch(`${process.env.REACT_APP_API_URL}/logout`, {
            method: 'GET',
            credentials: 'include',
        });
        return await res.json();
    }catch(err){
        console.log(err);
    }
};
export const getUser = async () => {
    try {
        const res = await fetch(`${process.env.REACT_APP_API_URL}/user`, {
            method: 'GET',
            credentials: 'include',
        });
        return await res.json();
    }catch(err){
        throw new Error("Pfv login para continuar")
    }
};