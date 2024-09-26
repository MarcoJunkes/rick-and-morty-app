const fetchData = async(nome) => {
    const url = `https://rickandmortyapi.com/api/character/?name=${nome}`;

    const fetchResponse = await fetch(url);
    const data = await fetchResponse.json();

    return data;
}

export default fetchData;