//6 Helper 

export const helpHttp = () =>{

    //Voya agregar metodos privados y publicos

    //metodo provado - peticion fetch ajax
        //recibe el endpoint y las opciones que pueda recibir la peticion fetch


    const customFetch = (endpoint,options) =>{
        //Para definir las variables de una vez en formato json
        const defaultHeader = {
            accept:"application/son"
        };
        //Abort controller en mozilla developer - si no hay respuesta del servidor abortamos para que no se quede pensando
        const controller = new AbortController(); //AbortController OBJETO QUE PERMITE CANCELAR MANUALMENTE
        //del objeto de las opciones recibidas (en italic) - hacemos peticion signal para agregar el controller y agregar .signal
            //manejador de opciones para cancelar la peticion 
        options.signal = controller.signal;

        //sI EL USUARIO TRAE METODO, DEJAR EL METODO, SINO use el get
        options.method = options.method || "GET"
        //Si el susuario especifico alguna cabecera y viene - usamos spread operator para usar 
            //las header de qui y las que triag el options            
        options.headers = options.headers ? {...defaultHeader, ...options.headers} : defaultHeader; 
    
        //Con peticiones para mandar datos - convertimos el body a cadena con jsonstringify - para que se vaya como cadena de texto
            // Utilizamos el operador de corto circuito, si no es falso y si es falso lo elimino
            //Si usamos peticion get no mandamos body - pero no se puede mandar un body vacio o falso - por eso lo eliminamos
        options.body = JSON.stringify(options.body) || false;
        if(!options.body) delete options.body;
        
        console.log(options);//para ver que traen las opciones 
        
        //Para que no se quede dando vuekltas si el servidor está caido
        setTimeout(() => {
            controller.abort() //controller es la const de arriba
        }, 3000);//cuando transcurra tres segundo


        //retorna ejecucion peticion fetch - url definida en variavle endpoint - opciones que pasen - opciones
        return fetch(endpoint,options)
            .then(res=>res.ok?res.json():Promise.reject({
                err:true, // error es true
                status:res.status || "00", // el status que traiga el API sino usa el 00
                statusText:res.statusText || "Ocurrio un error"//Mando status text con el mensaje que traiga la api, sino pongale el || 
            }))//retornar una promesa - si la propiedad ok viene en res. parsearla a json sino rechazar promise (objeto de error)
            .catch(err=>err);//retornar error
    };

    //CRUD arquitectura rest arquitectura http
    //Utilizamos el customFetch en estos metodos 

    const get = (url,options = {}) => customFetch(url, options);//recibe url, options con objeto vacio x default, y ehecute el metodo custom fetch con lo que trae en las props

    const post = (url, options= {}) =>{
        options.method = "POST";//sI TRAE OPCIONES, CONFIGURO QUE su metodo sea un Post
        return customFetch(url, options);
    }

    const put = (url, options= {}) =>{
        options.method = "PUT";//sI TRAE OPCIONES, CONFIGURO QUE su metodo sea un PUT
        return customFetch(url, options);
    }

    const del = (url, options= {}) =>{
        options.method = "DELETE";//sI TRAE OPCIONES, CONFIGURO QUE su metodo sea un DELETE
        return customFetch(url, options);
    }

    return{
        get,
        post,
        put,
        del,
    };

}