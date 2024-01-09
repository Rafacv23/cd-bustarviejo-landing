import {
  dniRegex,
  phoneRegex,
  mailRegex,
  dateRegex,
  postalCodeRegex,
  stringRegex,
} from "./regex.js"

import {
  email,
  phone,
  cp,
  dni,
  nacimiento,
  nombre,
  apellido,
  direccion,
  ciudad,
} from "./form-inputs.js"

import {
  nameErrors,
  apellidoErrors,
  emailErrors,
  telefonoErrors,
  calleErrors,
  ciudadErrors,
  cpErrors,
  dniErrors,
  nacimientoErrors,
} from "./form-errors.js"

import {
  stringFormat,
  dniFormat,
  emailFormat,
  nacimientoFormat,
  cpFormat,
  phoneFormat,
} from "./formats.js"

export const validar = (regExp, value, campo, errors, formato) => {
  if (regExp.test(value)) {
    errors.innerText = ""
    return true
  } else {
    console.log(`${campo} incorrecto`)
    errors.innerText = `Este valor es incorrecto, prueba con este formato: ${formato}`
    return false
  }
}

export const validarFormulario = () => {
  const nombreValidado = validar(
    stringRegex,
    nombre.value,
    "Nombre",
    nameErrors,
    stringFormat
  )
  const apellidoValidado = validar(
    stringRegex,
    apellido.value,
    "Apellido",
    apellidoErrors,
    stringFormat
  )
  const dirValidado = validar(
    stringRegex,
    direccion.value,
    "Calle",
    calleErrors,
    stringFormat
  )
  const ciudadValidado = validar(
    stringRegex,
    ciudad.value,
    "Ciudad",
    ciudadErrors,
    stringFormat
  )
  const dniValidado = validar(dniRegex, dni.value, "DNI", dniErrors, dniFormat)
  const telefonoValidado = validar(
    phoneRegex,
    phone.value,
    "Telefono",
    telefonoErrors,
    phoneFormat
  )
  const emailValidado = validar(
    mailRegex,
    email.value,
    "Email",
    emailErrors,
    emailFormat
  )
  const nacimientoValidado = validar(
    dateRegex,
    nacimiento.value,
    "Fecha de nacimiento",
    nacimientoErrors,
    nacimientoFormat
  )
  const postalCodeValidado = validar(
    postalCodeRegex,
    cp.value,
    "Codigo postal",
    cpErrors,
    cpFormat
  )
  if (
    dniValidado &&
    telefonoValidado &&
    emailValidado &&
    nacimientoValidado &&
    postalCodeValidado &&
    nombreValidado &&
    apellidoValidado &&
    dirValidado &&
    ciudadValidado
  ) {
    console.log("Formulario validado")
    return true
  } else {
    console.log("El formulario no se ha podido validar, revisa los campos")
    return false
  }
}
