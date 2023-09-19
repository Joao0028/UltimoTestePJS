export const Botao = ({link, texto, target, downloaD})=>{
    return <button className=" botaoInicioPadrao botaoInicioSm"><a href={link} target={target} download={downloaD}>{texto}</a></button>
}