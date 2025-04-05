const RenderCond = () => {
    const x = 7;
    //E possivel que ao inves de x receber o valor aqui, ele receber de outro lugar, nesse caso, viria do App.js, e bastaria colocar aqui: const RenderCond = ({x}) => {} esse x, iria pegar o valor passado

    //esse{x > 5 && <p>x e maior que 5 significa que</p> se x for maior que 5, escreve o <p></p>, e basicamente um if

    //Ja o {x > 5 ? <p>X e um numero alto</p>: <p>X e um numero baixo</p>} e basicamente o if else, se o x for maior que 5, escreve que e numero alto, se não ( que e representado pelo :), escreve que e numero baixo

    return(
        <div>
            {x > 5 && <p>x e maior que 5</p>}
            {x > 5 ? <p>X e um numero alto</p>: <p>X e um numero baixo</p>}
        </div>
    );
};

export default RenderCond;