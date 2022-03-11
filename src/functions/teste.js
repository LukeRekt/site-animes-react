export const getTeste = async () => {
    try{
        const res = await fetch('http://localhost:8080/teste', {
            method: 'GET',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        });
        return await res.json();
    }catch(err){

    }
}