export const status2message = (status: number): string => {
  switch (status) {
    case 400: return "Request error (400)"
    case 401: return "Unauthorized, please login again (401)"
    case 403: return "Access denied (403)"
    case 404: return "Request error (404)"
    case 408: return "Request timeout (408)"
    case 500: return "Server error (500)"
    case 501: return "Service not implemented (501)"
    case 502: return "Network error (502)"
    case 503: return "Service unavailable (503)"
    case 504: return "Network timeout (504)"
    case 505: return "HTTP version not supported (505)"
    default: return `Unknown error (${status})`
  }
}