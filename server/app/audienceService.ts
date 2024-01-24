import {Resend} from 'resend';

const resend = new Resend(useRuntimeConfig().private.resendApiKey);
export async function upsertAudience(email: string): Promise<any> {
    return await resend.contacts.create({
        email: email,
        firstName: '',
        lastName: '',
        unsubscribed: false,
        audienceId: useRuntimeConfig().private.resendAudienceId,
    });
}