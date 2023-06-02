export const API_DOMAIN = 'http://upcard.online'

// export const API_DOMAIN = 'http://127.0.0.1:8000'



export function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length === 2) {
      return parts.pop().split(";").shift();
    }
}