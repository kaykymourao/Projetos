import { useState, useEffect } from "react";
//O useState permite gerenciar e renderizar valores
const Hooks = () => {
    let idade = 30;
    const [novaIdade, setNovaIdade] = useState(40);

    const changeAge = () => {
        idade = 31;
        console.log(idade);
    };

    const changeNewAge = () => {
        setNovaIdade(45);
    };

    return(
        <div>
            <p>Idade: {idade}</p>
            <button onClick={changeAge}>Mudar Idade</button>
            <p>Idade: {novaIdade}</p>
            <button onClick={changeNewAge}>Mudar Nova Idade</button>
        </div>
    );
};

export default Hooks;