const { createApp } = Vue;

createApp({
    data(){
        return {
            datos:[],
            elementosPorPagina: 10,
            datosPaginados:[],
            url: 'https://matisaez.pythonanywhere.com/productos',
          
        }
    },
    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    this.datos = data;
                    console.log(data)
                
                    this.datosPaginados = this.datos.slice(0, this.elementosPorPagina);
                })
                .catch(err => {
                    console.error(err);
                                 
                })
        },
        
        totalPaginas(){
            return Math.ceil(this.datos.length / this.elementosPorPagina);
        },
        getDataPagina(numPag){
            let inicio = (numPag * this.elementosPorPagina) - this.elementosPorPagina;
            let fin = (numPag * this.elementosPorPagina);
            
           this.datosPaginados = this.datos.slice(inicio, fin);
        }
    },
    created(){
        this.fetchData(this.url);
    }
}).mount('#app')
