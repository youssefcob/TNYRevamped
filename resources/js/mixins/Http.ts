import axios from "axios";

// Backend error responses are shaped like:
// { success: false, response: { message: string, errors?: Record<string, string[]> }, code: number }
// Validation errors carry field-specific messages under `errors`; everything else has just `message`.
function extractErrorMessage(error: any): string {
    if (!error?.response) {
        return 'Network error. Please check your connection and try again.';
    }

    const body = error.response.data?.response ?? error.response.data;
    const errors = body?.errors;
    if (errors && typeof errors === 'object') {
        return Object.values(errors).flat().join(' ');
    }

    return body?.message || 'Something went wrong. Please try again.';
}

const Http = {
    url: window.location.origin + '/api/',
    methods: {
        async get(url: string) {
            url = Http.url + url;
            try {
                const response = await axios.get(url);
                return response.data;
            } catch (error: any) {
                console.error(error);
                throw extractErrorMessage(error);
            }
        },
        async post(url: string, data: any) {
            url = Http.url + url;

            try {
                const response = await axios.post(url, data);
                return response.data;
            } catch (error: any) {
                console.error(error);
                throw extractErrorMessage(error);
            }
        },
        async put(url: string, data: any) {
            url = Http.url + url;

            try {
                const response = await axios.put(url, data);
                return response.data;
            } catch (error: any) {
                console.error(error);
                throw extractErrorMessage(error);
            }
        },
        async delete(url: string) {
            url = Http.url + url;

            try {
                const response = await axios.delete(url);
                return response.data;
            } catch (error: any) {
                console.error(error);
                throw extractErrorMessage(error);
            }
        },
    }

}

export default Http.methods as any;