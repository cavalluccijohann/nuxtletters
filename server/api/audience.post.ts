import { H3Event } from "h3";
import {upsertAudience} from "~/server/app/audienceService";


export default eventHandler(async (event: H3Event) => {
    const body = await readBody(event);
    const email = body.email;
    return await upsertAudience(email);
});
