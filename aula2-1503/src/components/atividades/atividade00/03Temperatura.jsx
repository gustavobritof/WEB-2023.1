const celsiusParaFahrenheit =(c)=>{
     let f = (9*c)/5 + 32;

    return f;
}

const fahrenheitParaCelsius = (f)=>{

    let c=((f-32)/9)*5;
    return c;

}

const kelvin =(k) =>{
    let c= k-273;
    let f = (k-273)*1.8+32

    return{c,f};
}

const Temperatura = () =>{

    return(
        <>
        <h1>Celsius p fahrenheit: {celsiusParaFahrenheit(10)}</h1>
        <h1>Fahrenheit p celsius: {fahrenheitParaCelsius(5)}</h1>
        <h1>Kelvyh para celsius: {kelvin(400).c}</h1>
        <h1>Kelvyh para fahrenheit: {kelvin(400).f}</h1>
        </>
    );

}

export default Temperatura;   