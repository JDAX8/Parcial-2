export async function mydata(){
    try {
        const chuck = await fetch('https://api.chucknorris.io/jokes/random').then(res => res.json());

        console.log(chuck);
        return chuck.results;
    } catch (error) {
        console.error(error);
    }
}
