export function TranslateErrosAuth(error) {
    switch (error.code) {
        case "auth/invalid-email": error.message = "Correo electrónico no valido"; break
        case "auth/user-not-found": error.message = "No se encontró cuenta del usuario con el correo especificado"; break

        case "auth/email-already-in-use": error.message = "Este correo ya está siendo usado por otro usuario"; break
        case "auth/user-disabled": error.message = "Este usuario ha sido deshabilitado"; break
        case "auth/operation-not-allowed": error.message = "Operación no permitida"; break
        case "auth/wrong-password": error.message = "Contraseña incorrecta"; break
        case "auth/network-error": error.message = "Promblema al intentar conectar al servidor"; break
        case "auth/weak-password": error.message = "Contraseña muy debil o no válida"; break
        case "auth/missing-email": error.message = "Hace falta registrar un correo electrónico"; break
        case "auth/internal-error": error.message = "Error interno"; break
        case "auth/invalid-custom-token": error.message = "Token personalizado invalido"; break
        case "auth/too-many-requests": error.message = "Ya se han enviado muchas solicitudes al servidor"; break
        default: break
    }
    return error
}

export function TranslateErrosStore({ message, code }) {
    switch (code) {
        case "Store/cancelled": return "Operación cancelada"
        case "Store/unknown": return "Error desconocido"
        case "Store/invalidArgument": return "Argumento no valido"
        case "Store/notFound": return "No se encotró el documento"
        case "Store/alreadyExists": return "El documento que se pretende crear, ya existe"
        case "Store/permissionDenied": return "No tienes permisos para realizar esta operación"
        case "Store/aborted": return "Operación abortada"
        case "Store/outOfRange": return "Rango invalido"
        case "Store/unimplemented": return "Esta operación no ha sido implementada o no es soportada aún"
        case "Store/internal": return "Error interno"
        case "Store/unavailable": return "Por el momento el servicio no está disponible, intenta más tarde"
        case "Store/unauthenticated": return "Usuario no autenticado"
        default: return message
    }
}

export function TranslateErrosStorage({ message, code }) {
    switch (code) {
        case "Storage/unknown": return "Error desconocido"
        case "Storage/quotaExceeded": return "El espacio para guardar archivos ha sido sobrepasado"
        case "Storage/unauthenticated": return "Usuario no autenticado"
        case "Storage/unauthorized": return "Usuario no autorizado para realizar esta operación"
        case "Storage/retryLimitExceeded": return "Tiempo de espera excedido. Favor de intentar de nuevo"
        case "Storage/downloadSizeExceeded": return "El tamaño de descarga excede el espacio en memoria"
        case "Storage/cancelled": return "Operación cancelada"
        default: return message
    }
}