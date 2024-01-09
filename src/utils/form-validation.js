import {
  dniRegex,
  phoneRegex,
  mailRegex,
  dateRegex,
  postalCodeRegex,
} from "./regex.js"

import { email, phone, cp, dni, nacimiento } from "./form-inputs.js"

export const validar = (regExp, value, campo) => {
  if (regExp.test(value)) {
    return true
  } else {
    console.log(`${campo} incorrecto`)
    return false
  }
}

export const validarFormulario = () => {
  const dniValidado = validar(dniRegex, dni.value, "DNI")
  const telefonoValidado = validar(phoneRegex, phone.value, "Telefono")
  const emailValidado = validar(mailRegex, email.value, "Email")
  const nacimientoValidado = validar(
    dateRegex,
    nacimiento.value,
    "Fecha de nacimiento"
  )
  const postalCodeValidado = validar(postalCodeRegex, cp.value, "Codigo postal")
  if (
    dniValidado &&
    telefonoValidado &&
    emailValidado &&
    nacimientoValidado &&
    postalCodeValidado
  ) {
    console.log("Formulario validado")
    return true
  } else {
    console.log("El formulario no se ha podido validar, revisa los campos")
    return false
  }
}
