<?php
    class Aerolinea{
        private $nombre;
        private $cant_aviones;
        private $tipo_aerolinea;

        function __construct($nombreParam, $cant_avionesParam, $tipo_aerolineaParam){
            $this->nombre = $nombreParam;
            $this->cant_aviones = $cant_avionesParam;
            $this->tipo_aerolinea = $tipo_aerolineaParam;
        }

       /**
         * Get the value of nombre
         */ 
        public function getNombre()
        {
                return $this->nombre;
        }

        /**
         * Set the value of nombre
         *
         * @param string $nombre
         */ 
        public function setNombre($nombre)
        {
                $this->nombre = $nombre;

                return $this;
        }

        /**
         * Get the value of cant_aviones
         */ 
        public function getCant_aviones()
        {
                return $this->cant_aviones;
        }

        /**
         * Set the value of cant_aviones
         *
         * @param number $cant_aviones
         */ 
        public function setCant_aviones($cant_aviones)
        {
                $this->cant_aviones = $cant_aviones;

                return $this;
        }

        /**
         * Get the value of tipo_aerolinea
         */ 
        public function getTipo_aerolinea()
        {
                return $this->tipo_aerolinea;
        }

        /**
         * Set the value of tipo_aerolinea
         *
         * @param string $tipo_aerolinea
         */ 
        public function setTipo_aerolinea($tipo_aerolinea)
        {
                $this->tipo_aerolinea = $tipo_aerolinea;

                return $this;
        }

    }
?>