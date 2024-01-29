import {H3Event} from "h3";

export default defineEventHandler(async (event: H3Event) => {
    if (event._method === 'POST') {
        const body = await readBody(event);
        return {status: 200};
    }
});
