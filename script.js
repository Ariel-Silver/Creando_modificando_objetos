//Codigo ES5

function Consultorio(nombre, pacientes) {
    this.nombre = nombre;
    this.pacientes = pacientes;
  }

  function Paciente(nombre, edad, rut, diagnostico) {
    var _nombre = nombre;
    var _edad = edad;
    var _rut = rut;
    var _diagnostico = diagnostico;
  
    //Getters & Setters
    Object.defineProperty(this, "nombre", {
      get: function () {
        return _nombre;
      },
      set: function (nuevoNombre) {
        _nombre = nuevoNombre;
      },
    });
  
    Object.defineProperty(this, "edad", {
      get: function () {
        return _edad;
      },
      set: function (nuevaEdad) {
        _edad = nuevaEdad;
      },
    });
  
    Object.defineProperty(this, "rut", {
      get: function () {
        return _rut;
      },
      set: function (nuevoRut) {
        _rut = nuevoRut;
      },
    });
  
    Object.defineProperty(this, "diagnóstico", {
      get: function () {
        return _diagnostico;
      },
      set: function (nuevoDiagnostico) {
        _diagnostico = nuevoDiagnostico;
      },
    });
  }
  
  //Propiedad prototype para buscar pacientes
  Consultorio.prototype.buscarPaciente = function (nombreBusqueda) {
    var indice = -1;
  
    for (var i = 0; i < this.pacientes.length; i++) {
      if (this.pacientes[i].nombre == nombreBusqueda) {
        indice = i;
      }
    }
  
    if (indice >= 0) {
      console.log("Paciente encontrado, estos son sus datos:",
        this.pacientes[indice].nombre
      );
    } else {
      console.log("No se encontro al paciente");
    }
  };
  
  //Instanciando objetos con instrucción new
  const primerPaciente = new Paciente(
    "Leon Scott Kennedy",
    44,
    "11.222.333-4",
    "Tendinitis"
  );
  
  const segundoPaciente = new Paciente(
    "Chris Redfield",
    48,
    "11.222.333-4",
    "TEPT"
  );

  const tercerPaciente = new Paciente(
    "Jill Valentine",
    46,
    "11.222.333-4",
    "Calculos renales"
  );

  const cuartoPaciente = new Paciente(
    "Albert Wesker",
    48,
    "11.222.333-4",
    "Uroboros"
  );
  
  console.log(primerPaciente);
  console.log(segundoPaciente);
  console.log(tercerPaciente);
  console.log(cuartoPaciente);
  
  Consultorio.prototype.pacientesTodos = function () {
    console.log(this.pacientes);
  };
  
  const ConsultorioRaccoonCity = new Consultorio(
    "Consultorio Raccoon City",
    [primerPaciente, segundoPaciente, tercerPaciente, cuartoPaciente]
  );
  
  //Llamando funciones
  ConsultorioRaccoonCity.pacientesTodos();
  ConsultorioRaccoonCity.buscarPaciente("Leon Scott Kennedy");
  ConsultorioRaccoonCity.buscarPaciente("Chris Redfield");
  ConsultorioRaccoonCity.buscarPaciente("Jill Valentine");
  ConsultorioRaccoonCity.buscarPaciente("Albert Wesker");
  
  
